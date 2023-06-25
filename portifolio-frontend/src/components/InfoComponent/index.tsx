import * as S from "./style.ts";
import LogoKev from "../../assets/icons/logoKev.png";
import NextIcon from "../../assets/icons/icons8-duplo-para-baixo-90.png";

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

      <S.Div>
        <S.NextIcon
          className="Icon floatIcon"
          src={NextIcon}
          alt="Icone para proxima sessão do site"
        />
      </S.Div>
    </S.SectionPositions>
  );
};
