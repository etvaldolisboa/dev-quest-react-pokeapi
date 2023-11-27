import styled from "styled-components"
import { useContext } from 'react'
import { ThemeContext } from '../../context/theme-context'

const Footer = () => {
  const { theme } = useContext(ThemeContext)

  const Footer = styled.footer`
    background-color: ${theme.bgColor};
    height: 5vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
      color: ${theme.color};
      font-size: 1.6rem;
    }
     a{
      color: ${theme.hover};
    }
  `

  return (
    <Footer>
        <p>Create by: <a href='https://github.com/etvaldolisboa' target='_blank'>Etvaldo Lisboa</a></p>
    </Footer>
  )
}
export { Footer }