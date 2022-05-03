import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const RepositoriesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .repository {
    width: 48%;
    @media (max-width: 900px) {
      width: 100%;
    }
  }
`
export const BackButtonWrapper = styled.div`
  width: 100%;
`

export const BackButton = styled.button`
  width: auto;
  height: auto;

  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.8rem;
`
