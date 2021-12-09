jest.mock('dotenv');
jest.mock('pod-api-client/src/ApiClient');
jest.mock('pod-smartphone-api/src/authUtils');

test('server', () => {
  jest.mock('express', () =>
    jest.fn().mockImplementation(() => ({
      listen: jest.fn(),
      get: (route, callback) => {
        if ('/ping' === route) {
          const send = jest.fn();
          callback(null, { send });
          expect(send).toHaveBeenCalledWith('pong');
        }
        if ('/' === route) {
          const sendFile = jest.fn();
          callback(null, { sendFile });
          expect(sendFile).toHaveBeenCalled();
        }
      },
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
      use: jest.fn(),
    }))
  );
  require('express').static = jest.fn();
  jest.mock('pod-smartphone-api/src/financier', () =>
    jest.fn().mockImplementation(() => ({
      getFinanciers: jest.fn(),
      createFinancier: jest.fn(),
    }))
  );
  jest.mock('pod-smartphone-api/src/gateway', () =>
    jest.fn().mockImplementation(() => ({
      getGateways: jest.fn(),
    }))
  );
  jest.mock('pod-smartphone-api/src/gatewayConfiguration', () =>
    jest.fn().mockImplementation(() => ({
      getGatewayConfigurations: jest.fn(),
      createGatewayConfiguration: jest.fn(),
      updateGatewayConfiguration: jest.fn(),
      deleteGatewayConfiguration: jest.fn(),
    }))
  );
  jest.mock('pod-smartphone-api/src/contract', () =>
    jest.fn().mockImplementation(() => ({
      getContracts: jest.fn(),
      createContract: jest.fn(),
      getContract: jest.fn(),
      updateContract: jest.fn(),
    }))
  );
  jest.mock('pod-smartphone-api/src/device', () =>
    jest.fn().mockImplementation(() => ({
      getDevices: jest.fn(),
    }))
  );
  jest.mock('pod-smartphone-api/src/transaction', () =>
    jest.fn().mockImplementation(() => ({
      getTransactions: jest.fn(),
      createTransaction: jest.fn(),
      updateTransaction: jest.fn(),
    }))
  );
  require('./server');
});
