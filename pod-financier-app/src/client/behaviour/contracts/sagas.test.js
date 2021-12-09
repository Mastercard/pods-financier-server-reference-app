import { takeLatest } from 'redux-saga/effects';

import { testCallHttpSaga } from 'client/testUtils/saga';

import {
  LOAD_CONTRACTS, CONTRACTS_LOADED, CONTRACTS_LOAD_FAILED
} from './reducer';

import contractsSagas, { loadContracts } from './sagas';

describe(contractsSagas.name, () => {
  const payload = { financier_id: 'financierId', offset: 0, limit: 50 };

  testCallHttpSaga({
    saga: loadContracts,
    sagaParams: [{ payload }],
    testedUrl: '/contracts',
    testedRequestOptions: { method: 'GET', params: payload },
    testedSuccessActionType: CONTRACTS_LOADED,
    testedFailureActionType: CONTRACTS_LOAD_FAILED
  });

  test('it should watch for actions', () => {
    const iterator = contractsSagas();
    expect(iterator.next().value).toEqual(takeLatest(LOAD_CONTRACTS, loadContracts));
  });
});