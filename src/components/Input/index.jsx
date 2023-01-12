import { Container } from './styles';

export function Input({label, title, max, ...rest}) {
  return (
    <Container>
      <label htmlFor={label}>
        {title}
      </label>
      <input id={label} {...rest} />
    </Container>
  )
}