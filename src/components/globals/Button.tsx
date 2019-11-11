import styled from "styled-components";
import { setColor, setRem, setLetterSpacing, setFont } from "../../styles";

export const PrimaryButton = styled.button`
  background: ${setColor.primary};
  display: inline-block;
  padding: 12px 36px;
  text-transform: capitalize;
  ${setFont.slanted};
  color: ${setColor.mainWhite};
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 18px;
  border: 2px solid ${setColor.mainWhite};

  &:hover {
    background: transparent;
    color: ${setColor.primary};
  }
`;

export const SmallButton = styled(PrimaryButton)`
  padding: 9px 12px;
  background: ${setColor.primary};
`;
