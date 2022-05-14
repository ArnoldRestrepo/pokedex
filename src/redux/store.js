import { configureStore } from '@reduxjs/toolkit';
import { logAction } from './middlewares';
import pokemonReducer from './reducers/pokemonReducer';
// import createSagaMiddleware from 'redux-saga';
// import pokemonSaga from './sagas';

const store = configureStore({
  reducer: {
    app: pokemonReducer,
  },
  middleware: [logAction],
});

export default store;