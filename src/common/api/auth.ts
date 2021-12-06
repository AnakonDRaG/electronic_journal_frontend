import httpClient from 'api/httpClient'
import { baseResponse } from 'api/index'
import { LocalResponse } from 'api/types'
import { SignInForm } from 'pages/signin'
import { SignUpForm } from 'pages/signup'

export const LoginRequest = async (data: SignInForm) =>
  await baseResponse(httpClient.post('auth/login', data))

export const SignUpRequest = async (data: SignUpForm) =>
  await baseResponse(httpClient.post('auth/registration', data))
