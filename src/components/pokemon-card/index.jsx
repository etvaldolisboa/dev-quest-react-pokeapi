import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import './index.css'

const PokemonCard = ({ name, image }) => {

  const { theme } = useContext(ThemeContext)

  return (
    <li
      className="card-home flex-center-between transition"
      style={{
        color: theme.color,
        background: theme.bgCard
      }}
    >
      <img className="img-home" src={image} alt={name} />
      <h2 className="name-home transition">{name}</h2>
    </li>
  )
}

export { PokemonCard }