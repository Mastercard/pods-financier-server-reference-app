# PodApiClient.ContractCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Total payment amount. Formatted according to ISO 4217 standard. | 
**currency** | **String** | Currency in ISO 4217 format. | 
**defaultPaymentMethodId** | **String** | Default payment method for this contract. | [optional] 
**device** | [**ContractDeviceCreateRequest**](ContractDeviceCreateRequest.md) |  | [optional] 
**downpaymentAmount** | **Number** | Amount of downpayment. Formatted according to ISO 4217 standard. | 
**downpaymentTransactionId** | **String** | id of downpayment transaction. | [optional] 
**duration** | **Number** | Length of contract duration based on duration unit chosen. Minimum value is 1. | 
**durationUnit** | **String** | Time unit for length of contract. It can be DAY, WEEK or MONTH. | 
**financierId** | **String** | Financier ID that owns this contract. | 
**gracePeriod** | **Number** | Grace period after payment due date before locking device. | [optional] [default to 0]
**gracePeriodUnit** | **String** | Grace period unit after payment due date before locking device. It can be HOUR, DAY, WEEK or MONTH. | [optional] [default to &#39;HOUR&#39;]
**instalmentContractDetails** | [**InstalmentContractDetail**](InstalmentContractDetail.md) |  | [optional] 
**type** | **String** | Type of contract. Determine how payment is done. It can be CREDIT or INSTALMENT. | 


