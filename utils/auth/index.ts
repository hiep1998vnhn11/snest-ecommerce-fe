import { TOKEN_KEY } from '@/enums/cacheEnum'
import Cookies from 'js-cookie'

export function getToken() {
  return Cookies.get(TOKEN_KEY)
}

export function getAuthCache<T>(key: string) {
  return Cookies.get(key)
}

export function setAuthCache(key: string, value: any) {
  return Cookies.set(key, value)
}

export function clearAuthCache(immediate = true) {
  return Cookies.remove(TOKEN_KEY, {
    expires: immediate ? 0 : 1,
  })
}
