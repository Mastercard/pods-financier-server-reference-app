import { call, put, takeLatest } from 'redux-saga/effects';

import { callHttp } from '../commonUtils';

import {
  LOAD_DEVICES, DEVICES_LOADED, DEVICES_LOAD_FAILED
} from './reducer';

export function* loadDevices({ payload }) {
  try {
    const response = yield call(callHttp, '/devices', {
      method: 'GET',
      params: payload
    });
    yield put({ type: DEVICES_LOADED, payload: response });
  } catch (error) {
    yield put({ type: DEVICES_LOAD_FAILED, payload: error });
  }
}

export default function* devicesSagas() {
  yield takeLatest(LOAD_DEVICES, loadDevices);
}