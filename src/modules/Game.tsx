import Header from '../components/Header'
import GameText from '../components/game/GameText'
import InvisibleInput from '../components/InvisibleInput'
import GameManager from '../hooks/GameManager'
import { useSelector } from 'react-redux'
import { InitialRootReducerType, RootReducerType } from '../utils/types'
import styled from 'styled-components'
import GameImg from '../components/game/GameImg'

export default function Game() {
  const name = useSelector(
    (state: RootReducerType | InitialRootReducerType) => state.gameData.name
  )
  GameManager()

  const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 75px;
  `

  if (name) {
    return (
      <>
        <Header />
        <Center>
          <GameText />
          <GameImg />
        </Center>
        <InvisibleInput />
      </>
    )
  }
}
