import React from "react";
import { render } from "react-dom";
import Room from "./Room";
import styled from "styled-components";
import Title from "../globals/Title";
import Section from "../globals/Section";
import rooms from "./Rooms-data";
interface Props {
  name?: string;
}

class Rooms extends React.Component<Props> {
  state = {
    room: rooms
  };
  render() {
    return (
      <Section color="lightgray">
        <Title title="our Rooms" center="center"></Title>
        <RoomCenter>
          {this.state.room.map(props => {
            return (
              <Room
                key={props.id}
                price={props.price}
                info={props.info}
                image={props.image}
                title={props.title}
              />
            );
          })}
        </RoomCenter>
      </Section>
    );
  }
}

const RoomCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  @media screen and (min-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 32px;
    width: 100vw;
    max-width: 1170px;
  }
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 32px;
    width: 100vw;
    max-width: 1170px;
  }
`;

export default Rooms;
