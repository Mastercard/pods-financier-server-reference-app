jest.mock('pod-smartphone-api/src/authUtils');
jest.mock('dotenv');

beforeEach(() => jest.resetModules());

jest.mock('express', () =>
  jest.fn().mockImplementation(() => ({
    get: jest.fn(),
    listen: jest.fn(),
  }))
);

const mockFinancier = (handler) =>
  jest.mock('pod-api-client/src/api/FinanciersApi', () =>
    jest.fn().mockImplementation(() => ({
      getFinanciers: handler,
    }))
  );

const mockContract = (handler) =>
  jest.mock('pod-api-client/src/api/ContractsApi', () =>
    jest.fn().mockImplementation(() => ({
      getContracts: handler,
    }))
  );

describe('load on startup', () => {
  describe('financier', () => {
    test('error from server', () => {
      mockFinancier((opts, callback) =>
        callback('No financier created', null, null)
      );
      require('./app');
    });
    test('invalid response from server', () => {
      mockFinancier((opts, callback) => callback(null, null, 'Bad response'));
      require('./app');
    });
  });

  describe('contract', () => {
    test('error from server', () => {
      mockFinancier((opts, callback) =>
        callback(null, { items: [{ id: 'test-financier-id' }] }, null)
      );
      mockContract((financierId, opts, callback) =>
        callback('No contract created', null, null)
      );
      require('./app');
    });
    test('invalid response from server', () => {
      mockFinancier((opts, callback) =>
        callback(null, { items: [{ id: 'test-financier-id' }] }, null)
      );
      mockContract((financierId, opts, callback) =>
        callback(null, null, 'Bad response')
      );
      require('./app');
    });
  });

  describe('financier and contract', () => {
    test('loaded successfully', () => {
      mockFinancier((opts, callback) =>
        callback(null, { items: [{ id: 'test-financier-id' }] }, null)
      );
      mockContract((financierId, opts, callback) =>
        callback(null, { items: [{ id: 'test-contract-id' }] }, null)
      );
      require('./app');
    });
  });
});

