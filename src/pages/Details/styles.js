import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;                 
`

export const ButtonBack = styled.div`
  width: 100%;
  margin: 2.4rem auto 4rem;
  display: flex;
  
  > a {
    display: flex;
    align-items: center;
    font-size: clamp(1.8rem, .4rem + 3vw, 2.4rem);

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (min-width: 768px) {
    padding-inline: 0;
  }
`

export const Content = styled.div`
  max-width: 136.8rem;
  height: 100%;
  padding-inline: 4rem;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;

  @media (min-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding-inline: 12.3rem;
    gap: 4rem;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div:nth-child(1) {
    max-width: 25rem;
    border-radius: 50%;

    img {
      max-width: 100%;
    }
  }

  > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      font-family: 'Poppins', sans-serif;

    h1 {
      margin-top: 2rem;
      margin-bottom: 1.8rem;
      font-size: clamp(2.4rem, 1rem + 3vw, 4rem);
      font-weight: 700;
    }

    p {
      text-align: center;
      font-size: clamp(1.8rem, .4rem + 3vw, 2.4rem);
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    div:nth-child(5) {
      width: 5rem;
      
      img {
        display: none;
      }
    }
  }

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 4rem;

    > div:nth-child(1) {
      max-width: 39rem;
      border-radius: 50%;
    }

    > div:nth-child(2) {
      max-width: 60rem;
      align-items: flex-start;

      h1 {
        margin-top: 0;
      }

      p {
        text-align: left;
      }

      div:nth-child(5) {
        width: 10rem;
        img {
          display: block;
        }
      }
    }
  }
`

export const Ingredients = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-block: 3rem;
`

export const Info = styled.div`
  margin-top: 2rem;
  padding-inline: 2rem;
  display: flex;
  align-items: center;
  gap: 1.7rem;
  width: 100%;

  strong {
    font-size: clamp(2rem, 1rem + 3vw, 3.2rem);
    color: ${({ theme }) => theme.COLORS.LIGHT_GREEN};
    min-width: 10rem;
  }

  span {
    font-size: 2rem;
    font-weight: 700;
  }
    
  .btn {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    align-items: center;

    position: relative;

    z-index: 6;
  }

  @media (min-width: 768px) {
    padding-inline: 0;
     
    > strong{
      min-width: 14rem;
    } 
  }
`