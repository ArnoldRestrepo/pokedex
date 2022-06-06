import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons } from '../../api/getPokemons';
import Loader from '../../components/Loader';
import PokeduxList from '../../components/PokeduxList';
import Searcher from '../../components/Searcher';
import { fetchPokemons, setError } from '../../redux/actions';
import './styles.css';

function Home() {
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.app.pokemons.pokemonList);
  const loading = useSelector(state => state.app.ui.loading);

  useEffect(() => {
    getPokemons({ limit: 20 })
      .then(response => dispatch(fetchPokemons(response.results)))
      .catch(err => dispatch(setError({ message: 'Error al obtener pokemons', error: err.message })));
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      {loading && <Loader />}
      <PokeduxList pokemons={pokemonList}/>
    </div>
  );
}

export default Home;