describe('api', () => {
  describe('ping', () => {
    mockFinancier((opts, callback) =>
      callback(null, { items: [{ id: 'test-financier-id' }] }, null)
    );
    mockContract((financierId, opts, callback) =>
      callback(null, { items: [{ id: 'test-contract-id' }] }, null)
    );
    jest.mock('express', () =>
      jest.fn().mockImplementation(() => ({
        listen: jest.fn(),
        get: (route, callback) => {
          if (route === '/ping') {
            callback(null, { send: jest.fn() });
          }
        },
      }))
    );
    require('./app');
  });

  describe('contract', () => {
    test('return from cache', () => {
      mockFinancier((opts, callback) =>
        callback(null, { items: [{ id: 'test-financier-id' }] }, null)
      );
      mockContract((financierId, opts, callback) =>
        callback(null, { items: [{ id: 'test-contract-id' }] }, null)
      );
      jest.mock('express', () =>
        jest.fn().mockImplementation(() => ({
          listen: jest.fn(),
          get: (route, callback) => {
            if (route === '/contract') {
              callback(null, { send: jest.fn() });
            }
          },
        }))
      );
      require('./app');
    });

    test('error from server', () => {
      mockFinancier((opts, callback) =>
        callback(null, { items: [{ id: 'test-financier-id' }] }, null)
      );
      mockContract((financierId, opts, callback) =>
        callback('Server Error', null, null)
      );
      jest.mock('express', () =>
        jest.fn().mockImplementation(() => ({
          listen: jest.fn(),
          get: (route, callback) => {
            if (route === '/contract') {
              callback(null, { status: () => ({ send: jest.fn() }) });
            }
          },
        }))
      );
      require('./app');
    });

    test('no contract from server', () => {
      mockFinancier((opts, callback) =>
        callback(null, { items: [{ id: 'test-financier-id' }] }, null)
      );
      mockContract((financierId, opts, callback) =>
        callback(null, null, 'No contract')
      );
      jest.mock('express', () =>
        jest.fn().mockImplementation(() => ({
          listen: jest.fn(),
          get: (route, callback) => {
            if (route === '/contract') {
              callback(null, { status: () => ({ send: jest.fn() }) });
            }
          },
        }))
      );
      require('./app');
    });

    test('contract successfully loaded', () => {
      mockFinancier((opts, callback) =>
        callback(null, { items: [{ id: 'test-financier-id' }] }, null)
      );
      jest.mock('pod-api-client/src/api/ContractsApi', () =>
        jest.fn().mockImplementation(() => ({
          getContracts: jest
            .fn()
            .mockImplementation((financierId, opts, callback) =>
              callback(null, { items: [{ id: 'test-contract-id' }] }, null)
            )
            .mockImplementationOnce((financierId, opts, callback) =>
              callback(null, null, 'Bad contract')
            ),
        }))
      );
      jest.mock('express', () =>
        jest.fn().mockImplementation(() => ({
          listen: jest.fn(),
          get: (route, callback) => {
            if (route === '/contract') {
              callback(null, { send: jest.fn() });
            }
          },
        }))
      );
      require('./app');
    });

    describe('payment', () => {
      test('error from server', () => {
        mockFinancier((opts, callback) =>
          callback(null, { items: [{ id: 'test-financier-id' }] }, null)
        );
        mockContract((financierId, opts, callback) =>
          callback(null, { items: [{ id: 'test-contract-id' }] }, null)
        );
        jest.mock('pod-api-client/src/api/PaymentSessionsApi', () =>
          jest.fn().mockImplementation(() => ({
            createPaymentSession: (request, callback) =>
              callback('Error', null, null),
          }))
        );
        jest.mock('express', () =>
          jest.fn().mockImplementation(() => ({
            listen: jest.fn(),
            get: (route, callback) => {
              if (route === '/payment') {
                callback(
                  { query: {} },
                  { status: () => ({ send: jest.fn() }) }
                );
              }
            },
          }))
        );
        require('./app');
      });

      test('invalid response from server', () => {
        mockFinancier((opts, callback) =>
          callback(null, { items: [{ id: 'test-financier-id' }] }, null)
        );
        mockContract((financierId, opts, callback) =>
          callback(null, { items: [{ id: 'test-contract-id' }] }, null)
        );
        jest.mock('pod-api-client/src/api/PaymentSessionsApi', () =>
          jest.fn().mockImplementation(() => ({
            createPaymentSession: (request, callback) =>
              callback(null, null, 'Invalid response'),
          }))
        );
        jest.mock('express', () =>
          jest.fn().mockImplementation(() => ({
            listen: jest.fn(),
            get: (route, callback) => {
              if (route === '/payment') {
                callback(
                  { query: {} },
                  { status: () => ({ send: jest.fn() }) }
                );
              }
            },
          }))
        );
        require('./app');
      });

      test('load successful session', () => {
        process.env.MCAPI_CONSUMER_KEY = 'asd!123';
        process.env.MCAPI_AUTH = true;
        mockFinancier((opts, callback) =>
          callback(null, { items: [{ id: 'test-financier-id' }] }, null)
        );
        mockContract((financierId, opts, callback) =>
          callback(null, { items: [{ id: 'test-contract-id' }] }, null)
        );
        jest.mock('pod-api-client/src/api/PaymentSessionsApi', () =>
          jest.fn().mockImplementation(() => ({
            createPaymentSession: (request, callback) =>
              callback(null, { id: 'payment-session-id' }, null),
          }))
        );
        jest.mock('express', () =>
          jest.fn().mockImplementation(() => ({
            listen: jest.fn(),
            get: (route, callback) => {
              if (route === '/payment' || route === '/manage_card') {
                callback({ query: {} }, { send: jest.fn() });
              }
            },
          }))
        );
        require('./app');
      });
    });
  });
});
