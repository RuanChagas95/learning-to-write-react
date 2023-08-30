import { combineReducers } from '@reduxjs/toolkit'
import gameData from './gameData/reducer'

const rootReducer = combineReducers({gameData})
export default rootReducer