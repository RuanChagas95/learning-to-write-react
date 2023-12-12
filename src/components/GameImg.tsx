import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootReducerType } from '../utils/types'

const ImgStyle = styled.img`
    max-width: 70vw;
    max-height: 70vh;
    `
const Div = styled.div`
    position: absolute;
    top: 150px;
    width: 100vw;
    `
export default function GameImg() {
  const gameData = useSelector((state: RootReducerType) => state.gameData)
  
  return (
    <Div>
      {(gameData.img && <ImgStyle src={gameData.img} alt="img" />) || 'What is your name?'}
    </Div>
  )
}
