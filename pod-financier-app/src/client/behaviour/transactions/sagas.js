import { call, put, takeLatest } from 'redux-saga/effects';

import { callHttp } from '../commonUtils';

import {
  LOAD_TRANSACTIONS, TRANSACTIONS_LOADED, TRANSACTIONS_LOAD_FAILED
} from './reducer';

export function* loadTransactions({ payload }) {
  try {
    const response = yield call(callHttp, '/transactions', {
      method: 'GET',
      params: payload
    });
    yield put({ type: TRANSACTIONS_LOADED, payload: response });
  } catch (error) {
    yield put({ type: TRANSACTIONS_LOAD_FAILED, payload: error });
  }
}

export default function* transactionsSagas() {
  yield takeLatest(LOAD_TRANSACTIONS, loadTransactions);
}