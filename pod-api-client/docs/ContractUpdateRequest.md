# PodApiClient.ContractUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Total payment amount. Formatted according to ISO 4217 standard. | [optional] 
**currency** | **String** | Currency in ISO 4217 format. | [optional] 
**defaultPaymentMethodId** | **String** | Default payment method for this contract. | [optional] 
**device** | [**ContractDeviceUpdateRequest**](ContractDeviceUpdateRequest.md) |  | [optional] 
**downpaymentAmount** | **Number** | Amount of downpayment. Formatted according to ISO 4217 standard. | [optional] 
**downpaymentTransactionId** | **String** | id of downpayment transaction. | [optional] 
**duration** | **Number** | Length of contract duration based on duration unit chosen. Minimum value is 1. | [optional] 
**durationUnit** | **String** | Time unit for length of contract. It can be DAY, WEEK or MONTH. | [optional] 
**gracePeriod** | **Number** | Grace period after payment due date before locking device. | [optional] [default to 0]
**gracePeriodUnit** | **String** | Grace period unit after payment due date before locking device. It can be HOUR, DAY, WEEK or MONTH. | [optional] [default to &#39;HOUR&#39;]
**instalmentContractDetails** | [**InstalmentContractDetail**](InstalmentContractDetail.md) |  | [optional] 
**startDate** | **Date** | Date time when contract is started. Default is null. | [optional] 
**status** | **String** | Status of contract. - CREATED; Contract is created but not started. - ACTIVE; Contract is started and active. - INACTIVE; Contract is started but inactive. Credit is not deducted and payment schedules are not active. Payment can no longer be made. - CANCELED; Contract is canceled. Credit is not deducted and payment schedules are not active. Payment can no longer be made. - COMPLETED; Contract is completed. Credit is not deducted and payment schedules are not active. Payment can no longer be made.  Default is CREATED  | [optional] 
**type** | **String** | Type of contract. Determine how payment is done. It can be CREDIT or INSTALMENT. | [optional] 


