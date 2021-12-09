import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import reducers, { initialState } from 'client/behaviour/reducers';

export const renderWithProviders = (ui, options) => {
  const history = createMemoryHistory();
  const store = createStore(reducers, initialState);

  return render(
    <Router history={history}>
      <Provider store={store}>
        {ui}
      </Provider>
    </Router>,
    options
  );
}