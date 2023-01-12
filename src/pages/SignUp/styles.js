import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > div {
    padding-block: 5rem;
    max-width: 47.6rem;

    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 2rem;   

    h1 {
      font-size: clamp(3.2rem, 1rem + 5vw, 4.2rem);
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: auto;
    width: 120rem;
  }
`

export const Form = styled.form`
  margin-inline: auto;
  padding-block: 6.4rem;
  padding-inline: 2.4rem;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  max-width: 47.6rem;
  height: fit-content;

  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 3.2rem;

> legend {
  font-size: 3.2rem;
  text-align: center;
}

> a {
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.4rem;
  text-align: center;
}

@media (min-width: 768px) {
  margin-inline: 0;
  padding: 6.4rem;
}
`