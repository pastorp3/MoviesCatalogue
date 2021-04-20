import { combineReducers } from 'redux';
import genreReducer from './genre';
import moviesReducer from './movies';

const RootReducer = combineReducers({
  movies: moviesReducer,
  genre: genreReducer,
});

export default RootReducer;
