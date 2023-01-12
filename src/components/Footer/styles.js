import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 12.4rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  margin-top: 10rem;
`

export const Content = styled.div`
  height: 100%;
  max-width: 136.8rem;
  margin-inline: auto;
  padding-inline: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;

  > div {
    display: flex;
    align-items: center;
    gap: 1.1rem;

    img {
      opacity: .3;
    }

    span {
      font-size: 2.4rem;
      opacity: .3;
    }
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  @media (min-width: 768px) {
    padding-inline: 12.3rem
  }
`