import { RootReducerType } from '../utils/types'
import { hitLetter, error } from '../redux/gameData/actionsTypes'
import { playHitAudio } from '../utils/game'
import { useSelector, useDispatch } from 'react-redux'

export function useSendNewLetter() {
  const dispatch = useDispatch()
  const gameData = useSelector((state: RootReducerType) => state.gameData)
  return (letter: string) => {
    const { word, writedLetters } = gameData
    const match = word[writedLetters || 0] === letter.toLowerCase()
    if (match) {
      dispatch({ type: hitLetter })
      playHitAudio()
    } else {
      dispatch ({ type: error })
    }
  }
}