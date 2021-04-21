import { SET_MOVIES, UPDATE_MOVIES } from '../actions/types';

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_MOVIES:
      return action.payload.results;
    case UPDATE_MOVIES:
      return state.concat(action.payload.results);
    default:
      return state;
  }
};

export default moviesReducer;
