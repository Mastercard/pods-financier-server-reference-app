import React from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import sinon from 'sinon';

import 'client/testUtils/window';
import { renderWithProviders } from 'client/testUtils/render';

import GatewayConfigsAdd, { GatewayConfigsAddScreen } from './Add';

const cls = '.gatewayConfigs-add';
const formCls = `${cls}-form`;
const deleteBtnCls = `${cls}-delete-btn`;
const headerTitleCls = '.ant-page-header-heading-title';
const spinCls = '.ant-spin';

describe(GatewayConfigsAddScreen.name, () => {
  const financierId = 'abc123';
  const gatewayId = 'xyz456';
  const gatewayConfigurationId = '555ggg';
  const gatewayConfig = {
    gatewayConfigurationId,
    financierId,
    gatewayId,
    configuration: '{ version: "53" }'
  }

  let history;

  let loadGatewayConfig;
  let createGatewayConfig;
  let updateGatewayConfig;
  let deleteGatewayConfig;
  let resetCreateGatewayConfig;
  let resetUpdateGatewayConfig;

  let financiers;
  let gateways;
  let gatewayConfigLoad;
  let gatewayConfigCreate;
  let gatewayConfigUpdate;
  let gatewayConfigDelete;
  let props;

  let container;
  let rerender;

  beforeEach(() => {
    history = createMemoryHistory();

    loadGatewayConfig = sinon.stub();
    createGatewayConfig = sinon.stub();
    updateGatewayConfig = sinon.stub();
    deleteGatewayConfig = sinon.stub();
    resetCreateGatewayConfig = sinon.stub();
    resetUpdateGatewayConfig = sinon.stub();

    financiers = { isLoading: false, data: null };
    gateways = { isLoading: false, data: null };
    gatewayConfigLoad = { isLoading: false, data: null };
    gatewayConfigCreate = { isLoading: false, data: null };
    gatewayConfigUpdate = { isLoading: false, data: null };
    gatewayConfigDelete = { isLoading: false, data: null };
    props = {
      financiers, gateways, gatewayConfigLoad, gatewayConfigCreate, gatewayConfigUpdate, gatewayConfigDelete,
      loadGatewayConfig, createGatewayConfig, updateGatewayConfig, deleteGatewayConfig, resetCreateGatewayConfig, resetUpdateGatewayConfig
    };

    ({ container, rerender } = render(
      <Router history={history}>
        <GatewayConfigsAddScreen {...props} />
      </Router>
    ));
  });

  test('should render', () => {
    expect(container.querySelector(headerTitleCls).textContent).toEqual('Add Gateway Configuration');
    expect(container.querySelector(deleteBtnCls)).toBeFalsy();
    expect(container.querySelector(spinCls)).toBeFalsy();
    expect(container.querySelector(formCls)).toBeTruthy();
  });

  describe('edit mode', () => {
    beforeEach(() => {
      history = createMemoryHistory({ initialEntries: [`/home/gateway-configurations/${gatewayConfigurationId}`] });

      rerender(
        <Router key={Math.random()} history={history}>
          <Route path="/home/gateway-configurations/:id">
            <GatewayConfigsAddScreen {...props} />
          </Route>
        </Router>
      );
    });

    test('should render different title and Delete button', () => {
      expect(container.querySelector(headerTitleCls).textContent).toEqual('Edit Gateway Configuration');
      expect(container.querySelector(deleteBtnCls)).toBeTruthy();
    });

    test('should not render Delete button while loading', () => {
      gatewayConfigLoad = { isLoading: true, data: null };
      props = { ...props, gatewayConfigLoad };

      rerender(
        <Router key={Math.random()} history={history}>
          <Route path="/home/gateway-configurations/:id">
            <GatewayConfigsAddScreen {...props} />
          </Route>
        </Router>
      );

      expect(container.querySelector(deleteBtnCls)).toBeFalsy();
    });

    test('should load gateway config by id', () => {
      expect(loadGatewayConfig.lastCall.args).toEqual([{ id: gatewayConfigurationId }]);
    });

    test('should call deleteGatewayConfig when clicking Delete button', () => {
      fireEvent.click(container.querySelector(deleteBtnCls));
      expect(deleteGatewayConfig.lastCall.args).toEqual([{ id: gatewayConfigurationId }])
    });
  });

  describe('when states are loaded', () => {
    beforeEach(() => {
      gateways = { isLoading: false, data: { items: [{ id: gatewayId }] } };
      financiers = { isLoading: false, data: { items: [{ id: financierId }] } };
      gatewayConfigLoad = { isLoading: false, data: gatewayConfig };
      props = { ...props, gateways, financiers, gatewayConfigLoad };

      rerender(
        <Router history={history}>
          <GatewayConfigsAddScreen {...props} />
        </Router>
      );
    });

    test('should propagate input values based on states', () => {
      expect(container.querySelector(formCls).querySelector('#financierId').value).toEqual(financierId);
      expect(container.querySelector(formCls).querySelector('#gatewayId').value).toEqual(gatewayId);
      expect(container.querySelector(formCls).querySelector('#configuration').value).toEqual(gatewayConfig.configuration);
    });
  });

  describe('should render spinner', () => {
    test('while loading', () => {
      gatewayConfigLoad = { isLoading: true, data: null };
      props = { ...props, gatewayConfigLoad };

      rerender(
        <Router history={history}>
          <GatewayConfigsAddScreen {...props} />
        </Router>
      );

      expect(container.querySelector(spinCls)).toBeTruthy();
    });

    test('while submitting for creation', () => {
      gatewayConfigCreate = { isLoading: true, data: null };
      props = { ...props, gatewayConfigCreate };

      rerender(
        <Router history={history}>
          <GatewayConfigsAddScreen {...props} />
        </Router>
      );

      expect(container.querySelector(spinCls)).toBeTruthy();
    });

    test('while submitting for update', () => {
      gatewayConfigUpdate = { isLoading: true, data: null };
      props = { ...props, gatewayConfigUpdate };

      rerender(
        <Router history={history}>
          <GatewayConfigsAddScreen {...props} />
        </Router>
      );

      expect(container.querySelector(spinCls)).toBeTruthy();
    });
  });

  describe('should navigate to /home/gateway-configurations', () => {
    test('when create is success', () => {
      gatewayConfigCreate = { isLoading: false, data: gatewayConfig };
      props = { ...props, gatewayConfigCreate };

      rerender(
        <Router history={history}>
          <GatewayConfigsAddScreen {...props} />
        </Router>
      );

      expect(history.location.pathname).toBe('/home/gateway-configurations');
    });

    test('when update is success', () => {
      gatewayConfigUpdate = { isLoading: false, data: gatewayConfig };
      props = { ...props, gatewayConfigUpdate };

      rerender(
        <Router history={history}>
          <GatewayConfigsAddScreen {...props} />
        </Router>
      );

      expect(history.location.pathname).toBe('/home/gateway-configurations');
    });

    test('when delete is success', () => {
      gatewayConfigDelete = { isLoading: false, data: gatewayConfig };
      props = { ...props, gatewayConfigDelete };

      rerender(
        <Router history={history}>
          <GatewayConfigsAddScreen {...props} />
        </Router>
      );

      expect(history.location.pathname).toBe('/home/gateway-configurations');
    });
  });
});

describe(GatewayConfigsAdd.name, () => {
  test('should render', () => {
    const { container } = renderWithProviders(<GatewayConfigsAdd />);
    expect(container.querySelector(headerTitleCls).textContent).toEqual('Add Gateway Configuration');
  });
});