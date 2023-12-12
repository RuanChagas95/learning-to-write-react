import { setWordState, hitLetter, reset } from './actionsTypes'
import { GamePropsType } from '../../utils/types'
const initialState = {
  name: null,
  word: null,
  writedLetters: 0
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
      ...action.payload,
      writedLetters: 0
    }
  case hitLetter:
    return {
      ...state,
      writedLetters: (state.writedLetters ? state.writedLetters + 1 : 1)
    }
  case reset:
    return {
      ...state,
      writedLetters: 0
    }
  default:
    return state
  }
  
}

export default gameData