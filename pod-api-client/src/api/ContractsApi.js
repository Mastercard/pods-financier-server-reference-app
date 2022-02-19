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
    define(['ApiClient', 'model/Contract', 'model/ContractCreateRequest', 'model/ContractUpdateRequest', 'model/Contracts', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Contract'), require('../model/ContractCreateRequest'), require('../model/ContractUpdateRequest'), require('../model/Contracts'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.PodApiClient) {
      root.PodApiClient = {};
    }
    root.PodApiClient.ContractsApi = factory(root.PodApiClient.ApiClient, root.PodApiClient.Contract, root.PodApiClient.ContractCreateRequest, root.PodApiClient.ContractUpdateRequest, root.PodApiClient.Contracts, root.PodApiClient.ErrorResponse);
  }
}(this, function(ApiClient, Contract, ContractCreateRequest, ContractUpdateRequest, Contracts, ErrorResponse) {
  'use strict';

  /**
   * Contracts service.
   * @module api/ContractsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ContractsApi. 
   * @alias module:api/ContractsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addContract operation.
     * @callback module:api/ContractsApi~addContractCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Contract} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new contract
     * ##### Usage - Replace {{financier_id}} in the request body with an actual Financier ID before trying this endpoint.  
     * @param {Object} opts Optional parameters
     * @param {module:model/ContractCreateRequest} opts.contractCreateRequest 
     * @param {module:api/ContractsApi~addContractCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Contract}
     */
    this.addContract = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['contractCreateRequest'];

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
      var returnType = Contract;
      return this.apiClient.callApi(
        '/contracts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContract operation.
     * @callback module:api/ContractsApi~getContractCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Contract} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get contract
     * ##### Usage - Replace {{contract_id}} with an actual Contract ID before trying this endpoint.  - Replace {{financier_id}} in the request body with an actual Financier ID before trying this endpoint.  
     * @param {String} contractId 
     * @param {String} financierId Financier ID.
     * @param {module:api/ContractsApi~getContractCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Contract}
     */
    this.getContract = function(contractId, financierId, callback) {
      var postBody = null;
      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling getContract");
      }
      // verify the required parameter 'financierId' is set
      if (financierId === undefined || financierId === null) {
        throw new Error("Missing the required parameter 'financierId' when calling getContract");
      }

      var pathParams = {
        'contract_id': contractId
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
      var returnType = Contract;
      return this.apiClient.callApi(
        '/contracts/{contract_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContracts operation.
     * @callback module:api/ContractsApi~getContractsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Contracts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of contracts
     * ##### Usage - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  
     * @param {String} financierId Financier ID.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit of number of returned items. (default to 20)
     * @param {Number} opts.offset Offset of returned items from the beginning. (default to 0)
     * @param {module:api/ContractsApi~getContractsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Contracts}
     */
    this.getContracts = function(financierId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'financierId' is set
      if (financierId === undefined || financierId === null) {
        throw new Error("Missing the required parameter 'financierId' when calling getContracts");
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
      var returnType = Contracts;
      return this.apiClient.callApi(
        '/contracts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateContract operation.
     * @callback module:api/ContractsApi~updateContractCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Contract} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update contract
     * Endpoint used to update contract information. Sub-actions available:   - Cancel contract;     Can be done by sending status 'CANCELED'.   - Complete contract;     Can be done by sending status 'COMPLETED'.   - Start contract;     Can be done by sending status 'ACTIVE' and startedDate parameters.  ##### Usage - Replace {{contract_id}} with an actual Contract ID before trying this endpoint.  - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  
     * @param {String} contractId 
     * @param {String} financierId Financier ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/ContractUpdateRequest} opts.contractUpdateRequest 
     * @param {module:api/ContractsApi~updateContractCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Contract}
     */
    this.updateContract = function(contractId, financierId, opts, callback) {
      opts = opts || {};
      var postBody = opts['contractUpdateRequest'];
      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling updateContract");
      }
      // verify the required parameter 'financierId' is set
      if (financierId === undefined || financierId === null) {
        throw new Error("Missing the required parameter 'financierId' when calling updateContract");
      }

      var pathParams = {
        'contract_id': contractId
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Contract;
      return this.apiClient.callApi(
        '/contracts/{contract_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));