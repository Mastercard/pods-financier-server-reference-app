import { takeLatest } from 'redux-saga/effects';

import { testCallHttpSaga } from 'client/testUtils/saga';

import {
  LOAD_CONTRACT, CONTRACT_LOADED, CONTRACT_LOAD_FAILED,
  CREATE_CONTRACT, CONTRACT_CREATED, CONTRACT_CREATE_FAILED,
  UPDATE_CONTRACT, CONTRACT_UPDATED, CONTRACT_UPDATE_FAILED
} from './reducer';

import contractSagas, { loadContract, createContract, updateContract } from './sagas';

describe(contractSagas.name, () => {
  const contractId = 'contractId';
  const financierId = 'financierId';

  const body = {
    id: contractId,
    financierId,
    currency: 'UGX'
  };

  testCallHttpSaga({
    saga: loadContract,
    sagaParams: [{ payload: { id: contractId, financier_id: financierId } }],
    testedUrl: `/contracts/${contractId}`,
    testedRequestOptions: { method: 'GET', params: { financier_id: financierId } },
    testedSuccessActionType: CONTRACT_LOADED,
    testedFailureActionType: CONTRACT_LOAD_FAILED
  });

  testCallHttpSaga({
    saga: createContract,
    sagaParams: [{ payload: body }],
    testedUrl: '/contracts',
    testedRequestOptions: { method: 'POST', data: body },
    testedSuccessActionType: CONTRACT_CREATED,
    testedFailureActionType: CONTRACT_CREATE_FAILED
  });

  testCallHttpSaga({
    saga: updateContract,
    sagaParams: [{ payload: body }],
    testedUrl: `/contracts/${contractId}`,
    testedRequestOptions: { method: 'PUT', data: body },
    testedSuccessActionType: CONTRACT_UPDATED,
    testedFailureActionType: CONTRACT_UPDATE_FAILED
  });

  test('it should watch for actions', () => {
    const iterator = contractSagas();
    expect(iterator.next().value).toEqual(takeLatest(LOAD_CONTRACT, loadContract));
    expect(iterator.next().value).toEqual(takeLatest(CREATE_CONTRACT, createContract));
    expect(iterator.next().value).toEqual(takeLatest(UPDATE_CONTRACT, updateContract));
  });
});