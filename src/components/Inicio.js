import React from 'react'
import playa from "./img/fondo-playa.png"
import styled from "styled-components"
const InicioStyled = styled.h1`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
.container{
display:flex;
flex-direction: column;
align-items: center;
background-image: url("https://media-cdn.tripadvisor.com/media/photo-s/0e/1f/26/c1/atardecer.jpg");
background-repeat: no-repeat;
height: 800px;
width: 800px;
}
`;


export default function Inicio() {
    return (
        <InicioStyled>
        <div className="container">
              soy inicio

              <button href="/home">Home</button>
        </div>
        </InicioStyled>
    )
}
