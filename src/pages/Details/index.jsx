import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../../hooks/cart';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Ingredient } from '../../components/Ingredient';
import { Container, Main, Ingredients, ButtonBack, Content, Info } from './styles';

import { FiMinus, FiPlus, FiChevronLeft } from 'react-icons/fi';
import receipt from '../../assets/receipt.svg';


export function Details() {
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState(null);
  const params = useParams();
  const { handleAddDishToCart } = useCart();
  console.log(data)

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;

  function handleAddQuantity() {
    const isGreater10 = quantity >= 9;
    if(isGreater10) {
      return
    }

    setQuantity(quantity + 1);
  }

  function handleRemoveQuantity() {
    const isLess0 = quantity <= 1;
    if (isLess0) {
      return
    }
    setQuantity(quantity - 1);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data);
    }

    fetchDish();
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <ButtonBack>
          <Link to="/"> <FiChevronLeft size={30}/>Voltar</Link>
        </ButtonBack>
        {
          data &&
          <Main>
            <div>
              <img src={imageURL} alt={`imagem de ${data.title}`} />
            </div>
            <div>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <Ingredients>
                {
                  data.ingredients.map(ingredient => (
                    <Ingredient key={String(ingredient.id)} ingredient={ingredient.name} />
                  ))
                }
              </Ingredients>
              <Info>
                <strong>R$ {data.price}</strong>
                <button
                  onClick={handleRemoveQuantity} 
                  className="btn"><FiMinus size={25}/>
                </button>
            
                <span>0{quantity}</span>
            
                <button
                  onClick={handleAddQuantity}
                  className="btn"><FiPlus size={25}/>
                </button>
                <div>
                  <Button 
                    title="incluir"
                    image={receipt}
                    onClick={() => handleAddDishToCart(data, quantity, imageURL)}
                  />
                </div>
              </Info>
            </div>
          </Main>
        }
      </Content>
      <Footer />
    </Container>
  )
}