import * as S from "./style.ts";
import LogoKev from "../../assets/icons/logoKev.png";

export const InfoComponent = () => {
  return (
    <S.SectionPositions>
      
      <S.TextField className="TextField">
        <h1>Eai, tudo bem? Sou Keven Ferreira, é um prazer!</h1>
        <h2>Desenvolvedor Front end Jr.</h2>
      </S.TextField>
      
      <S.LogoField className="LogoField">
        <img src={LogoKev} alt="Logo Keven" />
      </S.LogoField>
    
    </S.SectionPositions>
  );
};
