import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonCard } from "../pokemon-card";
import { Button } from '../button'
import { ThemeContext } from '../../context/theme-context';
import styled from "styled-components";

export const PokemonList = ({ pokemons, handleClick }) => {
  const { theme } = useContext(ThemeContext)

  const Pokelist = styled.main`
    min-height: 100vh;`

  const List = styled.div`
    max-width: 1280px;
    display: flex;
    flex-wrap: wrap;
    padding: 12vh 0;
    z-index: 0;
    gap: 1.5rem;
    padding: 12vh 2.5vw;`

  return (
    <Pokelist className='flex-center-center-column' style={{ backgroundColor: theme.bgColor }}    >
      <List>
        {pokemons.length > 0 ?
          pokemons.map((pokemon, index) => {
            return (
              <Link key={index} to={`/details/${pokemon.id}`} style={{ flex: '1 0 10vh' }} >
                <PokemonCard
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.sprites.other['home'].front_default}
                />
              </Link>
            )
          })
          : null
        }
      </List>
      <Button onClick={handleClick}>Browse More Pokemons...</Button>
    </Pokelist >
  )
}