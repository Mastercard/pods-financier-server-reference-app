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
    root.PodApiClient.GatewayConfigurationRequest = factory(root.PodApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GatewayConfigurationRequest model module.
   * @module model/GatewayConfigurationRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GatewayConfigurationRequest</code>.
   * @alias module:model/GatewayConfigurationRequest
   * @class
   * @param configuration {String} Configuration in JSON format
   * @param financierId {String} Financier ID that owns this configuration.
   * @param gatewayId {String} Gateway ID.
   */
  var exports = function(configuration, financierId, gatewayId) {
    var _this = this;

    _this['configuration'] = configuration;
    _this['financierId'] = financierId;
    _this['gatewayId'] = gatewayId;
  };

  /**
   * Constructs a <code>GatewayConfigurationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GatewayConfigurationRequest} obj Optional instance to populate.
   * @return {module:model/GatewayConfigurationRequest} The populated <code>GatewayConfigurationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('configuration')) {
        obj['configuration'] = ApiClient.convertToType(data['configuration'], 'String');
      }
      if (data.hasOwnProperty('financierId')) {
        obj['financierId'] = ApiClient.convertToType(data['financierId'], 'String');
      }
      if (data.hasOwnProperty('gatewayId')) {
        obj['gatewayId'] = ApiClient.convertToType(data['gatewayId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Configuration in JSON format
   * @member {String} configuration
   */
  exports.prototype['configuration'] = undefined;
  /**
   * Financier ID that owns this configuration.
   * @member {String} financierId
   */
  exports.prototype['financierId'] = undefined;
  /**
   * Gateway ID.
   * @member {String} gatewayId
   */
  exports.prototype['gatewayId'] = undefined;



  return exports;
}));


