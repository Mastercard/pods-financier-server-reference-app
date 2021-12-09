import React from 'react';
import { render } from '@testing-library/react';
import sinon from 'sinon';

import 'client/testUtils/window';
import { renderWithProviders } from 'client/testUtils/render';

import transactionsTestData from './transactions.testData';

import Transactions, { TransactionsScreen } from './Transactions';

const cls = '.transactions';
const tableCls = `${cls}-table`;
const headerTitleCls = '.ant-page-header-heading-title';
const emptyCls = '.ant-empty';
const spinCls = '.ant-spin';
const tableBodyCls = '.ant-table-body';
const tableRowCls = '.ant-table-row-level-0';

describe(TransactionsScreen.name, () => {
  const financierId = 'abc123';

  let financiers;
  let transactions;
  let loadTransactions;
  let props;

  let container;
  let rerender;

  beforeEach(() => {
    financiers = { isLoading: false, data: null };
    transactions = { isLoading: false, data: null };
    loadTransactions = sinon.stub();
    props = { financiers, transactions, loadTransactions };

    ({ container, rerender } = render(<TransactionsScreen {...props} />));
  });

  describe('should render', () => {
    test('empty state', () => {
      expect(container.querySelector(headerTitleCls).textContent).toEqual('Transactions');
      expect(container.querySelector(tableCls).querySelector(emptyCls)).toBeTruthy();
      expect(container.querySelector(spinCls)).toBeFalsy();
      expect(loadTransactions.called).toBe(false);
    });

    test('loading state', () => {
      transactions = { ...transactions, isLoading: true };
      props = { ...props, transactions }
      rerender(<TransactionsScreen {...props} />);
      expect(container.querySelector(spinCls)).toBeTruthy();
    });

    test('full state', () => {
      transactions = { ...transactions, data: transactionsTestData };
      props = { ...props, transactions }
      rerender(<TransactionsScreen {...props} />);
      expect(container.querySelector(tableCls).querySelector(tableBodyCls).querySelectorAll(tableRowCls))
        .toHaveLength(transactionsTestData.items.length);
    });
  });

  describe('should call loadTransactions', () => {
    test('when financierId is defined', () => {
      financiers = {
        ...financiers,
        data: {
          items: [{ id: financierId }]
        }
      };
      props = { ...props, financiers }
      rerender(<TransactionsScreen {...props} />);
      expect(loadTransactions.lastCall.args).toEqual([{ financierId, offset: 0, limit: 50 }]);
    });
  });
});

describe(Transactions.name, () => {
  test('should render', () => {
    const { container } = renderWithProviders(<Transactions />);
    expect(container.querySelector(headerTitleCls).textContent).toEqual('Transactions');
  });
});