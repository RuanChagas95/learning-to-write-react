import styled from 'styled-components'

export const HeaderStyle = styled.header`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  right: 0;
  top: 0;
  align-items: center;
  height: 44px;
  width: 100%;
  padding: 0 1em;
`

export const MenuItem = styled.button`
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.8);
  font-size: 1em;
  display: inline-block;
  margin: 0.25em;
  padding: 0.25em 1em;
  cursor: pointer;
  border-radius: 4px;
`
