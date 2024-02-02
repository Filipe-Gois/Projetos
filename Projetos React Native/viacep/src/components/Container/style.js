import styled from "styled-components";

export const ContainerBox = styled.View`
 display: flex; 
 flex-direction: ${props => props.fieldDirection}; 
 justify-content: ${props => props.fieldJustifyContent};
 align-items: ${props => props.fieldAlignItems};
 width: 100%;
 height: 100%;
`