import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootReducerType } from '../types'
import { hitLetter } from '../redux/gameData/actionsTypes'
const Input = styled.input`
    border: none;
    outline: none;
    box-shadow: none;
    background: none;
    width: 0;
    height: 0; 
`
const Label = styled.label`
display: none;
`
export default function InvisibleInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  const forceFocus = () => {inputRef.current?.focus()}
  const gameData = useSelector((state: RootReducerType) => state.gameData)
  const { word, writedLetters } = gameData
  const dispatch = useDispatch()

  const handleChange = () => {
    if (!inputRef.current) {
      return
    }
    const value = inputRef.current.value.toLocaleLowerCase()
    const match = word[writedLetters || 0] === value
    if (match) {
      dispatch({type: hitLetter})
    }
    inputRef.current.value = ''
  }
  useEffect(() => {
    forceFocus()
  }, [])
  return (<>
    <Label htmlFor="invisible">invisible label
    </Label>
    <Input id='invisible' name='invisible' type='text' onBlur={forceFocus} ref={inputRef} onChange={handleChange}/>
  </>
  )
}
