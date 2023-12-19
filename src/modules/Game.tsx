import Header from '../components/Header'
import GameText from '../components/game/GameText'
import InvisibleInput from '../components/InvisibleInput'
import GameManager from '../hooks/GameManager'
import { useSelector } from 'react-redux'
import { InitialRootReducerType, RootReducerType } from '../utils/types'
import GameImg from '../components/game/GameImg'
import Center from '../styles/game/divs/Center'
import styled from 'styled-components'

const Div = styled(Center)`
  margin-top: 50px;
`
export default function Game() {
  const name = useSelector(
    (state: RootReducerType | InitialRootReducerType) => state.gameData.name
  )
  GameManager()

  if (name) {
    return (
      <>
        <Header />
        <Div>
          <GameText />
          <GameImg />
        </Div>
        <InvisibleInput />
      </>
    )
  }
}
