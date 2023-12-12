import { useSelector } from 'react-redux'
import { RootReducerType } from '../../utils/types'
import useGameStatus from '../../hooks/useGameStatus'
import { WordDiv, LetterDiv, LetterText, Sun } from './styles'
import GameImg from '../GameImg'

export default function GameText() {
  const gameData = useSelector((state: RootReducerType) => state.gameData)
  const { winner } = useGameStatus()

  return (gameData.word && (
    <WordDiv>
      {
        gameData.word.toLocaleUpperCase().split('').map((letter, index) =>
          <LetterDiv key={index} $winner={winner}>
            <LetterText >
              {(gameData.writedLetters || 0) > index ? letter : ' '}
            </LetterText>
          </LetterDiv>
        )
      }
      <Sun/>
      <GameImg/>
    </WordDiv>))
}