import httpClient from 'api/httpClient'
import { baseResponse } from 'api/index'
import { SubjectForm } from '../../pages/profile/teacher/dev/createSubject'

export const createSubject = async (data: SubjectForm) =>
  await baseResponse(httpClient.post('subject/create', data))
