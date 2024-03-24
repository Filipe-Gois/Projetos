import React from "react";
import {
  BannerEnvioStyle,
  ItenImg,
  ItenParagraph,
  ItenTitle,
  ItensBox,
  TextBox,
} from "./style";
import { Container } from "../Container/style";

const BannerEnvio = () => {
  return (
    <BannerEnvioStyle>
      <Container>
        <Itens
          title="Quis nostrud"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </Container>
    </BannerEnvioStyle>
  );
};

export default BannerEnvio;

const Itens = ({ title = "", text = "", img = "" }) => {
  return (
    <ItensBox>
      <ItenImg src={img} />

      <TextBox>
        <ItenTitle>{title}</ItenTitle>
        <ItenParagraph>{text}</ItenParagraph>
      </TextBox>
    </ItensBox>
  );
};
