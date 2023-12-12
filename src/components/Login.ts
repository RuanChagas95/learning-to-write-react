import Swal from 'sweetalert2'
import { setWordState } from '../redux/gameData/actionsTypes'
import { Dispatch } from 'react'
import { AnyAction } from '@reduxjs/toolkit'

export default function Login(dispatch : Dispatch<AnyAction>) {
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
}
