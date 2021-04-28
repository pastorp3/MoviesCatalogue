import { SET_GENRE } from "../actions/types";
import genreReducer from "./genre"

describe('Genre Reducer', () => {
  it('Should return a default state', () => {
    const newState = genreReducer(undefined,{});
    expect(newState).toEqual([]);
  });

  it('Should return a new state if reciving a type and set genres', () => {
    const newGenres = [{id: 1, name: 'Test 1'}];
    const payload = {genres: newGenres};
    const newState = genreReducer(undefined,{
      type: SET_GENRE,
      payload: payload,
    });
    expect(newState).toEqual(newGenres);
  })
})