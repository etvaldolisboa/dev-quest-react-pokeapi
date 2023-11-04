import moon from '../../assets/images/moon.png'
import sun from '../../assets/images/sun.png'

import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from '../../context/theme-context';
import { themes } from '../../theme';

import { ButtonTheme } from '../button-theme'

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <>
      <ButtonTheme
        onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}
      >
          {theme === themes.light ?
          <img src={sun} alt="sun" />:
          <img src={moon} alt="moon" /> 
        }
      </ButtonTheme>
    </>
  )
}