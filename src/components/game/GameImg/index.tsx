import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootReducerType } from '../../../utils/types'

const ImgStyle = styled.img`
  max-height: calc(100vh - 300px);
  max-width: 80vw;
`

export default function GameImg() {
  const { img } = useSelector((state: RootReducerType) => state.gameData)

  return img && <ImgStyle src={img} />
}
