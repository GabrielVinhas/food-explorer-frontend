import styled from "styled-components";

export const Container = styled.section`
  padding-inline: 4rem;
  margin-bottom: 4rem;
  > h2 {
    font-size: clamp(2rem, 2rem + 3vw, 3.2rem);
    margin-bottom: 4rem;
  }
  
  @media (min-width: 768px) {
    padding-inline: 0;
  }
`
export const Slider = styled.div`
  position: relative;
  max-width: 136.8rem;

  > div {
    display: flex;
    gap: 2.7rem;

    overflow-x: auto;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  .btn-left, .btn-right {
    position: absolute;
    z-index: 5;

    height: 51.2rem;
    width: 11.6rem;
    padding-inline: 1rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    display: none;
  }

  .btn-left {
    top: 0;
    left: 0;

    border: none;
    background: linear-gradient(270deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
  }

  .btn-right {
    top: 0;
    right: 0;

    justify-content: flex-end;

    border: none;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
  }

  @media (min-width: 768px) {
    .btn-left, .btn-right {
      display: flex;
      align-items: center;
      transition: all ease 0.5s;

      opacity: 0;
    }

    &:hover {
      .btn-left, .btn-right {
        opacity: 1;
      }
    }
  }
`