import { call, put, takeEvery } from 'redux-saga/effects';
import { getPokemonsWithDetails } from '../../api/getPokemonDetail';
import { setError, setPokemon } from '../actions';
import { FETCH_POKEMON_DETAIL } from '../actions/types';


function* fetchPokemonWithDetail(action) {
  try {
    const details = yield call(
      getPokemonsWithDetails,
      action.payload
    );
    yield put(setPokemon(details));
  } catch (e) {
    yield put(setError({ message: 'Error al obtener detalles', error: e }));
  }
}

function* pokemonDetail() {
  yield takeEvery(FETCH_POKEMON_DETAIL, fetchPokemonWithDetail);
}

export default pokemonDetail;

