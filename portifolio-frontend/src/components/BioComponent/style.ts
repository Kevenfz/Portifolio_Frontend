import styled, { css } from "styled-components";

export const MainSpace = styled.section`
  ${({ theme }) => css`
    width: 68%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-top: 20rem;
  `}
`;

export const Bio = styled.div`
    ${({theme}) => css`
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            position: relative;
            width: 500px;
            height: 600px;
            top: -10rem;
        }
    `}
`