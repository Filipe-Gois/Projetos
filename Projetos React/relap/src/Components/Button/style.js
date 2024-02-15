import styled from "styled-components";
import Theme from "../../theme";

export const ButtonStyle = styled.button``;

export const MenuHamburguerStyle = styled.button`
  border: none;
  background: none;
  border-top: 2px solid #fff;
  cursor: pointer;
  z-index: 3;
  max-width: 100%;
  border-top-color: ${(props) => props.exibeNavBar && "transparent"};

  &::after {
    content: "";
    display: block;
    width: 15px;
    height: 2px;
    background-color: #fff;
    margin-top: 5px;
    position: relative;
    transform: 0.3s;
    top: ${(props) => props.exibeNavBar && "-7px"};
    transform: ${(props) => props.exibeNavBar && "rotate(-135deg)"};
  }
  &::before {
    content: "";
    display: block;
    width: 15px;
    height: 2px;
    background-color: #fff;
    margin-top: 5px;
    position: relative;
    transform: 0.3s;
    transform: ${(props) => props.exibeNavBar && "rotate(135deg)"};
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const MenuHamburguerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Button = styled.button`
  background-color: ${Theme.colors.yellow};
  color: ${Theme.colors.white};
  border-radius: 20px;
  text-align: center;
  max-width: 165px;
  width: 100%;
  height: 45px;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${Theme.colors.darkGray};
    transition: 0.5s ease-out;
  }
`;
