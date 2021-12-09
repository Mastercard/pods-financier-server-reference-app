import { call, put, takeLatest } from 'redux-saga/effects';

import { callHttp } from '../commonUtils';

import {
  LOAD_GATEWAY_CONFIGS, GATEWAY_CONFIGS_LOADED, GATEWAY_CONFIGS_LOAD_FAILED
} from './reducer';

export function* loadGatewayConfigs({ payload }) {
  try {
    const response = yield call(callHttp, '/gateway-configs', {
      method: 'GET',
      params: payload
    });
    yield put({ type: GATEWAY_CONFIGS_LOADED, payload: response });
  } catch (error) {
    yield put({ type: GATEWAY_CONFIGS_LOAD_FAILED, payload: error });
  }
}

export default function* gatewayConfigSagas() {
  yield takeLatest(LOAD_GATEWAY_CONFIGS, loadGatewayConfigs);
}