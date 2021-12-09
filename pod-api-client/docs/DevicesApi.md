# PodApiClient.DevicesApi

All URIs are relative to *https://sandbox.api.mastercard.com/pods*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDevice**](DevicesApi.md#getDevice) | **GET** /devices/{device_id} | Get a device details
[**getDevices**](DevicesApi.md#getDevices) | **GET** /devices | Get details of devices



## getDevice

> DeviceResponse getDevice(deviceId, financierId)

Get a device details

##### Usage - Replace {{device_id}} with an actual Device ID before trying this endpoint.  - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.DevicesApi();
var deviceId = {{device_id}}; // String | 
var financierId = {{financier_id}}; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDevice(deviceId, financierId, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 
 **financierId** | **String**|  | 

### Return type

[**DeviceResponse**](DeviceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDevices

> DeviceListing getDevices(financierId, opts)

Get details of devices

##### Usage - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.DevicesApi();
var financierId = {{financier_id}}; // String | 
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
apiInstance.getDevices(financierId, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **financierId** | **String**|  | 
 **limit** | **Number**| Limit of number of returned items. | [optional] [default to 20]
 **offset** | **Number**| Offset of returned items from the beginning. | [optional] [default to 0]

### Return type

[**DeviceListing**](DeviceListing.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

