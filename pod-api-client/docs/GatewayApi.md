# PodApiClient.GatewayApi

All URIs are relative to *https://sandbox.api.mastercard.com/pods*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGateways**](GatewayApi.md#getGateways) | **GET** /gateways | Get list of gateways



## getGateways

> Gateways getGateways()

Get list of gateways

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.GatewayApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGateways(callback);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Gateways**](Gateways.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

