import styled from "styled-components";
import Theme from "../../theme";

export const InputHeaderStyle = styled.input`
  width: 100%;
  height: 50px;
  padding: 15px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: ${Theme.colors.darkGray};

  &::placeholder {
    color: ${Theme.colors.darkGray};
  }
`;
