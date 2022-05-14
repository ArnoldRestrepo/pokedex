import { call, put, takeEvery } from 'redux-saga/effects';
import { getPokemonWithDetail } from '../../api/getPokemonDetail';
import { GetPokemonDetail, setError, setPokemon } from '../actions';


function* fetchPokemonWithDetail(action) {
  try {
    yield put()
    const pokemonDetails = yield call(getPokemonWithDetail, action.payload);
    yield put({ type: setPokemon, payload: pokemonDetails });

  } catch (error) {
    yield put({ type: setError, payload: {message: "Ocurrío un error al traer los pokemons", error: error.message} });
  }
}

function* pokemonDetail() {
  yield takeEvery(GetPokemonDetail, fetchPokemonWithDetail);
}

export default pokemonDetail;

