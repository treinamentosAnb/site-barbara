import { useRef } from 'react'
import * as S from '../styled'
const VideoModal = ({
  isOpen,
  handleClose
}: {
  isOpen: boolean
  handleClose: () => void
}) => {
  const videoRef: any = useRef(null)

  const onClose = () => {
    handleClose()
  }

  return (
    <S.ModalContainer isOpen={isOpen}>
      <S.Overlay onClick={onClose} />
      <S.Content>
        <span>Para fechar basta clicar fora do video</span>
        {/* <video autoPlay controls ref={videoRef}>
          <source src="video-lp.mp4" />
        </video> */}
        <iframe
          src="https://drive.google.com/file/d/1HlOdtCUuZPtWnImoMaMuijB1vvehhouR/preview"
          allow="autoplay"
          ref={videoRef}
          id="teste"
        ></iframe>{' '}
      </S.Content>
    </S.ModalContainer>
  )
}

export default VideoModal
