# PodApiClient.PaymentSessionsApi

All URIs are relative to *https://sandbox.api.mastercard.com/pods*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentSession**](PaymentSessionsApi.md#createPaymentSession) | **POST** /payment-sessions | Create a new payment session



## createPaymentSession

> PaymentSession createPaymentSession(opts)

Create a new payment session

##### Usage - Replace {{contract_id}} with an actual Contract ID before trying this endpoint.  - Replace {{financier_id}} with an actual Financier ID before trying this endpoint.  

### Example

```javascript
var PodApiClient = require('pod-api-client');

var apiInstance = new PodApiClient.PaymentSessionsApi();
var opts = {
  'paymentSessionRequest': new PodApiClient.PaymentSessionRequest() // PaymentSessionRequest | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPaymentSession(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentSessionRequest** | [**PaymentSessionRequest**](PaymentSessionRequest.md)|  | [optional] 

### Return type

[**PaymentSession**](PaymentSession.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

