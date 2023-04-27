import styled from 'styled-components'

export const Container = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`
export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.8;
  background-color: #000;
`
export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  video {
    height: 70%;
    width: 100%;
  }

  span {
    color: #fff;
    text-align: center;
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
`
