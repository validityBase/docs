<a name='assembly'></a>
# vBase.Core

## Contents

- [Cid](#T-vBase-Core-Cid 'vBase.Core.Cid')
  - [#ctor()](#M-vBase-Core-Cid-#ctor-System-Byte[]- 'vBase.Core.Cid.#ctor(System.Byte[])')
  - [#ctor(data)](#M-vBase-Core-Cid-#ctor-System-String- 'vBase.Core.Cid.#ctor(System.String)')
  - [Data](#P-vBase-Core-Cid-Data 'vBase.Core.Cid.Data')
  - [Empty](#P-vBase-Core-Cid-Empty 'vBase.Core.Cid.Empty')
  - [ToHex()](#M-vBase-Core-Cid-ToHex 'vBase.Core.Cid.ToHex')
- [Convert](#T-vBase-Core-Utilities-Convert 'vBase.Core.Utilities.Convert')
- [CryptoUtils](#T-vBase-Core-Utilities-CryptoUtils 'vBase.Core.Utilities.CryptoUtils')
  - [GetCid(value,size)](#M-vBase-Core-Utilities-CryptoUtils-GetCid-System-Numerics-BigInteger,System-UInt32- 'vBase.Core.Utilities.CryptoUtils.GetCid(System.Numerics.BigInteger,System.UInt32)')
  - [GetCid(value)](#M-vBase-Core-Utilities-CryptoUtils-GetCid-System-String- 'vBase.Core.Utilities.CryptoUtils.GetCid(System.String)')
- [ForwarderCommitmentService](#T-vBase-Core-Web3CommitmentService-ForwarderCommitmentService 'vBase.Core.Web3CommitmentService.ForwarderCommitmentService')
- [ICommitmentService](#T-vBase-Core-ICommitmentService 'vBase.Core.ICommitmentService')
  - [AccountIdentifier](#P-vBase-Core-ICommitmentService-AccountIdentifier 'vBase.Core.ICommitmentService.AccountIdentifier')
  - [AddSet(setCid)](#M-vBase-Core-ICommitmentService-AddSet-vBase-Core-Cid- 'vBase.Core.ICommitmentService.AddSet(vBase.Core.Cid)')
  - [AddSetObject(setCid,objectCid)](#M-vBase-Core-ICommitmentService-AddSetObject-vBase-Core-Cid,vBase-Core-Cid- 'vBase.Core.ICommitmentService.AddSetObject(vBase.Core.Cid,vBase.Core.Cid)')
  - [UserSetExists(user,setCid)](#M-vBase-Core-ICommitmentService-UserSetExists-System-String,vBase-Core-Cid- 'vBase.Core.ICommitmentService.UserSetExists(System.String,vBase.Core.Cid)')
  - [VerifyUserObject(user,objectCid,timestamp)](#M-vBase-Core-ICommitmentService-VerifyUserObject-System-String,vBase-Core-Cid,System-DateTimeOffset- 'vBase.Core.ICommitmentService.VerifyUserObject(System.String,vBase.Core.Cid,System.DateTimeOffset)')
  - [VerifyUserSetObjects(user,setCid,userSetObjectCidSum)](#M-vBase-Core-ICommitmentService-VerifyUserSetObjects-System-String,vBase-Core-Cid,System-Numerics-BigInteger- 'vBase.Core.ICommitmentService.VerifyUserSetObjects(System.String,vBase.Core.Cid,System.Numerics.BigInteger)')
- [JsonSerializationDto](#T-vBase-Core-Dataset-JsonSerializationDto 'vBase.Core.Dataset.JsonSerializationDto')
- [Utils](#T-vBase-Core-Utilities-Utils 'vBase.Core.Utilities.Utils')
- [VerificationResult](#T-vBase-Core-Dataset-VerificationResult 'vBase.Core.Dataset.VerificationResult')
  - [VerificationFindings](#P-vBase-Core-Dataset-VerificationResult-VerificationFindings 'vBase.Core.Dataset.VerificationResult.VerificationFindings')
  - [VerificationPassed](#P-vBase-Core-Dataset-VerificationResult-VerificationPassed 'vBase.Core.Dataset.VerificationResult.VerificationPassed')
  - [AddFinding(finding)](#M-vBase-Core-Dataset-VerificationResult-AddFinding-System-String- 'vBase.Core.Dataset.VerificationResult.AddFinding(System.String)')
- [Web3CommitmentService](#T-vBase-Core-Web3CommitmentService-Web3CommitmentService 'vBase.Core.Web3CommitmentService.Web3CommitmentService')
  - [CallContractFunction(function,functionData)](#M-vBase-Core-Web3CommitmentService-Web3CommitmentService-CallContractFunction-Nethereum-Contracts-Function,System-String- 'vBase.Core.Web3CommitmentService.Web3CommitmentService.CallContractFunction(Nethereum.Contracts.Function,System.String)')
  - [CallContractFunction(functionName,functionInput)](#M-vBase-Core-Web3CommitmentService-Web3CommitmentService-CallContractFunction-System-String,System-Object[]- 'vBase.Core.Web3CommitmentService.Web3CommitmentService.CallContractFunction(System.String,System.Object[])')
  - [CallStateVariable\`\`1(stateVariableName,functionInput)](#M-vBase-Core-Web3CommitmentService-Web3CommitmentService-CallStateVariable``1-System-String,System-Object[]- 'vBase.Core.Web3CommitmentService.Web3CommitmentService.CallStateVariable``1(System.String,System.Object[])')
  - [FetchStateVariable\`\`1(functionData)](#M-vBase-Core-Web3CommitmentService-Web3CommitmentService-FetchStateVariable``1-System-String- 'vBase.Core.Web3CommitmentService.Web3CommitmentService.FetchStateVariable``1(System.String)')
- [vBaseClient](#T-vBase-Core-vBaseClient 'vBase.Core.vBaseClient')
  - [AddNamedSet(name)](#M-vBase-Core-vBaseClient-AddNamedSet-System-String- 'vBase.Core.vBaseClient.AddNamedSet(System.String)')
  - [AddSet(setCid)](#M-vBase-Core-vBaseClient-AddSet-vBase-Core-Cid- 'vBase.Core.vBaseClient.AddSet(vBase.Core.Cid)')
  - [AddSetObject(setCid,objectCid)](#M-vBase-Core-vBaseClient-AddSetObject-vBase-Core-Cid,vBase-Core-Cid- 'vBase.Core.vBaseClient.AddSetObject(vBase.Core.Cid,vBase.Core.Cid)')
  - [UserNamedSetExists(user,name)](#M-vBase-Core-vBaseClient-UserNamedSetExists-System-String,System-String- 'vBase.Core.vBaseClient.UserNamedSetExists(System.String,System.String)')
  - [VerifyUserObject(user,objectCid,timestamp)](#M-vBase-Core-vBaseClient-VerifyUserObject-System-String,vBase-Core-Cid,System-DateTimeOffset- 'vBase.Core.vBaseClient.VerifyUserObject(System.String,vBase.Core.Cid,System.DateTimeOffset)')
  - [VerifyUserSetObjects(user,setCid,userSetObjectsCidSum)](#M-vBase-Core-vBaseClient-VerifyUserSetObjects-System-String,vBase-Core-Cid,System-Numerics-BigInteger- 'vBase.Core.vBaseClient.VerifyUserSetObjects(System.String,vBase.Core.Cid,System.Numerics.BigInteger)')
- [vBaseDataset](#T-vBase-Core-Dataset-vBaseDataset 'vBase.Core.Dataset.vBaseDataset')
  - [#ctor(vBaseClient,name,recordTypeName)](#M-vBase-Core-Dataset-vBaseDataset-#ctor-vBase-Core-vBaseClient,System-String,System-String- 'vBase.Core.Dataset.vBaseDataset.#ctor(vBase.Core.vBaseClient,System.String,System.String)')
  - [#ctor(vBaseClient,json)](#M-vBase-Core-Dataset-vBaseDataset-#ctor-vBase-Core-vBaseClient,System-String- 'vBase.Core.Dataset.vBaseDataset.#ctor(vBase.Core.vBaseClient,System.String)')
  - [AddRecord(recordData)](#M-vBase-Core-Dataset-vBaseDataset-AddRecord-System-Object- 'vBase.Core.Dataset.vBaseDataset.AddRecord(System.Object)')
  - [Initialize()](#M-vBase-Core-Dataset-vBaseDataset-Initialize 'vBase.Core.Dataset.vBaseDataset.Initialize')
  - [ToJson()](#M-vBase-Core-Dataset-vBaseDataset-ToJson 'vBase.Core.Dataset.vBaseDataset.ToJson')
  - [VerifyCommitments()](#M-vBase-Core-Dataset-vBaseDataset-VerifyCommitments 'vBase.Core.Dataset.vBaseDataset.VerifyCommitments')
- [vBaseException](#T-vBase-Core-Exceptions-vBaseException 'vBase.Core.Exceptions.vBaseException')
- [vBaseObject](#T-vBase-Core-Dataset-vBaseObjects-vBaseObject 'vBase.Core.Dataset.vBaseObjects.vBaseObject')
  - [Data](#P-vBase-Core-Dataset-vBaseObjects-vBaseObject-Data 'vBase.Core.Dataset.vBaseObjects.vBaseObject.Data')
  - [StringData](#P-vBase-Core-Dataset-vBaseObjects-vBaseObject-StringData 'vBase.Core.Dataset.vBaseObjects.vBaseObject.StringData')
  - [GetCid()](#M-vBase-Core-Dataset-vBaseObjects-vBaseObject-GetCid 'vBase.Core.Dataset.vBaseObjects.vBaseObject.GetCid')
  - [GetJson()](#M-vBase-Core-Dataset-vBaseObjects-vBaseObject-GetJson 'vBase.Core.Dataset.vBaseObjects.vBaseObject.GetJson')
  - [InitFromJson(jData)](#M-vBase-Core-Dataset-vBaseObjects-vBaseObject-InitFromJson-Newtonsoft-Json-Linq-JValue- 'vBase.Core.Dataset.vBaseObjects.vBaseObject.InitFromJson(Newtonsoft.Json.Linq.JValue)')
- [vBaseStringObject](#T-vBase-Core-Dataset-vBaseObjects-vBaseStringObject 'vBase.Core.Dataset.vBaseObjects.vBaseStringObject')
  - [vBaseObjectType](#F-vBase-Core-Dataset-vBaseObjects-vBaseStringObject-vBaseObjectType 'vBase.Core.Dataset.vBaseObjects.vBaseStringObject.vBaseObjectType')

<a name='T-vBase-Core-Cid'></a>
## Cid `type`

##### Namespace

vBase.Core

##### Summary

Content Identifier (CID) is used to uniquely identify objects.

<a name='M-vBase-Core-Cid-#ctor-System-Byte[]-'></a>
### #ctor() `constructor`

##### Summary

Creates a new CID from the provided byte array.

##### Parameters

This constructor has no parameters.

<a name='M-vBase-Core-Cid-#ctor-System-String-'></a>
### #ctor(data) `constructor`

##### Summary

Creates a new CID from the provided hex string.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='P-vBase-Core-Cid-Data'></a>
### Data `property`

##### Summary

The data of the CID.

<a name='P-vBase-Core-Cid-Empty'></a>
### Empty `property`

##### Summary

Empty CID.

<a name='M-vBase-Core-Cid-ToHex'></a>
### ToHex() `method`

##### Summary

Returns the CID as a hex string.

##### Returns

Hex string.

##### Parameters

This method has no parameters.

<a name='T-vBase-Core-Utilities-Convert'></a>
## Convert `type`

##### Namespace

vBase.Core.Utilities

##### Summary

Provides conversion methods.

<a name='T-vBase-Core-Utilities-CryptoUtils'></a>
## CryptoUtils `type`

##### Namespace

vBase.Core.Utilities

##### Summary

Provides cryptographic utilities.

<a name='M-vBase-Core-Utilities-CryptoUtils-GetCid-System-Numerics-BigInteger,System-UInt32-'></a>
### GetCid(value,size) `method`

##### Summary

Get SHA3 256 hash of the input integer.

##### Returns

SHA3 256 hash object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | [System.Numerics.BigInteger](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Numerics.BigInteger 'System.Numerics.BigInteger') | Integer value. |
| size | [System.UInt32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.UInt32 'System.UInt32') | Size in bits. |

<a name='M-vBase-Core-Utilities-CryptoUtils-GetCid-System-String-'></a>
### GetCid(value) `method`

##### Summary

Get SHA3 256 hash of the input string.

##### Returns

SHA3 256 hash object

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | input string |

<a name='T-vBase-Core-Web3CommitmentService-ForwarderCommitmentService'></a>
## ForwarderCommitmentService `type`

##### Namespace

vBase.Core.Web3CommitmentService

##### Summary

Provides access to the CommitmentService smart contract over vBase forwarder.

<a name='T-vBase-Core-ICommitmentService'></a>
## ICommitmentService `type`

##### Namespace

vBase.Core

##### Summary

Common interface for commitment services.

<a name='P-vBase-Core-ICommitmentService-AccountIdentifier'></a>
### AccountIdentifier `property`

##### Summary

Current user account identifier.

<a name='M-vBase-Core-ICommitmentService-AddSet-vBase-Core-Cid-'></a>
### AddSet(setCid) `method`

##### Summary

Records a set commitment.
If the set already exists, no action will be taken.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [vBase.Core.Cid](#T-vBase-Core-Cid 'vBase.Core.Cid') | The CID identifying the set. |

<a name='M-vBase-Core-ICommitmentService-AddSetObject-vBase-Core-Cid,vBase-Core-Cid-'></a>
### AddSetObject(setCid,objectCid) `method`

##### Summary

Adds an object CID to the specified set.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [vBase.Core.Cid](#T-vBase-Core-Cid 'vBase.Core.Cid') | CID of the set where the objectCid will be added. |
| objectCid | [vBase.Core.Cid](#T-vBase-Core-Cid 'vBase.Core.Cid') | Object CID to add. |

<a name='M-vBase-Core-ICommitmentService-UserSetExists-System-String,vBase-Core-Cid-'></a>
### UserSetExists(user,setCid) `method`

##### Summary

Checks if the specified object set exists.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Set owner. |
| setCid | [vBase.Core.Cid](#T-vBase-Core-Cid 'vBase.Core.Cid') | CID of the set. |

<a name='M-vBase-Core-ICommitmentService-VerifyUserObject-System-String,vBase-Core-Cid,System-DateTimeOffset-'></a>
### VerifyUserObject(user,objectCid,timestamp) `method`

##### Summary

Checks whether the object with the specified CID was stamped at the given time.

##### Returns

True if the commitment has been verified successfully; False otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The address for the user who recorded the commitment. |
| objectCid | [vBase.Core.Cid](#T-vBase-Core-Cid 'vBase.Core.Cid') | The CID identifying the object. |
| timestamp | [System.DateTimeOffset](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.DateTimeOffset 'System.DateTimeOffset') | The timestamp of the transaction. |

<a name='M-vBase-Core-ICommitmentService-VerifyUserSetObjects-System-String,vBase-Core-Cid,System-Numerics-BigInteger-'></a>
### VerifyUserSetObjects(user,setCid,userSetObjectCidSum) `method`

##### Summary

Verifies an object commitment previously recorded.

##### Returns

True if the commitment has been verified successfully; False otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The address for the user who recorded the commitment. |
| setCid | [vBase.Core.Cid](#T-vBase-Core-Cid 'vBase.Core.Cid') | The CID for the set containing the object. |
| userSetObjectCidSum | [System.Numerics.BigInteger](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Numerics.BigInteger 'System.Numerics.BigInteger') | The sum of all object hashes for the user set. |

<a name='T-vBase-Core-Dataset-JsonSerializationDto'></a>
## JsonSerializationDto `type`

##### Namespace

vBase.Core.Dataset

##### Summary

DTO for dataset JSON serialization.
It's important to keep this class in sync with the Python and other SDKs.

<a name='T-vBase-Core-Utilities-Utils'></a>
## Utils `type`

##### Namespace

vBase.Core.Utilities

##### Summary

Provides utility methods.

<a name='T-vBase-Core-Dataset-VerificationResult'></a>
## VerificationResult `type`

##### Namespace

vBase.Core.Dataset

##### Summary

Contains a list of verification findings.
[VerifyCommitments](#M-vBase-Core-Dataset-vBaseDataset-VerifyCommitments 'vBase.Core.Dataset.vBaseDataset.VerifyCommitments')

<a name='P-vBase-Core-Dataset-VerificationResult-VerificationFindings'></a>
### VerificationFindings `property`

##### Summary

A collection of verification findings.

<a name='P-vBase-Core-Dataset-VerificationResult-VerificationPassed'></a>
### VerificationPassed `property`

##### Summary

Indicates whether the verification passed.

<a name='M-vBase-Core-Dataset-VerificationResult-AddFinding-System-String-'></a>
### AddFinding(finding) `method`

##### Summary

Adds a finding to the verification result.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| finding | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

<a name='T-vBase-Core-Web3CommitmentService-Web3CommitmentService'></a>
## Web3CommitmentService `type`

##### Namespace

vBase.Core.Web3CommitmentService

##### Summary

Provides access to the CommitmentService smart contract.

<a name='M-vBase-Core-Web3CommitmentService-Web3CommitmentService-CallContractFunction-Nethereum-Contracts-Function,System-String-'></a>
### CallContractFunction(function,functionData) `method`

##### Summary

Executes Smart Contract function.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| function | [Nethereum.Contracts.Function](#T-Nethereum-Contracts-Function 'Nethereum.Contracts.Function') | Function descriptor. |
| functionData | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Data which will be passed as a function arguments. |

<a name='M-vBase-Core-Web3CommitmentService-Web3CommitmentService-CallContractFunction-System-String,System-Object[]-'></a>
### CallContractFunction(functionName,functionInput) `method`

##### Summary

Calls the specified contract function.

##### Returns

The result of the contract function execution.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| functionName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the function to call. |
| functionInput | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | The input parameters for the function. |

<a name='M-vBase-Core-Web3CommitmentService-Web3CommitmentService-CallStateVariable``1-System-String,System-Object[]-'></a>
### CallStateVariable\`\`1(stateVariableName,functionInput) `method`

##### Summary

Fetches the specified state variable from the contract.

##### Returns

Variable value

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| stateVariableName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the variable to fetch |
| functionInput | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | Context identifying the set |

##### Generic Types

| Name | Description |
| ---- | ----------- |
| TResultType | Expected variable type |

<a name='M-vBase-Core-Web3CommitmentService-Web3CommitmentService-FetchStateVariable``1-System-String-'></a>
### FetchStateVariable\`\`1(functionData) `method`

##### Summary

Fetches state variable from the Smart Contract.

##### Returns

Variable value

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| functionData | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Encoded state variable |

##### Generic Types

| Name | Description |
| ---- | ----------- |
| TResultType | Expected result type |

<a name='T-vBase-Core-vBaseClient'></a>
## vBaseClient `type`

##### Namespace

vBase.Core

##### Summary

Provides Python validityBase (vBase) access.

<a name='M-vBase-Core-vBaseClient-AddNamedSet-System-String-'></a>
### AddNamedSet(name) `method`

##### Summary

Adds a new named set.

##### Returns

A task representing the asynchronous operation.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the set to add. |

<a name='M-vBase-Core-vBaseClient-AddSet-vBase-Core-Cid-'></a>
### AddSet(setCid) `method`

##### Summary

Adds a new set.

##### Returns

A task representing the asynchronous operation.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [vBase.Core.Cid](#T-vBase-Core-Cid 'vBase.Core.Cid') | The identifier of the set. |

<a name='M-vBase-Core-vBaseClient-AddSetObject-vBase-Core-Cid,vBase-Core-Cid-'></a>
### AddSetObject(setCid,objectCid) `method`

##### Summary

Adds a new object to the set.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [vBase.Core.Cid](#T-vBase-Core-Cid 'vBase.Core.Cid') | Set CID. |
| objectCid | [vBase.Core.Cid](#T-vBase-Core-Cid 'vBase.Core.Cid') | Object to add CID. |

<a name='M-vBase-Core-vBaseClient-UserNamedSetExists-System-String,System-String-'></a>
### UserNamedSetExists(user,name) `method`

##### Summary

Checks if the user has a set with the specified CID.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | User's identifier. |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the set. |

<a name='M-vBase-Core-vBaseClient-VerifyUserObject-System-String,vBase-Core-Cid,System-DateTimeOffset-'></a>
### VerifyUserObject(user,objectCid,timestamp) `method`

##### Summary

Verifies if the specified object was stamped at the given time by the given user.

##### Returns

True if the object was stamped; otherwise, false.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The object owner. |
| objectCid | [vBase.Core.Cid](#T-vBase-Core-Cid 'vBase.Core.Cid') | The object identifier. |
| timestamp | [System.DateTimeOffset](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.DateTimeOffset 'System.DateTimeOffset') | The time when the object was stamped. |

<a name='M-vBase-Core-vBaseClient-VerifyUserSetObjects-System-String,vBase-Core-Cid,System-Numerics-BigInteger-'></a>
### VerifyUserSetObjects(user,setCid,userSetObjectsCidSum) `method`

##### Summary

Verifies if the sum of all CIDs in the current dataset matches the sum of the dataset stored
in the commitment service.

##### Returns

A boolean indicating whether the sums match.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The set owner. |
| setCid | [vBase.Core.Cid](#T-vBase-Core-Cid 'vBase.Core.Cid') | The CID of the set. |
| userSetObjectsCidSum | [System.Numerics.BigInteger](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Numerics.BigInteger 'System.Numerics.BigInteger') | The sum of the CIDs of all objects belonging to the set. |

<a name='T-vBase-Core-Dataset-vBaseDataset'></a>
## vBaseDataset `type`

##### Namespace

vBase.Core.Dataset

##### Summary

vBase dataset.

<a name='M-vBase-Core-Dataset-vBaseDataset-#ctor-vBase-Core-vBaseClient,System-String,System-String-'></a>
### #ctor(vBaseClient,name,recordTypeName) `constructor`

##### Summary

Creates a new instance of the vBase dataset.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| vBaseClient | [vBase.Core.vBaseClient](#T-vBase-Core-vBaseClient 'vBase.Core.vBaseClient') | The vBaseClient used for communication with the vBase smart protocol. |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the dataset. |
| recordTypeName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The type of records to be stored in the dataset. |

##### Exceptions

| Name | Description |
| ---- | ----------- |
| [System.InvalidOperationException](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.InvalidOperationException 'System.InvalidOperationException') | Thrown if an unknown record type is provided. |

<a name='M-vBase-Core-Dataset-vBaseDataset-#ctor-vBase-Core-vBaseClient,System-String-'></a>
### #ctor(vBaseClient,json) `constructor`

##### Summary

Creates a new instance of the vBase dataset from JSON.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| vBaseClient | [vBase.Core.vBaseClient](#T-vBase-Core-vBaseClient 'vBase.Core.vBaseClient') | The vBaseClient used for communication with the vBase smart protocol. |
| json | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The JSON representation of the dataset. JSON created by vBase SDKs for other platforms, such as Python or Java, is also supported. |

##### Exceptions

| Name | Description |
| ---- | ----------- |
| [vBase.Core.Exceptions.vBaseException](#T-vBase-Core-Exceptions-vBaseException 'vBase.Core.Exceptions.vBaseException') | Thrown when the current CID generation algorithm does not match the one used to generate the provided JSON. |

<a name='M-vBase-Core-Dataset-vBaseDataset-AddRecord-System-Object-'></a>
### AddRecord(recordData) `method`

##### Summary

Adds a record to the dataset.

##### Returns

A task representing the asynchronous operation.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| recordData | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | The record to add. The record type must match the dataset type. |

<a name='M-vBase-Core-Dataset-vBaseDataset-Initialize'></a>
### Initialize() `method`

##### Summary

Creates a new dataset on the blockchain if it does not already exist.

##### Returns

A task representing the asynchronous operation.

##### Parameters

This method has no parameters.

<a name='M-vBase-Core-Dataset-vBaseDataset-ToJson'></a>
### ToJson() `method`

##### Summary

Serializes the dataset into a vBase-compatible JSON representation.

##### Returns

A JSON string.

##### Parameters

This method has no parameters.

<a name='M-vBase-Core-Dataset-vBaseDataset-VerifyCommitments'></a>
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

<a name='T-vBase-Core-Exceptions-vBaseException'></a>
## vBaseException `type`

##### Namespace

vBase.Core.Exceptions

##### Summary

Base exception for all vBase exceptions.

<a name='T-vBase-Core-Dataset-vBaseObjects-vBaseObject'></a>
## vBaseObject `type`

##### Namespace

vBase.Core.Dataset.vBaseObjects

##### Summary

Base class for all vBase objects.
Each implementation should provide a constructor with one object parameter, and parameterless constructor.

<a name='P-vBase-Core-Dataset-vBaseObjects-vBaseObject-Data'></a>
### Data `property`

##### Summary

The data stored in the object.

<a name='P-vBase-Core-Dataset-vBaseObjects-vBaseObject-StringData'></a>
### StringData `property`

##### Summary

String representation of the data.

<a name='M-vBase-Core-Dataset-vBaseObjects-vBaseObject-GetCid'></a>
### GetCid() `method`

##### Summary

Returns the [Cid](#T-vBase-Core-Cid 'vBase.Core.Cid') of the object.

##### Returns

CID (Content Identifiers) for the current object

##### Parameters

This method has no parameters.

<a name='M-vBase-Core-Dataset-vBaseObjects-vBaseObject-GetJson'></a>
### GetJson() `method`

##### Summary

Serializes the object to a JSON value.

##### Returns



##### Parameters

This method has no parameters.

<a name='M-vBase-Core-Dataset-vBaseObjects-vBaseObject-InitFromJson-Newtonsoft-Json-Linq-JValue-'></a>
### InitFromJson(jData) `method`

##### Summary

Initializes the object from a JSON object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| jData | [Newtonsoft.Json.Linq.JValue](#T-Newtonsoft-Json-Linq-JValue 'Newtonsoft.Json.Linq.JValue') | Json value. |

<a name='T-vBase-Core-Dataset-vBaseObjects-vBaseStringObject'></a>
## vBaseStringObject `type`

##### Namespace

vBase.Core.Dataset.vBaseObjects

##### Summary

vBase Object representing a string data.

<a name='F-vBase-Core-Dataset-vBaseObjects-vBaseStringObject-vBaseObjectType'></a>
### vBaseObjectType `constants`

##### Summary

vBase string object name
for bidirectional compatibility with vBase Python SDK the V letter is capitalized
