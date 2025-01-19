<a name='assembly'></a>
# vBase.Core

## Contents

- [Cid](#T-vBase-Core-Cid 'vBase.Core.Cid')
  - [#ctor()](#M-vBase-Core-Cid-#ctor-System-Byte[]- 'vBase.Core.Cid.#ctor(System.Byte[])')
  - [#ctor(data)](#M-vBase-Core-Cid-#ctor-System-String- 'vBase.Core.Cid.#ctor(System.String)')
  - [Data](#P-vBase-Core-Cid-Data 'vBase.Core.Cid.Data')
  - [Empty](#P-vBase-Core-Cid-Empty 'vBase.Core.Cid.Empty')
  - [ToHex()](#M-vBase-Core-Cid-ToHex 'vBase.Core.Cid.ToHex')
- [CryptoUtils](#T-vBase-Core-Utilities-CryptoUtils 'vBase.Core.Utilities.CryptoUtils')
  - [GetCid(value,size)](#M-vBase-Core-Utilities-CryptoUtils-GetCid-System-Numerics-BigInteger,System-UInt32- 'vBase.Core.Utilities.CryptoUtils.GetCid(System.Numerics.BigInteger,System.UInt32)')
  - [GetCid(value)](#M-vBase-Core-Utilities-CryptoUtils-GetCid-System-String- 'vBase.Core.Utilities.CryptoUtils.GetCid(System.String)')
- [ICommitmentService](#T-vBase-Core-ICommitmentService 'vBase.Core.ICommitmentService')
  - [AddSet(setCid)](#M-vBase-Core-ICommitmentService-AddSet-vBase-Core-Cid- 'vBase.Core.ICommitmentService.AddSet(vBase.Core.Cid)')
  - [AddSetObject(setCid,objectCid)](#M-vBase-Core-ICommitmentService-AddSetObject-vBase-Core-Cid,vBase-Core-Cid- 'vBase.Core.ICommitmentService.AddSetObject(vBase.Core.Cid,vBase.Core.Cid)')
  - [UserSetExists(user,setCid)](#M-vBase-Core-ICommitmentService-UserSetExists-System-String,vBase-Core-Cid- 'vBase.Core.ICommitmentService.UserSetExists(System.String,vBase.Core.Cid)')
  - [VerifyUserObject(user,objectCid,timestamp)](#M-vBase-Core-ICommitmentService-VerifyUserObject-System-String,vBase-Core-Cid,System-DateTimeOffset- 'vBase.Core.ICommitmentService.VerifyUserObject(System.String,vBase.Core.Cid,System.DateTimeOffset)')
  - [VerifyUserSetObjects(user,setCid,userSetObjectCidSum)](#M-vBase-Core-ICommitmentService-VerifyUserSetObjects-System-String,vBase-Core-Cid,System-Numerics-BigInteger- 'vBase.Core.ICommitmentService.VerifyUserSetObjects(System.String,vBase.Core.Cid,System.Numerics.BigInteger)')
- [Web3CommitmentService](#T-vBase-Core-Web3CommitmentService-Web3CommitmentService 'vBase.Core.Web3CommitmentService.Web3CommitmentService')
  - [CallContractFunction(function,functionData)](#M-vBase-Core-Web3CommitmentService-Web3CommitmentService-CallContractFunction-Nethereum-Contracts-Function,System-String- 'vBase.Core.Web3CommitmentService.Web3CommitmentService.CallContractFunction(Nethereum.Contracts.Function,System.String)')
  - [CallContractFunction(functionName,functionInput)](#M-vBase-Core-Web3CommitmentService-Web3CommitmentService-CallContractFunction-System-String,System-Object[]- 'vBase.Core.Web3CommitmentService.Web3CommitmentService.CallContractFunction(System.String,System.Object[])')
  - [CallStateVariable\`\`1(stateVariableName,functionInput)](#M-vBase-Core-Web3CommitmentService-Web3CommitmentService-CallStateVariable``1-System-String,System-Object[]- 'vBase.Core.Web3CommitmentService.Web3CommitmentService.CallStateVariable``1(System.String,System.Object[])')
  - [FetchStateVariable\`\`1(functionData)](#M-vBase-Core-Web3CommitmentService-Web3CommitmentService-FetchStateVariable``1-System-String- 'vBase.Core.Web3CommitmentService.Web3CommitmentService.FetchStateVariable``1(System.String)')
- [vBaseClient](#T-vBase-Core-vBaseClient 'vBase.Core.vBaseClient')
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

<a name='T-vBase-Core-Utilities-CryptoUtils'></a>
## CryptoUtils `type`

##### Namespace

vBase.Core.Utilities

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

<a name='T-vBase-Core-ICommitmentService'></a>
## ICommitmentService `type`

##### Namespace

vBase.Core

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

<a name='F-vBase-Core-Dataset-vBaseObjects-vBaseStringObject-vBaseObjectType'></a>
### vBaseObjectType `constants`

##### Summary

vBase string object name
for bidirectional compatibility with vBase Python SDK the V letter is capitalized
