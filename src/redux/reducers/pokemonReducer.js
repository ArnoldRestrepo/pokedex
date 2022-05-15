import { CLEAN_ERROR, SET_ERROR, SET_POKEMON, SET_LOADING } from '../actions/types';

const initialState = {
  pokemonList: [],
  error: "",
  loading: false,
}

const pokemonReducer = (state = initialState, action) => { 
  switch(action.type) { 
    case SET_POKEMON:
      return { ...state, pokemonList: action.payload };
    case SET_LOADING:
      return { ...state, loading: !state.loading};
    case SET_ERROR:
      return { ...state, error: action.payload };
    case CLEAN_ERROR:
      return {...state, error: ""}
    default:
      return {...state};
  }
}

export default pokemonReducer;