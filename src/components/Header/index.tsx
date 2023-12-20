import GearIcon from '../../assets/GearIcon'
import { useState } from 'react'
import { HeaderStyle, MenuItem } from './styles'

const resetGame = () => {
  localStorage.clear()
  window.location.reload()
}

export default function Header() {
  const [configIsVisible, setConfigIsVisible] = useState(false)

  return (
    <HeaderStyle>
      {configIsVisible && (
        <MenuItem onClick={resetGame}>Reset Game</MenuItem>
      )}
      <GearIcon
        width="32"
        height="32"
        onClick={() => setConfigIsVisible((prevState) => !prevState)}
        color="#ffffff"
        cursor='pointer'
      />
    </HeaderStyle>
  )
}
