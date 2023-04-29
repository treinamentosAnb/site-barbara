import styled from 'styled-components'

export const Container = styled.div`
  @import url('https://fonts.cdnfonts.com/css/lufga');
  font-family: 'Lufga', sans-serif;

  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;

  img {
    position: static !important;
  }
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
  height: 68px;
  width: 55%;
  display: flex;
  justify-content: center;
  margin: -72px auto 0;
  position: relative;
  cursor: pointer;

  @media (min-width: 520px) {
    height: 68px;
    margin-top: -72px;
  }
  @media (min-width: 660px) {
    height: 94px;
    margin-top: -98px;
  }
  @media (min-width: 768px) {
    width: 35%;
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
  height: 75%;
  top: 12px;
  position: absolute;

  @media (min-width: 690px) {
    top: -12px;
  }
`

export const BigButton = styled(Button)`
  @media (min-width: 460px) {
    top: -20px;
    height: 120%;
  }
  @media (min-width: 690px) {
    top: -43px;
    height: 140%;
  }
`

export const QuestionsAndAnswersContainer = styled.div`
  @import url('https://fonts.cdnfonts.com/css/lufga');
  font-family: 'Lufga', sans-serif;

  width: 100%;
  background-color: #010101;
  margin-top: -10px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  p {
    color: #fff;
  }

  p {
    margin-top: 25px;
    font-size: 12px;
  }
`

export const VideoContainer = styled.div`
  width: 90%;
  height: 195px;
  position: relative;
  margin: -200px auto 0;
  cursor: pointer;

  @media (min-width: 425px) {
    height: 230px;
    margin-top: -234px;
  }

  @media (min-width: 520px) {
    height: 280px;
    margin-top: -284px;
  }

  @media (min-width: 640px) {
    height: 340px;
    margin-top: -344px;
  }

  @media (min-width: 768px) {
    width: 70%;
    height: 402px;
    margin-top: -406px;
  }

  @media (min-width: 1270px) {
    height: 446px;
    margin-top: -450px;
  }
`

export const Container = styled.div`
  width: 70%;
  margin: 10px;
  background-color: #010101;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;

  span {
    color: #fff;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`

export const QuestionContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 16px;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  && img {
    margin-left: 10px;
    transition: all ease-in 0.3s;
    transform: ${(props) =>
      props.isOpen ? 'rotate(90deg)' : 'rotate(270deg)'};
  }
`

export const AnswerContainer = styled.div<{ isOpen: boolean }>`
  transition: all ease-out 0.4s, opacity ease-out 0.2s, height ease-out 0.3s;

  span {
    font-size: 12px;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  ${(props) =>
    props.isOpen
      ? `
      visibility: visible;
      opacity: 1;
      margin-top: 10px;
      height: 100px;

      @media (min-width: 768px) {
        height:80px;
      }

      `
      : `
      visibility: hidden;
      opacity: 0;
      margin-top:0;
      height: 0;
`}
`
