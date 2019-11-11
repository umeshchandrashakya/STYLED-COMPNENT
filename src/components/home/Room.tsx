import React from "react";
import styled from "styled-components";
import RoomsData from "./Rooms-data";
import { SmallButton } from "../globals/Button";
import { setShadow, setColor, setBorder } from "../../styles";

interface Props {
  id?: string;
  image?: string;
  title?: string;
  info?: string;
  price?: number;
  className?: string;
}

const Room = (props: Props) => {
  return (
    <article>
      <div className="img-container">
        <img src={props.image} alt="single-room" />
        <div className="price">${props.price}</div>
      </div>
      <div className="room">
        <h4>{props.title}</h4>
        <p>{props.info}</p>
        <SmallButton>Rede More</SmallButton>
      </div>
    </article>
  );
};

export default styled(Room)``;
