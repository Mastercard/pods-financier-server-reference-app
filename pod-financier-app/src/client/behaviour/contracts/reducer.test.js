import { testReducer, testNoopReducer } from 'client/testUtils/reducer';

import contractsReducer, {
  LOAD_CONTRACTS, CONTRACTS_LOADED, CONTRACTS_LOAD_FAILED,
  initialState
} from './reducer';

describe(contractsReducer.name, () => {
  testReducer({
    reducer: contractsReducer,
    initialState,
    stateKey: 'load',
    triggerActionType: LOAD_CONTRACTS,
    successActionType: CONTRACTS_LOADED,
    failureActionType: CONTRACTS_LOAD_FAILED
  });

  testNoopReducer({
    reducer: contractsReducer,
    initialState,
    triggerActionType: LOAD_CONTRACTS
  });
});