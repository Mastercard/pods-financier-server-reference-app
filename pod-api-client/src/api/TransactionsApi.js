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
    define(['ApiClient', 'model/ErrorResponse', 'model/Transaction', 'model/TransactionRequest', 'model/Transactions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/Transaction'), require('../model/TransactionRequest'), require('../model/Transactions'));
  } else {
    // Browser globals (root is window)
    if (!root.PodApiClient) {
      root.PodApiClient = {};
    }
    root.PodApiClient.TransactionsApi = factory(root.PodApiClient.ApiClient, root.PodApiClient.ErrorResponse, root.PodApiClient.Transaction, root.PodApiClient.TransactionRequest, root.PodApiClient.Transactions);
  }
}(this, function(ApiClient, ErrorResponse, Transaction, TransactionRequest, Transactions) {
  'use strict';

  /**
   * Transactions service.
   * @module api/TransactionsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new TransactionsApi. 
   * @alias module:api/TransactionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addTransaction operation.
     * @callback module:api/TransactionsApi~addTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Transaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a transaction
     * ##### Usage - Replace {{contract_id}} with an actual Contract ID before trying this endpoint.  - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  
     * @param {Object} opts Optional parameters
     * @param {module:model/TransactionRequest} opts.transactionRequest 
     * @param {module:api/TransactionsApi~addTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Transaction}
     */
    this.addTransaction = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['transactionRequest'];

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
      var returnType = Transaction;
      return this.apiClient.callApi(
        '/transactions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTransaction operation.
     * @callback module:api/TransactionsApi~getTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Transaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Transaction
     * ##### Usage - Replace {{transaction_id}} with an actual Transaction ID before trying this endpoint.  - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  
     * @param {String} transactionId 
     * @param {String} financierId Financier ID.
     * @param {module:api/TransactionsApi~getTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Transaction}
     */
    this.getTransaction = function(transactionId, financierId, callback) {
      var postBody = null;
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling getTransaction");
      }
      // verify the required parameter 'financierId' is set
      if (financierId === undefined || financierId === null) {
        throw new Error("Missing the required parameter 'financierId' when calling getTransaction");
      }

      var pathParams = {
        'transaction_id': transactionId
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
      var returnType = Transaction;
      return this.apiClient.callApi(
        '/transactions/{transaction_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTransactions operation.
     * @callback module:api/TransactionsApi~getTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Transactions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of transactions
     * ##### Usage - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  - Replace {{contract_id}} with an actual Contract ID before trying this endpoint.  
     * @param {String} financierId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.contractId 
     * @param {Number} opts.limit Limit of number of returned items. (default to 20)
     * @param {Number} opts.offset Offset of returned items from the beginning. (default to 0)
     * @param {module:api/TransactionsApi~getTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Transactions}
     */
    this.getTransactions = function(financierId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'financierId' is set
      if (financierId === undefined || financierId === null) {
        throw new Error("Missing the required parameter 'financierId' when calling getTransactions");
      }

      var pathParams = {
      };
      var queryParams = {
        'financier_id': financierId,
        'contract_id': opts['contractId'],
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
      var returnType = Transactions;
      return this.apiClient.callApi(
        '/transactions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTransaction operation.
     * @callback module:api/TransactionsApi~updateTransactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Transaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update transaction
     * ##### Usage - Replace {{transaction_id}} with an actual Transaction ID before trying this endpoint.  - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  - Replace {{contract_id}} with an actual Contract ID before trying this endpoint.  
     * @param {String} transactionId 
     * @param {String} financierId Financier ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/TransactionRequest} opts.transactionRequest 
     * @param {module:api/TransactionsApi~updateTransactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Transaction}
     */
    this.updateTransaction = function(transactionId, financierId, opts, callback) {
      opts = opts || {};
      var postBody = opts['transactionRequest'];
      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling updateTransaction");
      }
      // verify the required parameter 'financierId' is set
      if (financierId === undefined || financierId === null) {
        throw new Error("Missing the required parameter 'financierId' when calling updateTransaction");
      }

      var pathParams = {
        'transaction_id': transactionId
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
      var returnType = Transaction;
      return this.apiClient.callApi(
        '/transactions/{transaction_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));