import styled from "styled-components";
import image from "../../images/homeBcg.jpeg";
import { setFlex } from "../../styles";
interface Props {
  img?: string;
}

const Hero = styled.header<Props>`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.img || image}) center/cover fixed no-repeat;
  background-size: cover;
/* for content lef top bottom right */
/*  ${setFlex({ x: "flex-left", y: "center" })} */
/*  ${setFlex({ x: "flex-top", y: "center" })} */
/*  ${setFlex({ x: "flex-bo", y: "center" })} */
  ${setFlex({ x: "center", y: "center" })}
`;
export default Hero;
