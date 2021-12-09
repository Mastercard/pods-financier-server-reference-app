import { INITIAL_STATE, triggerReducer, successReducer, failureReducer } from '../commonUtils';

export const LOAD_CONTRACTS = 'LOAD_CONTRACTS';
export const CONTRACTS_LOADED = 'CONTRACTS_LOADED';
export const CONTRACTS_LOAD_FAILED = 'CONTRACTS_LOAD_FAILED';

export const initialState = {
  load: { ...INITIAL_STATE }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTRACTS: return { ...state, load: triggerReducer(state.load) };
    case CONTRACTS_LOADED: return { ...state, load: successReducer(state.load, action) };
    case CONTRACTS_LOAD_FAILED: return { ...state, load: failureReducer(state.load, action) };
    default: return state;
  }
};
