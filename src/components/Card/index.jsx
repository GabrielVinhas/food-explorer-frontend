import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useFavorite } from '../../hooks/favorite';
import { useCart } from '../../hooks/cart';
import { api } from '../../services/api';

import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleRight, FaTrashAlt} from 'react-icons/fa'

import { Container } from './styles';
import { Button } from '../Button';

import heart from '../../assets/heart.svg';
import heartFill from '../../assets/heart-fill.svg';


export function Card({data, ...rest}) {
  const [quantity, setQuantity] = useState(1);

  const { user } = useAuth();
  const { favorites, addDishToFavorite, removeDishFromFavorite } = useFavorite()
  const { handleAddDishToCart } = useCart();
  
  const isFavorite = favorites.some((dish) => dish.title === data.title)

  const navigate = useNavigate()

  const imageURL = `${api.defaults.baseURL}/files/${data.image}`;

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

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function handleEditDish(id) {
    navigate(`/edit/${id}`);
  }

  async function handleRemoveDish() {
    const confirm = window.confirm("Deseja realmente remover esse prato?");

    if (confirm) {
      console.log(data.id)
      await api.delete(`/dishes/${data.id}`);
      location.reload();
    }
  } 

  return (
    <Container {...rest}>
      {
        user.isAdmin ? 
        <button
          onClick={handleRemoveDish}
        >
          <FaTrashAlt size={25}/>
        </button>
        :
        <button
          type='button'
          onClick={() => isFavorite ? removeDishFromFavorite(data) : addDishToFavorite(data)}
        > 
          <img src={isFavorite ?  heartFill : heart} alt="heart" />  
        </button>
      }
      
      <div>
        <img src={imageURL} alt={data.title} />
      </div>

      <a type='button' onClick={user.isAdmin ? () => handleEditDish(data.id) : () => handleDetails(data.id)}>
        <h3>{data.title} <FaAngleRight /></h3>
      </a>

      <p>{data.description}</p>
      <strong>R$ {data.price}</strong>
      {
        user.isAdmin ?
        <div></div>
        :
        <div>
          <button
            onClick={handleRemoveQuantity} 
            className="btn"><FiMinus size={25}/>
          </button>
          
          <span>0{quantity}</span>
          
          <button
            onClick={handleAddQuantity}
            className="btn"><FiPlus size={25}/>
          </button>
          <Button
            title="incluir"
            onClick={() => handleAddDishToCart(data, quantity, imageURL)}
          />
        </div>
      }
      
      
    </Container>
   )
}