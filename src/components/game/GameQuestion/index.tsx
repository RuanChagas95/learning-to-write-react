import { useSelector } from 'react-redux'
import { RootReducerType } from '../../../utils/types'

export default function GameQuestion() {
  const { gameData } = useSelector((state: RootReducerType) => state)
  const { question } = gameData

  return question && <h1>{question}</h1>
}
