import { colors } from "./colors";
import { constants } from "./constants";
import { css } from "styled-components";

const HeaderStyle = () => css`
  position: absolute;
  width: 70%;
  height: 15%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2.5rem;
  color: ${colors.FontColor};
  font-family: ${constants.titleFontFamily};
  font-size: ${constants.titleHeaderFontSize};
  p {
    cursor: pointer;
    border: 3px solid transparent;
  }
  :hover {
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    border-bottom-color: ${colors.titleHover};
  }
`;

const SectionPositionsInfos = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
  width: 70%;
  height: 50%;
  color: white;

  .TextField,
  .LogoField {
    animation: AnimationDiv 2.2s;
  }

  @keyframes AnimationDiv {
    from {
      transform: translateY(200px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

const TextFieldInfos = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 57%;
  color: ${colors.FontColor};
  h1 {
    font-family: ${constants.titleFontFamily};
    font-size: ${constants.titleFontSize};
  }
  h2 {
    margin-top: -0.2rem;
    font-family: ${constants.textFontFamily};
    font-size: ${constants.textFontSize};
  }
`;

const LogoFieldInfos = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
`;

const NextIcon = () => css`
  width: 50px;
  position: absolute;
  margin: 0 auto;
  top: 23rem;
  cursor: pointer;
`;

const DivIconNext = () => css`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .floatIcon {
    animation: FloatIcon 2.7s ease-in-out infinite;
  }

  @keyframes FloatIcon {
    0%,
    100% {
      transform: translateY(0);
      opacity: 0;
    }
    50% {
      transform: translateY(-20px);
      opacity: 1;
    }
  }
`;

export const mixins = {
  HeaderStyle,
  SectionPositionsInfos,
  TextFieldInfos,
  LogoFieldInfos,
  NextIcon,
  DivIconNext,
};
