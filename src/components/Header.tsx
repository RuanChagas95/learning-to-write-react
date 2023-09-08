import GearIcon from '../assets/GearIcon'
import { useState } from 'react'
import { getCategoriesKeys } from '../utils/getData'
import styled from 'styled-components'

const CategoryStyle =  styled.li`
        display: inline-block;
        margin: 0.25em;
        padding: 0.25em 1em;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        color: #ffffff;
    `
const CategoriesStyle = styled.ul`

`
const HeaderStyle = styled.header`
  position: fixed;
  display: flex;
  right: 10px;
  top: 10px;
  align-items: center;
  height: 44px;
`
export default function Header() {
  const [configIsVisible, setConfigIsVisible] = useState(false)

  return (
    <HeaderStyle>
      {configIsVisible && (
        <CategoriesStyle>
          {
            getCategoriesKeys()
              .map((category) => <CategoryStyle key={category}>{category}</CategoryStyle>)
          }
        </CategoriesStyle>
      )}
      <GearIcon width="32" height="32" onClick={() => setConfigIsVisible((prevState) => !prevState)} color='#ffffff6f' />
    </HeaderStyle>
  )
}
