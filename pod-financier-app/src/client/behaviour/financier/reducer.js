import { INITIAL_STATE, triggerReducer, successReducer, failureReducer } from '../commonUtils';

export const CREATE_FINANCIER = 'CREATE_FINANCIER';
export const FINANCIER_CREATED = 'FINANCIER_CREATED';
export const FINANCIER_CREATE_FAILED = 'FINANCIER_CREATE_FAILED';

export const initialState = {
  create: { ...INITIAL_STATE }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FINANCIER: return { ...state, create: triggerReducer(state.create) };
    case FINANCIER_CREATED: return { ...state, create: successReducer(state.create, action) };
    case FINANCIER_CREATE_FAILED: return { ...state, create: failureReducer(state.create, action) };
    default: return state;
  }
};
