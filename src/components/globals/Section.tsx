import styled from "styled-components";
import { setRem } from "../../styles";

interface Props {
  color?: string;
}

const Section = styled.section<Props>`
  padding: 64px 0px;
  background: ${props => props.color};
`;

export default Section;
