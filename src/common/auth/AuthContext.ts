import { createContext } from 'react'

export interface AuthContextProps {
  isAuthorized: boolean
  dispatch: (isAuthorized: boolean) => void
}

export const AuthContext = createContext<AuthContextProps>({
  dispatch(isAuthorized: boolean): void {},
  isAuthorized: false,
})
