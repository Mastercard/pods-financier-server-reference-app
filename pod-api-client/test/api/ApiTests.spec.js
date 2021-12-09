const sinon = require('sinon');
const expect = require('expect.js');

const FinanciersApi = require('../../src/api/FinanciersApi');
const GatewayApi = require('../../src/api/GatewayApi');
const GatewayConfigurationApi = require('../../src/api/GatewayConfigurationApi');
const ContractsApi = require('../../src/api/ContractsApi');
const DevicesApi = require('../../src/api/DevicesApi');
const PaymentSessionsApi = require('../../src/api/PaymentSessionsApi');
const TransactionsApi = require('../../src/api/TransactionsApi');

const apiClientSpy = { callApi: sinon.spy() };
const callback = (err, data, resp) => {};

describe('financier api', function () {
  it('retrieve financiers', function () {
    const financiersApiService = new FinanciersApi(apiClientSpy);
    financiersApiService.getFinanciers({}, callback);
    expect(apiClientSpy.callApi.calledOnce).to.be.true;
  });
  it('create financier', function () {
    const financiersApiService = new FinanciersApi(apiClientSpy);
    financiersApiService.addFinancier({}, callback);
    expect(apiClientSpy.callApi.calledOnce).to.be.true;
  });
  describe('retrieve financier', function () {
    it('success', function () {
      const financiersApiService = new FinanciersApi(apiClientSpy);
      financiersApiService.getFinancier('null', callback);
      expect(apiClientSpy.callApi.calledOnce).to.be.true;
    });
    it('error when no financier id', function () {
      const financiersApiService = new FinanciersApi(apiClientSpy);
      expect(
        financiersApiService.getFinancier.bind(
          financiersApiService,
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'financierId' when calling getFinancier"
      );
    });
  });
  describe('delete financier', function () {
    it('success', function () {
      const financiersApiService = new FinanciersApi(apiClientSpy);
      financiersApiService.deleteFinancier('null', callback);
      expect(apiClientSpy.callApi.calledOnce).to.be.true;
    });
    it('error when no financier id', function () {
      const financiersApiService = new FinanciersApi(apiClientSpy);
      expect(
        financiersApiService.deleteFinancier.bind(
          financiersApiService,
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'financierId' when calling deleteFinancier"
      );
    });
  });
  describe('update financier', function () {
    it('success', function () {
      const financiersApiService = new FinanciersApi(apiClientSpy);
      financiersApiService.updateFinancier('null', null, callback);
      expect(apiClientSpy.callApi.calledOnce).to.be.true;
    });
    it('error when no financier id', function () {
      const financiersApiService = new FinanciersApi(apiClientSpy);
      expect(
        financiersApiService.updateFinancier.bind(
          financiersApiService,
          null,
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'financierId' when calling updateFinancier"
      );
    });
  });
});

describe('gateway api', function () {
  it('retrieve gateways', function () {
    const gatewayApiService = new GatewayApi(apiClientSpy);
    gatewayApiService.getGateways(callback);
    expect(apiClientSpy.callApi.calledOnce).to.be.true;
  });
});

describe('gateway configuration api', function () {
  describe('retrieve gateway configurations', function () {
    it('success', function () {
      const gatewayConfigurationApiService = new GatewayConfigurationApi(
        apiClientSpy
      );
      gatewayConfigurationApiService.getGatewayConfigurations({}, callback);
      expect(apiClientSpy.callApi.calledOnce).to.be.true;
    });
    it('error when no financier id', function () {
      const gatewayConfigurationApiService = new GatewayConfigurationApi(
        apiClientSpy
      );
      expect(
        gatewayConfigurationApiService.getGatewayConfigurations.bind(
          gatewayConfigurationApiService,
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'financierId' when calling getGatewayConfigurations"
      );
    });
  });
  it('create gateway configuration', function () {
    const gatewayConfigurationApiService = new GatewayConfigurationApi(
      apiClientSpy
    );
    gatewayConfigurationApiService.addGatewayConfiguration({}, callback);
    expect(apiClientSpy.callApi.calledOnce).to.be.true;
  });
  describe('retrieve gateway configuration', function () {
    it('success', function () {
      const gatewayConfigurationApiService = new GatewayConfigurationApi(
        apiClientSpy
      );
      gatewayConfigurationApiService.getGatewayConfiguration('null', callback);
      expect(apiClientSpy.callApi.calledOnce).to.be.true;
    });
    it('error when no gateway configuration id', function () {
      const gatewayConfigurationApiService = new GatewayConfigurationApi(
        apiClientSpy
      );
      expect(
        gatewayConfigurationApiService.getGatewayConfiguration.bind(
          gatewayConfigurationApiService,
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'gatewayConfigurationId' when calling getGatewayConfiguration"
      );
    });
  });
  describe('delete gateway configuration', function () {
    it('success', function () {
      const gatewayConfigurationApiService = new GatewayConfigurationApi(
        apiClientSpy
      );
      gatewayConfigurationApiService.deleteGatewayConfiguration(
        'null',
        callback
      );
      expect(apiClientSpy.callApi.calledOnce).to.be.true;
    });
    it('error when no gateway configuration id', function () {
      const gatewayConfigurationApiService = new GatewayConfigurationApi(
        apiClientSpy
      );
      expect(
        gatewayConfigurationApiService.deleteGatewayConfiguration.bind(
          gatewayConfigurationApiService,
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'gatewayConfigurationId' when calling deleteGatewayConfiguration"
      );
    });
  });
  describe('update gateway configuration', function () {
    it('success', function () {
      const gatewayConfigurationApiService = new GatewayConfigurationApi(
        apiClientSpy
      );
      gatewayConfigurationApiService.updateGatewayConfiguration(
        'null',
        null,
        callback
      );
      expect(apiClientSpy.callApi.calledOnce).to.be.true;
    });
    it('error when no gateway configuration id', function () {
      const financiersApiService = new GatewayConfigurationApi(apiClientSpy);
      expect(
        financiersApiService.updateGatewayConfiguration.bind(
          financiersApiService,
          null,
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'gatewayConfigurationId' when calling updateGatewayConfiguration"
      );
    });
  });
});

describe('contracts api', function () {
  describe('retrieve contracts', function () {
    it('success', function () {
      const contractsApiService = new ContractsApi(apiClientSpy);
      contractsApiService.getContracts('null', {}, callback);
      expect(apiClientSpy.callApi.calledOnce).to.be.true;
    });
    it('error when no financier id', function () {
      const contractsApiService = new ContractsApi(apiClientSpy);
      expect(
        contractsApiService.getContracts.bind(
          contractsApiService,
          null,
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'financierId' when calling getContracts"
      );
    });
  });
  it('create contract', function () {
    const contractsApiService = new ContractsApi(apiClientSpy).addContract(
      {},
      callback
    );
    expect(apiClientSpy.callApi.calledOnce).to.be.true;
  });
  describe('retrieve contract', function () {
    it('success', function () {
      const contractsApiService = new ContractsApi(apiClientSpy);
      contractsApiService.getContract('null', 'null', callback);
      expect(apiClientSpy.callApi.calledOnce).to.be.true;
    });
    it('error when no contract id', function () {
      const contractsApiService = new ContractsApi(apiClientSpy);
      expect(
        contractsApiService.getContract.bind(
          contractsApiService,
          null,
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'contractId' when calling getContract"
      );
    });
    it('error when no financier id', function () {
      const contractsApiService = new ContractsApi(apiClientSpy);
      expect(
        contractsApiService.getContract.bind(
          contractsApiService,
          'null',
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'financierId' when calling getContract"
      );
    });
  });
  describe('update contract', function () {
    it('success', function () {
      const contractsApiService = new ContractsApi(apiClientSpy);
      contractsApiService.updateContract('null', 'null', null, callback);
      expect(apiClientSpy.callApi.calledOnce).to.be.true;
    });
    it('error when no contract id', function () {
      const contractsApiService = new ContractsApi(apiClientSpy);
      expect(
        contractsApiService.updateContract.bind(
          contractsApiService,
          null,
          null,
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'contractId' when calling updateGatewayConfiguration"
      );
    });
    it('error when no financier id', function () {
      const contractsApiService = new ContractsApi(apiClientSpy);
      expect(
        contractsApiService.updateContract.bind(
          contractsApiService,
          'null',
          null,
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'financierId' when calling updateGatewayConfiguration"
      );
    });
  });
});

describe('devices api', function () {
  describe('retrieve devices', function () {
    it('success', function () {
      const devicesApiService = new DevicesApi(apiClientSpy);
      devicesApiService.getDevices('null', {}, callback);
      expect(apiClientSpy.callApi.calledOnce).to.be.true;
    });
    it('error when no financier id', function () {
      const devicesApiService = new DevicesApi(apiClientSpy);
      expect(
        devicesApiService.getDevices.bind(
          devicesApiService,
          null,
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'financierId' when calling getDevices"
      );
    });
  });
  describe('retrieve device', function () {
    it('success', function () {
      const devicesApiService = new DevicesApi(apiClientSpy);
      devicesApiService.getDevice('null', 'null', callback);
      expect(apiClientSpy.callApi.calledOnce).to.be.true;
    });
    it('error when no device id', function () {
      const devicesApiService = new DevicesApi(apiClientSpy);
      expect(
        devicesApiService.getDevice.bind(
          devicesApiService,
          null,
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'deviceId' when calling getDevice"
      );
    });
    it('error when no financier id', function () {
      const devicesApiService = new DevicesApi(apiClientSpy);
      expect(
        devicesApiService.getDevice.bind(
          devicesApiService,
          'null',
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'financierId' when calling getDevice"
      );
    });
  });
});

describe('payment sessions api', function () {
  it('create payment session', function () {
    const paymentSessionsApiService = new PaymentSessionsApi(apiClientSpy);
    paymentSessionsApiService.createPaymentSession(null, callback);
    expect(apiClientSpy.callApi.calledOnce).to.be.true;
  });
});

describe('transactions api', function () {
  describe('retrieve transactions', function () {
    it('success', function () {
      const transactionsApiService = new TransactionsApi(apiClientSpy);
      transactionsApiService.getTransactions('null', {}, callback);
      expect(apiClientSpy.callApi.calledOnce).to.be.true;
    });
    it('error when no financier id', function () {
      const transactionsApiService = new TransactionsApi(apiClientSpy);
      expect(
        transactionsApiService.getTransactions.bind(
          transactionsApiService,
          null,
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'financierId' when calling getContracts"
      );
    });
  });
  it('create transaction', function () {
    const transactionsApiService = new TransactionsApi(
      apiClientSpy
    ).addTransaction({}, callback);
    expect(apiClientSpy.callApi.calledOnce).to.be.true;
  });
  describe('retrieve transaction', function () {
    it('success', function () {
      const transactionsApiService = new TransactionsApi(apiClientSpy);
      transactionsApiService.getTransaction('null', 'null', callback);
      expect(apiClientSpy.callApi.calledOnce).to.be.true;
    });
    it('error when no transaction id', function () {
      const transactionsApiService = new TransactionsApi(apiClientSpy);
      expect(
        transactionsApiService.getTransaction.bind(
          transactionsApiService,
          null,
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'transactionId' when calling getContract"
      );
    });
    it('error when no financier id', function () {
      const transactionsApiService = new TransactionsApi(apiClientSpy);
      expect(
        transactionsApiService.getTransaction.bind(
          transactionsApiService,
          'null',
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'financierId' when calling getContract"
      );
    });
  });
  describe('update transaction', function () {
    it('success', function () {
      const transactionsApiService = new TransactionsApi(apiClientSpy);
      transactionsApiService.updateTransaction('null', 'null', null, callback);
      expect(apiClientSpy.callApi.calledOnce).to.be.true;
    });
    it('error when no transaction id', function () {
      const transactionsApiService = new TransactionsApi(apiClientSpy);
      expect(
        transactionsApiService.updateTransaction.bind(
          transactionsApiService,
          null,
          null,
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'transactionId' when calling updateTransaction"
      );
    });
    it('error when no financier id', function () {
      const transactionsApiService = new TransactionsApi(apiClientSpy);
      expect(
        transactionsApiService.updateTransaction.bind(
          transactionsApiService,
          'null',
          null,
          null,
          callback
        )
      ).to.throwError(
        "Missing the required parameter 'financierId' when calling updateTransaction"
      );
    });
  });
});

const apiClient = require('../../src/ApiClient');
const apiClientInstance = new apiClient();

describe('ApiClient', function () {

  describe('convert params to string', function () {
    it('return empty string for null', function () {
      expect(apiClientInstance.paramToString(null)).to.be.equal('');
    });
    it('return empty string for undefined', function () {
      expect(apiClientInstance.paramToString(undefined)).to.be.equal('');
    });
    it('return JSON string for Date', function () {
      const date = new Date();
      expect(apiClientInstance.paramToString(date)).to.be.equal(date.toJSON());
    });
  });

  describe('build url', function () {
    it('replaces path params', function () {
      expect(
        apiClientInstance.buildUrl('entity/{entityId}', { entityId: 'id' })
      ).to.be.equal('https://sandbox.api.mastercard.com/pods/entity/id');
    });
    it('url encodes', function () {
      expect(
        apiClientInstance.buildUrl(
          '/entity/{entityId}',
          {},
          'http://localhost:8080'
        )
      ).to.be.equal('http://localhost:8080/entity/%7BentityId%7D');
    });
  });

  describe('json mime types', function () {
    it('return false for null', function () {
      expect(apiClientInstance.isJsonMime(null)).equal(false);
    });
    it('return true for json mime type', function () {
      expect(apiClientInstance.isJsonMime('application/json')).equal(true);
    });
  });

  describe('preferred json mime type', function () {
    it('return first matched json mime type', function () {
      expect(
        apiClientInstance.jsonPreferredMime(['text/json', 'application/json'])
      ).to.be.equal('application/json');
    });
    it('return first mime type if no json mime type found', function () {
      expect(
        apiClientInstance.jsonPreferredMime(['binary/json', 'text/json'])
      ).to.be.equal('binary/json');
    });
  });

  describe('is file parameter', function () {
    it('return false for string', function () {
      expect(apiClientInstance.isFileParam('ApiClient')).to.be.equal(false);
    });
    it('return true for nodejs buffer', function () {
      expect(apiClientInstance.isFileParam(Buffer.alloc(8))).to.be.equal(true);
    });
  });

  describe('normalize parameters', function () {
    it('return normalized object for array', function () {
      expect(apiClientInstance.normalizeParams([0])).to.be.eql({ '0': '0' });
    });
    it('return normalized object', function () {
      expect(apiClientInstance.normalizeParams({ a: 'b' })).to.be.eql({
        a: 'b',
      });
    });
    it('return normalized object containing arrays', function () {
      expect(apiClientInstance.normalizeParams({ a: ['b', 'c'] })).to.be.eql({
        a: ['b', 'c'],
      });
    });
  });

  describe('build collection param', function () {
    it('as null for null input', function () {
      expect(apiClientInstance.buildCollectionParam(null, null)).to.be.equal(
        null
      );
    });
    it('for csv', function () {
      expect(
        apiClientInstance.buildCollectionParam([0, 1, 2, 3], 'csv')
      ).to.be.equal('0,1,2,3');
    });
    it('for ssv', function () {
      expect(
        apiClientInstance.buildCollectionParam([0, 1, 2, 3], 'ssv')
      ).to.be.equal('0 1 2 3');
    });
    it('for tsv', function () {
      expect(
        apiClientInstance.buildCollectionParam([0, 1, 2, 3], 'tsv')
      ).to.be.equal('0\t1\t2\t3');
    });
    it('for pipes', function () {
      expect(
        apiClientInstance.buildCollectionParam([0, 1, 2, 3], 'pipes')
      ).to.be.equal('0|1|2|3');
    });
    it('for javascript arrays', function () {
      expect(
        apiClientInstance.buildCollectionParam([0, 1, 2, 3], 'multi')
      ).to.be.eql(['0', '1', '2', '3']);
    });
    it('throw exception for unknown collection format', function () {
      expect(
        apiClientInstance.buildCollectionParam.bind(
          apiClientInstance,
          [0, 1],
          null
        )
      ).to.throwError();
    });
  });

  describe('deserialize', function () {
    it('returns null for null response', function () {
      expect(apiClientInstance.deserialize()).to.be.equal(null);
    });
    it('returns null for null return type', function () {
      expect(apiClientInstance.deserialize({})).to.be.equal(null);
    });
    it('returns null response status 204', function () {
      expect(apiClientInstance.deserialize({ status: 204 }, {})).to.be.equal(
        null
      );
    });
    // eslint-disable-next-line mocha/no-identical-title
    it('returns null for null return type', function () {
      expect(
        apiClientInstance.deserialize({ text: 'status' }, null)
      ).to.be.equal(null);
    });
    it('returns integer for integer return type', function () {
      expect(
        apiClientInstance.deserialize({ body: {}, text: '243' }, 'Integer')
      ).to.be.equal(243);
    });
  });

  it('parse date', function () {
    const date = new Date();
    expect(apiClient.parseDate(date.toISOString())).to.be.eql(date);
  });

  describe('convertToType', function () {
    it('return null for null', function () {
      expect(apiClient.convertToType(null)).to.be.equal(null);
    });
    it('return undefined for undefined', function () {
      expect(apiClient.convertToType(undefined)).to.be.equal(undefined);
    });
    it('return same data for Blob', function () {
      expect(apiClient.convertToType('test', 'Blob')).to.be.equal('test');
    });
    it('return for array', function () {
      expect(apiClient.convertToType([0, '1'], ['Number'])).to.be.eql([0, 1]);
    });
  });
  it('return for object of unknown type', function () {
    expect(apiClient.convertToType({ a: 'b' }, 'undefined')).to.be.eql({
      a: 'b',
    });
  });
  it('return for object of string type', function () {
    expect(apiClient.convertToType({ a: 'b' }, { a: 'String' })).to.be.eql({
      a: 'b',
    });
  });

  it('get host settings', function () {
    expect(apiClient.hostSettings().length).to.be.equal(2);
  });

  describe('get base path from settings', function () {
    it('throw error for index more than configured', function () {
      expect(
        apiClient.getBasePathFromSettings.bind(apiClient, -1, null)
      ).to.throwError();
    });
    it('throw error for index less than configured', function () {
      expect(
        apiClient.getBasePathFromSettings.bind(apiClient, 3, {})
      ).to.throwError();
    });
    it('return sandbox url', function () {
      expect(apiClient.getBasePathFromSettings(0, undefined)).to.be.equal(
        'https://sandbox.api.mastercard.com/pods'
      );
    });
  });

  describe('construct from object', function () {
    it('Array', function () {
      expect(
        apiClient.constructFromObject([1, 2, 3], {}, 'Integer')
      ).to.not.equal(null);
    });
    it('Object', function () {
      expect(
        apiClient.constructFromObject({ a: 1, b: 2, c: 3 }, {}, 'Integer')
      ).to.not.equal(null);
    });
  });
});
