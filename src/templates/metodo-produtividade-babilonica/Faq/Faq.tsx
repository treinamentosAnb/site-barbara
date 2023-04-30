import { useState } from 'react'
import * as S from '../styled'

const Faq = ({ answer, question }: { answer: string; question: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.FaqContainer onClick={() => setIsOpen(!isOpen)}>
      <S.QuestionContainer isOpen={isOpen}>
        <span>{question}</span>
        <img src="arrow.svg" />
      </S.QuestionContainer>
      <S.AnswerContainer isOpen={isOpen}>
        <span>{answer}</span>
      </S.AnswerContainer>
    </S.FaqContainer>
  )
}

export default Faq
