import styled from "styled-components";
import Theme from "../../theme";

export const Title = styled.h1`
  font-size: 20px;
  color: ${(props) => (!props.color ? Theme.colors.darkGray : props.color)};
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    /* font-size: 40px; */
  }
`;
