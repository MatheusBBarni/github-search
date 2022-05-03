import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import UserCard from '../../components/UserCard'
import { User as IUser } from '../../model/User'
import * as S from './styles'

function User() {
  const { state } = useLocation()
  const typedState = useMemo<{ user: IUser }>(
    () => state as { user: IUser },
    [state]
  )

  return (
    <S.Container>
      <UserCard user={typedState!.user} />
    </S.Container>
  )
}

export default User
