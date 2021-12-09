import { call, put, takeLatest } from 'redux-saga/effects';

import { callHttp } from '../commonUtils';

import {
  LOAD_FINANCIERS, FINANCIERS_LOADED, FINANCIERS_LOAD_FAILED
} from './reducer';

export function* loadFinanciers() {
  try {
    const response = yield call(callHttp, '/financiers', {
      method: 'GET'
    });
    yield put({ type: FINANCIERS_LOADED, payload: response });
  } catch (error) {
    yield put({ type: FINANCIERS_LOAD_FAILED, payload: error });
  }
}

export default function* financiersSagas() {
  yield takeLatest(LOAD_FINANCIERS, loadFinanciers);
}