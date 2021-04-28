import { setGenre, setMovies, updateMovies } from "../actions";
import { SET_GENRE, SET_MOVIES, UPDATE_MOVIES } from "../types";

describe('Tests Action', () => {
  it('should create a action with SET_MOVIE type', () => {
    const payload = {id: 1, name: 'Start Wars'};
    const expectation = {
      type: SET_MOVIES,
      payload,
    }
    expect(setMovies(payload)).toEqual(expectation);
  })

  it('Should create a action with UPDATE_MOVIES type', () => {
    const payload = {id: 1, name: 'Test'};
    const expectation = {
      type: UPDATE_MOVIES,
      payload
    }
    expect(updateMovies(payload)).toEqual(expectation);
  })

  it('Should create a action with SET_GENRE type', () => {
    const payload = {id: 1, name: 'Test'};
    const expectation = {
      type: SET_GENRE,
      payload
    }
    expect(setGenre(payload)).toEqual(expectation);
  })
})

