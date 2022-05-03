import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Input from '../../components/Input'
import { API_URL } from '../../config/constants'
import * as S from './styles'

function Home() {
  const navigate = useNavigate()

  const [githubUser, setGithubUser] = useState<string>('')
  const [searchStatus, setSearchStatus] = useState<
    'pending' | 'error' | 'idle'
  >('idle')

  useEffect(() => {
    let timeoutId: number

    if (githubUser) {
      timeoutId = setTimeout(() => {
        searchUser()
      }, 500)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [githubUser])

  const searchUser = async () => {
    setSearchStatus('pending')

    const response = await fetch(`${API_URL}/users/${githubUser}`)

    const data = await response.json()

    if (response.status !== 200) {
      setSearchStatus('error')
      return
    }

    setSearchStatus('idle')

    navigate('/user', { state: { user: data } })
  }

  return (
    <S.Container>
      <S.Box>
        {searchStatus === 'pending' ? (
          <h1>loading</h1>
        ) : searchStatus === 'error' ? (
          <h1>Error</h1>
        ) : (
          <Input
            label="Github User"
            value={githubUser}
            onChange={(value) => setGithubUser(value)}
          />
        )}
      </S.Box>
    </S.Container>
  )
}

export default Home
