import React from "react";
import Hero from "../globals/Hero";
import aboutImage from "../../images/aboutBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryButton } from "../globals/Button";

const Header = () => {
  return (
    <Hero>
      <Banner
        title="beatchwalk resort"
        greeting="Welcome to "
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magni iusto voluptatum, itaque repudiandae maiores!"
      >
        <PrimaryButton>View Details</PrimaryButton>
      </Banner>
    </Hero>
  );
};

export default Header;
