import { useLocalStorage } from 'react-use-storage'

export const useStorage = (key: string) => {
  const [value, setValue, removeValue] = useLocalStorage(key)

  const setStorageValue = (data: any) => {
    setValue(data)
  }

  const getStorageData = () => value

  const removeStorageValue = () => removeValue()

  return { setStorageValue, getStorageData, removeStorageValue }
}
