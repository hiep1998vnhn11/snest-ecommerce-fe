// import type { Context } from '@/types/middleware'
import type { Middleware } from '@nuxt/types'
import { defineNuxtMiddleware, ref, unref } from '@nuxtjs/composition-api'

const appMiddleware = defineNuxtMiddleware(({ app }) => {})
export default appMiddleware
