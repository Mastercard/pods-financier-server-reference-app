import { testReducer, testNoopReducer } from 'client/testUtils/reducer';

import devicesReducer, {
  LOAD_DEVICES, DEVICES_LOADED, DEVICES_LOAD_FAILED,
  initialState
} from './reducer';

describe(devicesReducer.name, () => {
  testReducer({
    reducer: devicesReducer,
    initialState,
    stateKey: 'load',
    triggerActionType: LOAD_DEVICES,
    successActionType: DEVICES_LOADED,
    failureActionType: DEVICES_LOAD_FAILED
  });

  testNoopReducer({
    reducer: devicesReducer,
    initialState,
    triggerActionType: LOAD_DEVICES
  });
});