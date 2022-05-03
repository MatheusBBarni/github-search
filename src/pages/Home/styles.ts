import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Box = styled.div`
  max-width: 90%;
  width: 500px;
  height: 300px;
  padding: 4rem;

  background-color: var(--light-white);
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ErrorMessage = styled.h2`
  font-size: 4rem;
  font-family: var(--font);
  font-weight: var(--normal);
  color: var(--dark);
  margin-bottom: 2rem;
`
