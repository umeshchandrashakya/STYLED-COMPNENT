import React from "react";
import styled from "styled-components";
import { setFont } from "../../styles";
interface Props {
  title: string;
  className?: string;
  center?: string;
}

const Title = (props: Props) => {
  return <h3 className={props.className}>{props.title}</h3>;
};

export default styled(Title)`
  font-size: 36px;
  text-transform: capitalize;
  letter-spacing: 5px;
  ${setFont.slanted}
  text-align:${props => props.center}
`;
