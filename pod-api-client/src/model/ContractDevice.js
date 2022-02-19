/**
 * Pay On Demand for Digital Inclusion
 * Please visit https://developer.mastercard.com for additional details. ## Usage Notes - In the endpoints, you will see parameter examples in {{parameter}} format. You need to replace that with the actual value. This is usually applicable for identifier (ID). For example, on GET /contracts, you need to replace \"financier_id\" parameter with actual financier ID value. You can get this value either from querying using GET /financiers or creating a new financier using POST /financiers. The same applies for properties inside request body. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: PayonDemand_DigitalInclusion@mastercard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PodApiClient) {
      root.PodApiClient = {};
    }
    root.PodApiClient.ContractDevice = factory(root.PodApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ContractDevice model module.
   * @module model/ContractDevice
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ContractDevice</code>.
   * @alias module:model/ContractDevice
   * @class
   * @param deviceId {String} Device ID
   * @param deviceIMEI {String} International Mobile Equipment Identity Number
   * @param oem {String} Origional Equipement Manufacturer of the device
   * @param offlineLockTimestamp {Number} Timestamp describing when phone will be locked.
   * @param model {String} Model of the device
   * @param deviceSerialNumber {String} Serial number as provided by the OEM
   * @param status {String} Status of the device
   */
  var exports = function(deviceId, deviceIMEI, oem, offlineLockTimestamp, model, deviceSerialNumber, status) {
    var _this = this;

    _this['deviceId'] = deviceId;
    _this['deviceIMEI'] = deviceIMEI;
    _this['oem'] = oem;
    _this['offlineLockTimestamp'] = offlineLockTimestamp;
    _this['model'] = model;
    _this['deviceSerialNumber'] = deviceSerialNumber;
    _this['status'] = status;
  };

  /**
   * Constructs a <code>ContractDevice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContractDevice} obj Optional instance to populate.
   * @return {module:model/ContractDevice} The populated <code>ContractDevice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('deviceId')) {
        obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
      }
      if (data.hasOwnProperty('deviceIMEI')) {
        obj['deviceIMEI'] = ApiClient.convertToType(data['deviceIMEI'], 'String');
      }
      if (data.hasOwnProperty('oem')) {
        obj['oem'] = ApiClient.convertToType(data['oem'], 'String');
      }
      if (data.hasOwnProperty('offlineLockTimestamp')) {
        obj['offlineLockTimestamp'] = ApiClient.convertToType(data['offlineLockTimestamp'], 'Number');
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = ApiClient.convertToType(data['model'], 'String');
      }
      if (data.hasOwnProperty('deviceSerialNumber')) {
        obj['deviceSerialNumber'] = ApiClient.convertToType(data['deviceSerialNumber'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * Device ID
   * @member {String} deviceId
   */
  exports.prototype['deviceId'] = undefined;
  /**
   * International Mobile Equipment Identity Number
   * @member {String} deviceIMEI
   */
  exports.prototype['deviceIMEI'] = undefined;
  /**
   * Origional Equipement Manufacturer of the device
   * @member {String} oem
   */
  exports.prototype['oem'] = undefined;
  /**
   * Timestamp describing when phone will be locked.
   * @member {Number} offlineLockTimestamp
   */
  exports.prototype['offlineLockTimestamp'] = undefined;
  /**
   * Model of the device
   * @member {String} model
   */
  exports.prototype['model'] = undefined;
  /**
   * Serial number as provided by the OEM
   * @member {String} deviceSerialNumber
   */
  exports.prototype['deviceSerialNumber'] = undefined;
  /**
   * Status of the device
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));

