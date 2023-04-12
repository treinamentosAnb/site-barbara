import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;

  img {
    /* width: 100%;
    height: 100%;
    object-fit: cover; */
    position: static !important;
  }

  /* @media (min-width: 700px) {
    position: relative;
  } */
`

export const DesktopContent = styled.div`
  display: none !important;
  position: relative;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    display: block !important;
  }
`

export const MobileContent = styled.div`
  display: block !important;

  @media (min-width: 768px) {
    display: none !important;
  }
`

export const ButtonContainer = styled.div`
  height: 28px;
  width: 33%;
  display: flex;
  justify-content: center;
  margin: -33px auto 0;
  cursor: pointer;

  @media (min-width: 350px) {
    height: 40px;
    margin-top: -45px;
  }
  @media (min-width: 520px) {
    height: 50px;
    margin-top: -55px;
  }
  @media (min-width: 660px) {
    height: 58px;
    margin-top: -62px;
  }
  @media (min-width: 870px) {
    height: 64px;
    margin-top: -68px;
  }
  @media (min-width: 1000px) {
    height: 80px;
    margin-top: -84px;
  }
  @media (min-width: 1200px) {
    height: 88px;
    margin-top: -93px;
  }
  @media (min-width: 1440px) {
    height: 98px;
    margin-top: -102px;
  }
`

export const Button = styled.a`
  width: 100%;
  height: 59%;
`

export const FirstButton = styled(Button)`
  height: 75%;
`

export const QuestionsAndAnswersContainer = styled.div`
  @import url('https://fonts.cdnfonts.com/css/lufga');
  font-family: 'Lufga', sans-serif;

  width: 100%;
  background-color: #0d0d0d;
  margin-top: -10px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #fff;
  }
`
