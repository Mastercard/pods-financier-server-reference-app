import { testReducer, testNoopReducer } from 'client/testUtils/reducer';

import gatewaysReducer, {
  LOAD_GATEWAYS, GATEWAYS_LOADED, GATEWAYS_LOAD_FAILED,
  initialState
} from './reducer';

describe(gatewaysReducer.name, () => {
  testReducer({
    reducer: gatewaysReducer,
    initialState,
    stateKey: 'load',
    triggerActionType: LOAD_GATEWAYS,
    successActionType: GATEWAYS_LOADED,
    failureActionType: GATEWAYS_LOAD_FAILED
  });

  testNoopReducer({
    reducer: gatewaysReducer,
    initialState,
    triggerActionType: LOAD_GATEWAYS
  });
});