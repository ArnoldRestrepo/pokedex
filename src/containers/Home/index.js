import {useSelector} from 'react-redux';
import PokeduxList from '../../components/PokeduxList';
import Searcher from '../../components/Searcher';
import useGetPokemons  from '../../hooks/useGetPokemons';
import './styles.css';

function Home() {
  const [loading, error] = useGetPokemons();
  const pokemonList = useSelector(state => state.app.pokemonList);

  return (
    <div className='Home'>
      <Searcher />
      {error && <div className='error'>{error}</div>}
      { loading ? <p>Loading...</p> : <PokeduxList/> } 
    </div>
  );
}

export default Home;
