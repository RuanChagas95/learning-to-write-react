import styled from 'styled-components'

export const WordDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const Sun = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: -50px;
    right: -100px;
    z-index: -1;
    height: 200px;
    width: 200px;
    animation: none;
    background: rgb(243, 255, 0);
    background: radial-gradient(
      circle,
      rgba(243, 255, 0, 1) 0%,
      rgba(255, 237, 0, 1) 38%,
      rgba(185, 225, 237, 1) 62%
    );
  }
`
