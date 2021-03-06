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
    define(['ApiClient', 'model/InstalmentPaymentSchedule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InstalmentPaymentSchedule'));
  } else {
    // Browser globals (root is window)
    if (!root.PodApiClient) {
      root.PodApiClient = {};
    }
    root.PodApiClient.InstalmentContractDetail = factory(root.PodApiClient.ApiClient, root.PodApiClient.InstalmentPaymentSchedule);
  }
}(this, function(ApiClient, InstalmentPaymentSchedule) {
  'use strict';



  /**
   * The InstalmentContractDetail model module.
   * @module model/InstalmentContractDetail
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InstalmentContractDetail</code>.
   * details for instalment contract.  Present only if contract type is INSTALMENT.
   * @alias module:model/InstalmentContractDetail
   * @class
   * @param paymentAmount {Number} Amount due for each payment. Formatted according to ISO 4217 standard.
   * @param paymentInterval {Number} Interval between payment.
   * @param paymentIntervalUnit {String} Time unit for length of interval. It can be DAY, WEEK or MONTH.
   * @param instalmentSchedules {Array.<module:model/InstalmentPaymentSchedule>} 
   */
  var exports = function(paymentAmount, paymentInterval, paymentIntervalUnit, instalmentSchedules) {
    var _this = this;

    _this['paymentAmount'] = paymentAmount;
    _this['paymentInterval'] = paymentInterval;
    _this['paymentIntervalUnit'] = paymentIntervalUnit;
    _this['instalmentSchedules'] = instalmentSchedules;
  };

  /**
   * Constructs a <code>InstalmentContractDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InstalmentContractDetail} obj Optional instance to populate.
   * @return {module:model/InstalmentContractDetail} The populated <code>InstalmentContractDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('paymentAmount')) {
        obj['paymentAmount'] = ApiClient.convertToType(data['paymentAmount'], 'Number');
      }
      if (data.hasOwnProperty('paymentInterval')) {
        obj['paymentInterval'] = ApiClient.convertToType(data['paymentInterval'], 'Number');
      }
      if (data.hasOwnProperty('paymentIntervalUnit')) {
        obj['paymentIntervalUnit'] = ApiClient.convertToType(data['paymentIntervalUnit'], 'String');
      }
      if (data.hasOwnProperty('instalmentSchedules')) {
        obj['instalmentSchedules'] = ApiClient.convertToType(data['instalmentSchedules'], [InstalmentPaymentSchedule]);
      }
    }
    return obj;
  }

  /**
   * Amount due for each payment. Formatted according to ISO 4217 standard.
   * @member {Number} paymentAmount
   */
  exports.prototype['paymentAmount'] = undefined;
  /**
   * Interval between payment.
   * @member {Number} paymentInterval
   */
  exports.prototype['paymentInterval'] = undefined;
  /**
   * Time unit for length of interval. It can be DAY, WEEK or MONTH.
   * @member {String} paymentIntervalUnit
   */
  exports.prototype['paymentIntervalUnit'] = undefined;
  /**
   * @member {Array.<module:model/InstalmentPaymentSchedule>} instalmentSchedules
   */
  exports.prototype['instalmentSchedules'] = undefined;



  return exports;
}));


