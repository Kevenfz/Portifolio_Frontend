import styled, { css } from "styled-components";

export const BodyHeader = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    color: ${theme.colors.headerFontColor};
    position: fixed;
    box-sizing: border-box;
    p {
      cursor: pointer;
    }
    :hover {
      border-bottom: 2px solid red;
      transition: all 0.3s ease-in-out;
    }
  `}
`;
