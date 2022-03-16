import { useState, useEffect } from 'react';
import { getProkemons } from '../api/getProkemons';

const useGetPokemons = () => {
  const [pokemons, setPokemons] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => { 
    async function executeAsyncFunction (){ 
      setIsLoading(true);
      try {
        const result = await getProkemons({ limit: 151 });
        setPokemons(result?.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    }
    executeAsyncFunction();
  },[]);

  return [pokemons, isLoading, error];
}

export default useGetPokemons;