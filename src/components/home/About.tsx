import React from "react";
import Section from "../globals/Section";
import Title from "../globals/Title";
import aboutImg from "../../images/aboutBcg.jpeg";
import { PrimaryButton } from "../globals/Button";
import { setColor } from "../../styles";

import styled from "styled-components";
const About = () => {
  return (
    <Section color="white">
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg}></img>
        </div>
        <div className="about-info">
          <Title title="about us" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            provident alias? Quod quia in nostrum similique obcaecati quaerat
            vel cupiditate libero, iusto consequuntur possimus id, autem odio
            laborum, sapiente ut!
          </p>
          <PrimaryButton>Read More</PrimaryButton>
        </div>
      </AboutCenter>
    </Section>
  );
};

const AboutCenter = styled.div`
  .about-img,
  .about-info {
    padding: 50px;
  }
  .about-img {
    img {
      width: 100%;
      display: block;
      border: 4px solid ${setColor.primary};
    }
  }
  .about-info {
    p {
      letter-spacing: 4px;
    }
  }
  width: 90vw;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 32px;
    width: 100vw;
    max-width: 1170px;
    .about-img,
    .about-info {
      padding: 0px;
    }
    .about-img {
      align-self: center;
    }
    .about-info {
      p {
        width: 80%;
      }
    }
  }
`;

export default About;
