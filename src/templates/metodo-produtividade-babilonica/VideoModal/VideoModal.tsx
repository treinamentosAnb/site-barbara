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
    const el: any = document.getElementsByClassName(
      'ytp-play-button ytp-button'
    )
    console.log(el)
    // el[0]?.click();
    handleClose()
  }

  return (
    <S.ModalContainer isOpen={isOpen}>
      <S.Overlay onClick={onClose} />
      <S.Content>
        <span>Para fechar basta clicar fora do video</span>
        <iframe
          src="https://www.youtube.com/embed/2JycLIua72g"
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
