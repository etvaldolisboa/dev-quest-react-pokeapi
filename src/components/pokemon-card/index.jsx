import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import './index.css'
import styled from "styled-components";

const PokemonCard = ({ name, image }) => {
  const { theme } = useContext(ThemeContext)

  const Title = styled.h2`
        font-size: clamp(1rem, 1.2rem + 5vw, 2rem);
        font-family: 'Pokemon Solid';
        letter-spacing: .3rem;
        font-weight: 300;
        -webkit-text-stroke: .1rem var(--black);
  
        &:hover{
          color: ${theme.hover};
        }
  `
  return (
    <li
      className="card-home flex-center-between transition"
      style={{
        color: theme.color,
        background: theme.bgCard
      }}
    >
      <img className="img-home" src={image} alt={name} />
      <Title className="transition"> {name} </Title>
    </li>
  )
}

export { PokemonCard }