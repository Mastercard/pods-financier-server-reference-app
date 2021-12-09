import { testReducer, testNoopReducer } from 'client/testUtils/reducer';

import contractReducer, {
  LOAD_CONTRACT, CONTRACT_LOADED, CONTRACT_LOAD_FAILED,
  CREATE_CONTRACT, CONTRACT_CREATED, CONTRACT_CREATE_FAILED, RESET_CREATE_CONTRACT,
  UPDATE_CONTRACT, CONTRACT_UPDATED, CONTRACT_UPDATE_FAILED, RESET_UPDATE_CONTRACT,
  initialState
} from './reducer';

describe(contractReducer.name, () => {
  testReducer({
    reducer: contractReducer,
    initialState,
    stateKey: 'load',
    triggerActionType: LOAD_CONTRACT,
    successActionType: CONTRACT_LOADED,
    failureActionType: CONTRACT_LOAD_FAILED
  });

  testReducer({
    reducer: contractReducer,
    initialState,
    stateKey: 'create',
    triggerActionType: CREATE_CONTRACT,
    successActionType: CONTRACT_CREATED,
    failureActionType: CONTRACT_CREATE_FAILED,
    resetActionType: RESET_CREATE_CONTRACT
  });

  testReducer({
    reducer: contractReducer,
    initialState,
    stateKey: 'update',
    triggerActionType: UPDATE_CONTRACT,
    successActionType: CONTRACT_UPDATED,
    failureActionType: CONTRACT_UPDATE_FAILED,
    resetActionType: RESET_UPDATE_CONTRACT
  });

  testNoopReducer({
    reducer: contractReducer,
    initialState,
    triggerActionType: LOAD_CONTRACT
  });
});