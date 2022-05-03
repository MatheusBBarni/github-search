import spinner from './spinner.svg'
import * as S from './styles'

export type LoadingProps = {
  text?: string
}

function Loading({ text }: LoadingProps) {
  return text ? (
    <S.Container>
      <img src={spinner} alt="Loading" />
      <p>{text}</p>
    </S.Container>
  ) : (
    <img src={spinner} alt="Loading" />
  )
}

export default Loading
