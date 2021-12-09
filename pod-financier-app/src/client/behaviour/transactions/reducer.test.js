import { testReducer, testNoopReducer } from 'client/testUtils/reducer';

import transactionsReducer, {
  LOAD_TRANSACTIONS, TRANSACTIONS_LOADED, TRANSACTIONS_LOAD_FAILED,
  initialState
} from './reducer';

describe(transactionsReducer.name, () => {
  testReducer({
    reducer: transactionsReducer,
    initialState,
    stateKey: 'load',
    triggerActionType: LOAD_TRANSACTIONS,
    successActionType: TRANSACTIONS_LOADED,
    failureActionType: TRANSACTIONS_LOAD_FAILED
  });

  testNoopReducer({
    reducer: transactionsReducer,
    initialState,
    triggerActionType: LOAD_TRANSACTIONS
  });
});