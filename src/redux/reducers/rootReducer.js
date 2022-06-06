import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  ui: uiReducer,
});

export default rootReducer;