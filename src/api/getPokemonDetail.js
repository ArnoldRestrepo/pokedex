import axios from '../services/axios'

export const getPokemonsWithDetails = (pokemons) => {
  return Promise.all(pokemons.map((pokemon) => axios.get(pokemon.url))).then(
    (pokemonResponses) => {
      return pokemonResponses.map((response) => response.data);
    }
  );
};