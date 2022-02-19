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
    instance = new PodApiClient.Financier();
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

  describe('Financier', function () {
    it('should create an instance of Financier', function () {
      // uncomment below and update the code to test Financier
      var instance = new PodApiClient.Financier();
      expect(instance).to.be.a(PodApiClient.Financier);
    });

    it('should have the property id (base name: "id")', function () {
      // uncomment below and update the code to test the property id
      var instance = new PodApiClient.Financier();
      expect(instance).to.have.property('id');
    });

    it('should have the property extIdentifier (base name: "extIdentifier")', function () {
      // uncomment below and update the code to test the property extIdentifier
      var instance = new PodApiClient.Financier();
      expect(instance).to.have.property('extIdentifier');
    });

    it('should have the property name (base name: "name")', function () {
      // uncomment below and update the code to test the property name
      var instance = new PodApiClient.Financier();
      expect(instance).to.have.property('name');
    });

    it('should copy from constructor argument', function () {
      const instance = new PodApiClient.Financier(
        'financier-id',
        'ext-ref',
        'financier name'
      );
      expect(instance).to.have.property('id', 'financier-id');
      expect(instance).to.have.property('extIdentifier', 'ext-ref');
      expect(instance).to.have.property('name', 'financier name');
    });

    it('should copy to provided object even for empty data', function () {
      const instance = PodApiClient.Financier.constructFromObject({});
      expect(instance).to.have.property('id');
      expect(instance).to.have.property('extIdentifier');
      expect(instance).to.have.property('name');
    });

    it('should copy to provided object', function () {
      const instance = {};
      PodApiClient.Financier.constructFromObject(
        {
          id: 'financier-id',
          extIdentifier: 'ext-ref',
          name: 'financier name',
        },
        instance
      );
      expect(instance).to.have.property('id', 'financier-id');
      expect(instance).to.have.property('extIdentifier', 'ext-ref');
      expect(instance).to.have.property('name', 'financier name');
    });
  });
});