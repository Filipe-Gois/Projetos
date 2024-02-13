import styled from "styled-components";
import Theme from "../../theme";

export const IconStyle = styled.img`
  width: 50%;
  height: 50%;
  align-self: center;
  &:hover {
    color: ${Theme.colors.darkGray};
  }
`;

export const IconBox = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  /* padding: 5px; */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Theme.colors.white};
  cursor: pointer;

  /* &:hover {
    border: 1px solid ${Theme.colors.darkGray};
    transition: 0.5s ease-out;
  } */
`;

export const MenuHamburguerBox = styled(IconBox)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
