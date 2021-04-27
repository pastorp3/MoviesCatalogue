import React from 'react';
import { shallow } from 'enzyme';
import Movie from './Movie';
import { checkProps, findByTestAtrr } from '../../../Utils';


const setUp = (props={
  title: 'Test Title',
  year: '01-01-2021',
  poster: 'Test Poster',
  id: 1,
}) => {
  const component = shallow(<Movie {...props} />);
  return component;
}

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

  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('Should render whithout error', () => {
    const wrapper = findByTestAtrr(component, 'Movie-card');
    expect(wrapper.length).toBe(1);
  });

  it('Should render movie poster whitout error', () => {
    const wrapper = findByTestAtrr(component, 'Movie-poster');
    expect(wrapper.length).toBe(1);
  });

  it('Should render movie infor whithout error', () => {
    const wrapper = findByTestAtrr(component, 'Movie-info');
    expect(wrapper.length).toBe(1);
  })
})