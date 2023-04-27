import { useRef } from 'react'
import * as S from './styled'
const VideoModal = ({
  isOpen,
  handleClose
}: {
  isOpen: boolean
  handleClose: () => void
}) => {
  const videoRef: any = useRef(null)

  const onClose = () => {
    videoRef?.current?.pause()
    handleClose()
  }

  return (
    <S.Container isOpen={isOpen}>
      <S.Overlay onClick={onClose} />
      <S.Content>
        <span>Para fechar basta clicar fora do video</span>
        <video autoPlay controls ref={videoRef}>
          <source src="video-lp.mp4" />
        </video>
      </S.Content>
    </S.Container>
  )
}

export default VideoModal
