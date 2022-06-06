import { SET_POKEMON, SET_FAVORITE_POKEMON } from '../actions/types';

const initialState = {
  pokemonList: [],
  favorites: [],
}

const pokemonReducer = (state = initialState, action) => { 
  switch(action.type) { 
    case SET_POKEMON:
      return { ...state, pokemonList: action.payload };
    case SET_FAVORITE_POKEMON:
      const value = state.favorites[action.payload.pokemonId]
      return {...state, favorites: {...state.favorites, [action.payload.pokemonId]: !value } }
    default:
      return {...state};
  }
}

export default pokemonReducer;