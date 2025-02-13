# vBase <a name="assembly" id="assembly" href="#assembly"></a>

## Contents

- [AssemblyResolver](#tundefinedvbase-infrastructure-assemblyresolver 'vBase.Infrastructure.AssemblyResolver')
- [ComGuids](#tundefinedvbase-comguids 'vBase.ComGuids')
- [IReceipt](#tundefinedvbase-receipts-ireceipt 'vBase.Receipts.IReceipt')
  - [Timestamp](#pundefinedvbase-receipts-ireceipt-timestamp 'vBase.Receipts.IReceipt.Timestamp')
- [IVerificationResult](#tundefinedvbase-iverificationresult 'vBase.IVerificationResult')
  - [VerificationFindings](#pundefinedvbase-iverificationresult-verificationfindings 'vBase.IVerificationResult.VerificationFindings')
  - [VerificationPassed](#pundefinedvbase-iverificationresult-verificationpassed 'vBase.IVerificationResult.VerificationPassed')
- [IWeb3Receipt](#tundefinedvbase-receipts-iweb3receipt 'vBase.Receipts.IWeb3Receipt')
  - [Timestamp](#pundefinedvbase-receipts-iweb3receipt-timestamp 'vBase.Receipts.IWeb3Receipt.Timestamp')
  - [TransactionHash](#pundefinedvbase-receipts-iweb3receipt-transactionhash 'vBase.Receipts.IWeb3Receipt.TransactionHash')
- [IvBaseBuilder](#tundefinedvbase-ivbasebuilder 'vBase.IvBaseBuilder')
  - [CreateDataset(client,name,objectType)](#mundefinedvbase-ivbasebuilder-createdataset-vbase-ivbaseclientundefinedsystem-string%2Cvbase-objecttypes- 'vBase.IvBaseBuilder.CreateDataset(vBase.IvBaseClient,System.String,vBase.ObjectTypes)')
  - [CreateDatasetFromJson(client,json)](#mundefinedvbase-ivbasebuilder-createdatasetfromjson-vbase-ivbaseclientundefinedsystem-string- 'vBase.IvBaseBuilder.CreateDatasetFromJson(vBase.IvBaseClient,System.String)')
  - [CreateForwarderClient(forwarderUrl,apiKey,privateKey)](#mundefinedvbase-ivbasebuilder-createforwarderclient-system-stringundefinedsystem-string%2Csystem-string- 'vBase.IvBaseBuilder.CreateForwarderClient(System.String,System.String,System.String)')
- [IvBaseClient](#tundefinedvbase-ivbaseclient 'vBase.IvBaseClient')
  - [AddNamedSet(name)](#mundefinedvbase-ivbaseclient-addnamedset-system-string- 'vBase.IvBaseClient.AddNamedSet(System.String)')
  - [AddSet(setCid)](#mundefinedvbase-ivbaseclient-addset-system-string- 'vBase.IvBaseClient.AddSet(System.String)')
  - [AddSetObject(setCid,objectCid)](#mundefinedvbase-ivbaseclient-addsetobject-system-stringundefinedsystem-string- 'vBase.IvBaseClient.AddSetObject(System.String,System.String)')
  - [UserNamedSetExists(user,name)](#mundefinedvbase-ivbaseclient-usernamedsetexists-system-stringundefinedsystem-string- 'vBase.IvBaseClient.UserNamedSetExists(System.String,System.String)')
  - [VerifyUserObject(user,objectCid,timestamp)](#mundefinedvbase-ivbaseclient-verifyuserobject-system-stringundefinedsystem-string%2Csystem-int64- 'vBase.IvBaseClient.VerifyUserObject(System.String,System.String,System.Int64)')
  - [VerifyUserSetObjects(user,setCid,userSetObjectsCidSum)](#mundefinedvbase-ivbaseclient-verifyusersetobjects-system-stringundefinedsystem-string%2Csystem-string- 'vBase.IvBaseClient.VerifyUserSetObjects(System.String,System.String,System.String)')
- [IvBaseDataset](#tundefinedvbase-ivbasedataset 'vBase.IvBaseDataset')
  - [AddRecord(recordData)](#mundefinedvbase-ivbasedataset-addrecord-system-object- 'vBase.IvBaseDataset.AddRecord(System.Object)')
  - [ToJson()](#mundefinedvbase-ivbasedataset-tojson 'vBase.IvBaseDataset.ToJson')
  - [VerifyCommitments()](#mundefinedvbase-ivbasedataset-verifycommitments 'vBase.IvBaseDataset.VerifyCommitments')
- [ObjectTypes](#tundefinedvbase-objecttypes 'vBase.ObjectTypes')
- [ReceiptConverter](#tundefinedvbase-infrastructure-receiptconverter 'vBase.Infrastructure.ReceiptConverter')
  - [ToCom(receipt)](#mundefinedvbase-infrastructure-receiptconverter-tocom-vbase-core-receipt- 'vBase.Infrastructure.ReceiptConverter.ToCom(vBase.Core.Receipt)')
- [SecurityProtocolHelper](#tundefinedvbase-infrastructure-securityprotocolhelper 'vBase.Infrastructure.SecurityProtocolHelper')
  - [ResetSecurityProtocol()](#mundefinedvbase-infrastructure-securityprotocolhelper-resetsecurityprotocol 'vBase.Infrastructure.SecurityProtocolHelper.ResetSecurityProtocol')
- [ShimInstaller](#tundefinedvbase-infrastructure-shiminstaller 'vBase.Infrastructure.ShimInstaller')
- [Utils](#tundefinedvbase-utils 'vBase.Utils')
  - [PreprocessException(action,logger)](#mundefinedvbase-utils-preprocessexception-system-actionundefinedmicrosoft-extensions-logging-ilogger- 'vBase.Utils.PreprocessException(System.Action,Microsoft.Extensions.Logging.ILogger)')
  - [PreprocessException(ex)](#mundefinedvbase-utils-preprocessexception-system-exception- 'vBase.Utils.PreprocessException(System.Exception)')
  - [PreprocessException\`\`1(func,logger)](#mundefinedvbase-utils-preprocessexceptionundefined%601-system-func%7B%60%600%7Dundefinedmicrosoft-extensions-logging-ilogger- 'vBase.Utils.PreprocessException``1(System.Func{``0},Microsoft.Extensions.Logging.ILogger)')

## AssemblyResolver `type` <a name="tundefinedvbase-infrastructure-assemblyresolver" id="tundefinedvbase-infrastructure-assemblyresolver" href="#tundefinedvbase-infrastructure-assemblyresolver"></a>

##### Namespace

vBase.Infrastructure

##### Summary

Some dependencies are referenced transitively multiple times with different versions.
Only the latest version is available in the application folder.
To resolve older versions at runtime and return the latest version,
we use the AssemblyResolver class.

## ComGuids `type` <a name="tundefinedvbase-comguids" id="tundefinedvbase-comguids" href="#tundefinedvbase-comguids"></a>

##### Namespace

vBase

##### Summary

Contains the GUIDs for the COM interfaces and classes.

## IReceipt `type` <a name="tundefinedvbase-receipts-ireceipt" id="tundefinedvbase-receipts-ireceipt" href="#tundefinedvbase-receipts-ireceipt"></a>

##### Namespace

vBase.Receipts

##### Summary

Represents a transaction receipt.

### Timestamp `property` <a name="pundefinedvbase-receipts-ireceipt-timestamp" id="pundefinedvbase-receipts-ireceipt-timestamp" href="#pundefinedvbase-receipts-ireceipt-timestamp"></a>

##### Summary

The transaction timestamp in Unix time format (seconds).

## IVerificationResult `type` <a name="tundefinedvbase-iverificationresult" id="tundefinedvbase-iverificationresult" href="#tundefinedvbase-iverificationresult"></a>

##### Namespace

vBase

##### Summary

Represents the result of a verification operation.

### VerificationFindings `property` <a name="pundefinedvbase-iverificationresult-verificationfindings" id="pundefinedvbase-iverificationresult-verificationfindings" href="#pundefinedvbase-iverificationresult-verificationfindings"></a>

##### Summary

A collection of verification findings.

### VerificationPassed `property` <a name="pundefinedvbase-iverificationresult-verificationpassed" id="pundefinedvbase-iverificationresult-verificationpassed" href="#pundefinedvbase-iverificationresult-verificationpassed"></a>

##### Summary

Indicates whether the verification passed.

## IWeb3Receipt `type` <a name="tundefinedvbase-receipts-iweb3receipt" id="tundefinedvbase-receipts-iweb3receipt" href="#tundefinedvbase-receipts-iweb3receipt"></a>

##### Namespace

vBase.Receipts

##### Summary

WEB3-specific receipt.
 Additionally to the base timestamp, it contains the transaction hash.

 In COM interfaces can inherit from one another.
 However, the .NET implementation that exposes the .NET interface to COM
 does not support inheritance.
 Therefore, you must replicate any interface members in a base interface
 to the derived interface.
 The interop code does not look at base interface types when building
 the exposed COM interface.

### Timestamp `property` <a name="pundefinedvbase-receipts-iweb3receipt-timestamp" id="pundefinedvbase-receipts-iweb3receipt-timestamp" href="#pundefinedvbase-receipts-iweb3receipt-timestamp"></a>

##### Summary

The transaction timestamp in Unix time format (seconds).

### TransactionHash `property` <a name="pundefinedvbase-receipts-iweb3receipt-transactionhash" id="pundefinedvbase-receipts-iweb3receipt-transactionhash" href="#pundefinedvbase-receipts-iweb3receipt-transactionhash"></a>

##### Summary

The transaction hash.

## IvBaseBuilder `type` <a name="tundefinedvbase-ivbasebuilder" id="tundefinedvbase-ivbasebuilder" href="#tundefinedvbase-ivbasebuilder"></a>

##### Namespace

vBase

##### Summary

COM does not support constructors with parameters, so we need to use a factory method to create the objects.

### CreateDataset(client,name,objectType) `method` <a name="mundefinedvbase-ivbasebuilder-createdataset-vbase-ivbaseclientundefinedsystem-string%2Cvbase-objecttypes-" id="mundefinedvbase-ivbasebuilder-createdataset-vbase-ivbaseclientundefinedsystem-string%2Cvbase-objecttypes-" href="#mundefinedvbase-ivbasebuilder-createdataset-vbase-ivbaseclientundefinedsystem-string%2Cvbase-objecttypes-"></a>

##### Summary

Create a COM visible dataset object.

##### Returns

Newly created dataset object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| client | [vBase.IvBaseClient](#tundefinedvbase-ivbaseclient 'vBase.IvBaseClient') | vBase client. |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the dataset. |
| objectType | [vBase.ObjectTypes](#tundefinedvbase-objecttypes 'vBase.ObjectTypes') | Type of the objects that will be stored in the dataset. |

### CreateDatasetFromJson(client,json) `method` <a name="mundefinedvbase-ivbasebuilder-createdatasetfromjson-vbase-ivbaseclientundefinedsystem-string-" id="mundefinedvbase-ivbasebuilder-createdatasetfromjson-vbase-ivbaseclientundefinedsystem-string-" href="#mundefinedvbase-ivbasebuilder-createdatasetfromjson-vbase-ivbaseclientundefinedsystem-string-"></a>

##### Summary

Create a COM visible dataset object.

##### Returns

Newly created dataset object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| client | [vBase.IvBaseClient](#tundefinedvbase-ivbaseclient 'vBase.IvBaseClient') | vBase client. |
| json | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Json that contains all data records, and dataset properties. |

### CreateForwarderClient(forwarderUrl,apiKey,privateKey) `method` <a name="mundefinedvbase-ivbasebuilder-createforwarderclient-system-stringundefinedsystem-string%2Csystem-string-" id="mundefinedvbase-ivbasebuilder-createforwarderclient-system-stringundefinedsystem-string%2Csystem-string-" href="#mundefinedvbase-ivbasebuilder-createforwarderclient-system-stringundefinedsystem-string%2Csystem-string-"></a>

##### Summary

Create a COM visible client for the vBase API.

##### Returns

Newly created client object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| forwarderUrl | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Forwarder API url. |
| apiKey | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | API key. |
| privateKey | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Private key. |

## IvBaseClient `type` <a name="tundefinedvbase-ivbaseclient" id="tundefinedvbase-ivbaseclient" href="#tundefinedvbase-ivbaseclient"></a>

##### Namespace

vBase

##### Summary

COM visible client interface for the vBase API.
It's a shim between the COM client and the vBase.Core client class.

### AddNamedSet(name) `method` <a name="mundefinedvbase-ivbaseclient-addnamedset-system-string-" id="mundefinedvbase-ivbaseclient-addnamedset-system-string-" href="#mundefinedvbase-ivbaseclient-addnamedset-system-string-"></a>

##### Summary

Creates a commitment for a set with a given name.
The set will be added for the account associated with the client object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the set. |

### AddSet(setCid) `method` <a name="mundefinedvbase-ivbaseclient-addset-system-string-" id="mundefinedvbase-ivbaseclient-addset-system-string-" href="#mundefinedvbase-ivbaseclient-addset-system-string-"></a>

##### Summary

Records a set commitment.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The HEX encoded CID (hash) identifying the set. |

### AddSetObject(setCid,objectCid) `method` <a name="mundefinedvbase-ivbaseclient-addsetobject-system-stringundefinedsystem-string-" id="mundefinedvbase-ivbaseclient-addsetobject-system-stringundefinedsystem-string-" href="#mundefinedvbase-ivbaseclient-addsetobject-system-stringundefinedsystem-string-"></a>

##### Summary

Adds a record to the dataset.

##### Returns

The transaction timestamp of the record addition in Unix time format (seconds).

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | HEX encoded CID for the set containing the object. |
| objectCid | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | HEX encoded CID of the object to record. |

### UserNamedSetExists(user,name) `method` <a name="mundefinedvbase-ivbaseclient-usernamedsetexists-system-stringundefinedsystem-string-" id="mundefinedvbase-ivbaseclient-usernamedsetexists-system-stringundefinedsystem-string-" href="#mundefinedvbase-ivbaseclient-usernamedsetexists-system-stringundefinedsystem-string-"></a>

##### Summary

Checks if a named dataset exists.

##### Returns

True if the set with the given name exists; False otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The address for the user who recorded the commitment. |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the set. |

### VerifyUserObject(user,objectCid,timestamp) `method` <a name="mundefinedvbase-ivbaseclient-verifyuserobject-system-stringundefinedsystem-string%2Csystem-int64-" id="mundefinedvbase-ivbaseclient-verifyuserobject-system-stringundefinedsystem-string%2Csystem-int64-" href="#mundefinedvbase-ivbaseclient-verifyuserobject-system-stringundefinedsystem-string%2Csystem-int64-"></a>

##### Summary

Verifies an object commitment previously recorded.

##### Returns

True if the commitment has been verified successfully; False otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The address for the user who recorded the commitment. |
| objectCid | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The HEX encoded CID of the object. |
| timestamp | [System.Int64](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int64 'System.Int64') | The timestamp of the object's creation, in Unix time format (seconds). |

### VerifyUserSetObjects(user,setCid,userSetObjectsCidSum) `method` <a name="mundefinedvbase-ivbaseclient-verifyusersetobjects-system-stringundefinedsystem-string%2Csystem-string-" id="mundefinedvbase-ivbaseclient-verifyusersetobjects-system-stringundefinedsystem-string%2Csystem-string-" href="#mundefinedvbase-ivbaseclient-verifyusersetobjects-system-stringundefinedsystem-string%2Csystem-string-"></a>

##### Summary

Verifies an object commitment previously recorded.

##### Returns

True if the commitment has been verified successfully; False otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The address for the user who recorded the commitment. |
| setCid | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The CID for the set containing the object. |
| userSetObjectsCidSum | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The sum of all object hashes for the user set. |

## IvBaseDataset `type` <a name="tundefinedvbase-ivbasedataset" id="tundefinedvbase-ivbasedataset" href="#tundefinedvbase-ivbasedataset"></a>

##### Namespace

vBase

##### Summary

Represents a set of records created on the Validity Base platform.

### AddRecord(recordData) `method` <a name="mundefinedvbase-ivbasedataset-addrecord-system-object-" id="mundefinedvbase-ivbasedataset-addrecord-system-object-" href="#mundefinedvbase-ivbasedataset-addrecord-system-object-"></a>

##### Summary

Adds a record to the dataset.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| recordData | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | Record to add. |

### ToJson() `method` <a name="mundefinedvbase-ivbasedataset-tojson" id="mundefinedvbase-ivbasedataset-tojson" href="#mundefinedvbase-ivbasedataset-tojson"></a>

##### Summary

Serializes the dataset to a JSON string.

##### Returns

JSON string that can be deserialized using vBase SDK on any other platform.

##### Parameters

This method has no parameters.

### VerifyCommitments() `method` <a name="mundefinedvbase-ivbasedataset-verifycommitments" id="mundefinedvbase-ivbasedataset-verifycommitments" href="#mundefinedvbase-ivbasedataset-verifycommitments"></a>

##### Summary

Verifies if all records in the dataset were actually created on the Validity Base platform at the specified timestamps.

##### Returns

Validation result: A collection of errors. For each record that was not found on the Validity Base platform, 
or was added with a different timestamp, there will be a separate error item in the collection.
Additionally, an error item will be added if the dataset on the Validity Base platform contains more records 
than exist in this client-side dataset.

##### Parameters

This method has no parameters.

## ObjectTypes `type` <a name="tundefinedvbase-objecttypes" id="tundefinedvbase-objecttypes" href="#tundefinedvbase-objecttypes"></a>

##### Namespace

vBase

##### Summary

Types of objects that can be stored in a dataset.

## ReceiptConverter `type` <a name="tundefinedvbase-infrastructure-receiptconverter" id="tundefinedvbase-infrastructure-receiptconverter" href="#tundefinedvbase-infrastructure-receiptconverter"></a>

##### Namespace

vBase.Infrastructure

##### Summary

Converts between [Receipt](#tundefinedvbase-core-receipt 'vBase.Core.Receipt') and COM-compatible [IReceipt](#tundefinedvbase-receipts-ireceipt 'vBase.Receipts.IReceipt').

### ToCom(receipt) `method` <a name="mundefinedvbase-infrastructure-receiptconverter-tocom-vbase-core-receipt-" id="mundefinedvbase-infrastructure-receiptconverter-tocom-vbase-core-receipt-" href="#mundefinedvbase-infrastructure-receiptconverter-tocom-vbase-core-receipt-"></a>

##### Summary

Converts a [Receipt](#tundefinedvbase-core-receipt 'vBase.Core.Receipt') to a [IReceipt](#tundefinedvbase-receipts-ireceipt 'vBase.Receipts.IReceipt').

##### Returns

The converted receipt.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| receipt | [vBase.Core.Receipt](#tundefinedvbase-core-receipt 'vBase.Core.Receipt') | The receipt to convert. |

## SecurityProtocolHelper `type` <a name="tundefinedvbase-infrastructure-securityprotocolhelper" id="tundefinedvbase-infrastructure-securityprotocolhelper" href="#tundefinedvbase-infrastructure-securityprotocolhelper"></a>

##### Namespace

vBase.Infrastructure

##### Summary

When running the shim in the VBA environment, we observed on some machines
that the security protocol is explicitly set to Ssl3 or Tls.
Such a configuration is incompatible with TLS 1.2, which is the protocol used by the Forwarder server.
Experimentally, we found that setting the security protocol to 0 (SystemDefault) does not resolve the issue.
Setting explicitly to Tls12 does.

### ResetSecurityProtocol() `method` <a name="mundefinedvbase-infrastructure-securityprotocolhelper-resetsecurityprotocol" id="mundefinedvbase-infrastructure-securityprotocolhelper-resetsecurityprotocol" href="#mundefinedvbase-infrastructure-securityprotocolhelper-resetsecurityprotocol"></a>

##### Summary

Updates the security protocol to Tls12.

##### Parameters

This method has no parameters.

## ShimInstaller `type` <a name="tundefinedvbase-infrastructure-shiminstaller" id="tundefinedvbase-infrastructure-shiminstaller" href="#tundefinedvbase-infrastructure-shiminstaller"></a>

##### Namespace

vBase.Infrastructure

##### Summary

It's important to register the assembly using both versions of regasm—32-bit and 64-bit.
Even though the Excel process is 64-bit, it seems that the VBA execution process is 32-bit,
so it doesn't recognize the registrations in the 64-bit registry.

## Utils `type` <a name="tundefinedvbase-utils" id="tundefinedvbase-utils" href="#tundefinedvbase-utils"></a>

##### Namespace

vBase

##### Summary

Utility methods.

### PreprocessException(action,logger) `method` <a name="mundefinedvbase-utils-preprocessexception-system-actionundefinedmicrosoft-extensions-logging-ilogger-" id="mundefinedvbase-utils-preprocessexception-system-actionundefinedmicrosoft-extensions-logging-ilogger-" href="#mundefinedvbase-utils-preprocessexception-system-actionundefinedmicrosoft-extensions-logging-ilogger-"></a>

##### Summary

Executes an action and logs any exceptions that occur.
Additionally, converts the exception into a VBA-friendly exception.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| action | [System.Action](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Action 'System.Action') | Action to execute. |
| logger | [Microsoft.Extensions.Logging.ILogger](#tundefinedmicrosoft-extensions-logging-ilogger 'Microsoft.Extensions.Logging.ILogger') | Logger. |

### PreprocessException(ex) `method` <a name="mundefinedvbase-utils-preprocessexception-system-exception-" id="mundefinedvbase-utils-preprocessexception-system-exception-" href="#mundefinedvbase-utils-preprocessexception-system-exception-"></a>

##### Summary

Converts a regular .NET exception into a VBA-friendly exception with all relevant information aggregated into the exception message.
This improves the user experience in a VBA environment, where the error object does not include the stack trace or the original exception type.

##### Returns

A VBA-friendly exception with aggregated information.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ex | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The original exception. |

### PreprocessException\`\`1(func,logger) `method` <a name="mundefinedvbase-utils-preprocessexceptionundefined%601-system-func%7B%60%600%7Dundefinedmicrosoft-extensions-logging-ilogger-" id="mundefinedvbase-utils-preprocessexceptionundefined%601-system-func%7B%60%600%7Dundefinedmicrosoft-extensions-logging-ilogger-" href="#mundefinedvbase-utils-preprocessexceptionundefined%601-system-func%7B%60%600%7Dundefinedmicrosoft-extensions-logging-ilogger-"></a>

##### Summary

Executes a function and logs any exceptions that occur.
Additionally, converts the exception into a VBA-friendly exception.

##### Returns

Function execution result.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| func | [System.Func{\`\`0}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{``0}') | Function to execute. |
| logger | [Microsoft.Extensions.Logging.ILogger](#tundefinedmicrosoft-extensions-logging-ilogger 'Microsoft.Extensions.Logging.ILogger') | Logger. |

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T | Function return type. |
