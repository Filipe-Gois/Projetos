import React from "react";
import { MainContent } from "../Components/MainContent/style";
import Header from "../Components/Header";
import BannerNotebook from "../Components/BannerNotebook";
import BannerEnvio from "../Components/BannerEnvio";

const HomePage = () => {
  return (
    <MainContent>
      <BannerNotebook />
      <BannerEnvio />
    </MainContent>
  );
};

export default HomePage;
