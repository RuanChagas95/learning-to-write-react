import GearIcon from '../../assets/GearIcon'
import { useState } from 'react'
import { getCategoriesKeys } from '../../utils/getData'
import { HeaderStyle, CategoriesStyle, CategoryStyle } from './styles'

export default function Header() {
  const [configIsVisible, setConfigIsVisible] = useState(false)

  return (
    <HeaderStyle>
      {configIsVisible && (
        <CategoriesStyle>
          {getCategoriesKeys().map((category) => (
            <CategoryStyle key={category}>{category}</CategoryStyle>
          ))}
        </CategoriesStyle>
      )}
      <GearIcon
        width="32"
        height="32"
        onClick={() => setConfigIsVisible((prevState) => !prevState)}
        color="#ffffff6f"
      />
    </HeaderStyle>
  )
}
