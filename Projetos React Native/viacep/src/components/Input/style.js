import styled, { css } from "styled-components"

export const InputText = styled.TextInput`
border: 2px solid #a1a1a1;
text-align: left;
padding: 20px;
border-radius: 10px;
margin: 10px 0 0 0;
width: 100%;
font-size: 18px;
font-family: 'Roboto_500Medium';

${props => props.editTable && css`
background-color: #f6f6f6;




`}
`