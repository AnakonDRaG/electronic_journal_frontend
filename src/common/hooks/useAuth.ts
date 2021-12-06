import { LoginRequest, SignUpRequest } from 'api/auth'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { useJwt } from 'react-jwt'
import { SignInForm } from '../../pages/signin'
import { SignUpForm } from '../../pages/signup'
import { useApplicationStorage } from '../storage/useApplicationStorage'
import { useStorage } from '../storage/useStorage'
import { AuthContext } from '../auth/AuthContext'
import { StorageKeys } from '../storage/constants'

export const useAuth = () => {
  const router = useRouter()
  const { getStorageData, setStorageValue, removeStorageValue } = useStorage(
    StorageKeys.ACCESS_TOKEN,
  )
  const applicationStorage = useApplicationStorage()
  const authContext = useContext(AuthContext)

  const isAuth = () => authContext.isAuthorized

  const logIn = async (data: SignInForm) => {
    applicationStorage.page!.setIsLoaderShown(true)

    const response = await LoginRequest(data)
    if (response.success) {
      saveToken(response.data.accessToken)
      await applicationStorage.fetchUserData()
      await router.push('/')
    }

    applicationStorage.page!.setIsLoaderShown(false)
  }

  const registration = async (data: SignUpForm) => {
    applicationStorage.page!.setIsLoaderShown(true)

    const _birthDate = data.human.birthDate

    data.human.birthDate = new Date(_birthDate).toISOString()
    const response = await SignUpRequest(data)
    if (response.success) {
      saveToken(response.data.accessToken)
      authContext.dispatch(true)
      await router.push('/')
    }

    applicationStorage.page!.setIsLoaderShown(false)
  }

  const logOut = async () => {
    applicationStorage.page!.setIsLoaderShown(true)
    removeStorageValue()
    authContext.dispatch!(false)
    applicationStorage.clearUserData()
    await router.push('/')
    applicationStorage.page!.setIsLoaderShown(false)
  }

  const saveToken = (accessToken: string) => {
    setStorageValue(accessToken)
    authContext.dispatch(true)
  }

  return { isAuth, saveToken, logOut, logIn, registration }
}
