import { useDispatch } from 'react-redux'
import useGameStatus from './useGameStatus'
// import { reset } from '../redux/gameData/actionsTypes'
import { playWinnerAudio } from '../utils/game'
import useLogin from './useLogin'
import { useEffect } from 'react'
import { getRandomWord } from '../utils/getData'
import { setWordState } from '../redux/gameData/actionsTypes'

//use in only name mode
// function useResetGame() : () => void {
//   const dispatch = useDispatch()
//   return () => {
//     dispatch({ type: reset })
//   }
// }

function awaitEffects(...callbacks : (() => void)[]) {
  const timeout = setTimeout(() => {
    callbacks.forEach(callback => callback())
  }, 1600)
  return () => {
    clearTimeout(timeout)
  }
}

function useNewWord() {
  const dispatch = useDispatch()
  return () => {
    const word = getRandomWord()
    dispatch({ type: setWordState, payload: word })
  }
}

export default () => {
  const { winner } = useGameStatus()
  const login = useLogin()
  const newWord = useNewWord()

  useEffect(() => {
    login()
  }, [])
  
  useEffect(() => {
    if(winner) {
      playWinnerAudio()
      awaitEffects(
        newWord
      )
    }
  }, [winner])
  
}