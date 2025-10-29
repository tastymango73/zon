import Cookies from 'js-cookie'

import { StorageKeys } from '@/constants/storage-keys'

import { APP_DOMAIN } from '@/config/env'

export const getAccessToken = () => {
  return Cookies.get(StorageKeys.ACCESS_TOKEN)
}

export const removeAccessToken = () => {
  Cookies.remove(StorageKeys.ACCESS_TOKEN)
}

export const saveAccessToken = (accessToken: string) => {
  Cookies.set(StorageKeys.ACCESS_TOKEN, accessToken, {
    domain: APP_DOMAIN,
    sameSite: 'strict',
    expires: 1,
  })
}
