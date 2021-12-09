# PodApiClient.PaymentSession

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Payment session id created by the POD system for this payment session. | 
**accessToken** | **String** | Access token generater for this payment session. | [optional] 
**tokenType** | **String** | Type of Token generated for this payment session. | [optional] 
**expiresIn** | **String** | Expiry Time for this session Id. | [optional] 
**financierId** | **String** | Financier ID that owns this payment session. | 
**contractId** | **String** | Contract ID that owns this payment session. | 
**defaultPaymentMethodId** | **String** | Default payment method id for user. | 
**gatewayConfiguration** | [**GatewayConfigurationWeb**](GatewayConfigurationWeb.md) |  | 
**orderId** | **String** | Order id that generated for sending to payment gateway to make the transaction. | 
**podTransactionId** | **String** | Transaction id that generated for sending to payment gateway to make the transaction. | 
**totalAmount** | **String** | Total payment amount. Formatted according to ISO 4217 standard. | 
**currency** | **String** | Currency in ISO 4217 format. | 
**lightBoxUrl** | **String** | This url used to invoke the payment page from the light box | 
**lineItems** | [**[LineItem]**](LineItem.md) |  | 


