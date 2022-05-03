import * as S from './styles'

export type InputProps = {
  label: string
  value: string
  onChange: (value: string) => void
}

function Input({ label, value, onChange }: InputProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.StyledInput
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </S.Container>
  )
}

export default Input
