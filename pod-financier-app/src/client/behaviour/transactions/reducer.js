import { INITIAL_STATE, triggerReducer, successReducer, failureReducer } from '../commonUtils';

export const LOAD_TRANSACTIONS = 'LOAD_TRANSACTIONS';
export const TRANSACTIONS_LOADED = 'TRANSACTIONS_LOADED';
export const TRANSACTIONS_LOAD_FAILED = 'TRANSACTIONS_LOAD_FAILED';

export const initialState = {
  load: { ...INITIAL_STATE }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TRANSACTIONS: return { ...state, load: triggerReducer(state.load) };
    case TRANSACTIONS_LOADED: return { ...state, load: successReducer(state.load, action) };
    case TRANSACTIONS_LOAD_FAILED: return { ...state, load: failureReducer(state.load, action) };
    default: return state;
  }
};