import styled from 'styled-components'

export const Container = styled.a`
  width: 100%;
  height: auto;
  padding: 2rem;
  border: 1px solid var(--dark);
  border-radius: 1rem;
  font-family: var(--font);
  font-weight: var(--normal);
  color: var(--dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  transition: all 0.1s ease;
  h3 {
    font-size: 1.8rem;
    font-weight: var(--bold);
  }
  p {
    font-size: 1.4rem;
    display: flex;
    gap: 0.4rem;
  }

  &:hover {
    transform: scale(1.02);
  }
`
