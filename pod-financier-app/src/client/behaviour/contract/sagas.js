import { call, put, takeLatest } from 'redux-saga/effects';

import { callHttp } from '../commonUtils';

import {
  LOAD_CONTRACT, CONTRACT_LOADED, CONTRACT_LOAD_FAILED,
  CREATE_CONTRACT, CONTRACT_CREATED, CONTRACT_CREATE_FAILED,
  UPDATE_CONTRACT, CONTRACT_UPDATED, CONTRACT_UPDATE_FAILED
} from './reducer';

export function* loadContract({ payload }) {
  const { id, ...params } = payload;
  try {
    const response = yield call(callHttp, `/contracts/${id}`, {
      method: 'GET',
      params
    });
    yield put({ type: CONTRACT_LOADED, payload: response });
  } catch (error) {
    yield put({ type: CONTRACT_LOAD_FAILED, payload: error });
  }
}

export function* createContract({ payload }) {
  try {
    const response = yield call(callHttp, '/contracts', {
      method: 'POST',
      data: payload
    });
    yield put({ type: CONTRACT_CREATED, payload: response });
  } catch (error) {
    yield put({ type: CONTRACT_CREATE_FAILED, payload: error });
  }
}

export function* updateContract({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(callHttp, `/contracts/${id}`, {
      method: 'PUT',
      data: payload
    });
    yield put({ type: CONTRACT_UPDATED, payload: response });
  } catch (error) {
    yield put({ type: CONTRACT_UPDATE_FAILED, payload: error });
  }
}

export default function* contractSagas() {
  yield takeLatest(LOAD_CONTRACT, loadContract);
  yield takeLatest(CREATE_CONTRACT, createContract);
  yield takeLatest(UPDATE_CONTRACT, updateContract);
}
