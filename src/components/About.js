import React from 'react'
import YouTube from 'react-youtube';
import logo from './img/logo.jpg'
import AboutStyled from './styles/AboutStyled'


const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
 const _onReady =(event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
const videoID ="x-Zdik3wrvs&ab_channel=BeerBikePipa";

export default function About() {
   
    return (
        <AboutStyled>
             <div className="logo-container">
                <a href="/home"> <img className="logo"src={logo}/> </a>
            </div>  
            <div className="pag">
            <div className="title">
            <h1>Sobre nosotros...</h1>
            </div>
            <br/>

            <br/>
            <br/>
            <div className="video">
            <YouTube videoId="x-Zdik3wrvs" opts={opts} onReady={_onReady} />
            </div>   
            <br/>
            <div className="playlist-link"><a href="https://www.youtube.com/channel/UCWbmelHHGEbfxOIzxCnjbUQ/playlists">podes acceder a toda la lista de videos </a> </div>
            </div>
        </AboutStyled>
    )
}
