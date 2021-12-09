beforeEach(() => jest.resetModules());

const retrieveGatewaysMock = (handler) =>
  jest.mock('pod-api-client/src/api/GatewayApi', () =>
    jest.fn().mockImplementation(() => ({
      getGateways: handler,
    }))
  );

describe('retrieve Gateways', () => {
  test('error response', () => {
    retrieveGatewaysMock((callback) => callback('Server error', null, null));
    const gatewayApiService = require('../gateway')(null);
    gatewayApiService.getGateways({ query: {} }, { send: () => jest.fn() });
  });
  test('invalid response', () => {
    retrieveGatewaysMock((callback) => callback(null, null, 'Invalid data'));
    const gatewayApiService = require('../gateway')(null);
    gatewayApiService.getGateways({ query: {} }, { send: () => jest.fn() });
  });
  test('success response', () => {
    retrieveGatewaysMock((callback) =>
      callback(null, { items: [{ id: 'test-gateway-id' }] }, null)
    );
    const gatewayApiService = require('../gateway')(null);
    gatewayApiService.getGateways({ query: {} }, { send: () => jest.fn() });
  });
});
