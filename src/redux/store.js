import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { logAction } from './middlewares';
import pokemonReducer from './reducers/pokemonReducer';
import rootSaga from './sagas';
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
const store = configureStore({
  reducer: {
    app: pokemonReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export default store;