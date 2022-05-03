import * as S from './styles'

export type ButtonType = 'primary' | 'secondary'

export type ButtonProps = {
  variant: ButtonType
  children: React.ReactNode
  onClick: () => void
}

function Button({ variant, children, onClick }: ButtonProps) {
  return (
    <S.Container variant={variant} onClick={onClick}>
      {children}
    </S.Container>
  )
}

export default Button
