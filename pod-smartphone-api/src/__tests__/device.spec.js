beforeEach(() => jest.resetModules());

const retrieveDevicesMock = (handler) =>
  jest.mock('pod-api-client/src/api/DevicesApi', () =>
    jest.fn().mockImplementation(() => ({
      getDevices: handler,
    }))
  );

describe('retrieve Devices', () => {
  test('error response', () => {
    retrieveDevicesMock((financierId, opts, callback) =>
      callback('Server error', null, null)
    );
    const devicesApiService = require('../device')(null);
    devicesApiService.getDevices({ query: {} }, { send: () => jest.fn() });
  });
  test('invalid response', () => {
    retrieveDevicesMock((financierId, opts, callback) =>
      callback(null, null, 'Invalid data')
    );
    const contractApiService = require('../device')(null);
    contractApiService.getDevices({ query: {} }, { send: () => jest.fn() });
  });
  test('success response', () => {
    retrieveDevicesMock((financierId, opts, callback) =>
      callback(null, { items: [{ id: 'test-device-id' }] }, null)
    );
    const contractApiService = require('../device')(null);
    contractApiService.getDevices({ query: {} }, { send: () => jest.fn() });
  });
});
