import React from 'react'
import logo from "./img/logo.jpg"
import styled from "styled-components"
const HomeStyled = styled.h1`

`;

export default function Home() {
    return (
        <HomeStyled>
        <div>
            <img src={logo}/>
        </div>
        <div>
           BeerBike
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
            carrusel de fotos
        </div>
        <br/>
        <br/>
        <br/>
        <div>
            <a>Instagram</a>
            <a>Youtube</a>
            <a>Wathsapp</a>
        </div>
        </HomeStyled>
    )
}
