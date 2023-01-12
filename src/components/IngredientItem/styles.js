import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ isNew }) => isNew ? 'transparent' : '#1A2327'};
  color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_500 : '#FFFFFF'};

  border: ${({ theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_500}` : 'none'};

  padding-right: 1.2rem;
  border-radius: 0.8rem;

  > button {
    border: none;
    background: none;

    display: flex;
    align-items: center;
  }

  .button-delete {
    color: #FFFFFF;
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.GRAY_500}
  }

  > input {
    height: 3.2rem;
    width: 10rem;
    padding: 1.2rem;
    font-size: 1.6rem;

    color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_500 : '#FFFFFF'};
    background: transparent;

    border: none;
  }
`