import { SET_POKEMON, SET_ERROR, CLEAN_ERROR, FETCH_POKEMON_DETAIL, SET_LOADING } from './types';

export const setPokemon = (payload) => ({
  type: SET_POKEMON,
  payload,
})

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
})

export const cleanError = (payload) => ({
  type: CLEAN_ERROR,
  payload,
})

export const fetchPokemons = (payload) => ({
  type: FETCH_POKEMON_DETAIL,
  payload,
}) 

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
})
