import React, { useState, KeyboardEvent, useEffect, useRef } from 'react'

// Icons
import { MdOutlineLocationOn } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { githubRep, githubUserComplete } from '../../interfaces/github'
import { formateDateTimeStamp } from '../../utils/formateDateUtils'

// Styled
import { ReposContainer } from './styles'

type RepositoryProps = {
  repos: githubRep
  colorTopic: string
}

const Repository: React.FC<RepositoryProps> = ({ repos, colorTopic }) => {
  function goToRepository() {
    window.open(`${repos?.html_url}`, '_blank')
  }

  return (
    <ReposContainer onClick={goToRepository} colorTopic={colorTopic}>
      <h2 className="name">{repos?.name}</h2>
      <p className="description">{repos?.description}</p>
      {repos?.language && <p className="language">{repos?.language}</p>}
      <p className="stargazers_count">
        Estrelas: <span>{repos?.stargazers_count}</span>
      </p>
      <p className="updated_at">
        Ultima atualização:
        <span>{formateDateTimeStamp(repos?.updated_at)}</span>
      </p>
      <div className="topic">
        {repos?.topics.map((topic: string) => {
          return <span> {topic} </span>
        })}
      </div>
    </ReposContainer>
  )
}

export default Repository
