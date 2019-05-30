import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './screens/Home';
import Recipe from './screens/Recipe';
import NoMatch from './screens/NoMatch';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recipe/:id" component={Recipe} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
)

export default App;