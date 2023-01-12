import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  flex: 1;
  max-width: 136.8rem;
  padding-inline: 4rem;
  margin: 0 auto;

  > h3 {
    font-size: clamp(2rem, 1rem + 3vw, 3.2rem);
    margin-block: 3.4rem;
  }

  > main {
    max-width: 100%;
    margin-inline: auto;
  }

  @media (min-width: 768px) {
    main {
      width: 136.8rem;
    }

    padding-inline: 12.3rem;
  }
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  th, td {
    border: 2px solid #192227;
    padding-inline: 1rem;
  }

  @media (min-width: 768px) {
    th, td {
      padding-inline: 2.4rem;
    }
  }
`

export const Thead = styled.thead`
  text-align: left;
  height: 4.5rem;
`

export const Tbody = styled.tbody`
  > tr {
    height: 8rem;

    td {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`

export const SelectWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    

    position: absolute;
    left: 1.6rem;
  }

  .pendente {
    background: red;
  }

  .preparando {
    background: yellow;
  }

  .entregue {
    background: #04D361;
  }

  select {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    padding: 1.3rem 1.6rem 1.3rem 3.2rem;
    color: white;

    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 0.5rem;

    appearance: none;
    -webkit-appearance: none;

    @media (min-width: 768px) {
      background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-position: right 1rem top 50%;
      width: 17.5rem;
    }
  }
`