import { useLocation } from 'react-router-dom'
import * as S from './styles'

function User() {
  const { state } = useLocation()

  return <S.Container>Hello user</S.Container>
}

export default User
