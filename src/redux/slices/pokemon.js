import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemonList: [],
  favorites: [],
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonList: (state, action) => { 
      state.pokemonList = action.payload;
    },
    setFavorite: (state, action) => { 
      const currentPokemonIndex = state.pokemonList.findIndex(pokemon => pokemon.id === action.payload.pokemonId);
      if (currentPokemonIndex >= 0) {
        state.pokemonList[currentPokemonIndex].isFavorite = !state.pokemonList[currentPokemonIndex].isFavorite;
      }
    }
  }
});

export const { setPokemonList, setFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;