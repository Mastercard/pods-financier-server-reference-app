export function testReducer({
  reducer,
  initialState,
  stateKey,
  triggerActionType,
  successActionType,
  failureActionType,
  resetActionType
}) {
  const successPayload = { items: ['123'] };
  const failurePayload = { message: 'xyz' };

  const triggerAction = { type: triggerActionType };
  const successAction = { type: successActionType, payload: successPayload };
  const failureAction = { type: failureActionType, payload: failurePayload };

  const state = { ...initialState };
  const newState = reducer(state, triggerAction);

  test(`it should return correct new state for ${triggerAction.type}`, () => {
    expect(newState).toEqual({
      ...state,
      [stateKey]: {
        ...state[stateKey],
        error: null,
        isLoading: true
      }
    });

    expect(reducer(undefined, triggerAction)).toEqual({
      ...initialState,
      [stateKey]: {
        ...initialState[stateKey],
        error: null,
        isLoading: true
      }
    })
  });

  test(`should return correct new state for ${successAction.type}`, () => {
    expect(reducer(newState, successAction)).toEqual({
      ...newState,
      [stateKey]: {
        ...newState[stateKey],
        data: successPayload,
        error: null,
        isLoading: false
      }
    });
  });

  test(`should return correct new state for ${failureAction.type}`, () => {
    expect(reducer(newState, failureAction)).toEqual({
      ...newState,
      [stateKey]: {
        ...newState[stateKey],
        data: null,
        error: failurePayload,
        isLoading: false
      }
    });
  });

  if (resetActionType) {
    const resetAction = { type: resetActionType };

    test(`should return initial state for ${resetAction.type}`, () => {
      expect(reducer(newState, resetAction)).toEqual({
        ...newState,
        [stateKey]: initialState[stateKey]
      });
    });
  }
}

export function testNoopReducer({
  reducer,
  initialState,
  triggerActionType
}) {
  const triggerAction = { type: triggerActionType };

  const newState = reducer(initialState, triggerAction);

  test('should return the same state for undefined action', () => {
    expect(reducer(newState, { type: undefined })).toEqual(newState);
  });
}