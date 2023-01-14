import React, { useState, KeyboardEvent, useEffect, useRef } from 'react'

// Icons
import { MdOutlineLocationOn } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { githubUserComplete } from '../../interfaces/github'

// Styled
import { UserCardContainer } from './styles'

type UserCardProps = {
  data: githubUserComplete
}

const UserCard: React.FC<UserCardProps> = ({ data }) => {
  const navigate = useNavigate()

  return (
    <UserCardContainer>
      <img src={data.avatar_url} alt="" />
      <h4>{data.login}</h4>
      <small>
        <MdOutlineLocationOn /> {data.location}
      </small>

      <div className="containerOtherInfos">
        <button className="containerInfo">
          <span>{data.public_repos}</span> Repositórios
        </button>

        <div className="divider"></div>

        <div className="containerInfo">
          <span>{data.followers}</span> Seguidores
        </div>

        <div className="divider"></div>

        <div className="containerInfo">
          <span>{data.following}</span> Seguindo
        </div>
      </div>
      <button
        onClick={() => navigate(`user/${data.login}`)}
        className="seeMore"
      >
        Ver projetos
      </button>
    </UserCardContainer>
  )
}

export default UserCard
