import { Container, TextareaInput } from './styles'

export function Textarea({label, title, value, ...rest }) {
  return (
    <Container>
      <label htmlFor={label}>
        {title}
      </label>
      <TextareaInput id={label} {...rest}>
        {value}
      </TextareaInput>
    </Container>
  )
}
