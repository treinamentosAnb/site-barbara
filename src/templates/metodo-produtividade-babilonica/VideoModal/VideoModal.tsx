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
        <iframe
          // src="https://drive.google.com/file/d/1HlOdtCUuZPtWnImoMaMuijB1vvehhouR/preview"
          src="https://www.youtube.com/embed/3hng-hmSv2Y"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ref={videoRef}
          allowFullScreen
          id="teste"
        ></iframe>{' '}
      </S.Content>
    </S.ModalContainer>
  )
}

export default VideoModal
