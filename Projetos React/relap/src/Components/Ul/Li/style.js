import styled from "styled-components";
import Theme from "../../../theme";

export const LiStyle = styled.li`
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: ${Theme.colors.white};
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      transition: 0.5s ease-out;
      color: ${Theme.colors.darkGray};
    }
  }

  @media (min-width: 992px) {
    width: 100%;
    height: 100%;
    flex-direction: row;
    

    a {
      width: 100%;
      height: max-content;
    }
  }
`;
