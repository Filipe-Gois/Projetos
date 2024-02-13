import styled from "styled-components";
import Theme from "../../theme";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;

  background-color: ${Theme.colors.purple};

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
      to right,
      ${Theme.colors.violet},
      ${Theme.colors.purple}
    );
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderInputContainer = styled(HeaderContainer)`
  justify-content: center;
`;

export const HeaderIconsBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 15px;
`;
