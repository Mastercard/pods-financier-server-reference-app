# PodApiClient.Contract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID. | 
**amount** | **Number** | Total payment amount. Formatted according to ISO 4217 standard. | 
**currency** | **String** | Currency in ISO 4217 format. | 
**defaultPaymentMethodId** | **String** | Default payment method for this contract. | [optional] 
**device** | [**ContractDevice**](ContractDevice.md) |  | [optional] 
**downpaymentAmount** | **Number** | Amount of downpayment. Formatted according to ISO 4217 standard. | 
**downpaymentTransactionId** | **String** | ID. | [optional] 
**duration** | **Number** | Length of contract duration based on duration unit chosen. Minimum value is 1. | 
**durationUnit** | **String** | Time unit for length of contract. It can be DAY, WEEK or MONTH. | 
**financierId** | **String** | Financier ID that owns this contract. | 
**instalmentContractDetails** | [**InstalmentContractDetail**](InstalmentContractDetail.md) |  | [optional] 
**startDate** | **Date** | Date time when contract is started. Default is null. | 
**status** | **String** | Status of contract. - CREATED; Contract is created but not started. - ACTIVE; Contract is started and active. - INACTIVE; Contract is started but inactive. Credit is not deducted and payment schedules are not active. Payment can no longer be made. - CANCELED; Contract is canceled. Credit is not deducted and payment schedules are not active. Payment can no longer be made. - COMPLETED; Contract is completed. Credit is not deducted and payment schedules are not active. Payment can no longer be made.  Default is CREATED  | 
**totalPaidAmount** | **Number** | Total amount paid. This is derived from the total amount of transactions happen for this contract. | 
**type** | **String** | Type of contract. Determine how payment is done. It can be CREDIT or INSTALMENT. | 


