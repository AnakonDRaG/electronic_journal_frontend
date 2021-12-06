import httpClient from 'api/httpClient'
import axios from 'axios'
import { useAuth } from 'hooks/useAuth'
import React, { useContext, useEffect, useState } from 'react'
import { useJwt } from 'react-jwt'
import { StorageKeys } from '../storage/constants'
import { useStorage } from '../storage/useStorage'
import { AuthContext } from './AuthContext'

const AuthProvider = ({ children }: React.ComponentProps<any>) => {
  const { getStorageData } = useStorage(StorageKeys.ACCESS_TOKEN)
  const token = getStorageData() as string
  const { isExpired } = useJwt(token)
  const { isAuth } = useAuth()

  const [isAuthorized, setAuthorized] = useState<boolean>(!isExpired)

  const dispatch = (isAuthorized: boolean) => setAuthorized(isAuthorized)

  useEffect(() => {
    if (!isExpired) {
      dispatch(true)
    }
  }, [isAuth()])

  return (
    <AuthContext.Provider
      value={{ isAuthorized, dispatch }}
      {...{ children }}
    />
  )
}
export default AuthProvider
