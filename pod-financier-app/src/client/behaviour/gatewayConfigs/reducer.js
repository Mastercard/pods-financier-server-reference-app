import { INITIAL_STATE, triggerReducer, successReducer, failureReducer } from '../commonUtils';

export const LOAD_GATEWAY_CONFIGS = 'LOAD_GATEWAY_CONFIGS';
export const GATEWAY_CONFIGS_LOADED = 'GATEWAY_CONFIGS_LOADED';
export const GATEWAY_CONFIGS_LOAD_FAILED = 'GATEWAY_CONFIGS_LOAD_FAILED';

export const initialState = {
  load: { ...INITIAL_STATE }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GATEWAY_CONFIGS: return { ...state, load: triggerReducer(state.load) };
    case GATEWAY_CONFIGS_LOADED: return { ...state, load: successReducer(state.load, action) };
    case GATEWAY_CONFIGS_LOAD_FAILED: return { ...state, load: failureReducer(state.load, action) };
    default: return state;
  }
};
