import axios from 'axios'

import { API_URL } from '@/config/env'

export const instance = axios.create({
  baseURL: API_URL,
})

// instance.interceptors.request.use(
//   config => {
//     const token = getAccessToken()
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   error => Promise.reject(error),
// )

// instance.interceptors.response.use(
//   response => response,
//   async error => {
//     const originalRequest = error.config

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       if (originalRequest.url === ServerRoutes.LOGIN) {
//         return Promise.reject(error)
//       }

//       if (originalRequest.url === ServerRoutes.REFRESH) {
//         removeAccessToken()
//         window.location.replace(ClientRoutes.LOGIN)
//         return Promise.reject(error)
//       }

//       originalRequest._retry = true
//       try {
//         const response = await instance.post(ServerRoutes.REFRESH)
//         const newToken = response.data.accessToken

//         if (newToken) {
//           saveAccessToken(newToken)
//           originalRequest.headers.Authorization = `Bearer ${newToken}`
//           return instance(originalRequest)
//         }
//       } catch (refreshError) {
//         removeAccessToken()
//         window.location.replace(ClientRoutes.LOGIN)
//         return Promise.reject(refreshError)
//       }
//     }

//     return Promise.reject(error)
//   },
// )
