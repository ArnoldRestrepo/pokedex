import { SET_POKEMON } from '../actions/types';

const initialState = {
  pokemonList: [],
}

const pokemonReducer = (state = initialState, action) => { 
  switch(action.type) { 
    case SET_POKEMON:
      return { ...state, pokemonList: action.payload };
    default:
      return {...state};
  }
}

export default pokemonReducer;