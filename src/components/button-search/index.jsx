import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import './index.css'

const Button = (props) => {
  const { theme } = useContext(ThemeContext)

  return (
    <button
      className="button-mais transition"
      type="button"
      {...props}
      style={{ color: theme.bgPrimary }}
    >
      carregar mais pokemons...
    </button>
  )
}

export { Button }