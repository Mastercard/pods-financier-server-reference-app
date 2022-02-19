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
    define(['ApiClient', 'model/ErrorResponse', 'model/Financier', 'model/FinancierCreateRequest', 'model/Financiers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/Financier'), require('../model/FinancierCreateRequest'), require('../model/Financiers'));
  } else {
    // Browser globals (root is window)
    if (!root.PodApiClient) {
      root.PodApiClient = {};
    }
    root.PodApiClient.FinanciersApi = factory(root.PodApiClient.ApiClient, root.PodApiClient.ErrorResponse, root.PodApiClient.Financier, root.PodApiClient.FinancierCreateRequest, root.PodApiClient.Financiers);
  }
}(this, function(ApiClient, ErrorResponse, Financier, FinancierCreateRequest, Financiers) {
  'use strict';

  /**
   * Financiers service.
   * @module api/FinanciersApi
   * @version 1.0.0
   */

  /**
   * Constructs a new FinanciersApi. 
   * @alias module:api/FinanciersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addFinancier operation.
     * @callback module:api/FinanciersApi~addFinancierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Financier} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new financier
     * @param {Object} opts Optional parameters
     * @param {module:model/FinancierCreateRequest} opts.financierCreateRequest 
     * @param {module:api/FinanciersApi~addFinancierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Financier}
     */
    this.addFinancier = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['financierCreateRequest'];

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Financier;
      return this.apiClient.callApi(
        '/financiers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFinancier operation.
     * @callback module:api/FinanciersApi~deleteFinancierCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a financier
     * ##### Usage - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  
     * @param {String} financierId 
     * @param {module:api/FinanciersApi~deleteFinancierCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteFinancier = function(financierId, callback) {
      var postBody = null;
      // verify the required parameter 'financierId' is set
      if (financierId === undefined || financierId === null) {
        throw new Error("Missing the required parameter 'financierId' when calling deleteFinancier");
      }

      var pathParams = {
        'financier_id': financierId
      };
      var queryParams = {
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
      var returnType = null;
      return this.apiClient.callApi(
        '/financiers/{financier_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFinancier operation.
     * @callback module:api/FinanciersApi~getFinancierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Financier} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a financier's details
     * ##### Usage - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  
     * @param {String} financierId 
     * @param {module:api/FinanciersApi~getFinancierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Financier}
     */
    this.getFinancier = function(financierId, callback) {
      var postBody = null;
      // verify the required parameter 'financierId' is set
      if (financierId === undefined || financierId === null) {
        throw new Error("Missing the required parameter 'financierId' when calling getFinancier");
      }

      var pathParams = {
        'financier_id': financierId
      };
      var queryParams = {
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
      var returnType = Financier;
      return this.apiClient.callApi(
        '/financiers/{financier_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFinanciers operation.
     * @callback module:api/FinanciersApi~getFinanciersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Financiers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List financiers
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit of number of returned items. (default to 20)
     * @param {Number} opts.offset Offset of returned items from the beginning. (default to 0)
     * @param {module:api/FinanciersApi~getFinanciersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Financiers}
     */
    this.getFinanciers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
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
      var returnType = Financiers;
      return this.apiClient.callApi(
        '/financiers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFinancier operation.
     * @callback module:api/FinanciersApi~updateFinancierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Financier} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update financier's details
     * ##### Usage - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  
     * @param {String} financierId 
     * @param {Object} opts Optional parameters
     * @param {module:model/FinancierCreateRequest} opts.financierCreateRequest 
     * @param {module:api/FinanciersApi~updateFinancierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Financier}
     */
    this.updateFinancier = function(financierId, opts, callback) {
      opts = opts || {};
      var postBody = opts['financierCreateRequest'];
      // verify the required parameter 'financierId' is set
      if (financierId === undefined || financierId === null) {
        throw new Error("Missing the required parameter 'financierId' when calling updateFinancier");
      }

      var pathParams = {
        'financier_id': financierId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Financier;
      return this.apiClient.callApi(
        '/financiers/{financier_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));