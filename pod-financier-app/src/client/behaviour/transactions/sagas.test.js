import { takeLatest } from 'redux-saga/effects';

import { testCallHttpSaga } from 'client/testUtils/saga';

import {
  LOAD_TRANSACTIONS, TRANSACTIONS_LOADED, TRANSACTIONS_LOAD_FAILED
} from './reducer';

import transactionsSagas, { loadTransactions } from './sagas';

describe(transactionsSagas.name, () => {
  const payload = { financier_id: 'financierId', offset: 0, limit: 50 };

  testCallHttpSaga({
    saga: loadTransactions,
    sagaParams: [{ payload }],
    testedUrl: '/transactions',
    testedRequestOptions: { method: 'GET', params: payload },
    testedSuccessActionType: TRANSACTIONS_LOADED,
    testedFailureActionType: TRANSACTIONS_LOAD_FAILED
  });

  test('it should watch for actions', () => {
    const iterator = transactionsSagas();
    expect(iterator.next().value).toEqual(takeLatest(LOAD_TRANSACTIONS, loadTransactions));
  });
});