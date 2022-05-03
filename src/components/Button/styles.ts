import styled, { css } from 'styled-components'

import { ButtonType } from '.'

export const Container = styled.button<{ variant: ButtonType }>`
  max-width: 90%;
  width: 10rem;
  height: 5rem;
  border: 1px solid;
  border-radius: 0.5rem;

  font-size: 2rem;
  font-family: var(--font);
  font-weight: var(--normal);

  ${({ variant }) => css`
    ${variant === 'primary' &&
    css`
      background-color: var(--dark);
      border-color: var(--dark);
      color: var(--white);
    `}
    ${variant === 'secondary' &&
    css`
      background-color: var(--white);
      border-color: var(--white);
      color: var(--dark);
    `}
  `}
`
