import styled, { css } from "styled-components";

export const HeaderStyle = styled.section`
  ${({ theme }) => css`
    ${theme.mixins.HeaderStyle}
  `}
`;
