import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Index from './Index/Index';
import Add from './Add/Add';

export default () =>
  <Switch>
    <Route exact path="/home/contracts/index">
      <Index />
    </Route>
    <Route exact path="/home/contracts/add">
      <Add />
    </Route>
    <Route path="/home/contracts/:id">
      <Add />
    </Route>
    <Redirect exact from="/home/contracts" to="/home/contracts/index" />
  </Switch>
