import styled from "styled-components";
import Theme from "../../theme";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 20;
  background-image: ${Theme.linearGradient.violetToPurple};
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const HeaderInputContainer = styled(HeaderContainer)`
  justify-content: center;
`;

export const HeaderIconsBox = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 15px;
`;
