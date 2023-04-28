/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import { useState } from 'react'
import { Faq } from './Faq/Faq'
import { questionsAndAnswers } from './questionsAndAnswers'
import * as S from './styled'
// import VideoModal from './VideoModal'

const MetodoProdutividadeBabilonica = () => {
  const externalLink = 'https://pay.kiwify.com.br/KsgR8E7'
  const supportLink =
    'https://wa.me/558499871905?text=Ol%C3%A1%21+Gostaria+de+tirar+algumas+d%C3%BAvidas+sobre+os+treinamentos+da+Babi.'

  // const [openModal, setOpenModal] = useState(false)

  return (
    <S.Container>
      {/* <VideoModal isOpen={openModal} handleClose={() => setOpenModal(false)} /> */}
      <S.DesktopContent>
        <Image src="/desktop-1.png" alt={''} priority fill />

        <S.VideoContainer />

        <Image src="/desktop-2.png" alt={''} priority fill />
        <S.ButtonContainer>
          <S.Button href={externalLink} />
        </S.ButtonContainer>

        <Image src="/desktop-3.png" alt={''} priority fill />
        <S.ButtonContainer>
          <S.Button href={externalLink} />
        </S.ButtonContainer>

        <Image src="/desktop-4.png" alt={''} priority fill />
        <S.ButtonContainer>
          <S.BigButton href={externalLink} />
        </S.ButtonContainer>

        <Image src="/desktop-5.png" alt={''} priority fill />
        <S.ButtonContainer>
          <S.Button href={supportLink} />
        </S.ButtonContainer>
      </S.DesktopContent>

      <S.MobileContent>
        <Image src="/mobile-1.png" alt={''} priority fill />
        <S.VideoContainer />

        <Image src="/mobile-2.png" alt={''} priority fill />
        <S.ButtonContainer>
          <S.Button href={externalLink} />
        </S.ButtonContainer>

        <Image src="/mobile-3.png" alt={''} priority fill />
        <S.ButtonContainer>
          <S.Button href={externalLink} />
        </S.ButtonContainer>

        <Image src="/mobile-4.png" alt={''} priority fill />
        <S.ButtonContainer>
          <S.BigButton href={externalLink} />
        </S.ButtonContainer>

        <Image src="/mobile-5.png" alt={''} priority fill />
        <S.ButtonContainer>
          <S.BigButton href={supportLink} />
        </S.ButtonContainer>
      </S.MobileContent>

      <S.QuestionsAndAnswersContainer>
        <h1>Dúvidas Frequentes</h1>
        {questionsAndAnswers.map((item, index) => (
          <Faq question={item.question} answer={item.answer} key={index} />
        ))}
        {/* <p> Bárbara Dolbeth 2023 © todos os direitos reservados</p> */}
      </S.QuestionsAndAnswersContainer>
    </S.Container>
  )
}

export default MetodoProdutividadeBabilonica
