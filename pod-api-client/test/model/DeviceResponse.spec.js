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
    instance = new PodApiClient.DeviceResponse();
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

  describe('DeviceResponse', function () {
    it('should create an instance of DeviceResponse', function () {
      // uncomment below and update the code to test DeviceResponse
      var instance = new PodApiClient.DeviceResponse();
      expect(instance).to.be.a(PodApiClient.DeviceResponse);
    });

    it('should have the property deviceId (base name: "deviceId")', function () {
      // uncomment below and update the code to test the property deviceId
      var instance = new PodApiClient.DeviceResponse();
      expect(instance).to.have.property('deviceId');
    });

    it('should have the property financierId (base name: "financierId")', function () {
      // uncomment below and update the code to test the property financierId
      var instance = new PodApiClient.DeviceResponse();
      expect(instance).to.have.property('financierId');
    });

    it('should have the property imeiNumber (base name: "imeiNumber")', function () {
      // uncomment below and update the code to test the property imeiNumber
      var instance = new PodApiClient.DeviceResponse();
      expect(instance).to.have.property('imeiNumber');
    });

    it('should have the property serialNumber (base name: "serialNumber")', function () {
      // uncomment below and update the code to test the property serialNumber
      var instance = new PodApiClient.DeviceResponse();
      expect(instance).to.have.property('serialNumber');
    });

    it('should have the property oem (base name: "oem")', function () {
      // uncomment below and update the code to test the property oem
      var instance = new PodApiClient.DeviceResponse();
      expect(instance).to.have.property('oem');
    });

    it('should have the property status (base name: "status")', function () {
      // uncomment below and update the code to test the property status
      var instance = new PodApiClient.DeviceResponse();
      expect(instance).to.have.property('status');
    });

    it('should copy from constructor argument', function () {
      const instance = new PodApiClient.DeviceResponse(
        'device-id',
        'financier-id',
        'IMEI',
        'askdj987698',
        'Samsung',
        'ACTIVE'
      );
      expect(instance).to.have.property('deviceId', 'device-id');
      expect(instance).to.have.property('financierId', 'financier-id');
      expect(instance).to.have.property('imeiNumber', 'IMEI');
      expect(instance).to.have.property('serialNumber', 'askdj987698');
      expect(instance).to.have.property('oem', 'Samsung');
      expect(instance).to.have.property('status', 'ACTIVE');
    });

    it('should copy to provided object even for empty data', function () {
      const instance = PodApiClient.DeviceResponse.constructFromObject({});
      expect(instance).to.have.property('deviceId');
      expect(instance).to.have.property('financierId');
      expect(instance).to.have.property('imeiNumber');
      expect(instance).to.have.property('serialNumber');
      expect(instance).to.have.property('oem');
      expect(instance).to.have.property('status');
    });

    it('should copy to provided object', function () {
      const instance = {};
      PodApiClient.DeviceResponse.constructFromObject(
        {
          deviceId: 'device-id',
          financierId: 'financier-id',
          imeiNumber: 'IMEI',
          serialNumber: 'askdj987698',
          oem: 'Samsung',
          status: 'ACTIVE',
        },
        instance
      );
      expect(instance).to.have.property('deviceId', 'device-id');
      expect(instance).to.have.property('financierId', 'financier-id');
      expect(instance).to.have.property('imeiNumber', 'IMEI');
      expect(instance).to.have.property('serialNumber', 'askdj987698');
      expect(instance).to.have.property('oem', 'Samsung');
      expect(instance).to.have.property('status', 'ACTIVE');
    });
  });
});
