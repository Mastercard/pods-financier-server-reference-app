import { takeLatest } from 'redux-saga/effects';

import { testCallHttpSaga } from 'client/testUtils/saga';

import {
  CREATE_FINANCIER, FINANCIER_CREATED, FINANCIER_CREATE_FAILED
} from './reducer';

import financierSagas, { createFinancier } from './sagas';

describe(financierSagas.name, () => {
  const body = {
    name: 'financier'
  };

  testCallHttpSaga({
    saga: createFinancier,
    sagaParams: [{ payload: body }],
    testedUrl: '/financiers',
    testedRequestOptions: { method: 'POST', data: body },
    testedSuccessActionType: FINANCIER_CREATED,
    testedFailureActionType: FINANCIER_CREATE_FAILED
  });

  test('it should watch for actions', () => {
    const iterator = financierSagas();
    expect(iterator.next().value).toEqual(takeLatest(CREATE_FINANCIER, createFinancier));
  });
});