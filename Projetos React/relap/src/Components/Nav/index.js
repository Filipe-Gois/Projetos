import styled from "styled-components";
import { NavBarStyle } from "./style";
import { UlStyleHeader } from "../Ul/style";
import { LiStyle } from "../Ul/Li/style";
import { Link } from "react-router-dom";
import { Icon } from "../Icon/style";

export const NavBar = ({ exibeNavBar, setExibeNavBar }) => {
  return (
    <NavBarStyle exibeNavBar={exibeNavBar}>
      <UlStyleHeader>
        <LiStyle>
          <Link onClick={() => setExibeNavBar(false)} to={"/"}>
            Store
          </Link>
        </LiStyle>

        <LiStyle>
          <Link onClick={() => setExibeNavBar(false)} to={"/"}>
            Features
          </Link>
        </LiStyle>

        <LiStyle>
          <Link onClick={() => setExibeNavBar(false)} to={"/"}>
            About
          </Link>
        </LiStyle>

        <LiStyle>
          <Link onClick={() => setExibeNavBar(false)} to={"/"}>
            Blog
          </Link>
        </LiStyle>

        <LiStyle>
          <Link onClick={() => setExibeNavBar(false)} to={"/"}>
            News
          </Link>
        </LiStyle>
      </UlStyleHeader>
      {/* 
      <Icon />
      <Icon />
      <Icon /> */}
    </NavBarStyle>
  );
};
