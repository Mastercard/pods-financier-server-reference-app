import { call, put, takeLatest } from 'redux-saga/effects';

import { callHttp } from '../commonUtils';

import {
  LOAD_CONTRACTS, CONTRACTS_LOADED, CONTRACTS_LOAD_FAILED
} from './reducer';

export function* loadContracts({ payload }) {
  try {
    const response = yield call(callHttp, '/contracts', {
      method: 'GET',
      params: payload
    });
    yield put({ type: CONTRACTS_LOADED, payload: response });
  } catch (error) {
    yield put({ type: CONTRACTS_LOAD_FAILED, payload: error });
  }
}

export default function* contractsSagas() {
  yield takeLatest(LOAD_CONTRACTS, loadContracts);
}
