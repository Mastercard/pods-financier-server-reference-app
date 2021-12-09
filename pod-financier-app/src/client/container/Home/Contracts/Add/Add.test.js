import React from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import sinon from 'sinon';

import 'client/testUtils/window';
import { renderWithProviders } from 'client/testUtils/render';

import contractTestData from './contract.testData';

import ContractsAdd, { ContractsAddScreen } from './Add';

const cls = '.contracts-add';
const formCls = `${cls}-form`;
const headerTitleCls = '.ant-page-header-heading-title';
const spinCls = '.ant-spin';

describe(ContractsAddScreen.name, () => {
  const financierId = '60eba511-71d7-4dca-8ef0-31ac1c5a7e46';
  const contractId = 'f730fb62-c2fb-4764-846a-31c9eb14efbe';
  const contract = contractTestData;

  let history;

  let loadContract;
  let createContract;
  let updateContract;
  let resetCreateContract;
  let resetUpdateContract;

  let financiers;
  let contractLoad;
  let contractCreate;
  let contractUpdate;
  let props;

  let container;
  let rerender;

  beforeEach(async () => {
    history = createMemoryHistory();

    loadContract = sinon.stub();
    createContract = sinon.stub();
    updateContract = sinon.stub();
    resetCreateContract = sinon.stub();
    resetUpdateContract = sinon.stub();

    financiers = { isLoading: false, data: null };
    contractLoad = { isLoading: false, data: null };
    contractCreate = { isLoading: false, data: null };
    contractUpdate = { isLoading: false, data: null };
    props = {
      financiers, contractLoad, contractCreate, contractUpdate,
      loadContract, createContract, updateContract, resetCreateContract, resetUpdateContract
    };

    ({ container, rerender } = render(
      <Router history={history}>
        <ContractsAddScreen {...props} />
      </Router>
    ));

  });

  test('should render', () => {
    expect(container.querySelector(headerTitleCls).textContent).toEqual('Add Contract');
    expect(container.querySelector(spinCls)).toBeFalsy();
    expect(container.querySelector(formCls)).toBeTruthy();
  });

  describe('edit mode', () => {
    beforeEach(() => {
      history = createMemoryHistory({ initialEntries: [`/home/contracts/${contractId}`] });

      financiers = { isLoading: false, data: { items: [{ id: financierId }] } };
      props = { ...props, financiers };

      rerender(
        <Router key={Math.random()} history={history}>
          <Route path="/home/contracts/:id">
            <ContractsAddScreen {...props} />
          </Route>
        </Router>
      );
    });

    test('should render different title', () => {
      expect(container.querySelector(headerTitleCls).textContent).toEqual('Edit Contract');
    });

    test('should load contract by id', () => {
      expect(loadContract.lastCall.args).toEqual([{ id: contractId, financierId }]);
    });
  });

  describe('when states are loaded', () => {
    beforeEach(() => {
      financiers = { isLoading: false, data: { items: [{ id: financierId }] } };
      contractLoad = { isLoading: false, data: contract };
      props = { ...props, financiers, contractLoad };

      rerender(
        <Router history={history}>
          <ContractsAddScreen {...props} />
        </Router>
      );
    });

    test('should propagate input values based on states', () => {
      expect(container.querySelector(formCls).querySelector('#financierId').value).toEqual(financierId);
      expect(container.querySelector(formCls).querySelector('#currency').value).toEqual(contract.currency);
      expect(container.querySelector(formCls).querySelector('#amount').value).toEqual(`${contract.amount}`);
      expect(container.querySelector(formCls).querySelector('#type').closest('.ant-select-selector').querySelector('.ant-select-selection-item').textContent).toEqual('Instalment');
      expect(container.querySelector(formCls).querySelector('#durationUnit').closest('.ant-select-selector').querySelector('.ant-select-selection-item').textContent).toEqual('Month');
      expect(container.querySelector(formCls).querySelector('#duration').value).toEqual(`${contract.duration}`);
      expect(container.querySelector(formCls).querySelector('#downpaymentAmount').value).toEqual(`${contract.downpaymentAmount}`);
      expect(container.querySelector(formCls).querySelector('#downpaymentTransactionId').value).toEqual(contract.downpaymentTransactionId);
      fireEvent.submit(container.querySelector(formCls));
    });
  });

  describe('should render spinner', () => {
    test('while loading', () => {
      contractLoad = { isLoading: true, data: null };
      props = { ...props, contractLoad };

      rerender(
        <Router history={history}>
          <ContractsAddScreen {...props} />
        </Router>
      );

      expect(container.querySelector(spinCls)).toBeTruthy();
    });

    test('while submitting for creation', () => {
      contractCreate = { isLoading: true, data: null };
      props = { ...props, contractCreate };

      rerender(
        <Router history={history}>
          <ContractsAddScreen {...props} />
        </Router>
      );

      expect(container.querySelector(spinCls)).toBeTruthy();
    });

    test('while submitting for update', () => {
      contractUpdate = { isLoading: true, data: null };
      props = { ...props, contractUpdate };

      rerender(
        <Router history={history}>
          <ContractsAddScreen {...props} />
        </Router>
      );

      expect(container.querySelector(spinCls)).toBeTruthy();
    });
  });

  describe('should navigate to /home/contracts', () => {
    test('when create is success', () => {
      contractCreate = { isLoading: false, data: contract };
      props = { ...props, contractCreate };

      rerender(
        <Router history={history}>
          <ContractsAddScreen {...props} />
        </Router>
      );

      expect(history.location.pathname).toBe('/home/contracts');
    });

    test('when update is success', () => {
      contractUpdate = { isLoading: false, data: contract };
      props = { ...props, contractUpdate };

      rerender(
        <Router history={history}>
          <ContractsAddScreen {...props} />
        </Router>
      );

      expect(history.location.pathname).toBe('/home/contracts');
    });
  });
});

describe(ContractsAdd.name, () => {
  test('should render', () => {
    const { container } = renderWithProviders(<ContractsAdd />);
    expect(container.querySelector(headerTitleCls).textContent).toEqual('Add Contract');
  });
});