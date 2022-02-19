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
    define(['ApiClient', 'model/DeviceListing', 'model/DeviceResponse', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeviceListing'), require('../model/DeviceResponse'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.PodApiClient) {
      root.PodApiClient = {};
    }
    root.PodApiClient.DevicesApi = factory(root.PodApiClient.ApiClient, root.PodApiClient.DeviceListing, root.PodApiClient.DeviceResponse, root.PodApiClient.ErrorResponse);
  }
}(this, function(ApiClient, DeviceListing, DeviceResponse, ErrorResponse) {
  'use strict';

  /**
   * Devices service.
   * @module api/DevicesApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DevicesApi. 
   * @alias module:api/DevicesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getDevice operation.
     * @callback module:api/DevicesApi~getDeviceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a device details
     * ##### Usage - Replace {{device_id}} with an actual Device ID before trying this endpoint.  - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  
     * @param {String} deviceId 
     * @param {String} financierId 
     * @param {module:api/DevicesApi~getDeviceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceResponse}
     */
    this.getDevice = function(deviceId, financierId, callback) {
      var postBody = null;
      // verify the required parameter 'deviceId' is set
      if (deviceId === undefined || deviceId === null) {
        throw new Error("Missing the required parameter 'deviceId' when calling getDevice");
      }
      // verify the required parameter 'financierId' is set
      if (financierId === undefined || financierId === null) {
        throw new Error("Missing the required parameter 'financierId' when calling getDevice");
      }

      var pathParams = {
        'device_id': deviceId
      };
      var queryParams = {
        'financier_id': financierId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DeviceResponse;
      return this.apiClient.callApi(
        '/devices/{device_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDevices operation.
     * @callback module:api/DevicesApi~getDevicesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceListing} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details of devices
     * ##### Usage - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  
     * @param {String} financierId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit of number of returned items. (default to 20)
     * @param {Number} opts.offset Offset of returned items from the beginning. (default to 0)
     * @param {module:api/DevicesApi~getDevicesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceListing}
     */
    this.getDevices = function(financierId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'financierId' is set
      if (financierId === undefined || financierId === null) {
        throw new Error("Missing the required parameter 'financierId' when calling getDevices");
      }

      var pathParams = {
      };
      var queryParams = {
        'financier_id': financierId,
        'limit': opts['limit'],
        'offset': opts['offset'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DeviceListing;
      return this.apiClient.callApi(
        '/devices', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));