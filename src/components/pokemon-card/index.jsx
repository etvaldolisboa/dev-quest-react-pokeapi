import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import styled from "styled-components";
import './index.css'

const PokemonCard = ({ name, image }) => {
  const { theme } = useContext(ThemeContext)

  const Title = styled.h2`
        font-size: clamp(1rem, 1.2rem + 5vw, 2rem);
        font-family: 'Pokemon Solid';
        letter-spacing: .3rem;
        font-weight: 300;
        
        &:hover{
          -webkit-text-stroke: .1rem var(--black);
          color: ${theme.hover};
        }
  `
  return (
    <div
      className="card-home flex-center-between "
      style={{
        color: theme.color,
        background: theme.bgCard
      }}
    >
      <img className="img-home" src={image} alt={name} />
      <Title> {name} </Title>
    </div>
  )
}

export { PokemonCard }