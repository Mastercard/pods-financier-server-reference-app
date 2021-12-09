beforeEach(() => jest.resetModules());

const createContractMock = (handler) =>
  jest.mock('pod-api-client/src/api/ContractsApi', () =>
    jest.fn().mockImplementation(() => ({
      addContract: handler,
    }))
  );

describe('create contract', () => {
  test('error response', () => {
    createContractMock((opts, callback) =>
      callback('Server error', null, null)
    );
    const contractApiService = require('../contract')(null);
    contractApiService.createContract(
      {},
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('invalid response', () => {
    createContractMock((opts, callback) =>
      callback(null, null, 'Invalid data')
    );
    const contractApiService = require('../contract')(null);
    contractApiService.createContract(
      {},
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('success response', () => {
    createContractMock((opts, callback) => callback(null, {}, null));
    const contractApiService = require('../contract')(null);
    contractApiService.createContract(
      { id: 'test-contract-id' },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
});

const retrieveContractsMock = (handler) =>
  jest.mock('pod-api-client/src/api/ContractsApi', () =>
    jest.fn().mockImplementation(() => ({
      getContracts: handler,
    }))
  );

describe('retrieve contracts', () => {
  test('error response', () => {
    retrieveContractsMock((financierId, opts, callback) =>
      callback('Server error', null, null)
    );
    const contractApiService = require('../contract')(null);
    contractApiService.getContracts({ query: {} }, { send: () => jest.fn() });
  });
  test('invalid response', () => {
    retrieveContractsMock((financierId, opts, callback) =>
      callback(null, null, 'Invalid data')
    );
    const contractApiService = require('../contract')(null);
    contractApiService.getContracts({ query: {} }, { send: () => jest.fn() });
  });
  test('success response', () => {
    retrieveContractsMock((financierId, opts, callback) =>
      callback(null, { items: [{ id: 'test-contract-id' }] }, null)
    );
    const contractApiService = require('../contract')(null);
    contractApiService.getContracts({ query: {} }, { send: () => jest.fn() });
  });
});

const retrieveContractMock = (handler) =>
  jest.mock('pod-api-client/src/api/ContractsApi', () =>
    jest.fn().mockImplementation(() => ({
      getContract: handler,
    }))
  );

describe('retrieve contract', () => {
  test('error response', () => {
    retrieveContractMock((contractId, financierId, callback) =>
      callback('Server error', null, null)
    );
    const contractApiService = require('../contract')(null);
    contractApiService.getContract(
      { params: {}, query: {} },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('invalid response', () => {
    retrieveContractMock((contractId, financierId, callback) =>
      callback(null, null, 'Invalid data')
    );
    const contractApiService = require('../contract')(null);
    contractApiService.getContract(
      { params: {}, query: {} },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('success response', () => {
    retrieveContractMock((contractId, financierId, callback) =>
      callback(null, { items: [{ id: 'test-contract-id' }] }, null)
    );
    const contractApiService = require('../contract')(null);
    contractApiService.getContract(
      {
        params: { contractId: 'test-contract-id' },
        query: { financierId: 'test-financier-id' },
      },
      { send: () => jest.fn() }
    );
  });
});

const updateContractMock = (handler) =>
  jest.mock('pod-api-client/src/api/ContractsApi', () =>
    jest.fn().mockImplementation(() => ({
      updateContract: handler,
    }))
  );

describe('update contracts', () => {
  test('error response', () => {
    updateContractMock((contractId, opts, callback) =>
      callback('Server error', null, null)
    );
    const contractApiService = require('../contract')(null);
    contractApiService.updateContract(
      { params: { contractId: 'test-contract-id' } },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('invalid response', () => {
    updateContractMock((contractId, opts, callback) =>
      callback(null, null, 'Invalid data')
    );
    const contractApiService = require('../contract')(null);
    contractApiService.updateContract(
      { params: { contractId: 'test-contract-id' } },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('success response', () => {
    updateContractMock((contractId, opts, callback) =>
      callback(null, { items: [{ id: 'test-contract-id' }] }, null)
    );
    const contractApiService = require('../contract')(null);
    contractApiService.updateContract(
      { params: { contractId: 'test-contract-id' } },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
});
