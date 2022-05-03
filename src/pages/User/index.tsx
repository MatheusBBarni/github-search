import { useEffect, useMemo, useState } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import Loading from '../../components/Loading'
import RepositoryCard from '../../components/RepositoryCard'
import UserCard from '../../components/UserCard'
import { API_URL } from '../../config/constants'
import { Repository as IRepository } from '../../model/Repository'
import { User as IUser } from '../../model/User'
import * as S from './styles'

type FetchStatus = 'idle' | 'pending' | 'error'

type DataController<T> = {
  data: T
  status: FetchStatus
}

function User() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const params = useParams()

  const typedState = useMemo<{ user: IUser }>(
    () => state as { user: IUser },
    [state]
  )

  const [userController, setUserController] = useState<DataController<IUser>>({
    data: {} as IUser,
    status: 'idle',
  })
  const [repositoriesController, setRepositoriesController] = useState<
    DataController<Array<IRepository>>
  >({
    data: [],
    status: 'idle',
  })

  useEffect(() => {
    searchUser()
    searchRepositories()
  }, [])

  const searchUser = async () => {
    if (state) {
      setUserController({
        ...userController,
        data: typedState.user,
      })
      return
    }

    setUserController({
      ...userController,
      status: 'pending',
    })

    const response = await fetch(`${API_URL}/users/${params.user}`)

    if (response.status !== 200) {
      setUserController({
        ...userController,
        status: 'error',
      })
      navigate('/', {
        state: {
          error: 'not_found',
        },
      })
      return
    }

    const data = await response.json()

    setUserController({
      status: 'idle',
      data,
    })
  }

  const searchRepositories = async () => {
    setRepositoriesController({
      ...repositoriesController,
      status: 'pending',
    })

    const response = await fetch(`${API_URL}/users/${params.user}/repos`)

    if (response.status !== 200) {
      setRepositoriesController({
        ...repositoriesController,
        status: 'error',
      })
    }

    const data = await response.json()

    setRepositoriesController({
      status: 'idle',
      data,
    })
  }

  return (
    <S.Container>
      <S.BackButtonWrapper>
        <S.BackButton onClick={() => navigate('/')}>
          <IoChevronBackOutline size={30} color="var(--dark)" /> Go back
        </S.BackButton>
      </S.BackButtonWrapper>
      {userController.status === 'pending' ? (
        <Loading text="Loading User..." />
      ) : (
        <UserCard user={userController.data} />
      )}
      {repositoriesController.status === 'pending' ? (
        <Loading text="Loading Repositories..." />
      ) : (
        <S.RepositoriesWrapper>
          {repositoriesController.data
            .sort(
              (repositoryA, repositoryB) =>
                repositoryB.stargazers_count - repositoryA.stargazers_count
            )
            .map((repository) => (
              <div className="repository" key={repository.id}>
                <RepositoryCard repository={repository} />
              </div>
            ))}
        </S.RepositoriesWrapper>
      )}
    </S.Container>
  )
}

export default User
