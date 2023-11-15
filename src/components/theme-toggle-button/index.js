import React, { useContext } from "react";
import { ThemeContext } from '../../context/theme-context';
import { ButtonTheme } from '../button-theme'
import { themes } from '../../theme';
import sun from '../../assets/images/sun.png'
import moon from '../../assets/images/moon.png'

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <>
      <ButtonTheme
        onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}
      >
        {theme === themes.light ?
          <img src={sun} alt="sun" /> :
          <img src={moon} alt="moon" />
        }
      </ButtonTheme>
    </>
  )
}