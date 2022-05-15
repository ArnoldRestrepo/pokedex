import { fork, all } from 'redux-saga/effects'
import pokemonDetail from "./pokemonWithDetail"


function* rootSaga() {
  yield all([
    fork(pokemonDetail)  
  ])
}

export default rootSaga;