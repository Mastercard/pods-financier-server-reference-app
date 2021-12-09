import axios from 'axios';

axios.defaults.headers = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const callHttp = async (url, options) => {
  const response = await axios.request({
    url,
    ...options,
  });
  return response.data;
};

export const INITIAL_STATE = {
  data: null,
  error: null,
  isLoading: false,
};

export function triggerReducer(state) {
  return {
    ...state,
    error: null,
    isLoading: true,
  };
}

export function successReducer(state, action) {
  return {
    ...state,
    data: action.payload,
    error: null,
    isLoading: false,
  };
}

export function failureReducer(state, action) {
  return {
    ...state,
    data: null,
    error: action.payload,
    isLoading: false,
  };
}

export function resetReducer() {
  return { ...INITIAL_STATE };
}
