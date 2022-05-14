import { SET_POKEMON, SET_ERROR, CLEAN_ERROR } from './types';

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