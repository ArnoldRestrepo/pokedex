import {useSelector} from 'react-redux';
import PokeduxList from '../../components/PokeduxList';
import Searcher from '../../components/Searcher';
import useGetPokemons  from '../../hooks/useGetPokemons';
import './styles.css';

function Home() {
  const loading = useGetPokemons();
  const pokemonList = useSelector(state => state.app.pokemonList);

  return (
    <div className='Home'>
      <Searcher />
      { loading ? <p>Loading...</p> : <PokeduxList pokemons={pokemonList}/> } 
    </div>
  );
}

export default Home;
