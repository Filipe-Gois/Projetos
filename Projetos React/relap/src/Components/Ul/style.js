import styled from "styled-components";

export const UlStyleHeader = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 992px) {
    width: 100%;
    height: 100%;
    flex-direction: row;
    gap: 30px;
  }
`;
