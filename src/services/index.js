import { baseUrl } from "./variables";

async function getPokemons(pokemon) {
  const res = await fetch(`${baseUrl}/pokemon/${pokemon}`);
  const data = await res.json()
  return data;
}

async function getAllPokemons(limit, offset) {
  const res = await fetch(`${baseUrl}/pokemon?limit=${limit}&offset=${offset}`);
  const data = await res.json()
  return data.results;
}

async function getAlilitiesPokemons(pokemon) {
  const res = await fetch(`${baseUrl}/ability/${pokemon}`);
  const data = await res.json()
  return data;
}

export { getPokemons, getAllPokemons, getAlilitiesPokemons }