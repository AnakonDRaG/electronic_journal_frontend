import httpClient from 'api/httpClient'
import { baseResponse } from 'api/index'

export const getHumanData = async () =>
  await baseResponse(httpClient.get('human'))
