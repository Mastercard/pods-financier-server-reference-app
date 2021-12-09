import { INITIAL_STATE, triggerReducer, successReducer, failureReducer, resetReducer } from '../commonUtils';

export const LOAD_GATEWAY_CONFIG = 'LOAD_GATEWAY_CONFIG';
export const GATEWAY_CONFIG_LOADED = 'GATEWAY_CONFIG_LOADED';
export const GATEWAY_CONFIG_LOAD_FAILED = 'GATEWAY_CONFIG_LOAD_FAILED';

export const CREATE_GATEWAY_CONFIG = 'CREATE_GATEWAY_CONFIG';
export const GATEWAY_CONFIG_CREATED = 'GATEWAY_CONFIG_CREATED';
export const GATEWAY_CONFIG_CREATE_FAILED = 'GATEWAY_CONFIG_CREATE_FAILED';
export const RESET_CREATE_GATEWAY_CONFIG = 'RESET_CREATE_GATEWAY_CONFIG';

export const UPDATE_GATEWAY_CONFIG = 'UPDATE_GATEWAY_CONFIG';
export const GATEWAY_CONFIG_UPDATED = 'GATEWAY_CONFIG_UPDATED';
export const GATEWAY_CONFIG_UPDATE_FAILED = 'GATEWAY_CONFIG_UPDATE_FAILED';
export const RESET_UPDATE_GATEWAY_CONFIG = 'RESET_UPDATE_GATEWAY_CONFIG';

export const DELETE_GATEWAY_CONFIG = 'DELETE_GATEWAY_CONFIG';
export const GATEWAY_CONFIG_DELETED = 'GATEWAY_CONFIG_DELETED';
export const GATEWAY_CONFIG_DELETE_FAILED = 'GATEWAY_CONFIG_DELETE_FAILED';

export const initialState = {
  load: { ...INITIAL_STATE },
  create: { ...INITIAL_STATE },
  update: { ...INITIAL_STATE },
  delete: { ...INITIAL_STATE }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GATEWAY_CONFIG: return { ...state, load: triggerReducer(state.load) };
    case CREATE_GATEWAY_CONFIG: return { ...state, create: triggerReducer(state.create) };
    case UPDATE_GATEWAY_CONFIG: return { ...state, update: triggerReducer(state.update) };
    case DELETE_GATEWAY_CONFIG: return { ...state, delete: triggerReducer(state.delete) };

    case GATEWAY_CONFIG_LOADED: return { ...state, load: successReducer(state.load, action) };
    case GATEWAY_CONFIG_CREATED: return { ...state, create: successReducer(state.create, action) };
    case GATEWAY_CONFIG_UPDATED: return { ...state, update: successReducer(state.update, action) };
    case GATEWAY_CONFIG_DELETED: return { ...state, delete: successReducer(state.delete, action) };

    case GATEWAY_CONFIG_LOAD_FAILED: return { ...state, load: failureReducer(state.load, action) };
    case GATEWAY_CONFIG_CREATE_FAILED: return { ...state, create: failureReducer(state.create, action) };
    case GATEWAY_CONFIG_UPDATE_FAILED: return { ...state, update: failureReducer(state.update, action) };
    case GATEWAY_CONFIG_DELETE_FAILED: return { ...state, delete: failureReducer(state.delete, action) };

    case RESET_CREATE_GATEWAY_CONFIG: return { ...state, create: resetReducer() };
    case RESET_UPDATE_GATEWAY_CONFIG: return { ...state, update: resetReducer() };

    default: return state;
  }
};
