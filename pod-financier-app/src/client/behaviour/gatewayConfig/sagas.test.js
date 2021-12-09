import { takeLatest } from 'redux-saga/effects';

import { testCallHttpSaga } from 'client/testUtils/saga';

import {
  LOAD_GATEWAY_CONFIG, GATEWAY_CONFIG_LOADED, GATEWAY_CONFIG_LOAD_FAILED,
  CREATE_GATEWAY_CONFIG, GATEWAY_CONFIG_CREATED, GATEWAY_CONFIG_CREATE_FAILED,
  UPDATE_GATEWAY_CONFIG, GATEWAY_CONFIG_UPDATED, GATEWAY_CONFIG_UPDATE_FAILED,
  DELETE_GATEWAY_CONFIG, GATEWAY_CONFIG_DELETED, GATEWAY_CONFIG_DELETE_FAILED
} from './reducer';

import gatewayConfigSagas, {
  loadGatewayConfig, createGatewayConfig, updateGatewayConfig, deleteGatewayConfig
} from './sagas';

describe(gatewayConfigSagas.name, () => {
  const gatewayConfigId = 'gatewayConfigId';
  const financierId = 'financierId';
  const configuration = 'configuration';

  const body = {
    id: gatewayConfigId,
    financierId,
    configuration
  };

  testCallHttpSaga({
    saga: loadGatewayConfig,
    sagaParams: [{ payload: { id: gatewayConfigId } }],
    testedUrl: `/gateway-configs/${gatewayConfigId}`,
    testedRequestOptions: { method: 'GET' },
    testedSuccessActionType: GATEWAY_CONFIG_LOADED,
    testedFailureActionType: GATEWAY_CONFIG_LOAD_FAILED
  });

  testCallHttpSaga({
    saga: createGatewayConfig,
    sagaParams: [{ payload: body }],
    testedUrl: '/gateway-configs',
    testedRequestOptions: { method: 'POST', data: body },
    testedSuccessActionType: GATEWAY_CONFIG_CREATED,
    testedFailureActionType: GATEWAY_CONFIG_CREATE_FAILED
  });

  testCallHttpSaga({
    saga: updateGatewayConfig,
    sagaParams: [{ payload: body }],
    testedUrl: `/gateway-configs/${gatewayConfigId}`,
    testedRequestOptions: { method: 'PUT', data: body },
    testedSuccessActionType: GATEWAY_CONFIG_UPDATED,
    testedFailureActionType: GATEWAY_CONFIG_UPDATE_FAILED
  });

  testCallHttpSaga({
    saga: deleteGatewayConfig,
    sagaParams: [{ payload: { id: gatewayConfigId } }],
    testedUrl: `/gateway-configs/${gatewayConfigId}`,
    testedRequestOptions: { method: 'DELETE' },
    testedSuccessActionType: GATEWAY_CONFIG_DELETED,
    testedFailureActionType: GATEWAY_CONFIG_DELETE_FAILED
  });

  test('it should watch for actions', () => {
    const iterator = gatewayConfigSagas();
    expect(iterator.next().value).toEqual(takeLatest(LOAD_GATEWAY_CONFIG, loadGatewayConfig));
    expect(iterator.next().value).toEqual(takeLatest(CREATE_GATEWAY_CONFIG, createGatewayConfig));
    expect(iterator.next().value).toEqual(takeLatest(UPDATE_GATEWAY_CONFIG, updateGatewayConfig));
    expect(iterator.next().value).toEqual(takeLatest(DELETE_GATEWAY_CONFIG, deleteGatewayConfig));
  });
});