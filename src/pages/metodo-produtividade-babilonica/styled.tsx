import styled from 'styled-components'


  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media(min-width: 700px){
    position: relative;
  } 
    `
  
  export const DesktopContent = styled.div`
  display:none;

  @media(min-width: 768px){
    display: block;
  } 
  `
  
  export const MobileContent = styled.div`
  display:block;

  @media(min-width: 768px){
    display: none;
  } 
  `
  
  export const ButtonContainer = styled.div`
  
      height: 40px;
      width: 33%;
      display: flex;
      justify-content: center;
      margin: -46px auto 0;
      cursor: pointer;
    
    

      @media(min-width: 350px){
        height: 54px;
        margin-top: -58px;   
        
  } 
      @media(min-width: 520px){
        height: 72px;
        margin-top: -78px;     
        
  } 
      @media(min-width: 660px){
        height: 88px;
        margin-top: -92px;     
        
  } 
      @media(min-width: 870px){
        height: 100px;
        margin-top: -105px;      
        
  } 
      @media(min-width: 1000px){
        height: 120px;
        margin-top: -125px;    
        
  } 
      @media(min-width: 1200px){
        height: 140px;
        margin-top: -144px;       
        
  } 
      @media(min-width: 1440px){
        height: 150px;
        margin-top: -155px;    
        
  } 

    `

    export const Button = styled.a`
        width: 100%;
        height: 59%;     
     `  

    export const FirstButton = styled(Button)`
        height: 75%;
    `  
  
