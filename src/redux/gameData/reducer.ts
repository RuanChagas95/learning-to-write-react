import { setWordState, hitLetter, reset } from './actionsTypes'
import { GamePropsType } from '../../types'
const initialState = {
  name: null,
  word: null,
  writedLetters: null
}
type actionType = {
    type: string
    payload: GamePropsType | null
}

const gameData = (state = initialState, action: actionType) => {
    
  switch (action.type) {
  case setWordState:
    return  {
      ...state,
      ...action.payload
    }
  case hitLetter:
    return {
      ...state,
      writedLetters: (state.writedLetters ? state.writedLetters + 1 : 1)
    }
  case reset:
    return {
      ...state,
      writedLetters: null
    }
  default:
    return state
  }
  
}

export default gameData