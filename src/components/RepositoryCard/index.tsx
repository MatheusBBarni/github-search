import { memo } from 'react'
import { IoStarSharp } from 'react-icons/io5'

import { Repository } from '../../model/Repository'
import * as S from './styles'

export type RepositoryCardProps = {
  repository: Repository
}

function RepositoryCard({
  repository: { name, stargazers_count, html_url },
}: RepositoryCardProps) {
  return (
    <S.Container href={html_url} target="_blank">
      <h3>{name}</h3>
      <p>
        <IoStarSharp color="var(--yellow)" />
        {stargazers_count}
      </p>
    </S.Container>
  )
}

export default memo(RepositoryCard)
