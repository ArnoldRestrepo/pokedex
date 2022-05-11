import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './reducers/pokemonReducer';

const store = configureStore({
  reducer: {
    app: pokemonReducer,
  }
});


export default store;