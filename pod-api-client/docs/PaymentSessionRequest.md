# PodApiClient.PaymentSessionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**financierId** | **String** | Financier ID that owns this payment session. | 
**contractId** | **String** | Contract ID that the payment session is tied with. | 
**deviceId** | **String** | Device ID that makes this transaction for. | 
**scope** | **String** | Payment session scope. - DEFAULT; only value currently supported.  | 
**totalAmount** | **String** | Total payment amount. Formatted according to ISO 4217 standard. | 
**expiryDate** | **String** | Date time with off set value. Maximum 15 minutes cab be added to the current date time. | 
**callBackUrl** | **String** | Call back url that is used to call back the financier system | 
**lineItems** | [**[LineItem]**](LineItem.md) |  | 


