import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { PokemonCard } from "../pokemon-card";
import { Button } from '../button'
import './index.css'
import { ThemeContext } from '../../context/theme-context';

const PokemonList = ({ pokemons, handleCick }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className='container-list flex-center-between '
      style={{ backgroundColor: theme.bgColor }}
    >
      < div className="list">
        {pokemons.length > 0 ?
          pokemons.map((pokemon, index) => {
            return (
              <Link key={index} to={`/details/${pokemon.id}`} >
                <PokemonCard
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.sprites.other["dream_world"].front_default}
                />
              </Link>
            )
          })
          : null
        }
      </div>
      <Button onClick={handleCick}>Browse More Pokemons... </Button>
    </div >
  )
}

export { PokemonList }