import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import reducers from 'client/behaviour/reducers';
import sagas from 'client/behaviour/sagas';

import Loading from 'client/container/Loading/Loading';
import Home from 'client/container/Home/Home';
import Register from 'client/container/Register/Register';

import './App.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagas(sagaMiddleware);

export default () =>
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Loading />
        </Route>
      </Switch>
    </Router>
  </Provider>