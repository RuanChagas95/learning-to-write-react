import './App.css'
import { useSelector } from 'react-redux'
import { RootReducerType } from './types'
import StartPage from './pages/StartPage'
import Game from './pages/Game'

function App() {

  const gameData = useSelector(( state : RootReducerType) => state.gameData)
  
  return <>
    {gameData.word ? (
      <Game />
    ): (<StartPage/>)}
  </>
  
}

export default App
