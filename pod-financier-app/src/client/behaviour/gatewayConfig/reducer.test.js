import { testReducer, testNoopReducer } from 'client/testUtils/reducer';

import gatewayConfigReducer, {
  LOAD_GATEWAY_CONFIG, GATEWAY_CONFIG_LOADED, GATEWAY_CONFIG_LOAD_FAILED,
  CREATE_GATEWAY_CONFIG, GATEWAY_CONFIG_CREATED, GATEWAY_CONFIG_CREATE_FAILED, RESET_CREATE_GATEWAY_CONFIG,
  UPDATE_GATEWAY_CONFIG, GATEWAY_CONFIG_UPDATED, GATEWAY_CONFIG_UPDATE_FAILED, RESET_UPDATE_GATEWAY_CONFIG,
  DELETE_GATEWAY_CONFIG, GATEWAY_CONFIG_DELETED, GATEWAY_CONFIG_DELETE_FAILED,
  initialState
} from './reducer';

describe(gatewayConfigReducer.name, () => {
  testReducer({
    reducer: gatewayConfigReducer,
    initialState,
    stateKey: 'load',
    triggerActionType: LOAD_GATEWAY_CONFIG,
    successActionType: GATEWAY_CONFIG_LOADED,
    failureActionType: GATEWAY_CONFIG_LOAD_FAILED
  });

  testReducer({
    reducer: gatewayConfigReducer,
    initialState,
    stateKey: 'create',
    triggerActionType: CREATE_GATEWAY_CONFIG,
    successActionType: GATEWAY_CONFIG_CREATED,
    failureActionType: GATEWAY_CONFIG_CREATE_FAILED,
    resetActionType: RESET_CREATE_GATEWAY_CONFIG
  });

  testReducer({
    reducer: gatewayConfigReducer,
    initialState,
    stateKey: 'update',
    triggerActionType: UPDATE_GATEWAY_CONFIG,
    successActionType: GATEWAY_CONFIG_UPDATED,
    failureActionType: GATEWAY_CONFIG_UPDATE_FAILED,
    resetActionType: RESET_UPDATE_GATEWAY_CONFIG
  });

  testReducer({
    reducer: gatewayConfigReducer,
    initialState,
    stateKey: 'delete',
    triggerActionType: DELETE_GATEWAY_CONFIG,
    successActionType: GATEWAY_CONFIG_DELETED,
    failureActionType: GATEWAY_CONFIG_DELETE_FAILED
  });

  testNoopReducer({
    reducer: gatewayConfigReducer,
    initialState,
    triggerActionType: LOAD_GATEWAY_CONFIG
  });
});