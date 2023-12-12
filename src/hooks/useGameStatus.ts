import { useSelector } from 'react-redux'
import { InitialRootReducerType, RootReducerType } from '../utils/types'
import { useMemo } from 'react'

function VerifyWinner() : boolean {
  const gameData = useSelector((state: RootReducerType | InitialRootReducerType) => state.gameData)
  const winner = useMemo(() => gameData.word?.length === gameData.writedLetters, [gameData.word?.length, gameData.writedLetters])
  return winner
}

export default () => ({
  winner: VerifyWinner()
})