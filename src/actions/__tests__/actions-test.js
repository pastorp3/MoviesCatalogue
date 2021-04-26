import { setMovies } from "../actions";
import { SET_MOVIES } from "../types";

describe('Tests Action', () => {
  it('should create a action with SET_MOVIE type', () => {
    const data = {id: 1, name: 'Start Wars'};
    const expectation = {
      type: SET_MOVIES,
      data,
    }
    expect(setMovies(data)).toEqual(expectation);
  })
})