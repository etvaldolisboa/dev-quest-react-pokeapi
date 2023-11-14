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
    const Card = styled.div`
    transition: 200ms all;
    border-radius: 2.5rem;
    padding: 1rem;
    flex-direction: column;
    box-shadow: inset 0px 0px 2rem ${theme.hoverCard};
  
    &:hover {
      box-shadow: inset 0px 0px .4rem ${theme.hoverCardActive}, 0 0 1rem ${theme.hover};
      transform: scale(.95);
}


`

  return (
    <Card
      className="card-home flex-center-between "
      style={{
        color: theme.color,
        background: theme.bgCard
      }}
    >
      <img className="img-home" src={image} alt={name} />
      <Title> {name} </Title>
    </Card>
  )
}

export { PokemonCard }