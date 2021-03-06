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
    root.PodApiClient.GatewayConfigurationWeb = factory(root.PodApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GatewayConfigurationWeb model module.
   * @module model/GatewayConfigurationWeb
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GatewayConfigurationWeb</code>.
   * @alias module:model/GatewayConfigurationWeb
   * @class
   * @param code {String} ID.
   * @param gatewayId {String} Gateway ID.
   * @param baseUrl {String} Base URL of the payment gateway
   * @param merchantId {String} Merchant ID
   * @param version {String} Version of the payment gateway
   */
  var exports = function(code, gatewayId, baseUrl, merchantId, version) {
    var _this = this;

    _this['code'] = code;
    _this['gatewayId'] = gatewayId;
    _this['baseUrl'] = baseUrl;
    _this['merchantId'] = merchantId;
    _this['version'] = version;
  };

  /**
   * Constructs a <code>GatewayConfigurationWeb</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GatewayConfigurationWeb} obj Optional instance to populate.
   * @return {module:model/GatewayConfigurationWeb} The populated <code>GatewayConfigurationWeb</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('gatewayId')) {
        obj['gatewayId'] = ApiClient.convertToType(data['gatewayId'], 'String');
      }
      if (data.hasOwnProperty('baseUrl')) {
        obj['baseUrl'] = ApiClient.convertToType(data['baseUrl'], 'String');
      }
      if (data.hasOwnProperty('merchantId')) {
        obj['merchantId'] = ApiClient.convertToType(data['merchantId'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID.
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Gateway ID.
   * @member {String} gatewayId
   */
  exports.prototype['gatewayId'] = undefined;
  /**
   * Base URL of the payment gateway
   * @member {String} baseUrl
   */
  exports.prototype['baseUrl'] = undefined;
  /**
   * Merchant ID
   * @member {String} merchantId
   */
  exports.prototype['merchantId'] = undefined;
  /**
   * Version of the payment gateway
   * @member {String} version
   */
  exports.prototype['version'] = undefined;



  return exports;
}));


