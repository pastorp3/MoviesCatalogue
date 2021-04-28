/* eslint-disable  preact/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from './Footer';
import { findByTestAtrr } from '../../../Utils';

const setUp = (props = {}) => {
  const component = shallow(<Footer {...props} />);
  return component;
};

describe('Footer Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render whitout error', () => {
    const wrapper = findByTestAtrr(component, 'Footer');
    expect(wrapper.length).toBe(1);
  });

  it('Should render according with snapshout whithout error', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

/* eslint-enable */
