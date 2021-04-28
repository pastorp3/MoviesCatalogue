/* eslint-disable  preact/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Filter from './Filter';
import { checkProps, findByTestAtrr } from '../../../Utils';

const testFunc = (e) => e;

const setUp = (props = {
  data: [],
  change: testFunc,
}) => {
  const component = shallow(<Filter {...props} />);
  return component;
};

describe('Filter Component', () => {
  describe('Checking ProrTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        data: [],
        change: testFunc,
      };
      const propsErr = checkProps(Filter, expectedProps);
      expect(propsErr).toBe(undefined);
    });
  });

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render whitout error', () => {
    const wrappre = findByTestAtrr(component, 'Filter');
    expect(wrappre.length).toBe(1);
  });

  it('Should render select element ', () => {
    const wrapper = findByTestAtrr(component, 'Filter-select');
    expect(wrapper.length).toBe(1);
  });

  it('Should render according with snapshout whithout error', () => {
    const props = {
      data: [],
      change: testFunc,
    };
    const tree = renderer.create(<Filter {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

/* eslint-enable */
