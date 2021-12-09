import { combineReducers } from 'redux';

import financiersReducer, { initialState as financiersReducerInitialState } from './financiers/reducer';
import financierReducer, { initialState as financierReducerInitialState } from './financier/reducer';
import gatewaysReducer, { initialState as gatewaysReducerInitialState } from './gateways/reducer';
import gatewayConfigsReducer, { initialState as gatewayConfigsReducerInitialState } from './gatewayConfigs/reducer';
import gatewayConfigReducer, { initialState as gatewayConfigReducerInitialState } from './gatewayConfig/reducer';
import contractsReducer, { initialState as contractsReducerInitialState } from './contracts/reducer';
import contractReducer, { initialState as contractReducerInitialState } from './contract/reducer';
import devicesReducer, { initialState as devicesReducerInitialState } from './devices/reducer';
import transactionsReducer, { initialState as transactionsReducerInitialState } from './transactions/reducer';

export default combineReducers({
  financiers: financiersReducer,
  financier: financierReducer,
  gateways: gatewaysReducer,
  gatewayConfigs: gatewayConfigsReducer,
  gatewayConfig: gatewayConfigReducer,
  contracts: contractsReducer,
  contract: contractReducer,
  devices: devicesReducer,
  transactions: transactionsReducer
});

export const initialState = {
  financiers: financiersReducerInitialState,
  financier: financierReducerInitialState,
  gateways: gatewaysReducerInitialState,
  gatewayConfigs: gatewayConfigsReducerInitialState,
  gatewayConfig: gatewayConfigReducerInitialState,
  contracts: contractsReducerInitialState,
  contract: contractReducerInitialState,
  devices: devicesReducerInitialState,
  transactions: transactionsReducerInitialState
};