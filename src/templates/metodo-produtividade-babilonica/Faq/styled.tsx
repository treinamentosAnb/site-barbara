import styled from 'styled-components'

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
