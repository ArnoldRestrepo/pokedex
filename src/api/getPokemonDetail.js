import axios from '../services/axios'
import { getPokemons } from './getPokemons'

export const getPokemonWithDetail = async () => {
  try {
    const result = await getPokemons({ limit: 151 });
    const pokemonList = result.data.results;
    const pokemonsResult = Promise.all(pokemonList.map( async pokemon => axios.get(pokemon.url)))
    const pokemonsData = await pokemonsResult.map(pokemon => pokemon.data)
    return pokemonsData;
  } catch (error) {
    const errorMessage = error.message;
    return errorMessage;
  }
}