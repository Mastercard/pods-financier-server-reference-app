import { INITIAL_STATE, triggerReducer, successReducer, failureReducer } from '../commonUtils';

export const LOAD_FINANCIERS = 'LOAD_FINANCIERS';
export const FINANCIERS_LOADED = 'FINANCIERS_LOADED';
export const FINANCIERS_LOAD_FAILED = 'FINANCIERS_LOAD_FAILED';

export const initialState = {
  load: { ...INITIAL_STATE }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FINANCIERS: return { ...state, load: triggerReducer(state.load) };
    case FINANCIERS_LOADED: return { ...state, load: successReducer(state.load, action) };
    case FINANCIERS_LOAD_FAILED: return { ...state, load: failureReducer(state.load, action) };
    default: return state;
  }
};
