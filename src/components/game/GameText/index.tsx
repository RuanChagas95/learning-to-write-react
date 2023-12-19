import { useSelector } from 'react-redux'
import { RootReducerType } from '../../../utils/types'
import useGameStatus from '../../../hooks/useGameStatus'
import { WordDiv, Sun } from './styles'
import { GameLetterDiv } from '../../../styles/game/divs/LetterDiv'
import {Label, TipLabel, InvisibleLabel} from '../../../styles/game/labels/LetterLabel'

const getLabelStyle = (writedLetters = 0, index: number, error: boolean) => {
  if (error && writedLetters === index) {
    return TipLabel
  }
  if (writedLetters <= index) {
    return InvisibleLabel
  }
  return Label
}

export default function GameText() {
  const { word, writedLetters, error } = useSelector(
    (state: RootReducerType) => state.gameData
  )
  const { winner } = useGameStatus()

  return (
    word && (
      <WordDiv>
        {word
          .toLocaleUpperCase()
          .split('')
          .map((letter, index) => {
            const Div = getLabelStyle(writedLetters, index, error)
            return (
              <GameLetterDiv key={index} $winner={winner}>
                <Div>
                  {letter}
                </Div>
              </GameLetterDiv>
            )
          })}
        <Sun />
      </WordDiv>
    )
  )
}
