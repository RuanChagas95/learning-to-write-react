import { useEffect, useRef } from 'react'
import { useSendNewLetter } from '../../hooks/InteractGame'
import { Input, Label } from './styles'

export default function InvisibleInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  const sendNewLetter = useSendNewLetter()
  const forceFocus = () => {
    inputRef.current?.focus()
  }
  
  const handleChange = () => {
    if (!inputRef.current) {
      return
    }

    sendNewLetter(inputRef.current.value)
    inputRef.current.value = ''
  }
  useEffect(() => {
    forceFocus()
  }, [])
  return (
    <>
      <Label htmlFor="invisible">invisible label</Label>
      <Input
        autoComplete="off"
        id="invisible"
        name="invisible"
        type="text"
        onBlur={forceFocus}
        ref={inputRef}
        onChange={handleChange}
      />
    </>
  )
}
