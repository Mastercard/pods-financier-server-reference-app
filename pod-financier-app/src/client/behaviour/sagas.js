import financiersSagas from './financiers/sagas';
import financierSagas from './financier/sagas';
import gatewaysSagas from './gateways/sagas';
import gatewayConfigsSagas from './gatewayConfigs/sagas';
import gatewayConfigSagas from './gatewayConfig/sagas';
import contractsSagas from './contracts/sagas';
import contractSagas from './contract/sagas';
import devicesSagas from './devices/sagas';
import transactionsSagas from './transactions/sagas';

const sagas = [
  financiersSagas,
  financierSagas,
  gatewaysSagas,
  gatewayConfigsSagas,
  gatewayConfigSagas,
  contractsSagas,
  contractSagas,
  devicesSagas,
  transactionsSagas
];

export default middleware => sagas.map(saga => middleware.run(saga));
