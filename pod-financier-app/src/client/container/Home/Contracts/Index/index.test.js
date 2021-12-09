import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import sinon from 'sinon';

import 'client/testUtils/window';
import { renderWithProviders } from 'client/testUtils/render';

import ContractsIndex, { ContractsIndexScreen } from './Index';

import contractsTestData from './contracts.testData';

const cls = '.contracts';
const addBtnCls = `${cls}-add-btn`;
const tableCls = `${cls}-table`;
const headerTitleCls = '.ant-page-header-heading-title';
const emptyCls = '.ant-empty';
const spinCls = '.ant-spin';
const tableBodyCls = '.ant-table-body';
const tableRowCls = '.ant-table-row-level-0';

describe(ContractsIndexScreen.name, () => {
  const financierId = 'abc123';

  let history;

  let loadContracts;
  let contracts;
  let financiers;
  let props;

  let container;
  let rerender;

  beforeEach(() => {
    history = createMemoryHistory();

    contracts = { isLoading: false, data: null };
    financiers = { isLoading: false, data: null };
    loadContracts = sinon.stub();
    props = { contracts, financiers, loadContracts };

    ({ container, rerender } = render(
      <Router history={history}>
        <ContractsIndexScreen {...props} />
      </Router>
    ));
  });

  describe('should render', () => {
    test('empty state', () => {
      expect(container.querySelector(headerTitleCls).textContent).toEqual('Contracts');
      expect(container.querySelector(tableCls).querySelector(emptyCls)).toBeTruthy();
      expect(container.querySelector(spinCls)).toBeFalsy();
      expect(loadContracts.called).toBe(false);
    });

    test('loading state', () => {
      contracts = { ...contracts, isLoading: true };
      props = { ...props, contracts }
      rerender(<Router history={history}><ContractsIndexScreen {...props} /></Router>);
      expect(container.querySelector(spinCls)).toBeTruthy();
    });

    test('full state', () => {
      contracts = { ...contracts, data: contractsTestData };
      props = { ...props, contracts }
      rerender(<Router history={history}><ContractsIndexScreen {...props} /></Router>);
      expect(container.querySelector(tableCls).querySelector(tableBodyCls).querySelectorAll(tableRowCls))
        .toHaveLength(contractsTestData.items.length);
      expect(container.querySelector(addBtnCls)).toBeTruthy();
    });
  });

  describe('should call loadContracts', () => {
    test('when financierId is defined', () => {
      financiers = {
        ...financiers,
        data: {
          items: [{ id: financierId }]
        }
      };
      props = { ...props, financiers }
      rerender(<Router history={history}><ContractsIndexScreen {...props} /></Router>);
      expect(loadContracts.lastCall.args).toEqual([{ financierId, offset: 0, limit: 50 }]);
    });
  });

  describe('should navigate', () => {
    test('to Add Contract page when clicking Add Contract button', async () => {
      fireEvent.click(container.querySelector(addBtnCls));
      expect(history.location.pathname).toBe("/home/contracts/add");
    });

    test('to Edit Contract page when clicking a table row', async () => {
      contracts = { ...contracts, data: contractsTestData };
      props = { ...props, contracts }
      rerender(<Router history={history}><ContractsIndexScreen {...props} /></Router>);
      fireEvent.click(container.querySelector(tableCls).querySelector(tableBodyCls).querySelectorAll(tableRowCls)[0]);
      expect(history.location.pathname).toBe(`/home/contracts/${contractsTestData.items[0].id}`);
    });
  });
});

describe(ContractsIndex.name, () => {
  test('should render', () => {
    const { container } = renderWithProviders(<ContractsIndex />);
    expect(container.querySelector(headerTitleCls).textContent).toEqual('Contracts');
  });
});