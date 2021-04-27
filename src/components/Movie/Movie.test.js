import React from 'react';
import { shallow } from 'enzyme';
import Movie from './Movie';
import { checkProps } from '../../../Utils';


describe('Movie Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        title: 'Test Title',
        year: '01-01-2021',
        poster: 'Test Poster',
        id: 1,
      };
      const propsErr = checkProps(Movie, expectedProps);
      expect(propsErr).toBeUndefined();
    })
  });
})