/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as S from './styled'

const MetodoProdutividadeBabilonica = () => {

  const externalLink = 'https://pay.kiwify.com.br/KsgR8E7' 

  return (
    <S.Container>
      <S.DesktopContent>

      <img src='desktop-1.png'/> 

      <S.ButtonContainer>
        <S.FirstButton href={externalLink}/>
      </S.ButtonContainer>

        <img src='desktop-2.png'/> 

        <S.ButtonContainer>
        <S.Button href={externalLink}/>
      </S.ButtonContainer>
        <img src='desktop-3.png'/> 
      </S.DesktopContent>


      <S.MobileContent>

      <img src='mobile-1.png'/> 

      <S.ButtonContainer>
        <S.FirstButton href={externalLink}/>
      </S.ButtonContainer>

        <img src='mobile-2.png'/> 

        <S.ButtonContainer>
        <S.Button href={externalLink}/>
      </S.ButtonContainer>
        <img src='mobile-3.png'/> 
      </S.MobileContent>
    </S.Container>
  )
}

export default MetodoProdutividadeBabilonica