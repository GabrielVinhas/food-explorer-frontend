import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  max-width: 136.8rem;
  padding-inline: 4rem;
  margin-inline: auto;
  > div {
    padding-top: 3.4rem;
    width: 100%;

    h3 {
      font-size: clamp(2rem, 1rem + 3vw, 3.2rem);
      margin-bottom: 3rem;
    }

    .section-order {
      height: 40rem;
      padding-right: 4rem;
      overflow-y: auto;
      width: max-content;
    }

    .result {
      font-size: 2rem;
      margin-top: 1rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding-inline: 12.3rem;
    justify-content: space-between;
    width: 100%;
  }
`

export const Payment = styled.div`
  max-width: 35rem;

  > div {
    border: 1px solid rgba(255, 255, 255, 0.1);

    div:nth-child(1) {
      display: flex;

      button {
        width: 100%;
        height: 8.1rem;

        border: 1px solid rgba(255, 255, 255, 0.1);
        background: transparent;

        color: white;
        font-size: 1.6rem;
        text-transform: uppercase;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.4rem;
      }
      .add-background {
        background: rgba(255, 255, 255, 0.05);
      }

      .button-pix {
        background: ${({ ButtonBackgroundIsActive }) => ButtonBackgroundIsActive ? 'rgba(255, 255, 255, 0.05)' : 'none'};
      }

      .button-credit {
        background: ${({ ButtonBackgroundIsActive }) => ButtonBackgroundIsActive ? 'none' : 'rgba(255, 255, 255, 0.05)'};
      }
    }

    .option-payment {
      padding: 4rem 4rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > img {
        max-width: 100%;
        margin-inline: auto;
        padding-bottom: 2rem
      }

      @media (min-width: 768px) {
        padding: 4rem 9rem;
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 53rem;
  }
  
`

export const SectionCredit = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3.7rem;

  .data-card {
    display: flex;
    gap: 1.4rem;
    margin-bottom: 3.7rem;

    input {
      width: 100%;
    }
  }

`

export const Accept = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding-block: 2.2rem;
  
  > svg {
    font-size: 10.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 2.4rem;
  }
`