import { useState } from 'react'
import * as S from './styled'

export const Faq = ({ answer, question }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container onClick={() => setIsOpen(!isOpen)}>
      <S.QuestionContainer isOpen={isOpen}>
        <span>{question}</span>
        <img src="arrow.svg" />
      </S.QuestionContainer>
      <S.AnswerContainer isOpen={isOpen}>
        <span>{answer}</span>
      </S.AnswerContainer>
    </S.Container>
  )
}
