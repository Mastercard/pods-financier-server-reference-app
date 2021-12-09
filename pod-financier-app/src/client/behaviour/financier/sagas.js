import { call, put, takeLatest } from 'redux-saga/effects';

import { callHttp } from '../commonUtils';

import {
  CREATE_FINANCIER, FINANCIER_CREATED, FINANCIER_CREATE_FAILED
} from './reducer';

export function* createFinancier({ payload }) {
  try {
    const response = yield call(callHttp, `/financiers`, {
      method: 'POST',
      data: payload
    });
    yield put({ type: FINANCIER_CREATED, payload: response });
  } catch (error) {
    yield put({ type: FINANCIER_CREATE_FAILED, payload: error });
  }
}

export default function* financierSagas() {
  yield takeLatest(CREATE_FINANCIER, createFinancier);
}
