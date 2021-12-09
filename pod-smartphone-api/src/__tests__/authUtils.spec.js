const authUtils = require('../authUtils');

beforeAll(() => {
  process.env.MCAPI_KEY = '__tests__/test-key.p12';
  process.env.MACPI_KEY_ALIAS = 'keyalias';
  process.env.MCAPI_KEY_PASSWORD = 'keystorepassword';
  process.env.MCAPI_CONSUMER_KEY = 'Abcd1234';
});

test('setup mastercard authentication to api client', () => {
  const clientInstance = {};
  authUtils.applyAuth(clientInstance);
  expect(clientInstance).toHaveProperty('applyAuthToRequest');
});

test('apply mastercard authentication in api client', () => {
  const clientInstance = {};
  authUtils.applyAuth(clientInstance);
  const header = {};
  const request = {
    url: 'https://test-url.co.nz',
    method: 'POST',
    _data: '[]',
    req: {
      setHeader: (headerKey, headerValue) => (header[headerKey] = headerValue),
    },
    _end: { call: (request) => console.log('Request ', request) },
  };
  clientInstance.applyAuthToRequest(request);
  expect(request).toHaveProperty('_end');
  request._end();
  expect(header).toHaveProperty('Authorization');
});
