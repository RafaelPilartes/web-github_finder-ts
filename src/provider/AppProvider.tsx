import { createContext, useEffect, useState } from 'react'
import { IChildren } from '../interfaces/children'
import { githubRep, githubUserComplete } from '../interfaces/github'

interface AppContextType {
  isLoading: boolean
  setIsLoading: (e: boolean) => void
  backGround: string
  setBackGround: (e: string) => void
  userData: githubUserComplete | null
  setUserData: (e: any) => void
  userRepos: githubRep[]
  setUserRepos: (e: any) => void
}

export const AppContext = createContext({} as AppContextType)

export function AppProvider({ children }: IChildren) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [backGround, setBackGround] = useState<string>('')
  const [userData, setUserData] = useState<githubUserComplete | null>(null)
  const [userRepos, setUserRepos] = useState<githubRep[]>([])

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        backGround,
        setBackGround,
        userData,
        setUserData,
        userRepos,
        setUserRepos
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
