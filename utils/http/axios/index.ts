import type { AxiosResponse } from 'axios'
import type { RequestOptions, Result } from '@/types/axios'
import type { AxiosTransform, CreateAxiosOptions } from './axiosTransform'
import { VAxios } from './Axios'
import { checkStatus } from './checkStatus'
import { RequestEnum, ResultEnum, ContentTypeEnum } from '@/enums/httpEnum'
import { isString } from '@/utils/is'
import { getToken } from '@/utils/auth'
import { setObjToUrlParams, deepMerge } from '@/utils'
import { joinTimestamp, formatRequestDate } from './helper'

const transform: AxiosTransform = {
  transformRequestHook: (
    res: AxiosResponse<Result>,
    options: RequestOptions
  ) => {
    const { isTransformResponse, isReturnNativeResponse } = options
    if (isReturnNativeResponse) {
      return res
    }
    if (!isTransformResponse) {
      return res.data
    }
    const { data } = res
    if (!data) {
      throw new Error('sys.api.apiRequestFailed')
    }
    const { code, result, message } = data
    const hasSuccess =
      data && Reflect.has(data, 'code') && code === ResultEnum.SUCCESS
    if (hasSuccess) {
      return result
    }
    let timeoutMsg = ''
    switch (code) {
      case ResultEnum.TIMEOUT:
        timeoutMsg = 'sys.api.timeoutMessage'
        break
      default:
        if (message) {
          timeoutMsg = message
        }
    }
    if (options.errorMessageMode === 'modal') {
    } else if (options.errorMessageMode === 'message') {
    }

    throw new Error(timeoutMsg || 'sys.api.apiRequestFailed')
  },
  beforeRequestHook: (config, options) => {
    const { apiUrl, joinParamsToUrl, formatDate, joinTime = true } = options
    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`
    }
    const params = config.params || {}
    const data = config.data || false
    formatDate && data && !isString(data) && formatRequestDate(data)
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      if (!isString(params)) {
        config.params = Object.assign(
          params || {},
          joinTimestamp(joinTime, false)
        )
      } else {
        config.url = config.url + params + `${joinTimestamp(joinTime, true)}`
        config.params = undefined
      }
    } else {
      if (!isString(params)) {
        formatDate && formatRequestDate(params)
        if (
          Reflect.has(config, 'data') &&
          config.data &&
          Object.keys(config.data).length > 0
        ) {
          config.data = data
          config.params = params
        } else {
          config.data = params
          config.params = undefined
        }
        if (joinParamsToUrl) {
          config.url = setObjToUrlParams(
            config.url as string,
            Object.assign({}, config.params, config.data)
          )
        }
      } else {
        config.url = config.url + params
        config.params = undefined
      }
    }
    return config
  },
  requestInterceptors: (config: any) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = 'Bearer' + token
    }
    return config
  },

  responseInterceptors: (res: AxiosResponse<any>) => {
    return res
  },
  responseInterceptorsCatch: (error: any) => {
    const { response, code, message, config } = error || {}
    const errorMessageMode = config?.requestOptions?.errorMessageMode || 'none'
    const msg: string = response?.data?.error?.message ?? ''
    const err: string = error?.toString?.() ?? ''
    checkStatus(error?.response?.status, msg, errorMessageMode)
    return Promise.reject(error)
  },
}

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(
    deepMerge(
      {
        authenticationScheme: '',
        timeout: 500 * 1000,
        headers: { 'Content-Type': ContentTypeEnum.JSON },
        transform,
        requestOptions: {
          joinPrefix: true,
          isReturnNativeResponse: false,
          isTransformResponse: true,
          joinParamsToUrl: false,
          formatDate: true,
          errorMessageMode: 'message',
          apiUrl: process.env.NUXT_APP_API_URL,
          joinTime: true,
          ignoreCancelToken: true,
          withToken: true,
        },
      },
      opt || {}
    )
  )
}
export const defHttp = createAxios()
