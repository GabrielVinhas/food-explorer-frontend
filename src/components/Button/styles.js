import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  border: none;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.4rem;

  display: ${({ isInvisible}) => isInvisible ? 'none': 'flex'};
  align-items: center;
  justify-content: center;
  gap: 1.1rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`