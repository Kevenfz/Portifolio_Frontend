import styled, { css } from "styled-components";

export const SectionPositions = styled.section`
  ${({ theme }) => css`
    ${theme.mixins.SectionPositionsInfos}
  `}
`;

export const TextField = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.TextFieldInfos}
  `}
`;

export const LogoField = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.LogoFieldInfos}
  `}
`;
