import {
  useState,
  KeyboardEvent,
  useEffect,
  useRef,
  useContext,
  Component
} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// Icons
import { IoIosCopy } from 'react-icons/io'
import { BsBuilding } from 'react-icons/bs'

// Api
import {
  githubFetchRep,
  githubFetchRepLang,
  githubFetchUser
} from '../../api/githubApi'

// Component
import BaseBtn from '../../components/BaseBtn'

// Provider
import { AppContext } from '../../provider/AppProvider'

// Theme
import { defaultTheme } from '../../themes/default'

// Styles
import { UserGithubContainer } from './styles'

function UserGithub() {
  const { userData, setUserData, userRepos, setUserRepos } =
    useContext(AppContext)

  let location = useLocation()
  let pathname = location.pathname
  pathname = pathname.substring(1)
  const pathnameArray = pathname.split('/')
  const userName = pathnameArray[1]

  async function getUserData() {
    const { resUserData } = await githubFetchUser(userName as string)
    const { resRepData } = await githubFetchRep(userName as string)

    setUserData(resUserData)
    setUserRepos(resRepData)
  }

  useEffect(() => {
    getUserData()
    console.log(userRepos)
  }, [location])

  return (
    <UserGithubContainer>
      <div className="container">
        <div className="backgroundImage"></div>

        <div className="containerInfos">
          <div className="containerInfoUser">
            <div className="infoUser">
              <img src={userData?.avatar_url} alt="" />
              <h1> {userData?.name} </h1>
              <p>
                <BsBuilding /> {userData?.company}
              </p>
              <span>{userData?.bio}</span>
            </div>

            <ul className="baseInfo">
              <li>
                Seguidores
                <span className="followers">{userData?.followers}</span>
              </li>
              <li>
                Seguindo
                <span className="following">{userData?.following}</span>
              </li>
              <li>
                Repositórios <span>{userData?.public_repos}</span>
              </li>
            </ul>

            <div className="buttons">
              <a href="https://github.com/RafaelPilartes" target="_blank">
                Visite o perfil do Github
              </a>

              <div className="url">
                <span>https://github.com/RafaelPilartes</span>
                <button>
                  <IoIosCopy />
                </button>
              </div>
            </div>
          </div>

          <div className="containerInfoRepos">
            <div className="containerTitle">
              <h1>Repositórios de {userData?.name}</h1>
            </div>
            <div className="containerRepos">
              {userRepos.map(repo => {
                return (
                  <>
                    <div key={repo?.id}>
                      <h2>{repo?.name}</h2>
                      <p>{repo?.description}</p>
                      <p>{repo?.language}</p>
                      <p>{repo?.stargazers_count}</p>
                      <div>
                        {repo?.topics.map((topic: string) => {
                          return <span> {topic} </span>
                        })}
                      </div>
                    </div>
                    <br />
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </UserGithubContainer>
  )
}

export default UserGithub
