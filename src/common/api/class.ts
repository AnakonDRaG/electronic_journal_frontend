import httpClient from 'api/httpClient'
import { baseResponse } from 'api/index'
import { AddStudentToClassForm } from 'pages/profile/teacher/myClass/addStudent'
import { AddHeadmanToClassForm } from 'pages/profile/teacher/myClass/addHeadman'
import { CreateClassForm } from 'pages/profile/teacher/myClass/dev/createClass'

export const createClassRequest = async (data: CreateClassForm) =>
  await baseResponse(httpClient.post('class/create', data))

export const getClasses = async () =>
  await baseResponse(httpClient.get('class/getAll'))

export const getClassById = async (id: number | string) =>
  await baseResponse(httpClient.get(`class/${id}`))

export const addStudentToClass = async (data: AddStudentToClassForm) =>
  await baseResponse(httpClient.post('student/add/student/toClass', data))

export const addHeadManToClass = async (data: AddHeadmanToClassForm) =>
  await baseResponse(httpClient.post('student/add/headman/toClass', data))
