import { SET_GENRE } from '../actions/types';

const genreReducer = (state = [], action) => {
  switch (action.type) {
    case SET_GENRE:
      return action.payload.genres;
    default:
      return state;
  }
};

export default genreReducer;
