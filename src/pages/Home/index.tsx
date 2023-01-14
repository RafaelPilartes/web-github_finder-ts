import { useState, KeyboardEvent, useEffect, useRef, useContext } from 'react'

// Navegação
import { useNavigate } from 'react-router-dom'

// Toast
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Icons
import { AiOutlineGithub } from 'react-icons/ai'

// Styles
import { HomeContainer } from './styles'

// Image
import githubUserImg from '../../../public/illustrations/githubIllustration.png'

// Components
import BaseBtn from '../../components/BaseBtn'
import InputSearch from '../../components/InputSearch'
import Weather from '../../components/UserCard'

// Provider
import { AppContext } from '../../provider/AppProvider'

// API
import {
  githubFetch,
  githubFetchRep,
  githubFetchUser
} from '../../api/githubApi'
import { defaultTheme } from '../../themes/default'
import UserCard from '../../components/UserCard'
import { HashLoader } from 'react-spinners'
import { githubUserComplete } from '../../interfaces/github'

function Home() {
  const { userData, setUserData, setUserRepos } = useContext(AppContext)

  const [searchTxt, setSearchTxt] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const notifyInfo = () => {
    toast.info('Digite o nome da cidade !', {
      position: toast.POSITION.TOP_RIGHT
    })
  }
  const notifyWarn = (warn: string) => {
    toast.warn(warn, {
      position: toast.POSITION.TOP_RIGHT
    })
  }
  const notifyError = (error: string) => {
    toast.error(error, {
      position: toast.POSITION.TOP_RIGHT
    })
  }

  async function search() {
    // setBackGround(searchTxt)
    setIsLoading(true)

    if (searchTxt !== '') {
      const { resUserData } = await githubFetchUser(searchTxt as string)
      const { resRepData } = await githubFetchRep(searchTxt as string)

      setUserData(resUserData)
      setUserRepos(resRepData)
      setIsLoading(false)
    } else {
      notifyInfo()
      setIsLoading(false)
    }
  }
  function changeInput(txt: string) {
    setSearchTxt(txt)
  }
  function handleKeyUp(event: KeyboardEvent) {
    event.preventDefault

    if (event.code === 'Enter' && searchTxt !== '') {
      search()
    }
  }

  useEffect(() => {}, [])

  return (
    <HomeContainer>
      <ToastContainer />

      <div className="container">
        <div className="containerTitle">
          <h1>
            Buscar por usuário <AiOutlineGithub />
          </h1>
          <p>Conheça seus melhores repositórios</p>
        </div>
        <InputSearch
          buttonVisible={true}
          placeholder="Insira o nome do usuário"
          valueInput={searchTxt}
          onChangeInput={e => changeInput(e.target.value)}
          onClick={search}
          onkeyUpInput={handleKeyUp}
        />

        {isLoading ? (
          <HashLoader color={defaultTheme.colors['brand-primary']} />
        ) : userData ? (
          <>
            {/* <div className="containerListCards"> */}
            <UserCard data={userData} />
            {/* </div> */}
          </>
        ) : (
          <img className="illustrationImg" src={githubUserImg} alt="" />
        )}
      </div>
    </HomeContainer>
  )
}

export default Home
