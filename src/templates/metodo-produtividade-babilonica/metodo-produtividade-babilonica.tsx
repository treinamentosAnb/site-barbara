/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Faq } from './Faq/Faq'
import * as S from './styled'
const MetodoProdutividadeBabilonica = () => {
  const externalLink = 'https://pay.kiwify.com.br/KsgR8E7'

  const questionsAndAnswers = [
    {
      question: 'Possui garantia?',
      answer:
        'Sim. Se em até 15 dias após a compra você não goste da metodologia utilizada no curso, basta entrar em contato com a minha equipe para que possamos realizar o reembolso integral do valor investido.'
    },
    {
      question: 'Posso assistir pelo celular?',
      answer:
        'Sim. Você consegue assisti-lo através do computador, tablete ou celular.'
    },
    {
      question: 'Quais são as formas de pagamento?',
      answer:
        'À vista ou em até 12x no Cartão de crédito, dois cartões, PIX e Boleto bancário.'
    },
    {
      question: 'Como recebo o acesso ao curso?',
      answer:
        'Assim que o pagamento for aprovado você receberá o acesso no seu e-mail utilizado para preencher os dados na hora da compra.'
    },
    {
      question: 'Como consigo tirar minhas dúvidas sobre o curso?',
      answer:
        'Cada aula do treinamento possui um espaço para você fazer comentários e tirar dúvidas comigo. O prazo de resposta estimado é em até 24 horas.'
    },
    {
      question: 'Por quanto tempo consigo acessar o curso?',
      answer:
        'O tempo de acesso ao curso é de 3 anos. Durante esse período você pode assisti-lo quantas vezes quiser.'
    }
  ]

  return (
    <S.Container>
      <S.DesktopContent>
        <img src="desktop-1.png" />

        <S.ButtonContainer>
          <S.FirstButton href={externalLink} />
        </S.ButtonContainer>

        <img src="desktop-2.png" />
        {/*
        <S.ButtonContainer>
          <S.Button href={externalLink} />
        </S.ButtonContainer>
        <img src="desktop-3.png" /> */}
      </S.DesktopContent>

      <S.MobileContent>
        <img src="mobile-1.png" />

        <S.ButtonContainer>
          <S.FirstButton href={externalLink} />
        </S.ButtonContainer>

        <img src="mobile-2.png" />

        {/* <S.ButtonContainer>
          <S.Button href={externalLink} />
        </S.ButtonContainer>
        <img src="mobile-3.png" /> */}
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
