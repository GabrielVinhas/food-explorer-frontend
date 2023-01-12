import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  > input {
    height: 4.8rem;
    padding: 1.4rem;

    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 0.5rem;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      font-size: 1.6rem;
    }
  }
`