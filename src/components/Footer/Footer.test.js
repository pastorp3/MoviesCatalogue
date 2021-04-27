import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { findByTestAtrr } from '../../../Utils';

const setUp = (props={}) => {
  const component = shallow(<Footer {...props} />);
  return component;
}

describe('Footer Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render whitout error', () => {
    const wrapper = findByTestAtrr(component, 'Footer');
    expect(wrapper.length).toBe(1);
  })
})