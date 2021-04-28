import { checkPropTypes } from 'prop-types';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../src/reducers/index';

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return component;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsErr;
}

export const testStore = (initialState) => {
  const createStoreMiddleware = applyMiddleware(thunk)(createStore);
  return createStoreMiddleware(RootReducer, initialState);
};