import Swal from 'sweetalert2'
import { setName } from '../redux/gameData/actionsTypes'
import { useDispatch } from 'react-redux'

function loadName() {
  const name = localStorage.getItem('name')
  return name
}

function saveName(name: string) {
  localStorage.setItem('name', name)
}

export default function Login() {
  const dispatch = useDispatch()

  const toState = (name: string) => {
    dispatch({
      type: setName,
      payload: { name: name, word: name },
    })
  }

  const name = loadName()
  
  if (name === null) {
    return () =>
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
          saveName(name.toLocaleLowerCase())
          toState(name)
          return value
        },
      })
  }
  return () => toState(name)
}
