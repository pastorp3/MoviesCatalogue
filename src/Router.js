import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
