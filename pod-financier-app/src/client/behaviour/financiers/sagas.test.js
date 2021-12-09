import { takeLatest } from 'redux-saga/effects';

import { testCallHttpSaga } from 'client/testUtils/saga';

import {
  LOAD_FINANCIERS, FINANCIERS_LOADED, FINANCIERS_LOAD_FAILED
} from './reducer';

import financiersSagas, { loadFinanciers } from './sagas';

describe(financiersSagas.name, () => {
  testCallHttpSaga({
    saga: loadFinanciers,
    testedUrl: '/financiers',
    testedRequestOptions: { method: 'GET' },
    testedSuccessActionType: FINANCIERS_LOADED,
    testedFailureActionType: FINANCIERS_LOAD_FAILED
  });

  test('it should watch for actions', () => {
    const iterator = financiersSagas();
    expect(iterator.next().value).toEqual(takeLatest(LOAD_FINANCIERS, loadFinanciers));
  });
});