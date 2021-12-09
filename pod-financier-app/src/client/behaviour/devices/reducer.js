import { INITIAL_STATE, triggerReducer, successReducer, failureReducer } from '../commonUtils';

export const LOAD_DEVICES = 'LOAD_DEVICES';
export const DEVICES_LOADED = 'DEVICES_LOADED';
export const DEVICES_LOAD_FAILED = 'DEVICES_LOAD_FAILED';

export const initialState = {
  load: { ...INITIAL_STATE }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DEVICES: return { ...state, load: triggerReducer(state.load) };
    case DEVICES_LOADED: return { ...state, load: successReducer(state.load, action) };
    case DEVICES_LOAD_FAILED: return { ...state, load: failureReducer(state.load, action) };
    default: return state;
  }
};
