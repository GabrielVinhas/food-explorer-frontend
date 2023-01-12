import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-inline: auto;
`
export const Content = styled.div`
  max-width: 136.8rem;
  flex: 1;
  
  @media (min-width: 768px) {
    padding-inline: 12.3rem;
    margin-inline: auto;
  }
`

export const Slogan = styled.div`
  margin-top: 3rem;
  margin-inline: auto;
  padding-inline: 4rem;
  margin-bottom: 4.8rem;

  > img {
    width: 100%;
  }

  > div {
    margin-top: 2rem;
     h1 {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: clamp(2.6rem, 1rem + 3vw, 4rem);
      margin-bottom: 0.8rem;
     }

     p {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
     }
  }

  @media (min-width: 1224px) {
    height: 26rem;
    margin-top: 16.4rem;
    border-radius: 0.8rem;
    justify-content: flex-end;

    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

    display: flex;
    align-items: center;
    position: relative;

    > img {
      width: max(63.2rem);
      position: absolute;
      bottom: 0;
      left: -5rem;
    }

    > div {
      margin-top: 0;
    }
  }
`