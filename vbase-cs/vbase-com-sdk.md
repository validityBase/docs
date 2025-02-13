# vBase <a name="assembly" id="assembly" href="#assembly"></a>

## Contents

- [AssemblyResolver](#tvbaseinfrastructureassemblyresolver 'vBase.Infrastructure.AssemblyResolver')
- [ComGuids](#tvbasecomguids 'vBase.ComGuids')
- [IReceipt](#tvbasereceiptsireceipt 'vBase.Receipts.IReceipt')
  - [Timestamp](#pvbasereceiptsireceipttimestamp 'vBase.Receipts.IReceipt.Timestamp')
- [IVerificationResult](#tvbaseiverificationresult 'vBase.IVerificationResult')
  - [VerificationFindings](#pvbaseiverificationresultverificationfindings 'vBase.IVerificationResult.VerificationFindings')
  - [VerificationPassed](#pvbaseiverificationresultverificationpassed 'vBase.IVerificationResult.VerificationPassed')
- [IWeb3Receipt](#tvbasereceiptsiweb3receipt 'vBase.Receipts.IWeb3Receipt')
  - [Timestamp](#pvbasereceiptsiweb3receipttimestamp 'vBase.Receipts.IWeb3Receipt.Timestamp')
  - [TransactionHash](#pvbasereceiptsiweb3receipttransactionhash 'vBase.Receipts.IWeb3Receipt.TransactionHash')
- [IvBaseBuilder](#tvbaseivbasebuilder 'vBase.IvBaseBuilder')
  - [CreateDataset(client,name,objectType)](#mvbaseivbasebuildercreatedatasetvbaseivbaseclientsystemstringvbaseobjecttypes 'vBase.IvBaseBuilder.CreateDataset(vBase.IvBaseClient,System.String,vBase.ObjectTypes)')
  - [CreateDatasetFromJson(client,json)](#mvbaseivbasebuildercreatedatasetfromjsonvbaseivbaseclientsystemstring 'vBase.IvBaseBuilder.CreateDatasetFromJson(vBase.IvBaseClient,System.String)')
  - [CreateForwarderClient(forwarderUrl,apiKey,privateKey)](#mvbaseivbasebuildercreateforwarderclientsystemstringsystemstringsystemstring 'vBase.IvBaseBuilder.CreateForwarderClient(System.String,System.String,System.String)')
- [IvBaseClient](#tvbaseivbaseclient 'vBase.IvBaseClient')
  - [AddNamedSet(name)](#mvbaseivbaseclientaddnamedsetsystemstring 'vBase.IvBaseClient.AddNamedSet(System.String)')
  - [AddSet(setCid)](#mvbaseivbaseclientaddsetsystemstring 'vBase.IvBaseClient.AddSet(System.String)')
  - [AddSetObject(setCid,objectCid)](#mvbaseivbaseclientaddsetobjectsystemstringsystemstring 'vBase.IvBaseClient.AddSetObject(System.String,System.String)')
  - [UserNamedSetExists(user,name)](#mvbaseivbaseclientusernamedsetexistssystemstringsystemstring 'vBase.IvBaseClient.UserNamedSetExists(System.String,System.String)')
  - [VerifyUserObject(user,objectCid,timestamp)](#mvbaseivbaseclientverifyuserobjectsystemstringsystemstringsystemint64 'vBase.IvBaseClient.VerifyUserObject(System.String,System.String,System.Int64)')
  - [VerifyUserSetObjects(user,setCid,userSetObjectsCidSum)](#mvbaseivbaseclientverifyusersetobjectssystemstringsystemstringsystemstring 'vBase.IvBaseClient.VerifyUserSetObjects(System.String,System.String,System.String)')
- [IvBaseDataset](#tvbaseivbasedataset 'vBase.IvBaseDataset')
  - [AddRecord(recordData)](#mvbaseivbasedatasetaddrecordsystemobject 'vBase.IvBaseDataset.AddRecord(System.Object)')
  - [ToJson()](#mvbaseivbasedatasettojson 'vBase.IvBaseDataset.ToJson')
  - [VerifyCommitments()](#mvbaseivbasedatasetverifycommitments 'vBase.IvBaseDataset.VerifyCommitments')
- [ObjectTypes](#tvbaseobjecttypes 'vBase.ObjectTypes')
- [ReceiptConverter](#tvbaseinfrastructurereceiptconverter 'vBase.Infrastructure.ReceiptConverter')
  - [ToCom(receipt)](#mvbaseinfrastructurereceiptconvertertocomvbasecorereceipt 'vBase.Infrastructure.ReceiptConverter.ToCom(vBase.Core.Receipt)')
- [SecurityProtocolHelper](#tvbaseinfrastructuresecurityprotocolhelper 'vBase.Infrastructure.SecurityProtocolHelper')
  - [ResetSecurityProtocol()](#mvbaseinfrastructuresecurityprotocolhelperresetsecurityprotocol 'vBase.Infrastructure.SecurityProtocolHelper.ResetSecurityProtocol')
- [ShimInstaller](#tvbaseinfrastructureshiminstaller 'vBase.Infrastructure.ShimInstaller')
- [Utils](#tvbaseutils 'vBase.Utils')
  - [PreprocessException(action,logger)](#mvbaseutilspreprocessexceptionsystemactionmicrosoftextensionsloggingilogger 'vBase.Utils.PreprocessException(System.Action,Microsoft.Extensions.Logging.ILogger)')
  - [PreprocessException(ex)](#mvbaseutilspreprocessexceptionsystemexception 'vBase.Utils.PreprocessException(System.Exception)')
  - [PreprocessException\`\`1(func,logger)](#mvbaseutilspreprocessexception1systemfunc0microsoftextensionsloggingilogger 'vBase.Utils.PreprocessException``1(System.Func{``0},Microsoft.Extensions.Logging.ILogger)')

## AssemblyResolver `type` <a name="tvbaseinfrastructureassemblyresolver" id="tvbaseinfrastructureassemblyresolver" href="#tvbaseinfrastructureassemblyresolver"></a>

##### Namespace

vBase.Infrastructure

##### Summary

Some dependencies are referenced transitively multiple times with different versions.
Only the latest version is available in the application folder.
To resolve older versions at runtime and return the latest version,
we use the AssemblyResolver class.

## ComGuids `type` <a name="tvbasecomguids" id="tvbasecomguids" href="#tvbasecomguids"></a>

##### Namespace

vBase

##### Summary

Contains the GUIDs for the COM interfaces and classes.

## IReceipt `type` <a name="tvbasereceiptsireceipt" id="tvbasereceiptsireceipt" href="#tvbasereceiptsireceipt"></a>

##### Namespace

vBase.Receipts

##### Summary

Represents a transaction receipt.

### Timestamp `property` <a name="pvbasereceiptsireceipttimestamp" id="pvbasereceiptsireceipttimestamp" href="#pvbasereceiptsireceipttimestamp"></a>

##### Summary

The transaction timestamp in Unix time format (seconds).

## IVerificationResult `type` <a name="tvbaseiverificationresult" id="tvbaseiverificationresult" href="#tvbaseiverificationresult"></a>

##### Namespace

vBase

##### Summary

Represents the result of a verification operation.

### VerificationFindings `property` <a name="pvbaseiverificationresultverificationfindings" id="pvbaseiverificationresultverificationfindings" href="#pvbaseiverificationresultverificationfindings"></a>

##### Summary

A collection of verification findings.

### VerificationPassed `property` <a name="pvbaseiverificationresultverificationpassed" id="pvbaseiverificationresultverificationpassed" href="#pvbaseiverificationresultverificationpassed"></a>

##### Summary

Indicates whether the verification passed.

## IWeb3Receipt `type` <a name="tvbasereceiptsiweb3receipt" id="tvbasereceiptsiweb3receipt" href="#tvbasereceiptsiweb3receipt"></a>

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

### Timestamp `property` <a name="pvbasereceiptsiweb3receipttimestamp" id="pvbasereceiptsiweb3receipttimestamp" href="#pvbasereceiptsiweb3receipttimestamp"></a>

##### Summary

The transaction timestamp in Unix time format (seconds).

### TransactionHash `property` <a name="pvbasereceiptsiweb3receipttransactionhash" id="pvbasereceiptsiweb3receipttransactionhash" href="#pvbasereceiptsiweb3receipttransactionhash"></a>

##### Summary

The transaction hash.

## IvBaseBuilder `type` <a name="tvbaseivbasebuilder" id="tvbaseivbasebuilder" href="#tvbaseivbasebuilder"></a>

##### Namespace

vBase

##### Summary

COM does not support constructors with parameters, so we need to use a factory method to create the objects.

### CreateDataset(client,name,objectType) `method` <a name="mvbaseivbasebuildercreatedatasetvbaseivbaseclientsystemstringvbaseobjecttypes" id="mvbaseivbasebuildercreatedatasetvbaseivbaseclientsystemstringvbaseobjecttypes" href="#mvbaseivbasebuildercreatedatasetvbaseivbaseclientsystemstringvbaseobjecttypes"></a>

##### Summary

Create a COM visible dataset object.

##### Returns

Newly created dataset object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| client | [vBase.IvBaseClient](#tvbaseivbaseclient 'vBase.IvBaseClient') | vBase client. |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the dataset. |
| objectType | [vBase.ObjectTypes](#tvbaseobjecttypes 'vBase.ObjectTypes') | Type of the objects that will be stored in the dataset. |

### CreateDatasetFromJson(client,json) `method` <a name="mvbaseivbasebuildercreatedatasetfromjsonvbaseivbaseclientsystemstring" id="mvbaseivbasebuildercreatedatasetfromjsonvbaseivbaseclientsystemstring" href="#mvbaseivbasebuildercreatedatasetfromjsonvbaseivbaseclientsystemstring"></a>

##### Summary

Create a COM visible dataset object.

##### Returns

Newly created dataset object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| client | [vBase.IvBaseClient](#tvbaseivbaseclient 'vBase.IvBaseClient') | vBase client. |
| json | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Json that contains all data records, and dataset properties. |

### CreateForwarderClient(forwarderUrl,apiKey,privateKey) `method` <a name="mvbaseivbasebuildercreateforwarderclientsystemstringsystemstringsystemstring" id="mvbaseivbasebuildercreateforwarderclientsystemstringsystemstringsystemstring" href="#mvbaseivbasebuildercreateforwarderclientsystemstringsystemstringsystemstring"></a>

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

## IvBaseClient `type` <a name="tvbaseivbaseclient" id="tvbaseivbaseclient" href="#tvbaseivbaseclient"></a>

##### Namespace

vBase

##### Summary

COM visible client interface for the vBase API.
It's a shim between the COM client and the vBase.Core client class.

### AddNamedSet(name) `method` <a name="mvbaseivbaseclientaddnamedsetsystemstring" id="mvbaseivbaseclientaddnamedsetsystemstring" href="#mvbaseivbaseclientaddnamedsetsystemstring"></a>

##### Summary

Creates a commitment for a set with a given name.
The set will be added for the account associated with the client object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the set. |

### AddSet(setCid) `method` <a name="mvbaseivbaseclientaddsetsystemstring" id="mvbaseivbaseclientaddsetsystemstring" href="#mvbaseivbaseclientaddsetsystemstring"></a>

##### Summary

Records a set commitment.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The HEX encoded CID (hash) identifying the set. |

### AddSetObject(setCid,objectCid) `method` <a name="mvbaseivbaseclientaddsetobjectsystemstringsystemstring" id="mvbaseivbaseclientaddsetobjectsystemstringsystemstring" href="#mvbaseivbaseclientaddsetobjectsystemstringsystemstring"></a>

##### Summary

Adds a record to the dataset.

##### Returns

The transaction timestamp of the record addition in Unix time format (seconds).

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | HEX encoded CID for the set containing the object. |
| objectCid | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | HEX encoded CID of the object to record. |

### UserNamedSetExists(user,name) `method` <a name="mvbaseivbaseclientusernamedsetexistssystemstringsystemstring" id="mvbaseivbaseclientusernamedsetexistssystemstringsystemstring" href="#mvbaseivbaseclientusernamedsetexistssystemstringsystemstring"></a>

##### Summary

Checks if a named dataset exists.

##### Returns

True if the set with the given name exists; False otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The address for the user who recorded the commitment. |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the set. |

### VerifyUserObject(user,objectCid,timestamp) `method` <a name="mvbaseivbaseclientverifyuserobjectsystemstringsystemstringsystemint64" id="mvbaseivbaseclientverifyuserobjectsystemstringsystemstringsystemint64" href="#mvbaseivbaseclientverifyuserobjectsystemstringsystemstringsystemint64"></a>

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

### VerifyUserSetObjects(user,setCid,userSetObjectsCidSum) `method` <a name="mvbaseivbaseclientverifyusersetobjectssystemstringsystemstringsystemstring" id="mvbaseivbaseclientverifyusersetobjectssystemstringsystemstringsystemstring" href="#mvbaseivbaseclientverifyusersetobjectssystemstringsystemstringsystemstring"></a>

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

## IvBaseDataset `type` <a name="tvbaseivbasedataset" id="tvbaseivbasedataset" href="#tvbaseivbasedataset"></a>

##### Namespace

vBase

##### Summary

Represents a set of records created on the Validity Base platform.

### AddRecord(recordData) `method` <a name="mvbaseivbasedatasetaddrecordsystemobject" id="mvbaseivbasedatasetaddrecordsystemobject" href="#mvbaseivbasedatasetaddrecordsystemobject"></a>

##### Summary

Adds a record to the dataset.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| recordData | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | Record to add. |

### ToJson() `method` <a name="mvbaseivbasedatasettojson" id="mvbaseivbasedatasettojson" href="#mvbaseivbasedatasettojson"></a>

##### Summary

Serializes the dataset to a JSON string.

##### Returns

JSON string that can be deserialized using vBase SDK on any other platform.

##### Parameters

This method has no parameters.

### VerifyCommitments() `method` <a name="mvbaseivbasedatasetverifycommitments" id="mvbaseivbasedatasetverifycommitments" href="#mvbaseivbasedatasetverifycommitments"></a>

##### Summary

Verifies if all records in the dataset were actually created on the Validity Base platform at the specified timestamps.

##### Returns

Validation result: A collection of errors. For each record that was not found on the Validity Base platform, 
or was added with a different timestamp, there will be a separate error item in the collection.
Additionally, an error item will be added if the dataset on the Validity Base platform contains more records 
than exist in this client-side dataset.

##### Parameters

This method has no parameters.

## ObjectTypes `type` <a name="tvbaseobjecttypes" id="tvbaseobjecttypes" href="#tvbaseobjecttypes"></a>

##### Namespace

vBase

##### Summary

Types of objects that can be stored in a dataset.

## ReceiptConverter `type` <a name="tvbaseinfrastructurereceiptconverter" id="tvbaseinfrastructurereceiptconverter" href="#tvbaseinfrastructurereceiptconverter"></a>

##### Namespace

vBase.Infrastructure

##### Summary

Converts between [Receipt](#tvbasecorereceipt 'vBase.Core.Receipt') and COM-compatible [IReceipt](#tvbasereceiptsireceipt 'vBase.Receipts.IReceipt').

### ToCom(receipt) `method` <a name="mvbaseinfrastructurereceiptconvertertocomvbasecorereceipt" id="mvbaseinfrastructurereceiptconvertertocomvbasecorereceipt" href="#mvbaseinfrastructurereceiptconvertertocomvbasecorereceipt"></a>

##### Summary

Converts a [Receipt](#tvbasecorereceipt 'vBase.Core.Receipt') to a [IReceipt](#tvbasereceiptsireceipt 'vBase.Receipts.IReceipt').

##### Returns

The converted receipt.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| receipt | [vBase.Core.Receipt](#tvbasecorereceipt 'vBase.Core.Receipt') | The receipt to convert. |

## SecurityProtocolHelper `type` <a name="tvbaseinfrastructuresecurityprotocolhelper" id="tvbaseinfrastructuresecurityprotocolhelper" href="#tvbaseinfrastructuresecurityprotocolhelper"></a>

##### Namespace

vBase.Infrastructure

##### Summary

When running the shim in the VBA environment, we observed on some machines
that the security protocol is explicitly set to Ssl3 or Tls.
Such a configuration is incompatible with TLS 1.2, which is the protocol used by the Forwarder server.
Experimentally, we found that setting the security protocol to 0 (SystemDefault) does not resolve the issue.
Setting explicitly to Tls12 does.

### ResetSecurityProtocol() `method` <a name="mvbaseinfrastructuresecurityprotocolhelperresetsecurityprotocol" id="mvbaseinfrastructuresecurityprotocolhelperresetsecurityprotocol" href="#mvbaseinfrastructuresecurityprotocolhelperresetsecurityprotocol"></a>

##### Summary

Updates the security protocol to Tls12.

##### Parameters

This method has no parameters.

## ShimInstaller `type` <a name="tvbaseinfrastructureshiminstaller" id="tvbaseinfrastructureshiminstaller" href="#tvbaseinfrastructureshiminstaller"></a>

##### Namespace

vBase.Infrastructure

##### Summary

It's important to register the assembly using both versions of regasm—32-bit and 64-bit.
Even though the Excel process is 64-bit, it seems that the VBA execution process is 32-bit,
so it doesn't recognize the registrations in the 64-bit registry.

## Utils `type` <a name="tvbaseutils" id="tvbaseutils" href="#tvbaseutils"></a>

##### Namespace

vBase

##### Summary

Utility methods.

### PreprocessException(action,logger) `method` <a name="mvbaseutilspreprocessexceptionsystemactionmicrosoftextensionsloggingilogger" id="mvbaseutilspreprocessexceptionsystemactionmicrosoftextensionsloggingilogger" href="#mvbaseutilspreprocessexceptionsystemactionmicrosoftextensionsloggingilogger"></a>

##### Summary

Executes an action and logs any exceptions that occur.
Additionally, converts the exception into a VBA-friendly exception.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| action | [System.Action](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Action 'System.Action') | Action to execute. |
| logger | [Microsoft.Extensions.Logging.ILogger](#tmicrosoftextensionsloggingilogger 'Microsoft.Extensions.Logging.ILogger') | Logger. |

### PreprocessException(ex) `method` <a name="mvbaseutilspreprocessexceptionsystemexception" id="mvbaseutilspreprocessexceptionsystemexception" href="#mvbaseutilspreprocessexceptionsystemexception"></a>

##### Summary

Converts a regular .NET exception into a VBA-friendly exception with all relevant information aggregated into the exception message.
This improves the user experience in a VBA environment, where the error object does not include the stack trace or the original exception type.

##### Returns

A VBA-friendly exception with aggregated information.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ex | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The original exception. |

### PreprocessException\`\`1(func,logger) `method` <a name="mvbaseutilspreprocessexception1systemfunc0microsoftextensionsloggingilogger" id="mvbaseutilspreprocessexception1systemfunc0microsoftextensionsloggingilogger" href="#mvbaseutilspreprocessexception1systemfunc0microsoftextensionsloggingilogger"></a>

##### Summary

Executes a function and logs any exceptions that occur.
Additionally, converts the exception into a VBA-friendly exception.

##### Returns

Function execution result.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| func | [System.Func{\`\`0}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{``0}') | Function to execute. |
| logger | [Microsoft.Extensions.Logging.ILogger](#tmicrosoftextensionsloggingilogger 'Microsoft.Extensions.Logging.ILogger') | Logger. |

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T | Function return type. |
