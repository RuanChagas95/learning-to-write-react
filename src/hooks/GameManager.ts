import { useDispatch, useSelector } from 'react-redux'
import useGameStatus from './useGameStatus'
import { reset } from '../redux/gameData/actionsTypes'
import { playWinnerAudio } from '../utils/game'
import { RootReducerType } from '../utils/types'
import useLogin from './useLogin'
import { useEffect } from 'react'

function useResetGame() : [() => void, React.DependencyList] {
  const { winner } = useGameStatus()
  const dispatch = useDispatch()
  return ([() => {
    if (winner) {
      const timeout = setTimeout(() => {
        dispatch({ type: reset })
      }, 1600)
      playWinnerAudio()
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [winner]])

}

export default () => {
  const name = useSelector((state: RootReducerType) => state.gameData.name)
  const login = useLogin()

  if (!name) {
    login()
  }
  const [resetGame, dependencesArray] = useResetGame()
  useEffect(() => resetGame(), [dependencesArray, resetGame])
  
}