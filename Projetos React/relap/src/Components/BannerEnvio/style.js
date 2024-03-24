import styled from "styled-components";
import Theme from "../../theme";

export const BannerEnvioStyle = styled.section`
  width: 100%;
  height: 650px;
  background-color: ${Theme.colors.lightPink};
  padding: 50px 0;
`;

export const ItensBox = styled.div`
  width: max-content;
  height: 120px;
  display: flex;
  gap: 10px;
`;

export const ItenImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const TextBox = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ItenTitle = styled.h1`
  color: ${Theme.colors.black};
`;

export const ItenParagraph = styled.p`
  color: ${Theme.colors.gray};
`;
