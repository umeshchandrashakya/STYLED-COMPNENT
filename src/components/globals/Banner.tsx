import React from "react";
import styled, { css, keyframes } from "styled-components";
import { setColor, setRem, setLetterSpacing, setBorder } from "../../styles";
import { PrimaryButton } from "../globals/Button";

interface Props {
  title?: string;
  className?: string;
  text?: string;
  children: any;
  greeting?: string;
}

const Banner = (props: Props) => {
  return (
    <BannerWrapper>
      <div className={props.className}>
        <h1>
          {props.greeting}
          <span>{props.title}</span>{" "}
        </h1>
        <div className="info">
          <p>{props.text}</p>
          {props.children}
        </div>
      </div>
    </BannerWrapper>
  );
};

const animation = keyframes`
0%{
    opacity:0;
    transform:translateY(100%);

}

50%{
    opacity:0.5;
    transform:translateY(-100%);
}
100%{
    opacity:1;
    transform:translate(0%);

}

`;

const BannerWrapper = styled.section`
  color: ${setColor.mainWhite};
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: ${setRem(60)} ${setRem(60)};
  /* latter spacing */
  ${setLetterSpacing(4)}
  ${setBorder({ width: "2px", color: setColor.primary, style: "solid" })}
  h1 {
    animation: ${animation} 3s ease-in;
    text-transform: capitalize;
    font-size: 48px;
    /* set rem */
    color: ${setColor.primary};
    span {
      color: ${setColor.mainWhite};
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    width: 70vw;
    border: 6px solid ${setColor.primary};
    p {
      width: 75%;
    }
  }

  h1 {
    /* animations */
  }
  .info {
    /* anmaitons */
  }
`;
export default Banner;
