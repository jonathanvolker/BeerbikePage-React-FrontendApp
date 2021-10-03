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
justify-content: first baseline;

//background: red;
background-image: url("https://media-cdn.tripadvisor.com/media/photo-s/0e/1f/26/c1/atardecer.jpg");
background-repeat: no-repeat;
background-size: cover;
height: 500px;
width: 90%;
h1{
font-size: 30px ;
font-family: 'Trebuchet MS', sans-serif;
font-weight: bold;
padding: 5rem;
.btn{
border-radius: 4px;
font-family: 'Trebuchet MS', sans-serif;
font-weight: bold;
background: red;
}

}


}
`;


export default function Inicio() {
    return (
        <InicioStyled>
        <div className="container">

              <h1> BeerBike Pipa... </h1>

              <a  href="http://localhost:3000/home"> <button className="btn"> Home</button> </a> 
        </div>
        </InicioStyled>
    )
}
