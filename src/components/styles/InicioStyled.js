import styled from "styled-components"

const InicioStyled = styled.h1`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
background: #FAFEE7;
.container{
display:flex;
flex-direction: column;
align-items: center;
justify-content: first baseline;
border-radius: 6px;

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
}
.btn{
    max-width: 90px;
    max-height: 90px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    border-radius: 50%;
}


}
`;
export default InicioStyled;