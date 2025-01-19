<a name='assembly'></a>
# vBase

## Contents

- [AssemblyResolver](#T-vBase-Infrastructure-AssemblyResolver 'vBase.Infrastructure.AssemblyResolver')
- [ComGuids](#T-vBase-ComGuids 'vBase.ComGuids')
- [IVerificationResult](#T-vBase-IVerificationResult 'vBase.IVerificationResult')
  - [VerificationFindings](#P-vBase-IVerificationResult-VerificationFindings 'vBase.IVerificationResult.VerificationFindings')
  - [VerificationPassed](#P-vBase-IVerificationResult-VerificationPassed 'vBase.IVerificationResult.VerificationPassed')
- [IvBaseBuilder](#T-vBase-IvBaseBuilder 'vBase.IvBaseBuilder')
  - [CreateDataset(client,name,objectType)](#M-vBase-IvBaseBuilder-CreateDataset-vBase-IvBaseClient,System-String,vBase-ObjectTypes- 'vBase.IvBaseBuilder.CreateDataset(vBase.IvBaseClient,System.String,vBase.ObjectTypes)')
  - [CreateDatasetFromJson(client,json)](#M-vBase-IvBaseBuilder-CreateDatasetFromJson-vBase-IvBaseClient,System-String- 'vBase.IvBaseBuilder.CreateDatasetFromJson(vBase.IvBaseClient,System.String)')
  - [CreateForwarderClient(forwarderUrl,apiKey,privateKey)](#M-vBase-IvBaseBuilder-CreateForwarderClient-System-String,System-String,System-String- 'vBase.IvBaseBuilder.CreateForwarderClient(System.String,System.String,System.String)')
- [IvBaseClient](#T-vBase-IvBaseClient 'vBase.IvBaseClient')
  - [AddNamedSet(name)](#M-vBase-IvBaseClient-AddNamedSet-System-String- 'vBase.IvBaseClient.AddNamedSet(System.String)')
  - [AddSet(setCid)](#M-vBase-IvBaseClient-AddSet-System-String- 'vBase.IvBaseClient.AddSet(System.String)')
  - [AddSetObject(setCid,objectCid)](#M-vBase-IvBaseClient-AddSetObject-System-String,System-String- 'vBase.IvBaseClient.AddSetObject(System.String,System.String)')
  - [UserNamedSetExists(user,name)](#M-vBase-IvBaseClient-UserNamedSetExists-System-String,System-String- 'vBase.IvBaseClient.UserNamedSetExists(System.String,System.String)')
  - [VerifyUserObject(user,objectCid,timestamp)](#M-vBase-IvBaseClient-VerifyUserObject-System-String,System-String,System-Int64- 'vBase.IvBaseClient.VerifyUserObject(System.String,System.String,System.Int64)')
  - [VerifyUserSetObjects(user,setCid,userSetObjectsCidSum)](#M-vBase-IvBaseClient-VerifyUserSetObjects-System-String,System-String,System-String- 'vBase.IvBaseClient.VerifyUserSetObjects(System.String,System.String,System.String)')
- [IvBaseDataset](#T-vBase-IvBaseDataset 'vBase.IvBaseDataset')
  - [AddRecord(recordData)](#M-vBase-IvBaseDataset-AddRecord-System-Object- 'vBase.IvBaseDataset.AddRecord(System.Object)')
  - [ToJson()](#M-vBase-IvBaseDataset-ToJson 'vBase.IvBaseDataset.ToJson')
  - [VerifyCommitments()](#M-vBase-IvBaseDataset-VerifyCommitments 'vBase.IvBaseDataset.VerifyCommitments')
- [ObjectTypes](#T-vBase-ObjectTypes 'vBase.ObjectTypes')
- [SecurityProtocolHelper](#T-vBase-Infrastructure-SecurityProtocolHelper 'vBase.Infrastructure.SecurityProtocolHelper')
  - [ResetSecurityProtocol()](#M-vBase-Infrastructure-SecurityProtocolHelper-ResetSecurityProtocol 'vBase.Infrastructure.SecurityProtocolHelper.ResetSecurityProtocol')
- [ShimInstaller](#T-vBase-Infrastructure-ShimInstaller 'vBase.Infrastructure.ShimInstaller')
- [Utils](#T-vBase-Utils 'vBase.Utils')
  - [PreprocessException(action,logger)](#M-vBase-Utils-PreprocessException-System-Action,Microsoft-Extensions-Logging-ILogger- 'vBase.Utils.PreprocessException(System.Action,Microsoft.Extensions.Logging.ILogger)')
  - [PreprocessException(ex)](#M-vBase-Utils-PreprocessException-System-Exception- 'vBase.Utils.PreprocessException(System.Exception)')
  - [PreprocessException\`\`1(func,logger)](#M-vBase-Utils-PreprocessException``1-System-Func{``0},Microsoft-Extensions-Logging-ILogger- 'vBase.Utils.PreprocessException``1(System.Func{``0},Microsoft.Extensions.Logging.ILogger)')

<a name='T-vBase-Infrastructure-AssemblyResolver'></a>
## AssemblyResolver `type`

##### Namespace

vBase.Infrastructure

##### Summary

Some dependencies are referenced transitively multiple times with different versions.
Only the latest version is available in the application folder.
To resolve older versions at runtime and return the latest version,
we use the AssemblyResolver class.

<a name='T-vBase-ComGuids'></a>
## ComGuids `type`

##### Namespace

vBase

##### Summary

Contains the GUIDs for the COM interfaces and classes.

<a name='T-vBase-IVerificationResult'></a>
## IVerificationResult `type`

##### Namespace

vBase

##### Summary

Represents the result of a verification operation.

<a name='P-vBase-IVerificationResult-VerificationFindings'></a>
### VerificationFindings `property`

##### Summary

A collection of verification findings.

<a name='P-vBase-IVerificationResult-VerificationPassed'></a>
### VerificationPassed `property`

##### Summary

Indicates whether the verification passed.

<a name='T-vBase-IvBaseBuilder'></a>
## IvBaseBuilder `type`

##### Namespace

vBase

##### Summary

COM does not support constructors with parameters, so we need to use a factory method to create the objects.

<a name='M-vBase-IvBaseBuilder-CreateDataset-vBase-IvBaseClient,System-String,vBase-ObjectTypes-'></a>
### CreateDataset(client,name,objectType) `method`

##### Summary

Create a COM visible dataset object.

##### Returns

Newly created dataset object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| client | [vBase.IvBaseClient](#T-vBase-IvBaseClient 'vBase.IvBaseClient') | vBase client. |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the dataset. |
| objectType | [vBase.ObjectTypes](#T-vBase-ObjectTypes 'vBase.ObjectTypes') | Type of the objects that will be stored in the dataset. |

<a name='M-vBase-IvBaseBuilder-CreateDatasetFromJson-vBase-IvBaseClient,System-String-'></a>
### CreateDatasetFromJson(client,json) `method`

##### Summary

Create a COM visible dataset object.

##### Returns

Newly created dataset object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| client | [vBase.IvBaseClient](#T-vBase-IvBaseClient 'vBase.IvBaseClient') | vBase client. |
| json | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Json that contains all data records, and dataset properties. |

<a name='M-vBase-IvBaseBuilder-CreateForwarderClient-System-String,System-String,System-String-'></a>
### CreateForwarderClient(forwarderUrl,apiKey,privateKey) `method`

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

<a name='T-vBase-IvBaseClient'></a>
## IvBaseClient `type`

##### Namespace

vBase

##### Summary

COM visible client interface for the vBase API.
It's a shim between the COM client and the vBase.Core client class.

<a name='M-vBase-IvBaseClient-AddNamedSet-System-String-'></a>
### AddNamedSet(name) `method`

##### Summary

Creates a commitment for a set with a given name.
The set will be added for the account associated with the client object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the set. |

<a name='M-vBase-IvBaseClient-AddSet-System-String-'></a>
### AddSet(setCid) `method`

##### Summary

Records a set commitment.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The HEX encoded CID (hash) identifying the set. |

<a name='M-vBase-IvBaseClient-AddSetObject-System-String,System-String-'></a>
### AddSetObject(setCid,objectCid) `method`

##### Summary

Adds a record to the dataset.

##### Returns

The transaction timestamp of the record addition in Unix time format (seconds).

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | HEX encoded CID for the set containing the object. |
| objectCid | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | HEX encoded CID of the object to record. |

<a name='M-vBase-IvBaseClient-UserNamedSetExists-System-String,System-String-'></a>
### UserNamedSetExists(user,name) `method`

##### Summary

Checks if a named dataset exists.

##### Returns

True if the set with the given name exists; False otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The address for the user who recorded the commitment. |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the set. |

<a name='M-vBase-IvBaseClient-VerifyUserObject-System-String,System-String,System-Int64-'></a>
### VerifyUserObject(user,objectCid,timestamp) `method`

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

<a name='M-vBase-IvBaseClient-VerifyUserSetObjects-System-String,System-String,System-String-'></a>
### VerifyUserSetObjects(user,setCid,userSetObjectsCidSum) `method`

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

<a name='T-vBase-IvBaseDataset'></a>
## IvBaseDataset `type`

##### Namespace

vBase

##### Summary

Represents a set of records created on the Validity Base platform.

<a name='M-vBase-IvBaseDataset-AddRecord-System-Object-'></a>
### AddRecord(recordData) `method`

##### Summary

Adds a record to the dataset.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| recordData | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | Record to add. |

<a name='M-vBase-IvBaseDataset-ToJson'></a>
### ToJson() `method`

##### Summary

Serializes the dataset to a JSON string.

##### Returns

JSON string that can be deserialized using vBase SDK on any other platform.

##### Parameters

This method has no parameters.

<a name='M-vBase-IvBaseDataset-VerifyCommitments'></a>
### VerifyCommitments() `method`

##### Summary

Verifies if all records in the dataset were actually created on the Validity Base platform at the specified timestamps.

##### Returns

Validation result: A collection of errors. For each record that was not found on the Validity Base platform, 
or was added with a different timestamp, there will be a separate error item in the collection.
Additionally, an error item will be added if the dataset on the Validity Base platform contains more records 
than exist in this client-side dataset.

##### Parameters

This method has no parameters.

<a name='T-vBase-ObjectTypes'></a>
## ObjectTypes `type`

##### Namespace

vBase

##### Summary

Types of objects that can be stored in a dataset.

<a name='T-vBase-Infrastructure-SecurityProtocolHelper'></a>
## SecurityProtocolHelper `type`

##### Namespace

vBase.Infrastructure

##### Summary

When running the shim in the VBA environment, we observed on some machines
that the security protocol is explicitly set to Ssl3 or Tls.
Such a configuration is incompatible with TLS 1.2, which is the protocol used by the Forwarder server.
Experimentally, we found that setting the security protocol to 0 (SystemDefault) does not resolve the issue.
Setting explicitly to Tls12 does.

<a name='M-vBase-Infrastructure-SecurityProtocolHelper-ResetSecurityProtocol'></a>
### ResetSecurityProtocol() `method`

##### Summary

Updates the security protocol to Tls12.

##### Parameters

This method has no parameters.

<a name='T-vBase-Infrastructure-ShimInstaller'></a>
## ShimInstaller `type`

##### Namespace

vBase.Infrastructure

##### Summary

It's important to register the assembly using both versions of regasm—32-bit and 64-bit.
Even though the Excel process is 64-bit, it seems that the VBA execution process is 32-bit,
so it doesn't recognize the registrations in the 64-bit registry.

<a name='T-vBase-Utils'></a>
## Utils `type`

##### Namespace

vBase

##### Summary

Utility methods.

<a name='M-vBase-Utils-PreprocessException-System-Action,Microsoft-Extensions-Logging-ILogger-'></a>
### PreprocessException(action,logger) `method`

##### Summary

Executes an action and logs any exceptions that occur.
Additionally, converts the exception into a VBA-friendly exception.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| action | [System.Action](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Action 'System.Action') | Action to execute. |
| logger | [Microsoft.Extensions.Logging.ILogger](#T-Microsoft-Extensions-Logging-ILogger 'Microsoft.Extensions.Logging.ILogger') | Logger. |

<a name='M-vBase-Utils-PreprocessException-System-Exception-'></a>
### PreprocessException(ex) `method`

##### Summary

Converts a regular .NET exception into a VBA-friendly exception with all relevant information aggregated into the exception message.
This improves the user experience in a VBA environment, where the error object does not include the stack trace or the original exception type.

##### Returns

A VBA-friendly exception with aggregated information.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ex | [System.Exception](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Exception 'System.Exception') | The original exception. |

<a name='M-vBase-Utils-PreprocessException``1-System-Func{``0},Microsoft-Extensions-Logging-ILogger-'></a>
### PreprocessException\`\`1(func,logger) `method`

##### Summary

Executes a function and logs any exceptions that occur.
Additionally, converts the exception into a VBA-friendly exception.

##### Returns

Function execution result.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| func | [System.Func{\`\`0}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Func 'System.Func{``0}') | Function to execute. |
| logger | [Microsoft.Extensions.Logging.ILogger](#T-Microsoft-Extensions-Logging-ILogger 'Microsoft.Extensions.Logging.ILogger') | Logger. |

##### Generic Types

| Name | Description |
| ---- | ----------- |
| T | Function return type. |
