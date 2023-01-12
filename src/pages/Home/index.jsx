import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useFavorite } from '../../hooks/favorite';

import { Container, Content, Slogan } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

import coverPhoto from '../../assets/cover-photo.png';

export function Home() {
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState("")

  const { favorites } = useFavorite();
  
  function handleFavorites(favor) {
    if (favor.length === 0) {
      return
    }
    setDishes(favorites);
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}`);
      setDishes(response.data);
    }

    fetchDishes();
  }, [search, favorites.length === 0])

  return (
      <Container>
        <Header search={setSearch} functionButton={() => handleFavorites(favorites)}/>
        <Content>
          <Slogan>
            <img src={coverPhoto} alt="cover photo" />
            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </Slogan>
          {
            dishes.filter(dish => dish.category == "pratos principais").length > 0 &&
            <Section title="Pratos principais">
              {
                dishes.filter(dish => dish.category == "pratos principais").map(dish => (
                  <Card
                    key={String(dish.id)}
                    data={dish} 
                  />
                ))
              }
            </Section>
          }

          {
            dishes.filter(dish => dish.category == "sobremesas").length > 0 &&  
            <Section title="Sobremesas">
              {
                dishes.filter(dish => dish.category == "sobremesas").map(dish => (
                  <Card
                    key={String(dish.id)}
                    data={dish} 
                  />
                ))
              }
            </Section>
          }  

          { 
            dishes.filter(dish => dish.category == "bebidas").length > 0 &&
            <Section title="Bebidas">
              { 
                dishes.filter(dish => dish.category == "bebidas").map(dish => (
                  <Card
                    key={String(dish.id)}
                    data={dish} 
                  />
                ))
              }
            </Section>
          }
          
        </Content>
        <Footer />

      </Container>
  )
}