import styled from "styled-components";
import Theme from "../../theme";

export const NavBarStyle = styled.nav`
  background-image: ${Theme.linearGradient.violetToPurple};
  width: 70vw;
  height: calc(100vh - 160px);
  top: 160px;
  right: ${(props) => (props.exibeNavBar ? "0" : "-71vw")};
  display: flex;
  justify-content: center;
  position: fixed;

  z-index: 100;
  transition: right 0.5s ease-in-out, opacity 0.6s;

  @media (min-width: 992px) {
    width: max-content;
    height: 100%;

    position: static;
    background-image: none;
  }
`;
