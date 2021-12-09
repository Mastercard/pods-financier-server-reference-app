import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Index from './Index/Index';
import Add from './Add/Add';

export default () =>
  <Switch>
    <Route exact path="/home/gateway-configurations/index">
      <Index />
    </Route>
    <Route exact path="/home/gateway-configurations/add">
      <Add />
    </Route>
    <Route path="/home/gateway-configurations/:id">
      <Add />
    </Route>
    <Redirect exact from="/home/gateway-configurations" to="/home/gateway-configurations/index" />
  </Switch>
