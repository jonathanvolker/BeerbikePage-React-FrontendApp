import styled from "styled-components"

const AboutStyled = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
background: #FAFEE7;
.pag{
    display: flex;
    flex-direction:column;
    //justify-content: center;
    align-items: center;
    height: 1000px;
    width: 90%;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    border-radius: 5px;
}

.logo{
    max-width: 90px;
    max-height: 90px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    border-radius: 50%;
}
.logo-container{
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items: center;
  padding: 0.5rem;
  border-right: 1rem;
}

`;

export default AboutStyled;