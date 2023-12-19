import { setWordState, hitLetter, reset, setName, error } from './actionsTypes'
import { GamePropsType } from '../../utils/types'
const initialState = {
  name: null,
  word: null,
  writedLetters: 0,
  error: false,
}
type actionType = {
  type: string;
  payload: GamePropsType;
};

const gameData = (state = initialState, action: actionType) => {
  switch (action.type) {
  case setName:
    return {
      ...state,
      name: action.payload.name,
      word: action.payload.name,
    }
  case setWordState:
    return {
      ...state,
      word: action.payload.word,
      img: action.payload.img,
      writedLetters: 0,
    }
  case hitLetter:
    return {
      ...state,
      writedLetters: state.writedLetters ? state.writedLetters + 1 : 1,
      error: false,
    }
  case reset:
    return {
      ...state,
      writedLetters: 0,
    }
  case error:
    return  {
      ...state,
      error: true,
    }
  default:
    return state
  }
}

export default gameData
