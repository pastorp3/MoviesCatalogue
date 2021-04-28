import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { findByTestAtrr } from '../../../Utils';

const setUp = (props={}) => {
  const component = shallow(<Navbar {...props} />);
  return component;
};

describe('Navbar component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render whithout errors', () => {
    const wrapper = findByTestAtrr(component, 'navComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render the logo', () => {
    const wrapper = findByTestAtrr(component, 'logo');
    expect(wrapper.length).toBe(1);
  });

  it('Should rnder a home link', () => {
    const wrapper = findByTestAtrr(component, 'homeLink');
    expect(wrapper.length).toBe(1);
  })

  it('Should render according with snapshout whithout error', () => {
    const tree = renderer.create(<BrowserRouter><Navbar /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
