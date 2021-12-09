# PodApiClient.FinanciersApi

All URIs are relative to *https://sandbox.api.mastercard.com/pods*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFinancier**](FinanciersApi.md#addFinancier) | **POST** /financiers | Add a new financier
[**deleteFinancier**](FinanciersApi.md#deleteFinancier) | **DELETE** /financiers/{financier_id} | Delete a financier
[**getFinancier**](FinanciersApi.md#getFinancier) | **GET** /financiers/{financier_id} | Get a financier&#39;s details
[**getFinanciers**](FinanciersApi.md#getFinanciers) | **GET** /financiers | List financiers
[**updateFinancier**](FinanciersApi.md#updateFinancier) | **PUT** /financiers/{financier_id} | Update financier&#39;s details



## addFinancier

> Financier addFinancier(opts)

Add a new financier

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.FinanciersApi();
var opts = {
  'financierCreateRequest': new PodApiClient.FinancierCreateRequest() // FinancierCreateRequest | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addFinancier(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financierCreateRequest** | [**FinancierCreateRequest**](FinancierCreateRequest.md)|  | [optional] 

### Return type

[**Financier**](Financier.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFinancier

> deleteFinancier(financierId)

Delete a financier

##### Usage - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.FinanciersApi();
var financierId = {{financier_id}}; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFinancier(financierId, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financierId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFinancier

> Financier getFinancier(financierId)

Get a financier&#39;s details

##### Usage - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.FinanciersApi();
var financierId = {{financier_id}}; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFinancier(financierId, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financierId** | **String**|  | 

### Return type

[**Financier**](Financier.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFinanciers

> Financiers getFinanciers(opts)

List financiers

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.FinanciersApi();
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
apiInstance.getFinanciers(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Limit of number of returned items. | [optional] [default to 20]
 **offset** | **Number**| Offset of returned items from the beginning. | [optional] [default to 0]

### Return type

[**Financiers**](Financiers.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateFinancier

> Financier updateFinancier(financierId, opts)

Update financier&#39;s details

##### Usage - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.FinanciersApi();
var financierId = {{financier_id}}; // String | 
var opts = {
  'financierCreateRequest': new PodApiClient.FinancierCreateRequest() // FinancierCreateRequest | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateFinancier(financierId, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financierId** | **String**|  | 
 **financierCreateRequest** | [**FinancierCreateRequest**](FinancierCreateRequest.md)|  | [optional] 

### Return type

[**Financier**](Financier.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

