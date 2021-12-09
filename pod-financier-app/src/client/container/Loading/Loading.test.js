import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import sinon from 'sinon';

import 'client/testUtils/window';
import { renderWithProviders } from 'client/testUtils/render';

import Loading, { LoadingScreen } from './Loading';

const cls = '.loading';
const spinCls = '.ant-spin';

describe(LoadingScreen.name, () => {
  const financierId = 'abc123';

  let history;

  let loadFinanciers;
  let loadGateways;
  let financiers;
  let props;

  let container;

  beforeEach(() => {
    history = createMemoryHistory();

    loadFinanciers = sinon.stub();
    loadGateways = sinon.stub();
  });

  describe('when financiers data is undefined', () => {
    beforeEach(() => {
      financiers = { isLoading: false, data: null };
      props = { financiers, loadFinanciers, loadGateways };

      ({ container } = render(
        <Router history={history}>
          <LoadingScreen {...props} />
        </Router>
      ));
    });

    test('should render', () => {
      expect(container.querySelector(cls)).toBeTruthy();
      expect(container.querySelector(spinCls)).toBeTruthy();
    });

    test('should call loadFinanciers and loadGateways', () => {
      expect(loadFinanciers.called).toBe(true);
      expect(loadGateways.called).toBe(true);
    });
  });

  describe('when financiers data is defined', () => {
    test('should navigate to /register if no financier exists', () => {
      financiers = { isLoading: false, data: { items: [] } };
      props = { financiers, loadFinanciers, loadGateways };

      ({ container } = render(
        <Router history={history}>
          <LoadingScreen {...props} />
        </Router>
      ));

      expect(history.location.pathname).toBe('/register');
    });

    test('should navigate to /home if at least one financier exists', () => {
      financiers = { isLoading: false, data: { items: [{ id: financierId }] } };
      props = { financiers, loadFinanciers, loadGateways };

      ({ container } = render(
        <Router history={history}>
          <LoadingScreen {...props} />
        </Router>
      ));

      expect(history.location.pathname).toBe('/home');
    });
  });
});

describe(Loading.name, () => {
  test('should render', () => {
    renderWithProviders(<Loading />);
  });
});