# PodApiClient.GatewayConfigurationApi

All URIs are relative to *https://sandbox.api.mastercard.com/pods*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGatewayConfiguration**](GatewayConfigurationApi.md#addGatewayConfiguration) | **POST** /gateway-configurations | Add gateway configuration
[**deleteGatewayConfiguration**](GatewayConfigurationApi.md#deleteGatewayConfiguration) | **DELETE** /gateway-configurations/{gateway_configuration_id} | Delete gateway configuration
[**getGatewayConfiguration**](GatewayConfigurationApi.md#getGatewayConfiguration) | **GET** /gateway-configurations/{gateway_configuration_id} | Get gateway configuration
[**getGatewayConfigurations**](GatewayConfigurationApi.md#getGatewayConfigurations) | **GET** /gateway-configurations | Get list of gateway configurations
[**updateGatewayConfiguration**](GatewayConfigurationApi.md#updateGatewayConfiguration) | **PUT** /gateway-configurations/{gateway_configuration_id} | Update gateway configuration



## addGatewayConfiguration

> GatewayConfiguration addGatewayConfiguration(opts)

Add gateway configuration

##### Usage - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.   - Replace {{gateway_id}} with an actual Gateway ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.GatewayConfigurationApi();
var opts = {
  'gatewayConfigurationRequest': new PodApiClient.GatewayConfigurationRequest() // GatewayConfigurationRequest | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addGatewayConfiguration(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gatewayConfigurationRequest** | [**GatewayConfigurationRequest**](GatewayConfigurationRequest.md)|  | [optional] 

### Return type

[**GatewayConfiguration**](GatewayConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteGatewayConfiguration

> deleteGatewayConfiguration(gatewayConfigurationId)

Delete gateway configuration

##### Usage - Replace {{gateway_configuration_id}} with an actual Gateway Configuration ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.GatewayConfigurationApi();
var gatewayConfigurationId = {{gateway_configuration_id}}; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteGatewayConfiguration(gatewayConfigurationId, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gatewayConfigurationId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGatewayConfiguration

> GatewayConfiguration getGatewayConfiguration(gatewayConfigurationId)

Get gateway configuration

##### Usage - Replace {{gateway_configuration_id}} with an actual Gateway Configuration ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.GatewayConfigurationApi();
var gatewayConfigurationId = {{gateway_configuration_id}}; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGatewayConfiguration(gatewayConfigurationId, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gatewayConfigurationId** | **String**|  | 

### Return type

[**GatewayConfiguration**](GatewayConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGatewayConfigurations

> GatewayConfigurations getGatewayConfigurations(financierId, opts)

Get list of gateway configurations

##### Usage - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.GatewayConfigurationApi();
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
apiInstance.getGatewayConfigurations(financierId, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financierId** | **String**| Financier ID. | 
 **limit** | **Number**| Limit of number of returned items. | [optional] [default to 20]
 **offset** | **Number**| Offset of returned items from the beginning. | [optional] [default to 0]

### Return type

[**GatewayConfigurations**](GatewayConfigurations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateGatewayConfiguration

> GatewayConfiguration updateGatewayConfiguration(gatewayConfigurationId, opts)

Update gateway configuration

##### Usage - Replace {{gateway_configuration_id}} with an actual Gateway Configuration ID before trying this endpoint.  - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  - Replace {{gateway_id}} with an actual Gateway ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.GatewayConfigurationApi();
var gatewayConfigurationId = {{gateway_configuration_id}}; // String | 
var opts = {
  'gatewayConfigurationRequest': new PodApiClient.GatewayConfigurationRequest() // GatewayConfigurationRequest | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateGatewayConfiguration(gatewayConfigurationId, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gatewayConfigurationId** | **String**|  | 
 **gatewayConfigurationRequest** | [**GatewayConfigurationRequest**](GatewayConfigurationRequest.md)|  | [optional] 

### Return type

[**GatewayConfiguration**](GatewayConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

