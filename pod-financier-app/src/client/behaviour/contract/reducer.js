import { INITIAL_STATE, triggerReducer, successReducer, failureReducer, resetReducer } from '../commonUtils';

export const LOAD_CONTRACT = 'LOAD_CONTRACT';
export const CONTRACT_LOADED = 'CONTRACT_LOADED';
export const CONTRACT_LOAD_FAILED = 'CONTRACT_LOAD_FAILED';

export const CREATE_CONTRACT = 'CREATE_CONTRACT';
export const CONTRACT_CREATED = 'CONTRACT_CREATED';
export const CONTRACT_CREATE_FAILED = 'CONTRACT_CREATE_FAILED';
export const RESET_CREATE_CONTRACT = 'RESET_CREATE_CONTRACT';

export const UPDATE_CONTRACT = 'UPDATE_CONTRACT';
export const CONTRACT_UPDATED = 'CONTRACT_UPDATED';
export const CONTRACT_UPDATE_FAILED = 'CONTRACT_UPDATE_FAILED';
export const RESET_UPDATE_CONTRACT = 'RESET_UPDATE_CONTRACT';

export const initialState = {
  load: { ...INITIAL_STATE },
  create: { ...INITIAL_STATE },
  update: { ...INITIAL_STATE }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTRACT: return { ...state, load: triggerReducer(state.load) };
    case CREATE_CONTRACT: return { ...state, create: triggerReducer(state.create) };
    case UPDATE_CONTRACT: return { ...state, update: triggerReducer(state.update) };

    case CONTRACT_LOADED: return { ...state, load: successReducer(state.load, action) };
    case CONTRACT_CREATED: return { ...state, create: successReducer(state.create, action) };
    case CONTRACT_UPDATED: return { ...state, update: successReducer(state.update, action) };

    case CONTRACT_LOAD_FAILED: return { ...state, load: failureReducer(state.load, action) };
    case CONTRACT_CREATE_FAILED: return { ...state, create: failureReducer(state.create, action) };
    case CONTRACT_UPDATE_FAILED: return { ...state, update: failureReducer(state.update, action) };

    case RESET_CREATE_CONTRACT: return { ...state, create: resetReducer() };
    case RESET_UPDATE_CONTRACT: return { ...state, update: resetReducer() };

    default: return state;
  }
};
