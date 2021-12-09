import { testReducer, testNoopReducer } from 'client/testUtils/reducer';

import gatewayConfigsReducer, {
  LOAD_GATEWAY_CONFIGS, GATEWAY_CONFIGS_LOADED, GATEWAY_CONFIGS_LOAD_FAILED,
  initialState
} from './reducer';

describe(gatewayConfigsReducer.name, () => {
  testReducer({
    reducer: gatewayConfigsReducer,
    initialState,
    stateKey: 'load',
    triggerActionType: LOAD_GATEWAY_CONFIGS,
    successActionType: GATEWAY_CONFIGS_LOADED,
    failureActionType: GATEWAY_CONFIGS_LOAD_FAILED
  });

  testNoopReducer({
    reducer: gatewayConfigsReducer,
    initialState,
    triggerActionType: LOAD_GATEWAY_CONFIGS
  });
});