import styled, { css } from "styled-components";

export const setColor = {
  primary: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGray: "#ececec",
  lightGray: "#f7f7f7"
};

export const setFont = {
  main: "font-family:'Lato', sans-serif;",
  slanted: "font-family:'Yeon Sung', cursive;"
};

export const setFlex = ({ x = "center", y = "center" }) => {
  return `display:flex;
          align-items:${y};
          justify-content:${x}
           `;
};

export const setBackGround = ({
  img,
  color
}: {
  img: string;
  color: string;
}) => {
  return `background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url(${img}) center/cover fixed no-repeat;`;
};

export const setRem = (number = 16) => {
  return `${number / 16}`;
};

export const setLetterSpacing = (number = 2) => {
  return `letter-spacing:${number}px`;
};

export const setBorder = ({
  width = "2px",
  style = "solid",
  color = "black"
}: {
  width: string;
  style: string;
  color: string;
}) => {
  return `border:${width} ${style} ${color}`;
};

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576)
};

const Content = styled.div`
  height: 3em;
  width: 3em;
  background: papayawhip;

  /* Now we have our methods on media and can use them instead of raw queries */
  ${media.desktop} {
    background: dodgerblue;
  }
  ${media.tablet} {
    background: mediumseagreen;
  }
  ${media.phone} {
    background: palevioletred;
  }
`;

export const setShadow = {
  light: "box-shadow:3px 3px 5px 0px rgba(0,0,0,0.75)",
  dark: "box-shadow:6px 6px 5px 0px rgba(0,0,0,0.75)",
  darkset: "box-shadow:10px 10px 5px 0px rgba(0,0,0,0.75)"
};
