import { call, put, takeLatest } from 'redux-saga/effects';

import { callHttp } from '../commonUtils';

import {
  LOAD_GATEWAYS, GATEWAYS_LOADED, GATEWAYS_LOAD_FAILED
} from './reducer';

export function* loadGateways() {
  try {
    const response = yield call(callHttp, '/gateways', {
      method: 'GET'
    });
    yield put({ type: GATEWAYS_LOADED, payload: response });
  } catch (error) {
    yield put({ type: GATEWAYS_LOAD_FAILED, payload: error });
  }
}

export default function* gatewaysSagas() {
  yield takeLatest(LOAD_GATEWAYS, loadGateways);
}
