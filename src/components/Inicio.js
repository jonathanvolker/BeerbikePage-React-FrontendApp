import React from 'react'
import InicioStyled from './styles/InicioStyled'
import logo from "./img/logo.jpg"



export default function Inicio() {
    return (
        <InicioStyled>
        <div className="container">

              <h1> BeerBike Pipa... </h1>

              <a  href="http://localhost:3000/home" > <img className="btn" src={logo}/></a> 
        </div>
        </InicioStyled>
    )
}
