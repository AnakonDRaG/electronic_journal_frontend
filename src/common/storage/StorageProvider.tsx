import httpClient from 'api/httpClient'
import { getHumanData } from 'api/human'
import axios from 'axios'
import { useAuth } from 'hooks/useAuth'
import React, { useEffect, useState } from 'react'
import { StorageKeys } from './constants'
import { StorageContext } from './StorageContext'
import { useStorage } from './useStorage'

const StorageProvider = ({ children }: React.ComponentProps<any>) => {
  const authStorage = useStorage(StorageKeys.ACCESS_TOKEN)
  const token = (authStorage.getStorageData() as any)?.accessToken
  const { isAuth } = useAuth()
  const { setStorageValue, getStorageData, removeStorageValue } = useStorage(
    StorageKeys.USER_DATA,
  )
  const [isLoaderShown, setIsLoaderShown] = useState<boolean>(true)
  const [userData, setUserData] = useState<Omit<Human, 'user'> | undefined>()

  const clearUserData = () => {
    removeStorageValue()
    setUserData(undefined)
  }

  const loadUserData = async () => {
    setIsLoaderShown(true)

    if (isAuth()) {
      const response = await getHumanData()

      if (response.success) {
        setStorageValue(response.data)
        setUserData(response.data)
      }
    }
    setIsLoaderShown(false)
  }

  const fetchUserData = async () => {
    await loadUserData()
  }

  useEffect(() => {
    if (!isAuth()) return

    if (!getStorageData()) {
      ;(async () => await fetchUserData())()
    } else {
      setUserData(getStorageData() as Human)
    }
  }, [isAuth()])

  return (
    <StorageContext.Provider
      value={{
        page: {
          isLoaderShown,
          setIsLoaderShown,
        },
        userData,
        clearUserData,
        fetchUserData,
      }}
    >
      {children}
    </StorageContext.Provider>
  )
}

export default StorageProvider
