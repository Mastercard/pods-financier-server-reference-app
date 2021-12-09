beforeEach(() => jest.resetModules());

const createGatewayConfigurationMock = (handler) =>
  jest.mock('pod-api-client/src/api/GatewayConfigurationApi', () =>
    jest.fn().mockImplementation(() => ({
      addGatewayConfiguration: handler,
    }))
  );

describe('create gatewayConfiguration', () => {
  test('error response', () => {
    createGatewayConfigurationMock((opts, callback) =>
      callback('Server error', null, null)
    );
    const gatewayConfigurationApiService = require('../gatewayConfiguration')(
      null
    );
    gatewayConfigurationApiService.createGatewayConfiguration(
      {},
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('invalid response', () => {
    createGatewayConfigurationMock((opts, callback) =>
      callback(null, null, 'Invalid data')
    );
    const gatewayConfigurationApiService = require('../gatewayConfiguration')(
      null
    );
    gatewayConfigurationApiService.createGatewayConfiguration(
      {},
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('success response', () => {
    createGatewayConfigurationMock((opts, callback) =>
      callback(null, {}, null)
    );
    const gatewayConfigurationApiService = require('../gatewayConfiguration')(
      null
    );
    gatewayConfigurationApiService.createGatewayConfiguration(
      { id: 'test-gatewayConfiguration-id' },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
});

const retrieveGatewayConfigurationsMock = (handler) =>
  jest.mock('pod-api-client/src/api/GatewayConfigurationApi', () =>
    jest.fn().mockImplementation(() => ({
      getGatewayConfigurations: handler,
    }))
  );

describe('retrieve gatewayConfigurations', () => {
  test('error response', () => {
    retrieveGatewayConfigurationsMock((financierId, opts, callback) =>
      callback('Server error', null, null)
    );
    const gatewayConfigurationApiService = require('../gatewayConfiguration')(
      null
    );
    gatewayConfigurationApiService.getGatewayConfigurations(
      { query: {} },
      { send: () => jest.fn() }
    );
  });
  test('invalid response', () => {
    retrieveGatewayConfigurationsMock((financierId, opts, callback) =>
      callback(null, null, 'Invalid data')
    );
    const gatewayConfigurationApiService = require('../gatewayConfiguration')(
      null
    );
    gatewayConfigurationApiService.getGatewayConfigurations(
      { query: {} },
      { send: () => jest.fn() }
    );
  });
  test('success response', () => {
    retrieveGatewayConfigurationsMock((financierId, opts, callback) =>
      callback(null, { items: [{ id: 'test-gatewayConfiguration-id' }] }, null)
    );
    const gatewayConfigurationApiService = require('../gatewayConfiguration')(
      null
    );
    gatewayConfigurationApiService.getGatewayConfigurations(
      { query: {} },
      { send: () => jest.fn() }
    );
  });
});

const retrieveGatewayConfigurationMock = (handler) =>
  jest.mock('pod-api-client/src/api/GatewayConfigurationApi', () =>
    jest.fn().mockImplementation(() => ({
      getGatewayConfiguration: handler,
    }))
  );

describe('retrieve contract', () => {
  test('error response', () => {
    retrieveGatewayConfigurationMock((gatewayConfigurationId, callback) =>
      callback('Server error', null, null)
    );
    const gwCfgApiService = require('../gatewayConfiguration')(null);
    gwCfgApiService.getGatewayConfiguration(
      { params: {} },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('invalid response', () => {
    retrieveGatewayConfigurationMock((gatewayConfigurationId, callback) =>
      callback(null, null, 'Invalid data')
    );
    const gwCfgApiService = require('../gatewayConfiguration')(null);
    gwCfgApiService.getGatewayConfiguration(
      { params: {} },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('success response', () => {
    retrieveGatewayConfigurationMock((gatewayConfigurationId, callback) =>
      callback(null, { items: [{ id: 'test-gateway-config-id' }] }, null)
    );
    const gwCfgApiService = require('../gatewayConfiguration')(null);
    gwCfgApiService.getGatewayConfiguration(
      { params: { gatewayConfigurationId: 'test-gateway-config-id' } },
      { send: () => jest.fn() }
    );
  });
});

const updateGatewayConfigurationMock = (handler) =>
  jest.mock('pod-api-client/src/api/GatewayConfigurationApi', () =>
    jest.fn().mockImplementation(() => ({
      updateGatewayConfiguration: handler,
    }))
  );

describe('update gatewayConfigurations', () => {
  test('error response', () => {
    updateGatewayConfigurationMock((gatewayConfigurationId, opts, callback) =>
      callback('Server error', null, null)
    );
    const gatewayConfigurationApiService = require('../gatewayConfiguration')(
      null
    );
    gatewayConfigurationApiService.updateGatewayConfiguration(
      { params: { gatewayConfigurationId: 'test-gatewayConfiguration-id' } },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('invalid response', () => {
    updateGatewayConfigurationMock((gatewayConfigurationId, opts, callback) =>
      callback(null, null, 'Invalid data')
    );
    const gatewayConfigurationApiService = require('../gatewayConfiguration')(
      null
    );
    gatewayConfigurationApiService.updateGatewayConfiguration(
      { params: { gatewayConfigurationId: 'test-gatewayConfiguration-id' } },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('success response', () => {
    updateGatewayConfigurationMock((gatewayConfigurationId, opts, callback) =>
      callback(null, { items: [{ id: 'test-gatewayConfiguration-id' }] }, null)
    );
    const gatewayConfigurationApiService = require('../gatewayConfiguration')(
      null
    );
    gatewayConfigurationApiService.updateGatewayConfiguration(
      { params: { gatewayConfigurationId: 'test-gatewayConfiguration-id' } },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
});

const deleteGatewayConfigurationMock = (handler) =>
  jest.mock('pod-api-client/src/api/GatewayConfigurationApi', () =>
    jest.fn().mockImplementation(() => ({
      deleteGatewayConfiguration: handler,
    }))
  );

describe('delete gatewayConfigurations', () => {
  test('error response', () => {
    deleteGatewayConfigurationMock((gatewayConfigurationId, callback) =>
      callback('Server error', null, { res: { statusCode: 400 } })
    );
    const gatewayConfigurationApiService = require('../gatewayConfiguration')(
      null
    );
    gatewayConfigurationApiService.deleteGatewayConfiguration(
      { params: { gatewayConfigurationId: 'test-gatewayConfiguration-id' } },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('invalid response', () => {
    deleteGatewayConfigurationMock((gatewayConfigurationId, callback) =>
      callback(null, null, { res: { statusCode: 400 } })
    );
    const gatewayConfigurationApiService = require('../gatewayConfiguration')(
      null
    );
    gatewayConfigurationApiService.deleteGatewayConfiguration(
      { params: { gatewayConfigurationId: 'test-gatewayConfiguration-id' } },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('success response', () => {
    deleteGatewayConfigurationMock((gatewayConfigurationId, callback) =>
      callback(
        null,
        { items: [{ id: 'test-gatewayConfiguration-id' }] },
        { res: { statusCode: 200 } }
      )
    );
    const gatewayConfigurationApiService = require('../gatewayConfiguration')(
      null
    );
    gatewayConfigurationApiService.deleteGatewayConfiguration(
      { params: { gatewayConfigurationId: 'test-gatewayConfiguration-id' } },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
});
