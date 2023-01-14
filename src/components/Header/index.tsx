import { useState, KeyboardEvent, useEffect, useRef } from 'react'

import { HeaderContainer } from './styles'
import todoLogo from '../../assets/logo/githubFinderLogo.svg'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <img onClick={() => navigate(`/`)} src={todoLogo}></img>
    </HeaderContainer>
  )
}

export default Header
