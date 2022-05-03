import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Label = styled.label`
  font-size: 1.5rem;
  font-family: var(--font);
  font-weight: var(--normal);
  color: var(--dark);
`

export const StyledInput = styled.input`
  width: 100%;
  height: 3.5rem;
  border: 1px solid var(--light-dark);
  border-radius: 0.5rem;
  background: none;
  padding: 0 10px;
  font-size: 2rem;
  font-family: var(--font);
  font-weight: var(--normal);
  color: var(--dark);
`
