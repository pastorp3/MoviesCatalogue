import React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import Details from './Details';

describe('Details Component', () => {
  it('Should render according with snapshout whithout error', () => {
    const tree = renderer.create(<MemoryRouter><Details /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
