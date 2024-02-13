import styled from "styled-components";
import { NavBarStyle } from "./style";
import { UlStyleHeader } from "../Ul/style";
import { LiStyle } from "../Ul/Li/style";
import { Link } from "react-router-dom";
import { Icon } from "../Icon/style";

export const NavBar = ({ exibeNavBar, setExibeNavBar }) => {
  return (
    <NavBarStyle exibeNavBar={exibeNavBar} setExibeNavBar={setExibeNavBar}>
      <UlStyleHeader>
        <LiStyle>
          <Link>Store</Link>
        </LiStyle>

        <LiStyle>
          <Link>Features</Link>
        </LiStyle>

        <LiStyle>
          <Link>About</Link>
        </LiStyle>

        <LiStyle>
          <Link>Blog</Link>
        </LiStyle>

        <LiStyle>
          <Link>News</Link>
        </LiStyle>
      </UlStyleHeader>
      {/* 
      <Icon />
      <Icon />
      <Icon /> */}
    </NavBarStyle>
  );
};
