import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemons, getAllPokemons, getAlilitiesPokemons } from '../services'
import { Header } from "../components/header";
import { PokemonDetails } from "../components/pokemon-card-details";

const Details = () => {
  const [pokemon, setPokemon] = useState({ details: '', abilities: [] })
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const pokemonDetails = await getPokemons(id)
      const pokemonAbilities = await Promise.all(pokemonDetails.abilities.map(async ability => {
        return await getAlilitiesPokemons(ability.ability.name)
      }))

      setPokemon({
        details: pokemonDetails,
        abilities: pokemonAbilities
      })
    }
    fetchData()
  }, [id])

  return (
    <>
      <Header />
        <PokemonDetails
          name={pokemon.details.name}
          image={pokemon.details.sprites?.other["dream_world"].front_default}
          types={pokemon.details.types}
          abilities={pokemon.abilities}
          moves={pokemon.details.moves}
          pokemon={pokemon}
        />
    </>
  )
}

export { Details }