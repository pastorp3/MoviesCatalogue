import { SET_MOVIES, UPDATE_MOVIES } from "../actions/types";
import moviesReducer from "./movies"

describe('Movies Reducer', () => {
  it('Should return default state', () => {
    const newState = moviesReducer(undefined, {});
    expect(newState).toEqual([]);
  })

  it('Should return new state if reciving a type and set movies', () => {
    const movies = [{title: 'Test1'}, {title: 'Test2'}]
    const movie = {results: movies};
    const newState = moviesReducer(undefined, {
      type: SET_MOVIES,
      payload: movie,
    });
    expect(newState).toEqual(movies);
  });

  it('Should return a new state and update movies', () => {
    const movies = [{title: 'Test1'}, {title: 'Test2'}]
    const movie = {results: movies};
    const newState = moviesReducer(undefined, {
      type: UPDATE_MOVIES,
      payload: movie,
    });
    expect(newState).toEqual(movies);
  })
})