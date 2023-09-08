import { useSelector } from 'react-redux'
import { RootReducerType } from '../types'
import styled from 'styled-components'

const WordDiv = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
  height: fit-content;
  &::after {
  content: '';
  position: absolute;
  top: -50px;
  right: -100px;
  z-index: -1;
  height: 200px;
  width: 200px;
  background: rgb(243,255,0);
background: radial-gradient(circle, rgba(243,255,0,1) 0%, rgba(255,237,0,1) 38%, rgba(185,225,237,1) 62%);  
}
`

const LetterDiv = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 5px;
  background-color: aliceblue;
  box-shadow: 29px 28px 24px 0px rgba(0,0,0,0.1);
  color: #000;
`

const LetterText = styled.label`
  font-size: 36px;
  color: #494949;  
  align-self: center;
  `

export default function GameText() {
  const gameData = useSelector((state: RootReducerType) => state.gameData)
  
  return (gameData.word && (
    <WordDiv>
      {
        gameData.word.toLocaleUpperCase().split('').map((letter, index) =>
          <LetterDiv key={index}>
            <LetterText>
              {(gameData.writedLetters || 0) > index ? letter : ' '}
            </LetterText>
          </LetterDiv>
        )
      }
    </WordDiv>))
}