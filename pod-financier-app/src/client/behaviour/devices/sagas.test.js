import { takeLatest } from 'redux-saga/effects';

import { testCallHttpSaga } from 'client/testUtils/saga';

import {
  LOAD_DEVICES, DEVICES_LOADED, DEVICES_LOAD_FAILED
} from './reducer';

import devicesSagas, { loadDevices } from './sagas';

describe(devicesSagas.name, () => {
  const payload = { financier_id: 'financierId', offset: 0, limit: 50 };

  testCallHttpSaga({
    saga: loadDevices,
    sagaParams: [{ payload }],
    testedUrl: '/devices',
    testedRequestOptions: { method: 'GET', params: payload },
    testedSuccessActionType: DEVICES_LOADED,
    testedFailureActionType: DEVICES_LOAD_FAILED
  });

  test('it should watch for actions', () => {
    const iterator = devicesSagas();
    expect(iterator.next().value).toEqual(takeLatest(LOAD_DEVICES, loadDevices));
  });
});