import { Container, Content } from './styles';
import { useCart } from '../../hooks/cart';

export function OrderItem({data}) {

  const { handleRemoveDishFromCart } = useCart();
  
  return (
    <Container>
      <div>
        <img src={data.image} alt="imagem do prato" />
      </div>
      <Content>
        <div>
          <span>{data.quantity}X</span>
          <span>{data.title}</span>
          <strong>R$ {data.price}</strong>
        </div>
        <button
          type='button'
          onClick={() => handleRemoveDishFromCart(data.id)}
        >Excluir</button>
      </Content>
    </Container>
  )
}