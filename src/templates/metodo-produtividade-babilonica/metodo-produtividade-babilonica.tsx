/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Faq } from './Faq/Faq'
import { questionsAndAnswers } from './questionsAndAnswers'
import * as S from './styled'

const MetodoProdutividadeBabilonica = () => {
  const externalLink = 'https://pay.kiwify.com.br/KsgR8E7'

  return (
    <S.Container>
      <S.DesktopContent>
        <Image src="/desktop-1.png" alt={''} priority fill />

        <S.ButtonContainer>
          <S.FirstButton href={externalLink} />
        </S.ButtonContainer>

        <Image src="/desktop-2.png" alt={''} priority fill />
      </S.DesktopContent>

      <S.MobileContent>
        <Image src="/mobile-1.png" alt={''} priority fill />

        <S.ButtonContainer>
          <S.FirstButton href={externalLink} />
        </S.ButtonContainer>

        <Image src="/mobile-2.png" alt={''} priority fill />
      </S.MobileContent>

      <S.QuestionsAndAnswersContainer>
        <h1>Dúvidas Frequentes</h1>
        {questionsAndAnswers.map((item, index) => (
          <Faq question={item.question} answer={item.answer} key={index} />
        ))}
      </S.QuestionsAndAnswersContainer>
    </S.Container>
  )
}

export default MetodoProdutividadeBabilonica
