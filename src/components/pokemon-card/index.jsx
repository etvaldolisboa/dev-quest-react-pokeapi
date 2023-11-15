import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import styled from "styled-components";

const PokemonCard = ({ name, image }) => {
  const { theme } = useContext(ThemeContext)

  const Title = styled.h2`
        font-size: var(--fs-normal);
        font-weight: var(--fw-normal);
        font-family: 'Pokemon Solid';
        letter-spacing: .3rem;
        
        &:hover{
          -webkit-text-stroke: .1rem var(--black);
          color: ${theme.hover};
        }`

  const Card = styled.div`
        border-radius: 2.5rem;
        padding: 1rem;
        flex-direction: column;
        box-shadow: inset 0px 0px 2rem ${theme.hoverCard};
  
        &:hover {
          box-shadow: inset 0px 0px .4rem ${theme.hoverCardActive}, 0 0 1rem ${theme.hover};
          transform: scale(.95);
        }`

  const Img = styled.img`
        width: 12.5rem;
        aspect-ratio: 1;
        filter:drop-shadow(.5rem .5rem .5rem ${theme.hoverCardActive}) contrast(118%) saturate(80%);`

  return (
    <Card
      className="flex-center-between transition-ease"
      style={{
        color: theme.color,
        background: theme.bgCard
      }}
    >
      <Img src={image} alt={name} />
      <Title> {name} </Title>
    </Card>
  )
}

export { PokemonCard }