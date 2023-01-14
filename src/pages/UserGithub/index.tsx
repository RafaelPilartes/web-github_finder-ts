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

// Toast
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Api
import {
  githubFetchRep,
  githubFetchRepLang,
  githubFetchUser
} from '../../api/githubApi'

// Component
import Repository from '../../components/Repository'

// Provider
import { AppContext } from '../../provider/AppProvider'

// Theme
import { defaultTheme } from '../../themes/default'

// Styles
import { UserGithubContainer } from './styles'
import { notifySuccess } from '../Home'

function UserGithub() {
  const { userData, setUserData, userRepos, setUserRepos } =
    useContext(AppContext)

  const randomColor = [
    '#2354d8',
    '#417DFD',
    '#417DFD6c',
    '#A603C5',
    '#FE3BFF',
    '#FE3BFF6c',
    '#8001D7'
  ]

  let location = useLocation()
  let pathname = location.pathname
  pathname = pathname.substring(1)
  const pathnameArray = pathname.split('/')
  const userName = pathnameArray[1]

  function copyUrl(urlCopy: string) {
    navigator.clipboard.writeText(urlCopy)
    notifySuccess(`Copiou: ${urlCopy}`)
  }

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
      <ToastContainer />
      <div className="container">
        <div className="backgroundImage"></div>

        <div className="containerInfos">
          <div className="containerInfoUser">
            <div className="infoUser">
              <img src={userData?.avatar_url} alt="" />
              <h1> {userData?.name} </h1>
              {userData?.company && (
                <p>
                  <BsBuilding /> {userData?.company}
                </p>
              )}
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
              <a href={userData?.html_url} target="_blank">
                Visite o perfil do Github
              </a>

              <div className="url">
                <span> {userData?.html_url} </span>
                <button onClick={() => copyUrl(userData?.html_url as string)}>
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
              {userRepos.map(repo => (
                <Repository
                  repos={repo}
                  colorTopic={
                    randomColor[Math.floor(Math.random() * randomColor.length)]
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </UserGithubContainer>
  )
}

export default UserGithub
