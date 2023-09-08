import styled from 'styled-components'

const ImgStyle = styled.img`
    width: 50vw;
    height: 50vh;
    `
export default function GameImg() {
  return (
    <ImgStyle src='https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg' />
  )
}
