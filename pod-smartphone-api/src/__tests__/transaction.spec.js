beforeEach(() => jest.resetModules());

const createTransactionMock = (handler) =>
  jest.mock('pod-api-client/src/api/TransactionsApi', () =>
    jest.fn().mockImplementation(() => ({
      addTransaction: handler,
    }))
  );

describe('create transaction', () => {
  test('error response', () => {
    createTransactionMock((opts, callback) =>
      callback('Server error', null, null)
    );
    const transactionApiService = require('../transaction')(null);
    transactionApiService.createTransaction(
      {},
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('invalid response', () => {
    createTransactionMock((opts, callback) =>
      callback(null, null, 'Invalid data')
    );
    const transactionApiService = require('../transaction')(null);
    transactionApiService.createTransaction(
      {},
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('success response', () => {
    createTransactionMock((opts, callback) => callback(null, {}, null));
    const transactionApiService = require('../transaction')(null);
    transactionApiService.createTransaction(
      { id: 'test-transaction-id' },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
});

const retrieveTransactionsMock = (handler) =>
  jest.mock('pod-api-client/src/api/TransactionsApi', () =>
    jest.fn().mockImplementation(() => ({
      getTransactions: handler,
    }))
  );

describe('retrieve transactions', () => {
  test('error response', () => {
    retrieveTransactionsMock((financierId, opts, callback) =>
      callback('Server error', null, null)
    );
    const transactionApiService = require('../transaction')(null);
    transactionApiService.getTransactions({ query: {} }, { send: () => jest.fn() });
  });
  test('invalid response', () => {
    retrieveTransactionsMock((financierId, opts, callback) =>
      callback(null, null, 'Invalid data')
    );
    const transactionApiService = require('../transaction')(null);
    transactionApiService.getTransactions({ query: {} }, { send: () => jest.fn() });
  });
  test('success response', () => {
    retrieveTransactionsMock((financierId, opts, callback) =>
      callback(null, { items: [{ id: 'test-transaction-id' }] }, null)
    );
    const transactionApiService = require('../transaction')(null);
    transactionApiService.getTransactions({ query: {} }, { send: () => jest.fn() });
  });
});

const updateTransactionMock = (handler) =>
  jest.mock('pod-api-client/src/api/TransactionsApi', () =>
    jest.fn().mockImplementation(() => ({
      updateTransaction: handler,
    }))
  );

describe('update transactions', () => {
  test('error response', () => {
    updateTransactionMock((transactionId, opts, callback) =>
      callback('Server error', null, null)
    );
    const transactionApiService = require('../transaction')(null);
    transactionApiService.updateTransaction(
      { params: { transactionId: 'test-transaction-id' } },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('invalid response', () => {
    updateTransactionMock((transactionId, opts, callback) =>
      callback(null, null, 'Invalid data')
    );
    const transactionApiService = require('../transaction')(null);
    transactionApiService.updateTransaction(
      { params: { transactionId: 'test-transaction-id' } },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
  test('success response', () => {
    updateTransactionMock((transactionId, opts, callback) =>
      callback(null, { items: [{ id: 'test-transaction-id' }] }, null)
    );
    const transactionApiService = require('../transaction')(null);
    transactionApiService.updateTransaction(
      { params: { transactionId: 'test-transaction-id' } },
      { status: () => ({ send: () => jest.fn() }) }
    );
  });
});
