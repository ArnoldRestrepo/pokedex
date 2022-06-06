import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { logAction } from './middlewares';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas';
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
const store = configureStore({
  reducer: {
    app: rootReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }).concat(middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export default store;