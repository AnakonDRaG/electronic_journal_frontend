import axios from 'axios'
import qs from 'qs'

const httpClient = axios.create({
  baseURL: 'http://localhost:8000/api/',
  withCredentials: false,
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
})

httpClient.interceptors.request.use(function (config) {
  config.headers.Authorization =
    'Bearer ' + JSON.parse(localStorage.getItem('accessToken') as string)

  return config
})

export default httpClient
