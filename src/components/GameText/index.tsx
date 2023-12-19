import { useSelector } from 'react-redux'
import { RootReducerType } from '../../utils/types'
import useGameStatus from '../../hooks/useGameStatus'
import { WordDiv, LetterDiv, LetterText, Sun } from './styles'
import GameImg from './GameImg'
import styled from 'styled-components'

export default function GameText() {
  const gameData = useSelector((state: RootReducerType) => state.gameData)
  const { winner } = useGameStatus()

  const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 75px;
  `

  return (
    gameData.word && (
      <Center>
        <WordDiv>
          {gameData.word
            .toLocaleUpperCase()
            .split('')
            .map((letter, index) => (
              <LetterDiv key={index} $winner={winner}>
                <LetterText>
                  {(gameData.writedLetters || 0) > index ? letter : ' '}
                </LetterText>
              </LetterDiv>
            ))}
          <Sun />
        </WordDiv>
        <GameImg />
      </Center>
    )
  )
}
