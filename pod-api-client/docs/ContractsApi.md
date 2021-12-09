# PodApiClient.ContractsApi

All URIs are relative to *https://sandbox.api.mastercard.com/pods*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContract**](ContractsApi.md#addContract) | **POST** /contracts | Add a new contract
[**getContract**](ContractsApi.md#getContract) | **GET** /contracts/{contract_id} | Get contract
[**getContracts**](ContractsApi.md#getContracts) | **GET** /contracts | Get list of contracts
[**updateContract**](ContractsApi.md#updateContract) | **PUT** /contracts/{contract_id} | Update contract



## addContract

> Contract addContract(opts)

Add a new contract

##### Usage - Replace {{financier_id}} in the request body with an actual Financier ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.ContractsApi();
var opts = {
  'contractCreateRequest': new PodApiClient.ContractCreateRequest() // ContractCreateRequest | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addContract(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractCreateRequest** | [**ContractCreateRequest**](ContractCreateRequest.md)|  | [optional] 

### Return type

[**Contract**](Contract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getContract

> Contract getContract(contractId, financierId)

Get contract

##### Usage - Replace {{contract_id}} with an actual Contract ID before trying this endpoint.  - Replace {{financier_id}} in the request body with an actual Financier ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.ContractsApi();
var contractId = {{contract_id}}; // String | 
var financierId = {{financier_id}}; // String | Financier ID.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContract(contractId, financierId, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | **String**|  | 
 **financierId** | **String**| Financier ID. | 

### Return type

[**Contract**](Contract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContracts

> Contracts getContracts(financierId, opts)

Get list of contracts

##### Usage - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.ContractsApi();
var financierId = {{financier_id}}; // String | Financier ID.
var opts = {
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
apiInstance.getContracts(financierId, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financierId** | **String**| Financier ID. | 
 **limit** | **Number**| Limit of number of returned items. | [optional] [default to 20]
 **offset** | **Number**| Offset of returned items from the beginning. | [optional] [default to 0]

### Return type

[**Contracts**](Contracts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateContract

> Contract updateContract(contractId, financierId, opts)

Update contract

Endpoint used to update contract information. Sub-actions available:   - Cancel contract;     Can be done by sending status &#39;CANCELED&#39;.   - Complete contract;     Can be done by sending status &#39;COMPLETED&#39;.   - Start contract;     Can be done by sending status &#39;ACTIVE&#39; and startedDate parameters.  ##### Usage - Replace {{contract_id}} with an actual Contract ID before trying this endpoint.  - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.ContractsApi();
var contractId = {{contract_id}}; // String | 
var financierId = {{financier_id}}; // String | Financier ID.
var opts = {
  'contractUpdateRequest': new PodApiClient.ContractUpdateRequest() // ContractUpdateRequest | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateContract(contractId, financierId, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | **String**|  | 
 **financierId** | **String**| Financier ID. | 
 **contractUpdateRequest** | [**ContractUpdateRequest**](ContractUpdateRequest.md)|  | [optional] 

### Return type

[**Contract**](Contract.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

