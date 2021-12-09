import { takeLatest } from 'redux-saga/effects';

import { testCallHttpSaga } from 'client/testUtils/saga';

import {
  LOAD_GATEWAYS, GATEWAYS_LOADED, GATEWAYS_LOAD_FAILED
} from './reducer';

import gatewaysSagas, { loadGateways } from './sagas';

describe(gatewaysSagas.name, () => {
  testCallHttpSaga({
    saga: loadGateways,
    testedUrl: '/gateways',
    testedRequestOptions: { method: 'GET' },
    testedSuccessActionType: GATEWAYS_LOADED,
    testedFailureActionType: GATEWAYS_LOAD_FAILED
  });

  test('it should watch for actions', () => {
    const iterator = gatewaysSagas();
    expect(iterator.next().value).toEqual(takeLatest(LOAD_GATEWAYS, loadGateways));
  });
});