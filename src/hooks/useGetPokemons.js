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
        dispatch(setPokemon(result?.results));
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    }
    executeAsyncFunction();
  },[]);

  return [isLoading, error];
}

export default useGetPokemons;