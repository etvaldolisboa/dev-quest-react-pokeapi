import React, { useEffect, useState } from "react";
import { getPokemons, getAllPokemons } from '../../services'
import { PokemonList } from "../../components/pokemon-list";
import { pokeQty } from "../../services/variables";


const Home = () => {
  const [pokemons, setPokemons] = useState([])

  const [pageOffset, setPageOffset] = useState(0)

  useEffect(() => {
    const getPokemonsData = async () => {
      const pokemonsData = await getAllPokemons(pokeQty, pageOffset)

      const results = await Promise.all(pokemonsData.map(async (pokemon) => {
        return await getPokemons(pokemon.name)
      }))
      setPokemons([...pokemons, ...results])
    }

    getPokemonsData()
  }, [pageOffset])

  const handleClick = () => {
    setPageOffset(pageOffset + pokeQty)
  }

  return (
    <PokemonList
      pokemons={pokemons}
      handleCick={handleClick} />
  )
}

export { Home }