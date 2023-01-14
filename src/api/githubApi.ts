import {
  githubRep,
  githubRepLang,
  githubUserComplete,
  githubUserData
} from '../interfaces/github'

export function githubFetch(text: string): Promise<{
  resUserData: githubUserData
}> {
  return new Promise(async (resolve, reject) => {
    try {
      const apiGithubURL = `https://api.github.com/search/users?q=${text}`

      const res = await fetch(apiGithubURL)

      const resUserData = await res.json()

      resolve({ resUserData })
    } catch (error) {
      reject(error)
    }
  })
}

export function githubFetchUser(text: string): Promise<{
  resUserData: githubUserComplete
}> {
  return new Promise(async (resolve, reject) => {
    try {
      const apiGithubURL = `https://api.github.com/users/${text}`

      const res = await fetch(apiGithubURL)

      const resUserData = await res.json()

      resolve({ resUserData })
    } catch (error) {
      reject(error)
    }
  })
}

export function githubFetchRep(text: string): Promise<{
  resRepData: githubRep
}> {
  return new Promise(async (resolve, reject) => {
    try {
      const apiGithubURL = `https://api.github.com/users/${text}/repos`

      const res = await fetch(apiGithubURL)

      const resRepData = await res.json()

      resolve({ resRepData })
    } catch (error) {
      reject(error)
    }
  })
}

export function githubFetchRepLang(
  user: string,
  repos: string
): Promise<{
  resRepLangData: githubRepLang
}> {
  return new Promise(async (resolve, reject) => {
    try {
      const apiGithubURL = `https://api.github.com/repos/${user}/${repos}/languages`

      console.log(apiGithubURL)

      const res = await fetch(apiGithubURL)

      const resRepLangData = await res.json()

      resolve({ resRepLangData })
    } catch (error) {
      reject(error)
    }
  })
}
