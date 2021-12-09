import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import sinon from 'sinon';

import 'client/testUtils/window';
import { renderWithProviders } from 'client/testUtils/render';

import Home, { HomeScreen } from './Home';

const cls = '.home';
const mainCls = `${cls}-main`;
const logoWrapperCls = `${cls}-logo-wrapper`;

describe(HomeScreen.name, () => {
  const financierId = 'abc123';
  const gatewayId = 'def345';

  let history;

  let loadFinanciers;
  let loadGateways;
  let financiers;
  let gateways;
  let props;

  let container;

  beforeEach(() => {
    history = createMemoryHistory();

    loadFinanciers = sinon.stub();
    loadGateways = sinon.stub();
  });

  describe('when gateways and financiers data is undefined', () => {
    beforeEach(() => {
      financiers = { isLoading: false, data: null };
      gateways = { isLoading: false, data: null };
      props = { financiers, gateways, loadFinanciers, loadGateways };

      ({ container } = render(
        <Router history={history}>
          <HomeScreen {...props} />
        </Router>
      ));
    });

    test('should render', () => {
      expect(container.querySelector(mainCls)).toBeTruthy();
      expect(container.querySelector(logoWrapperCls)).toBeTruthy();
    });

    test('should call loadFinanciers and loadGateways', () => {
      expect(loadFinanciers.called).toBe(true);
      expect(loadGateways.called).toBe(true);
    });
  });

  describe('when gateways and financiers data is defined', () => {
    beforeEach(() => {
      financiers = { isLoading: false, data: { items: [{ id: financierId }] } };
      gateways = { isLoading: false, data: { items: [{ id: gatewayId }] } };
      props = { financiers, gateways, loadFinanciers, loadGateways };

      ({ container } = render(
        <Router history={history}>
          <HomeScreen {...props} />
        </Router>
      ));
    });

    test('should not call loadFinanciers and loadGateways', () => {
      expect(loadFinanciers.called).toBe(false);
      expect(loadGateways.called).toBe(false);
    });
  });
});

describe(Home.name, () => {
  test('should render', () => {
    renderWithProviders(<Home />);
  });
});