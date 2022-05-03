import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  p {
    font-size: 3rem;
    font-family: var(--font);
    font-weight: var(--normal);
    color: var(--dark);
  }
`
