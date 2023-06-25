import UchihaLogo from "../../assets/img/WallpaperUchihaURUSSO-1-removebg-preview.png";
import * as S from "./style";

export const BioComponent = () => {
  return (
    <S.MainSpace className="Mainspace">
      <S.Bio className="Bio">
        <h1>Quem sou eu?</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          doloribus rem aliquam perferendis exercitationem! Deserunt, ea.
          Veritatis tempore ducimus, aspernatur odio animi ipsa minima, minus
          provident ea soluta sed laborum? Ratione architecto consequatur odio
          doloremque dolore tenetur magni, a sequi sapiente atque fugit
          voluptatem sit blanditiis cumque tempore praesentium harum, nobis
          distinctio quam quisquam totam! Maxime iste nesciunt deserunt esse?
        </p>
        <img src={UchihaLogo} alt="" />
      </S.Bio>
    </S.MainSpace>
  );
};
