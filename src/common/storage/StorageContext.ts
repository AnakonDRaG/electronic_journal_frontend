import { createContext } from 'react'

export interface StorageContextProps {
  page: {
    isLoaderShown: boolean
    setIsLoaderShown: (active: boolean) => void
  }
  userData: Omit<Human, 'user'> | undefined
  clearUserData: () => void
  fetchUserData: () => void
}

export const StorageContext = createContext<StorageContextProps>({
  fetchUserData(): void {},
  clearUserData(): void {},
  page: {
    isLoaderShown: false,
    setIsLoaderShown: function (p1: boolean) {},
  },
  userData: undefined,
})
