import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Details from './components/Details/Details';
import Home from './containers/Home/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/movie/:id" component={Details} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
