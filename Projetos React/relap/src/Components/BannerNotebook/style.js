import styled from "styled-components";
import Theme from "../../theme";

export const BannerNotebookStyle = styled.section`
  width: 100%;
  height: 600px;
  background-image: ${Theme.linearGradient.violetToPurple};
  /* background-color: red; */
  position: relative;

  @media screen and (min-width: 992px) {
    /* height: 700px; */
  }
`;

export const ContainerBannerNotebook = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    flex-direction: row-reverse;
    /* justify-content:space-between; */
    align-items: center;
  }
`;

export const Note = styled.div`
  max-width: 650px;
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  z-index: 2;
  position: absolute;
  bottom: -60px;
  left: 0;

  @media screen and (min-width: 520px) {
    max-height: 350px;
    height: 100%;
  }
  @media screen and (min-width: 768px) {
    max-height: 350px;
  }
  @media screen and (min-width: 992px) {
    width: 80%;
    max-width: 1000px;
    height: 100%;
    max-height: 800px;
    bottom: -110px;
    left: 0px;
  }
  @media screen and (min-width: 1500px) {
    width: 100%;
    bottom: -100px;
  }
`;

export const TextBox = styled(Note)`
  height: 50%;
  max-width: none;
  position: static;
  margin-top: 20px;

  @media screen and (min-width: 992px) {
    width: 40%;
    max-width: 350px;
    margin: 0;
    bottom: auto;
    position: absolute;
    left: 47vw;
  }

  @media screen and (min-width: 1500px) {
  }
`;
