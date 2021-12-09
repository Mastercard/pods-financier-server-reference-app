# PodApiClient.Transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID. | 
**financierId** | **String** | Financier ID that owns this transaction. | 
**contractId** | **String** | Contract ID that owns this transaction. | 
**totalAmount** | **String** | Total amount. Formatted according to ISO 4217 standard. | 
**currency** | **String** | Currency in ISO 4217 format. | 
**transactionReference** | **String** | External transaction reference. This number is unique per financier. | 
**transactionDate** | **String** | Date time when transaction is made. | 
**source** | **String** | Source of transaction. | 
**transactionStatus** | **String** | Status. It can be INIT, FAILED, PENDING, APPROVED. | 
**transactionType** | **String** | Type. It can be EXTERNAL or INTERNAL. | [optional] 
**lineItems** | [**[LineItem]**](LineItem.md) |  | [optional] 


