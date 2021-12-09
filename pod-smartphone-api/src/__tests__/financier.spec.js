beforeEach(() => jest.resetModules());

const createFinancierMock = (handler) =>
  jest.mock('pod-api-client/src/api/FinanciersApi', () =>
    jest.fn().mockImplementation(() => ({
      addFinancier: handler,
    }))
  );

describe('create Financier', () => {
  test('error response', () => {
    createFinancierMock((opts, callback) =>
      callback('Server error', null, null)
    );
    const financierApiService = require('../financier')(null);
    financierApiService.createFinancier(
      {},
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('invalid response', () => {
    createFinancierMock((opts, callback) =>
      callback(null, null, 'Invalid data')
    );
    const financierApiService = require('../financier')(null);
    financierApiService.createFinancier(
      {},
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('success response', () => {
    createFinancierMock((opts, callback) => callback(null, {}, null));
    const financierApiService = require('../financier')(null);
    financierApiService.createFinancier(
      { id: 'test-Financier-id' },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
});

const retrieveFinanciersMock = (handler) =>
  jest.mock('pod-api-client/src/api/FinanciersApi', () =>
    jest.fn().mockImplementation(() => ({
      getFinanciers: handler,
    }))
  );

describe('retrieve Financiers', () => {
  test('error response', () => {
    retrieveFinanciersMock((opts, callback) =>
      callback('Server error', null, null)
    );
    const financierApiService = require('../financier')(null);
    financierApiService.getFinanciers({ query: {} }, { send: () => jest.fn() });
  });
  test('invalid response', () => {
    retrieveFinanciersMock((opts, callback) =>
      callback(null, null, 'Invalid data')
    );
    const financierApiService = require('../financier')(null);
    financierApiService.getFinanciers({ query: {} }, { send: () => jest.fn() });
  });
  test('success response', () => {
    retrieveFinanciersMock((opts, callback) =>
      callback(null, { items: [{ id: 'test-Financier-id' }] }, null)
    );
    const financierApiService = require('../financier')(null);
    financierApiService.getFinanciers({ query: {} }, { send: () => jest.fn() });
  });
  test('use limit, offset from request params', () => {
    retrieveFinanciersMock((opts, callback) =>
      callback(null, { items: [{ id: 'test-Financier-id' }] }, null)
    );
    const financierApiService = require('../financier')(null);
    financierApiService.getFinanciers(
      { query: { limit: 1, offset: 0 } },
      { send: () => jest.fn() }
    );
  });
});
