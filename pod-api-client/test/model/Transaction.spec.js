/**
 * Pay On Demand for Digital Inclusion
 * ## Usage Notes - In the endpoints, you will see parameter examples in {{parameter}} format. You need to replace that with the correct value. This is usually used for identifier (ID). For example, on GET /contracts, you need to replace \"financier_id\" parameter with actual financier ID. You can get this either from querying using GET /financiers or creating a new financier using POST /financiers. This also applies for properties inside request body.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: PayonDemand_DigitalInclusion@mastercard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.0
 *
 * Do not edit the class manually.
 *
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd() + '/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd() + '/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PodApiClient);
  }
})(this, function (expect, PodApiClient) {
  'use strict';

  var instance;

  beforeEach(function () {
    instance = new PodApiClient.Transaction();
  });

  var getProperty = function (object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') return object[getter]();
    else return object[property];
  };

  var setProperty = function (object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') object[setter](value);
    else object[property] = value;
  };

  describe('Transaction', function () {
    it('should create an instance of Transaction', function () {
      // uncomment below and update the code to test Transaction
      var instance = new PodApiClient.Transaction();
      expect(instance).to.be.a(PodApiClient.Transaction);
    });

    it('should have the property id (base name: "id")', function () {
      // uncomment below and update the code to test the property id
      var instance = new PodApiClient.Transaction();
      expect(instance).to.have.property('id');
    });

    it('should have the property financierId (base name: "financierId")', function () {
      // uncomment below and update the code to test the property financierId
      var instance = new PodApiClient.Transaction();
      expect(instance).to.have.property('financierId');
    });

    it('should have the property contractId (base name: "contractId")', function () {
      // uncomment below and update the code to test the property contractId
      var instance = new PodApiClient.Transaction();
      expect(instance).to.have.property('contractId');
    });

    it('should have the property totalAmount (base name: "totalAmount")', function () {
      // uncomment below and update the code to test the property totalAmount
      var instance = new PodApiClient.Transaction();
      expect(instance).to.have.property('totalAmount');
    });

    it('should have the property currency (base name: "currency")', function () {
      // uncomment below and update the code to test the property currency
      var instance = new PodApiClient.Transaction();
      expect(instance).to.have.property('currency');
    });

    it('should have the property transactionReference (base name: "transactionReference")', function () {
      // uncomment below and update the code to test the property transactionReference
      var instance = new PodApiClient.Transaction();
      expect(instance).to.have.property('transactionReference');
    });

    it('should have the property transactionDate (base name: "transactionDate")', function () {
      // uncomment below and update the code to test the property transactionDate
      var instance = new PodApiClient.Transaction();
      expect(instance).to.have.property('transactionDate');
    });

    it('should have the property source (base name: "source")', function () {
      // uncomment below and update the code to test the property source
      var instance = new PodApiClient.Transaction();
      expect(instance).to.have.property('source');
    });

    it('should have the property transactionStatus (base name: "transactionStatus")', function () {
      // uncomment below and update the code to test the property transactionStatus
      var instance = new PodApiClient.Transaction();
      expect(instance).to.have.property('transactionStatus');
    });

    it('should have the property transactionType (base name: "transactionType")', function () {
      // uncomment below and update the code to test the property transactionType
      var instance = new PodApiClient.Transaction();
      expect(instance).to.have.property('transactionType');
    });

    it('should have the property lineItems (base name: "lineItems")', function () {
      // uncomment below and update the code to test the property lineItems
      var instance = new PodApiClient.Transaction();
      expect(instance).to.have.property('lineItems');
    });

    it('should copy from constructor argument', function () {
      const instance = new PodApiClient.Transaction(
        'txn-id',
        'fin-id',
        'contract-id',
        '599',
        'SGD',
        '02394809ladjlks',
        '22-11-2009',
        'Source',
        'ACTIVE'
      );
      expect(instance).to.have.property('id', 'txn-id');
      expect(instance).to.have.property('financierId', 'fin-id');
      expect(instance).to.have.property('contractId', 'contract-id');
      expect(instance).to.have.property('totalAmount', '599');
      expect(instance).to.have.property('currency', 'SGD');
      expect(instance).to.have.property(
        'transactionReference',
        '02394809ladjlks'
      );
      expect(instance).to.have.property('transactionDate', '22-11-2009');
      expect(instance).to.have.property('source', 'Source');
      expect(instance).to.have.property('transactionStatus', 'ACTIVE');
    });

    it('should copy to provided object even for empty data', function () {
      const instance = PodApiClient.Transaction.constructFromObject({});
      expect(instance).to.have.property('id');
      expect(instance).to.have.property('financierId');
      expect(instance).to.have.property('contractId');
      expect(instance).to.have.property('totalAmount');
      expect(instance).to.have.property('currency');
      expect(instance).to.have.property('transactionReference');
      expect(instance).to.have.property('transactionDate');
      expect(instance).to.have.property('source');
      expect(instance).to.have.property('transactionStatus');
    });

    it('should copy to provided object', function () {
      const instance = {};
      PodApiClient.Transaction.constructFromObject(
        {
          id: 'txn-id',
          financierId: 'fin-id',
          contractId: 'contract-id',
          totalAmount: '599',
          currency: 'SGD',
          transactionReference: '02394809ladjlks',
          transactionDate: '22-11-2009',
          source: 'Source',
          transactionStatus: 'ACTIVE',
          transactionType: 'Type',
          lineItems: [],
        },
        instance
      );
      expect(instance).to.have.property('id', 'txn-id');
      expect(instance).to.have.property('financierId', 'fin-id');
      expect(instance).to.have.property('contractId', 'contract-id');
      expect(instance).to.have.property('totalAmount', '599');
      expect(instance).to.have.property('currency', 'SGD');
      expect(instance).to.have.property(
        'transactionReference',
        '02394809ladjlks'
      );
      expect(instance).to.have.property('transactionDate', '22-11-2009');
      expect(instance).to.have.property('source', 'Source');
      expect(instance).to.have.property('transactionStatus', 'ACTIVE');
    });
  });
});