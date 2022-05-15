import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons } from '../../api/getPokemons';
import PokeduxList from '../../components/PokeduxList';
import Searcher from '../../components/Searcher';
import { fetchPokemons, setError } from '../../redux/actions';
// import useGetPokemons  from '../../hooks/useGetPokemons';
import './styles.css';

function Home() {
  // const loading = useGetPokemons();
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.app.pokemonList);
  useEffect(() => {
    getPokemons({ limit: 151 })
      .then(response => dispatch(fetchPokemons(response.results)))
      .catch(err => dispatch(setError({ message: 'Error al obtener pokemons', error: err.message })));
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      {/* { loading ? <p>Loading...</p> : <PokeduxList pokemons={pokemonList}/> }  */}
      <PokeduxList pokemons={pokemonList}/>
    </div>
  );
}

export default Home;
