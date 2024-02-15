import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderIconsBox,
  HeaderInputContainer,
  HeaderStyle,
} from "./style";
import { Title } from "../Title/style";
import Theme from "../../theme";
import { UlStyle } from "../Ul/style";
import { LiStyle } from "../Ul/Li/style";
import { Link } from "react-router-dom";

import { Container } from "../Container/style";
import { NavBar } from "../Nav";
import Carrinho from "../../Assets/Icons/cart.svg";
import Favorite from "../../Assets/Icons/favorite.svg";
import { MenuHamburguer } from "../Button";
import { MenuHamburguerStyle } from "../Button/style";
import Icon from "../Icon/Index";
import { IconBox, MenuHamburguerBox } from "../Icon/style";
import { InputHeaderStyle } from "../Input/style";

const Header = () => {
  const [exibeNavBar, setExibeNavBar] = useState(false);
  return (
    <HeaderStyle>
      <Container>
        <HeaderContainer>
          <Title color={Theme.colors.white}>RELAP</Title>

          <input />

          <NavBar exibeNavBar={exibeNavBar} setExibeNavBar={setExibeNavBar} />

          <HeaderIconsBox>
            <Icon src={Favorite} />
            <Icon src={Carrinho} />

            <MenuHamburguerBox>
              <MenuHamburguerStyle
                exibeNavBar={exibeNavBar}
                onClick={() => {
                  exibeNavBar ? setExibeNavBar(false) : setExibeNavBar(true);
                }}
              />
            </MenuHamburguerBox>
          </HeaderIconsBox>
        </HeaderContainer>

        <HeaderInputContainer>
          <InputHeaderStyle placeholder="Search" />
        </HeaderInputContainer>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
