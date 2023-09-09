import { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { setWordState } from '../redux/gameData/actionsTypes'

export default function StartPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    Swal.fire({
      title: 'What is the child\'s name?',
      input: 'text',
      inputPlaceholder: 'Name of children',
      backdrop: false,
      preConfirm: (value: string) => {
        if (!value) {
          Swal.showValidationMessage('Ahh... you need to write something')
        }
        const name = value.replace(' ', '')
        dispatch({type: setWordState, payload: {name: value,
          word: name.toLocaleLowerCase()}})
        return value
      }
    })
      
  }, [dispatch])

  return (
    <></>
  )
}
