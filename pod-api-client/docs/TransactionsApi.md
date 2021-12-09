# PodApiClient.TransactionsApi

All URIs are relative to *https://sandbox.api.mastercard.com/pods*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTransaction**](TransactionsApi.md#addTransaction) | **POST** /transactions | Create a transaction
[**getTransaction**](TransactionsApi.md#getTransaction) | **GET** /transactions/{transaction_id} | Get Transaction
[**getTransactions**](TransactionsApi.md#getTransactions) | **GET** /transactions | Get list of transactions
[**updateTransaction**](TransactionsApi.md#updateTransaction) | **PUT** /transactions/{transaction_id} | Update transaction



## addTransaction

> Transaction addTransaction(opts)

Create a transaction

##### Usage - Replace {{contract_id}} with an actual Contract ID before trying this endpoint.  - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.TransactionsApi();
var opts = {
  'transactionRequest': new PodApiClient.TransactionRequest() // TransactionRequest | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addTransaction(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionRequest** | [**TransactionRequest**](TransactionRequest.md)|  | [optional] 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTransaction

> Transaction getTransaction(transactionId, financierId)

Get Transaction

##### Usage - Replace {{transaction_id}} with an actual Transaction ID before trying this endpoint.  - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.TransactionsApi();
var transactionId = {{transaction_id}}; // String | 
var financierId = {{financier_id}}; // String | Financier ID.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransaction(transactionId, financierId, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**|  | 
 **financierId** | **String**| Financier ID. | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTransactions

> Transactions getTransactions(financierId, opts)

Get list of transactions

##### Usage - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  - Replace {{contract_id}} with an actual Contract ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.TransactionsApi();
var financierId = {{financier_id}}; // String | 
var opts = {
  'contractId': {{contract_id}}, // String | 
  'limit': 20, // Number | Limit of number of returned items.
  'offset': 0 // Number | Offset of returned items from the beginning.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransactions(financierId, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financierId** | **String**|  | 
 **contractId** | **String**|  | [optional] 
 **limit** | **Number**| Limit of number of returned items. | [optional] [default to 20]
 **offset** | **Number**| Offset of returned items from the beginning. | [optional] [default to 0]

### Return type

[**Transactions**](Transactions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTransaction

> Transaction updateTransaction(transactionId, financierId, opts)

Update transaction

##### Usage - Replace {{transaction_id}} with an actual Transaction ID before trying this endpoint.  - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  - Replace {{contract_id}} with an actual Contract ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.TransactionsApi();
var transactionId = {{transaction_id}}; // String | 
var financierId = {{financier_id}}; // String | Financier ID.
var opts = {
  'transactionRequest': new PodApiClient.TransactionRequest() // TransactionRequest | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTransaction(transactionId, financierId, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**|  | 
 **financierId** | **String**| Financier ID. | 
 **transactionRequest** | [**TransactionRequest**](TransactionRequest.md)|  | [optional] 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

