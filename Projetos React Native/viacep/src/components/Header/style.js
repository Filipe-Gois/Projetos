import { Platform } from "react-native"
import styled from "styled-components"
import { Theme } from "../../../theme"

export const HeaderContainer = styled.View`
background-color: #fecc2b;
height: 20%;
justify-content: center;
align-items: center;
border-radius: 0 0 15px 15px;
box-shadow: 0 0 15px #000;
font-family: 'Roboto_500Medium';
font-size: 24px;


/* box-shadow para android */
shadow-color: 'black';
shadow-opacity: 0.25;
shadow-offset: 20px 20px;
shadow-radius: 10px;
elevation: 25;
`



export const HeaderContent = styled.SafeAreaView`
margin-top: 20px;


    `



export const TextHeader = styled.Text`
font-size: 24px;
font-family: 'Roboto_500Medium';
color: #333e33;

`


