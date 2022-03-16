import React from 'react';
import { getProkemons } from '../../api/getProkemons';
import PokeduxList from '../../components/PokeduxList';
import Searcher from '../../components/Searcher';
import useGetPokemons  from '../../hooks/useGetPokemons';
import './styles.css';

function Home() {
  const [result, loading, error] = useGetPokemons();
  
  console.log(result);
  
  return (
    <div className='Home'>
      <Searcher />
      <PokeduxList/>
    </div>
  );
}

export default Home;
