import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import sinon from 'sinon';

import 'client/testUtils/window';
import { renderWithProviders } from 'client/testUtils/render';

import GatewayConfigsIndex, { GatewayConfigsIndexScreen } from './Index';

import gatewayConfigsTestData from './gatewayConfigs.testData';

const cls = '.gatewayConfigs';
const addBtnCls = `${cls}-add-btn`;
const tableCls = `${cls}-table`;
const headerTitleCls = '.ant-page-header-heading-title';
const emptyCls = '.ant-empty';
const spinCls = '.ant-spin';
const tableBodyCls = '.ant-table-body';
const tableRowCls = '.ant-table-row-level-0';

describe(GatewayConfigsIndexScreen.name, () => {
  const financierId = 'abc123';

  let history;

  let loadGatewayConfigs;
  let gatewayConfigs;
  let financiers;
  let props;

  let container;
  let rerender;

  beforeEach(() => {
    history = createMemoryHistory();

    gatewayConfigs = { isLoading: false, data: null };
    financiers = { isLoading: false, data: null };
    loadGatewayConfigs = sinon.stub();
    props = { gatewayConfigs, financiers, loadGatewayConfigs };

    ({ container, rerender } = render(
      <Router history={history}>
        <GatewayConfigsIndexScreen {...props} />
      </Router>
    ));
  });

  describe('should render', () => {
    test('empty state', () => {
      expect(container.querySelector(headerTitleCls).textContent).toEqual('Gateway Configurations');
      expect(container.querySelector(tableCls).querySelector(emptyCls)).toBeTruthy();
      expect(container.querySelector(spinCls)).toBeFalsy();
      expect(container.querySelector(addBtnCls)).toBeFalsy();
      expect(loadGatewayConfigs.called).toBe(false);
    });

    test('no data state', () => {
      gatewayConfigs = { ...gatewayConfigs, data: [] };
      props = { ...props, gatewayConfigs }
      rerender(<Router history={history}><GatewayConfigsIndexScreen {...props} /></Router>);
      expect(container.querySelector(spinCls)).toBeFalsy();
      expect(container.querySelector(addBtnCls)).toBeTruthy();
    });

    test('loading state', () => {
      gatewayConfigs = { ...gatewayConfigs, isLoading: true };
      props = { ...props, gatewayConfigs }
      rerender(<Router history={history}><GatewayConfigsIndexScreen {...props} /></Router>);
      expect(container.querySelector(spinCls)).toBeTruthy();
      expect(container.querySelector(addBtnCls)).toBeFalsy();
    });

    test('full state', () => {
      gatewayConfigs = { ...gatewayConfigs, data: gatewayConfigsTestData };
      props = { ...props, gatewayConfigs }
      rerender(<Router history={history}><GatewayConfigsIndexScreen {...props} /></Router>);
      expect(container.querySelector(tableCls).querySelector(tableBodyCls).querySelectorAll(tableRowCls))
        .toHaveLength(gatewayConfigsTestData.items.length);
      expect(container.querySelector(addBtnCls)).toBeFalsy();
    });
  });

  describe('should call loadGatewayConfigs', () => {
    test('when financierId is defined', () => {
      financiers = {
        ...financiers,
        data: {
          items: [{ id: financierId }]
        }
      };
      props = { ...props, financiers }
      rerender(<Router history={history}><GatewayConfigsIndexScreen {...props} /></Router>);
      expect(loadGatewayConfigs.lastCall.args).toEqual([{ financierId, offset: 0, limit: 50 }]);
    });
  });

  describe('should navigate', () => {
    test('to Add Gateway Configuration page when clicking Add Gateway Configuration button', async () => {
      gatewayConfigs = { ...gatewayConfigs, data: [] };
      props = { ...props, gatewayConfigs }
      rerender(<Router history={history}><GatewayConfigsIndexScreen {...props} /></Router>);
      fireEvent.click(container.querySelector(addBtnCls));
      expect(history.location.pathname).toBe('/home/gateway-configurations/add');
    });

    test('to Edit Gateway Configuration page when clicking a table row', async () => {
      gatewayConfigs = { ...gatewayConfigs, data: gatewayConfigsTestData };
      props = { ...props, gatewayConfigs }
      rerender(<Router history={history}><GatewayConfigsIndexScreen {...props} /></Router>);
      fireEvent.click(container.querySelector(tableCls).querySelector(tableBodyCls).querySelectorAll(tableRowCls)[0]);
      expect(history.location.pathname).toBe(`/home/gateway-configurations/${gatewayConfigsTestData.items[0].gatewayConfigurationId}`);
    });
  });
});

describe(GatewayConfigsIndex.name, () => {
  test('should render', () => {
    const { container } = renderWithProviders(<GatewayConfigsIndex />);
    expect(container.querySelector(headerTitleCls).textContent).toEqual('Gateway Configurations');
  });
});