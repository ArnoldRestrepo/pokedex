import { CLEAN_ERROR, SET_ERROR, SET_LOADING } from '../actions/types';

const initialState = {
  error: "",
  loading: false,
}

const uiReducer = (state = initialState, action) => { 
  switch(action.type) { 
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

export default uiReducer;