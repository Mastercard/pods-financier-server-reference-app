import { testReducer, testNoopReducer } from 'client/testUtils/reducer';

import financierReducer, {
  CREATE_FINANCIER, FINANCIER_CREATED, FINANCIER_CREATE_FAILED,
  initialState
} from './reducer';

describe(financierReducer.name, () => {
  testReducer({
    reducer: financierReducer,
    initialState,
    stateKey: 'create',
    triggerActionType: CREATE_FINANCIER,
    successActionType: FINANCIER_CREATED,
    failureActionType: FINANCIER_CREATE_FAILED
  });

  testNoopReducer({
    reducer: financierReducer,
    initialState,
    triggerActionType: CREATE_FINANCIER
  });
});