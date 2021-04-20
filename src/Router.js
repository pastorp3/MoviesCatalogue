import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
