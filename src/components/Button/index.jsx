import { Container } from './styles';

export function Button({title, image, isInvisible = false, ...rest}) {
  return (
    <Container
      type="button"
      isInvisible={isInvisible}
      {...rest}
    >
      {
        image ?
        <img src={image} alt="ícone do botão"/>
        :
        ''
      }
      {title}
    </Container>
  )
}