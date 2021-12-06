import { useContext } from 'react'
import { StorageContext } from './StorageContext'

export const useApplicationStorage = () => {
  const storage = useContext(StorageContext)

  return storage
}
