import { call, put, takeLatest } from 'redux-saga/effects';

import { callHttp } from '../commonUtils';

import {
  LOAD_GATEWAY_CONFIG, GATEWAY_CONFIG_LOADED, GATEWAY_CONFIG_LOAD_FAILED,
  CREATE_GATEWAY_CONFIG, GATEWAY_CONFIG_CREATED, GATEWAY_CONFIG_CREATE_FAILED,
  UPDATE_GATEWAY_CONFIG, GATEWAY_CONFIG_UPDATED, GATEWAY_CONFIG_UPDATE_FAILED,
  DELETE_GATEWAY_CONFIG, GATEWAY_CONFIG_DELETED, GATEWAY_CONFIG_DELETE_FAILED
} from './reducer';

export function* loadGatewayConfig({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(callHttp, `/gateway-configs/${id}`, {
      method: 'GET'
    });
    yield put({ type: GATEWAY_CONFIG_LOADED, payload: response });
  } catch (error) {
    yield put({ type: GATEWAY_CONFIG_LOAD_FAILED, payload: error });
  }
}

export function* createGatewayConfig({ payload }) {
  try {
    const response = yield call(callHttp, '/gateway-configs', {
      method: 'POST',
      data: payload
    });
    yield put({ type: GATEWAY_CONFIG_CREATED, payload: response });
  } catch (error) {
    yield put({ type: GATEWAY_CONFIG_CREATE_FAILED, payload: error });
  }
}

export function* updateGatewayConfig({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(callHttp, `/gateway-configs/${id}`, {
      method: 'PUT',
      data: payload
    });
    yield put({ type: GATEWAY_CONFIG_UPDATED, payload: response });
  } catch (error) {
    yield put({ type: GATEWAY_CONFIG_UPDATE_FAILED, payload: error });
  }
}

export function* deleteGatewayConfig({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(callHttp, `/gateway-configs/${id}`, {
      method: 'DELETE'
    });
    yield put({ type: GATEWAY_CONFIG_DELETED, payload: response });
  } catch (error) {
    yield put({ type: GATEWAY_CONFIG_DELETE_FAILED, payload: error });
  }
}

export default function* gatewayConfigSagas() {
  yield takeLatest(LOAD_GATEWAY_CONFIG, loadGatewayConfig);
  yield takeLatest(CREATE_GATEWAY_CONFIG, createGatewayConfig);
  yield takeLatest(UPDATE_GATEWAY_CONFIG, updateGatewayConfig);
  yield takeLatest(DELETE_GATEWAY_CONFIG, deleteGatewayConfig);
}
