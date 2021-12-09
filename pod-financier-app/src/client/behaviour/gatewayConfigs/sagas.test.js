import { takeLatest } from 'redux-saga/effects';

import { testCallHttpSaga } from 'client/testUtils/saga';

import {
  LOAD_GATEWAY_CONFIGS, GATEWAY_CONFIGS_LOADED, GATEWAY_CONFIGS_LOAD_FAILED
} from './reducer';

import gatewayConfigsSagas, { loadGatewayConfigs } from './sagas';

describe(gatewayConfigsSagas.name, () => {
  const payload = { financier_id: 'financierId', offset: 0, limit: 50 };

  testCallHttpSaga({
    saga: loadGatewayConfigs,
    sagaParams: [{ payload }],
    testedUrl: '/gateway-configs',
    testedRequestOptions: { method: 'GET', params: payload },
    testedSuccessActionType: GATEWAY_CONFIGS_LOADED,
    testedFailureActionType: GATEWAY_CONFIGS_LOAD_FAILED
  });

  test('it should watch for actions', () => {
    const iterator = gatewayConfigsSagas();
    expect(iterator.next().value).toEqual(takeLatest(LOAD_GATEWAY_CONFIGS, loadGatewayConfigs));
  });
});