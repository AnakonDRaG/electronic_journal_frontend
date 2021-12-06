import httpClient from 'api/httpClient'
import { baseResponse } from 'api/index'

export const getTeacherData = async () =>
  await baseResponse(httpClient.get('teacher'))
