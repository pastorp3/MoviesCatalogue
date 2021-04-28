import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { findByTestAtrr, testStore } from '../../../Utils';
import RootReducer from '../../reducers';
import Home from './Home';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Home store={store} />).childAt(0).dive();
  return wrapper;
};

describe('Home Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      movies: [{
        title: 'Test1',
        original_title: 'Test1',
        release_date: '01-01-21',
        poster_path: 'Test1',
        id: 1,
      }],
    };
    wrapper = setUp(initialState);
  });

  it('Should render without error', () => {
    const component = findByTestAtrr(wrapper, 'home-component');
    expect(component.length).toBe(1);
  });

  it('Should render according with snapshout whithout error', () => {
    const store = createStore(RootReducer, applyMiddleware(thunk));
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
