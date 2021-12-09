import { testReducer, testNoopReducer } from 'client/testUtils/reducer';

import financiersReducer, {
  LOAD_FINANCIERS, FINANCIERS_LOADED, FINANCIERS_LOAD_FAILED,
  initialState
} from './reducer';

describe(financiersReducer.name, () => {
  testReducer({
    reducer: financiersReducer,
    initialState,
    stateKey: 'load',
    triggerActionType: LOAD_FINANCIERS,
    successActionType: FINANCIERS_LOADED,
    failureActionType: FINANCIERS_LOAD_FAILED
  });

  testNoopReducer({
    reducer: financiersReducer,
    initialState,
    triggerActionType: LOAD_FINANCIERS
  });
});