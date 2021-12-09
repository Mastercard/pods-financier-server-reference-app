import { INITIAL_STATE, triggerReducer, successReducer, failureReducer } from '../commonUtils';

export const LOAD_GATEWAYS = 'LOAD_GATEWAYS';
export const GATEWAYS_LOADED = 'GATEWAYS_LOADED';
export const GATEWAYS_LOAD_FAILED = 'GATEWAYS_LOAD_FAILED';

export const initialState = {
  load: { ...INITIAL_STATE }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GATEWAYS: return { ...state, load: triggerReducer(state.load) };
    case GATEWAYS_LOADED: return { ...state, load: successReducer(state.load, action) };
    case GATEWAYS_LOAD_FAILED: return { ...state, load: failureReducer(state.load, action) };
    default: return state;
  }
};
