import { User } from '../../model/User'
import * as S from './styles'

export type UserCardProps = {
  user: User
}

function UserCard({ user }: UserCardProps) {
  return <S.Container>{user.name}</S.Container>
}

export default UserCard
