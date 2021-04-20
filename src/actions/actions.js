import axios from 'axios';
import { SET_GENRE, SET_MOVIES, UPDATE_MOVIES } from './types';

export const setMovies = (data) => (
  {
    type: SET_MOVIES,
    payload: data,
  }
);

export const updateMovies = (data) => (
  {
    type: UPDATE_MOVIES,
    payload: data,
  }
);

export const setGenre = (data) => (
  {
    type: SET_GENRE,
    payload: data,
  }
);

export const fetchMovies = () => (
  async (dispatch) => {
    await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=85c461272a40b11f9fdd119183a15d9a&page=1')
      .then(({ data }) => {
        dispatch(setMovies(data));
      });
    await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=85c461272a40b11f9fdd119183a15d9a&page=2')
      .then(({ data }) => {
        dispatch(updateMovies(data));
      });
  }
);

export const fetchGenre = () => (
  async (dispatch) => {
    await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=85c461272a40b11f9fdd119183a15d9a')
      .then(({ data }) => {
        dispatch(setGenre(data));
      });
  }
);
