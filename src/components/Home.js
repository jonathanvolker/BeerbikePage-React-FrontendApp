import React from 'react'
import logo from "./img/logo.jpg"
import { Carousel } from 'react-carousel-minimal';
import insta from "./img/insta.png"
import youtube from "./img/youtube.png"
import whatsapp from "./img/whatsapp.png"
import  data from './data.js';
import HomeStyled from './styles/HomeStyled'





export default function Home() {
    return (
        <HomeStyled>
        <div className="logo-container">
        <h1>
            BEERBIKE
            </h1>
            <img className="logo" src={logo}/>
        </div>
        <div className="pag">
          <p>Hola a todos, Bienvenidos!!</p>
          <p>Somos Juan y Lucia, estamos muy contentos de emprender nuestro primer proyecto en brasil y<br/>lo queremos compartir con ustedes! </p>

          
            <br/>
            <div style={{ textAlign: "center" }}>
             
                <Carousel
                    data={data.data}
                    time={7000}
                    width="550px"
                    height="400px"
                    captionStyle={data.captionStyle}
                    radius="10px"
                    slideNumber={true}
                    slideNumberStyle={data.slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={true}
                    thumbnailWidth="100px"
                    style={{
                    textAlign: "center",
                    maxWidth: "850px",
                    maxHeight: "500px",
                    margin: "40px auto",
                    }}
                />
                
            </div>
            <br/>
            <br/>
            <br/>
            <div className="links-container">
                <a href="https://www.instagram.com/beerbikepipa/?hl=es"><img className="link" src={insta}/></a>
                <a href="https://www.youtube.com/channel/UCWbmelHHGEbfxOIzxCnjbUQ"><img className="link" src={youtube}/></a>
                <a href=""><img className="link" src={whatsapp}/></a>
            </div>
            <br/>
            <br/>
            <div className="about-container">
                <a href="/about">Sobre nosotros...</a>    

            </div>
        </div>
        </HomeStyled>
    )
}
