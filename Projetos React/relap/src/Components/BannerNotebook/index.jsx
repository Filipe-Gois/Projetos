import React, { useState } from "react";
import {
  BannerNotebookStyle,
  ContainerBannerNotebook,
  Note,
  TextBox,
} from "./style";
import { Container } from "../Container/style";
import { Button } from "../Button/style";
import { Title } from "../Title/style";
import Theme from "../../theme";
import { SubTitle } from "../SubTitle/style";
import { NotebookImage } from "../Image/style";
import Notebook from "../../Assets/Images/notebook.png";
import Icon from "../Icon/Index";
import LeftArrow from "../../Assets/Icons/left_arrow.svg";
import RightArrow from "../../Assets/Icons/right_arrow.svg";
import { IconBoxArrow, IconStyle } from "../Icon/style";
import { Slider, Slide } from "../Slider/index";

const BannerNotebook = () => {
  const [settingsSlides, setSettingsSlides] = useState({
    slidesPerView: 1,

    navigation: true,
  });

  return (
    <BannerNotebookStyle>
      <Container>
        <Slider settings={settingsSlides}>
          <Slide>
            <ContainerBannerNotebook>
              <TextBox>
                <Title color={Theme.colors.white}>minim veniam</Title>
                <SubTitle color={Theme.colors.white}>
                  ut labore et dolore
                </SubTitle>

                <Button>Buy now</Button>
              </TextBox>

              <Note>
                <NotebookImage src={Notebook} alt="Imagem de notebook." />
              </Note>
            </ContainerBannerNotebook>
          </Slide>
          <Slide>
            <ContainerBannerNotebook>
              <TextBox>
                <Title color={Theme.colors.white}>minim veniam</Title>
                <SubTitle color={Theme.colors.white}>
                  ut labore et dolore
                </SubTitle>

                <Button>Buy now</Button>
              </TextBox>

              <Note>
                <NotebookImage src={Notebook} alt="Imagem de notebook." />
              </Note>
            </ContainerBannerNotebook>
          </Slide>
        </Slider>
      </Container>
    </BannerNotebookStyle>
  );
};

export default BannerNotebook;
