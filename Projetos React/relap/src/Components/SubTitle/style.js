import styled from "styled-components";
import Theme from "../../theme";

export const SubTitle = styled.h2`
  font-size: 60px;
  color: ${(props) => (!props.color ? Theme.colors.darkGray : props.color)};

  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    font-size: 60px;
  }
`;
