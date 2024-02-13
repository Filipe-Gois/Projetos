import styled from "styled-components";
import Theme from "../../theme";

export const NavBarStyle = styled.nav`
  background-image: linear-gradient(
    to right,
    ${Theme.colors.violet},
    ${Theme.colors.purple}
  );
  width: 70vw;
  height: calc(100vh - 160px);
  top: 160px;
  right: ${(props) => (props.exibeNavBar ? "0" : "-71vw")};
  display: flex;
  justify-content: center;
  position: fixed;
  opacity: 1;
  z-index: 2;
  transition: left 0.5s ease-out, opacity 0.6s;
  pointer-events: all;
`;
