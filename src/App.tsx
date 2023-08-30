import './App.css'
import Header from './components/Header'
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducerType } from './types'
import { setWordState } from './redux/gameData/actionsTypes'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    Swal.fire({
      title: 'What is the name of children?',
      input: 'text',
      inputPlaceholder: 'Name of children',
      backdrop: false,
      preConfirm: (value: string) => {
        if (!value) {
          Swal.showValidationMessage('Ahh... you need to write something')
        }
        const name = value.replace(' ', '')
        dispatch({type: setWordState, payload: {name: value,
          word: name}})
        return value
      }
    })
    
  }, [dispatch])
  const gameData = useSelector(( state : RootReducerType) => state.gameData)
  
  return (
    <>
      <Header/>
      {gameData.writedLetters}
      {'current word: ' + gameData.word }
    </>
  )
}

export default App
