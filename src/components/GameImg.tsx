import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootReducerType } from '../utils/types'

const ImgStyle = styled.img`
    width: 50vw;
    height: 50vh;
    `
export default function GameImg() {
  const gameData = useSelector((state: RootReducerType) => state.gameData)
  
  return (
    <>
      {(gameData.img && <ImgStyle src={gameData.img} alt="img" />) || 'What is your name?'}
    </>
  )
}
