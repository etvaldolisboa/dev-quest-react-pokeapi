import React, { useEffect, useState } from "react";
import { getPokemons, getAllPokemons } from '../../services'
// import { Header } from "../../components/header";
import { PokemonList } from "../../components/pokemon-list";


const Home = () => {
  const [pokemons, setPokemons] = useState([])

  const pageLimit = 10;
  const [pageOffset, setPageOffset] = useState(0)

  useEffect(() => {
    const getPokemonsData = async () => {
      const pokemonsData = await getAllPokemons(pageLimit, pageOffset)

      const results = await Promise.all(pokemonsData.map(async (pokemon) => {
        return await getPokemons(pokemon.name)
      }))

      setPokemons([...pokemons, ...results])
    }

    getPokemonsData()
  }, [pageOffset])

  const handleClick = () => {
    setPageOffset(pageOffset + pageLimit)
  }

  return (
    <>
      {/* <Header /> */}
      <PokemonList
        pokemons={pokemons}
        handleCick={handleClick} />
    </>
  )
}

export { Home }