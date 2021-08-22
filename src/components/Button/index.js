import styled from "styled-components"

export const Button = styled.button`
width:60%;
padding:10px;
background-color: red;
border-radius: 8px;
transition-property: scale;
transition-duration: 0.8s;
cursor:pointer;

*{
color:white;
text-decoration:none}

:hover{
    scale:1.15;
}`