import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const WordDiv = styled.div`
display: flex;
width: 100vw;
height: 200px;
justify-content: center;
padding: 50px 0 0 0;
position: relative;
`

export const LetterDiv = styled.div<{$winner: boolean}>`
display: inline-flex;
justify-content: center;
width: 50px;
max-height: 50px;
max-width: 50px;
margin: 5px;
border-radius: 5px;
background-color: aliceblue;
box-shadow: inset -6px -6px 10px -3px rgba(0,0,0,0.1);
animation: ${props => props.$winner ? fadeIn : 'none'} 800ms infinite;
`

export const LetterText = styled.label`
font-size: 36px;
color: #494949;  
align-self: center;
`

export const Sun = styled.div`
position: relative;
&::after { 
  content: '';
  position: absolute;
  top: -50px;
  right: -100px;
  z-index: -1;
  height: 200px;
  width: 200px;
  animation: none;
  background: rgb(243,255,0);
  background: radial-gradient(circle, rgba(243,255,0,1) 0%, rgba(255,237,0,1) 38%, rgba(185,225,237,1) 62%);
  }
`