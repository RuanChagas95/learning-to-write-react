import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootReducerType } from '../../../utils/types'

const ImgStyle = styled.img`
  max-height: calc(100vh - 300px);
  max-width: 80vw;
`

export default function GameImg() {
  const gameData = useSelector((state: RootReducerType) => state.gameData)

  return (
    (gameData.img && <ImgStyle src={gameData.img} />) || 'What is your name?'
  )
}
