import { setWordState } from './actionsTypes'
import { GamePropsType } from '../../types'
const initialState = {
  name: null,
  word: null,
}
type actionType = {
    type: string
    payload: GamePropsType
}

const gameData = (state = initialState, action: actionType) => {
    
  if (action.type === setWordState) {
    return {
      ...state,
      ...action.payload
    }
  }
  return state
}

export default gameData