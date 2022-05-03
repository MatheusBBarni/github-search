import { memo } from 'react'
import { IoPeopleSharp, IoGitCompareSharp } from 'react-icons/io5'
import { User } from '../../model/User'
import * as S from './styles'

export type UserCardProps = {
  user: User
}

function UserCard({ user }: UserCardProps) {
  return (
    <S.Container>
      <S.ImageWrapper>
        <img src={user.avatar_url} alt={`${user.name} avatar`} />
      </S.ImageWrapper>
      <S.Informations>
        <S.InfoWrapper>
          <label>Name</label>
          <p>{user.name}</p>
        </S.InfoWrapper>
        <S.InfoWrapper width="40%">
          <label>Followers</label>
          <p>
            <IoPeopleSharp size={20} /> {user.followers}
          </p>
        </S.InfoWrapper>
        <S.InfoWrapper width="40%">
          <label>Following</label>
          <p>
            <IoGitCompareSharp size={20} /> {user.following}
          </p>
        </S.InfoWrapper>
      </S.Informations>
      <S.Informations>
        <S.InfoWrapper>
          <label>E-mail</label>
          <p>{user.email || '-'}</p>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <label>Bio</label>
          <p>{user.bio || '-'}</p>
        </S.InfoWrapper>
      </S.Informations>
    </S.Container>
  )
}

export default memo(UserCard)
