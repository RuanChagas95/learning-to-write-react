import styled from 'styled-components'
import { fadeIn } from '../animations'

export const LetterDiv = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 50px;
  height: 50px;
  max-width: 50px;
  margin: 5px;
  border-radius: 5px;
  background-color: aliceblue;
  box-shadow: inset -6px -6px 10px -3px rgba(0, 0, 0, 0.1);
`
export const GameLetterDiv = styled(LetterDiv)<{ $winner: boolean }>`
  animation: ${(props) => (props.$winner ? fadeIn : 'none')} 800ms infinite;
`
