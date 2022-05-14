import axios from '../services/axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from '../api/getPokemons';
import { setPokemon } from '../actions/';

const useGetPokemons = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
        dispatch(setError(error));
      }
      setIsLoading(false);
    }
    executeAsyncFunction();
  },[]);

  return [isLoading, error];
}

export default useGetPokemons;