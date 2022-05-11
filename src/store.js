import { configureStore } from '@reduxjs/toolkit';
import { logAction } from './middlewares';
import pokemonReducer from './reducers/pokemonReducer';

const store = configureStore({
  reducer: {
    app: pokemonReducer,
  },
  middleware: [logAction],
});


export default store;