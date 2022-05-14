import axios from '../services/axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from '../api/getPokemons';
import { setPokemon, setError } from '../redux/actions/';

const useGetPokemons = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => { 
    async function executeAsyncFunction (){ 
      setIsLoading(true);
      try {
        const result = await getPokemons({ limit: 151 });
        const pokemonList = result.results;
        const pokemonsResult = await Promise.all(pokemonList.map( async pokemon => axios.get(pokemon.url)))
        const pokemonsData = pokemonsResult.map(pokemon => pokemon.data)
        dispatch(setPokemon(pokemonsData));
      } catch (error) {
        const errorMessage = error.message;
        dispatch(setError({message: "Ocurrío un error al obtener los pokemons", error: errorMessage}));
      }
      setIsLoading(false);
    }
    executeAsyncFunction();
  },[]);

  return isLoading;
}

export default useGetPokemons;