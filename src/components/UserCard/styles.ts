import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: auto;
  height: auto;
  padding: 1.5rem;

  border: 1px solid var(--dark);
  border-radius: 1rem;

  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    flex-flow: wrap;
    justify-content: center;
  }
`

export const ImageWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  margin-right: 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  @media (max-width: 900px) {
    margin-bottom: 1.5rem;
    margin-right: 0;
  }
`
export const Informations = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.5rem;
  @media (max-width: 900px) {
    width: 100%;
  }
`

export const InfoWrapper = styled.div<{ width?: string }>`
  ${({ width = '100%' }) => css`
    width: ${width};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    font-family: var(--font);
    color: var(--dark);
    margin-bottom: 0.8rem;
    justify-content: center;

    label {
      font-size: 1.5rem;
      font-weight: var(--normal);
    }

    p {
      font-size: 2rem;
      font-weight: var(--bold);

      display: flex;
      gap: 0.4rem;
      width: 200px;
    }

    @media (max-width: 900px) {
      width: 100%;
      gap: 1rem;
      label,
      p {
        text-align: center;
        width: unset;
        justify-content: center;
      }
    }
  `}
`
