# vBase.Core <a name="assembly" id="assembly" href="#assembly"></a>

## Contents

- [Cid](#t-vbase-core-cid 'vBase.Core.Cid')
  - [#ctor()](#m-vbase-core-cid-%23ctor-system-byte%5B%5D- 'vBase.Core.Cid.#ctor(System.Byte[])')
  - [#ctor(data)](#m-vbase-core-cid-%23ctor-system-string- 'vBase.Core.Cid.#ctor(System.String)')
  - [Data](#p-vbase-core-cid-data 'vBase.Core.Cid.Data')
  - [Empty](#p-vbase-core-cid-empty 'vBase.Core.Cid.Empty')
  - [ToHex()](#m-vbase-core-cid-tohex 'vBase.Core.Cid.ToHex')
- [Convert](#t-vbase-core-utilities-convert 'vBase.Core.Utilities.Convert')
- [CryptoUtils](#t-vbase-core-utilities-cryptoutils 'vBase.Core.Utilities.CryptoUtils')
  - [GetCid(value,size)](#m-vbase-core-utilities-cryptoutils-getcid-system-numerics-bigintegersystem-uint32- 'vBase.Core.Utilities.CryptoUtils.GetCid(System.Numerics.BigInteger,System.UInt32)')
  - [GetCid(value)](#m-vbase-core-utilities-cryptoutils-getcid-system-string- 'vBase.Core.Utilities.CryptoUtils.GetCid(System.String)')
- [ForwarderCommitmentService](#t-vbase-core-web3commitmentservice-forwardercommitmentservice 'vBase.Core.Web3CommitmentService.ForwarderCommitmentService')
- [ICommitmentService](#t-vbase-core-icommitmentservice 'vBase.Core.ICommitmentService')
  - [AccountIdentifier](#p-vbase-core-icommitmentservice-accountidentifier 'vBase.Core.ICommitmentService.AccountIdentifier')
  - [AddSet(setCid)](#m-vbase-core-icommitmentservice-addset-vbase-core-cid- 'vBase.Core.ICommitmentService.AddSet(vBase.Core.Cid)')
  - [AddSetObject(setCid,objectCid)](#m-vbase-core-icommitmentservice-addsetobject-vbase-core-cidvbase-core-cid- 'vBase.Core.ICommitmentService.AddSetObject(vBase.Core.Cid,vBase.Core.Cid)')
  - [UserSetExists(user,setCid)](#m-vbase-core-icommitmentservice-usersetexists-system-stringvbase-core-cid- 'vBase.Core.ICommitmentService.UserSetExists(System.String,vBase.Core.Cid)')
  - [VerifyUserObject(user,objectCid,timestamp)](#m-vbase-core-icommitmentservice-verifyuserobject-system-stringvbase-core-cidsystem-datetimeoffset- 'vBase.Core.ICommitmentService.VerifyUserObject(System.String,vBase.Core.Cid,System.DateTimeOffset)')
  - [VerifyUserSetObjects(user,setCid,userSetObjectCidSum)](#m-vbase-core-icommitmentservice-verifyusersetobjects-system-stringvbase-core-cidsystem-numerics-biginteger- 'vBase.Core.ICommitmentService.VerifyUserSetObjects(System.String,vBase.Core.Cid,System.Numerics.BigInteger)')
- [JsonSerializationDto](#t-vbase-core-dataset-jsonserializationdto 'vBase.Core.Dataset.JsonSerializationDto')
- [Receipt](#t-vbase-core-receipt 'vBase.Core.Receipt')
  - [#ctor()](#m-vbase-core-receipt-%23ctor-system-datetimeoffset- 'vBase.Core.Receipt.#ctor(System.DateTimeOffset)')
- [Utils](#t-vbase-core-utilities-utils 'vBase.Core.Utilities.Utils')
- [VerificationResult](#t-vbase-core-dataset-verificationresult 'vBase.Core.Dataset.VerificationResult')
  - [VerificationFindings](#p-vbase-core-dataset-verificationresult-verificationfindings 'vBase.Core.Dataset.VerificationResult.VerificationFindings')
  - [VerificationPassed](#p-vbase-core-dataset-verificationresult-verificationpassed 'vBase.Core.Dataset.VerificationResult.VerificationPassed')
  - [AddFinding(finding)](#m-vbase-core-dataset-verificationresult-addfinding-system-string- 'vBase.Core.Dataset.VerificationResult.AddFinding(System.String)')
- [Web3CommitmentService](#t-vbase-core-web3commitmentservice-web3commitmentservice 'vBase.Core.Web3CommitmentService.Web3CommitmentService')
  - [CallContractFunction(function,functionData)](#m-vbase-core-web3commitmentservice-web3commitmentservice-callcontractfunction-nethereum-contracts-functionsystem-string- 'vBase.Core.Web3CommitmentService.Web3CommitmentService.CallContractFunction(Nethereum.Contracts.Function,System.String)')
  - [CallContractFunction(functionName,functionInput)](#m-vbase-core-web3commitmentservice-web3commitmentservice-callcontractfunction-system-stringsystem-object%5B%5D- 'vBase.Core.Web3CommitmentService.Web3CommitmentService.CallContractFunction(System.String,System.Object[])')
  - [CallStateVariable\`\`1(stateVariableName,functionInput)](#m-vbase-core-web3commitmentservice-web3commitmentservice-callstatevariable1-system-stringsystem-object%5B%5D- 'vBase.Core.Web3CommitmentService.Web3CommitmentService.CallStateVariable``1(System.String,System.Object[])')
  - [FetchStateVariable\`\`1(functionData)](#m-vbase-core-web3commitmentservice-web3commitmentservice-fetchstatevariable1-system-string- 'vBase.Core.Web3CommitmentService.Web3CommitmentService.FetchStateVariable``1(System.String)')
- [Web3Receipt](#t-vbase-core-web3commitmentservice-web3receipt 'vBase.Core.Web3CommitmentService.Web3Receipt')
  - [#ctor()](#m-vbase-core-web3commitmentservice-web3receipt-%23ctor-system-stringsystem-datetimeoffset- 'vBase.Core.Web3CommitmentService.Web3Receipt.#ctor(System.String,System.DateTimeOffset)')
- [vBaseClient](#t-vbase-core-vbaseclient 'vBase.Core.vBaseClient')
  - [AddNamedSet(name)](#m-vbase-core-vbaseclient-addnamedset-system-string- 'vBase.Core.vBaseClient.AddNamedSet(System.String)')
  - [AddSet(setCid)](#m-vbase-core-vbaseclient-addset-vbase-core-cid- 'vBase.Core.vBaseClient.AddSet(vBase.Core.Cid)')
  - [AddSetObject(setCid,objectCid)](#m-vbase-core-vbaseclient-addsetobject-vbase-core-cidvbase-core-cid- 'vBase.Core.vBaseClient.AddSetObject(vBase.Core.Cid,vBase.Core.Cid)')
  - [UserNamedSetExists(user,name)](#m-vbase-core-vbaseclient-usernamedsetexists-system-stringsystem-string- 'vBase.Core.vBaseClient.UserNamedSetExists(System.String,System.String)')
  - [VerifyUserObject(user,objectCid,timestamp)](#m-vbase-core-vbaseclient-verifyuserobject-system-stringvbase-core-cidsystem-datetimeoffset- 'vBase.Core.vBaseClient.VerifyUserObject(System.String,vBase.Core.Cid,System.DateTimeOffset)')
  - [VerifyUserSetObjects(user,setCid,userSetObjectsCidSum)](#m-vbase-core-vbaseclient-verifyusersetobjects-system-stringvbase-core-cidsystem-numerics-biginteger- 'vBase.Core.vBaseClient.VerifyUserSetObjects(System.String,vBase.Core.Cid,System.Numerics.BigInteger)')
- [vBaseDataset](#t-vbase-core-dataset-vbasedataset 'vBase.Core.Dataset.vBaseDataset')
  - [#ctor(vBaseClient,name,recordTypeName)](#m-vbase-core-dataset-vbasedataset-%23ctor-vbase-core-vbaseclientsystem-stringsystem-string- 'vBase.Core.Dataset.vBaseDataset.#ctor(vBase.Core.vBaseClient,System.String,System.String)')
  - [#ctor(vBaseClient,json)](#m-vbase-core-dataset-vbasedataset-%23ctor-vbase-core-vbaseclientsystem-string- 'vBase.Core.Dataset.vBaseDataset.#ctor(vBase.Core.vBaseClient,System.String)')
  - [AddRecord(recordData)](#m-vbase-core-dataset-vbasedataset-addrecord-system-object- 'vBase.Core.Dataset.vBaseDataset.AddRecord(System.Object)')
  - [Initialize()](#m-vbase-core-dataset-vbasedataset-initialize 'vBase.Core.Dataset.vBaseDataset.Initialize')
  - [ToJson()](#m-vbase-core-dataset-vbasedataset-tojson 'vBase.Core.Dataset.vBaseDataset.ToJson')
  - [VerifyCommitments()](#m-vbase-core-dataset-vbasedataset-verifycommitments 'vBase.Core.Dataset.vBaseDataset.VerifyCommitments')
- [vBaseException](#t-vbase-core-exceptions-vbaseexception 'vBase.Core.Exceptions.vBaseException')
- [vBaseObject](#t-vbase-core-dataset-vbaseobjects-vbaseobject 'vBase.Core.Dataset.vBaseObjects.vBaseObject')
  - [Data](#p-vbase-core-dataset-vbaseobjects-vbaseobject-data 'vBase.Core.Dataset.vBaseObjects.vBaseObject.Data')
  - [StringData](#p-vbase-core-dataset-vbaseobjects-vbaseobject-stringdata 'vBase.Core.Dataset.vBaseObjects.vBaseObject.StringData')
  - [GetCid()](#m-vbase-core-dataset-vbaseobjects-vbaseobject-getcid 'vBase.Core.Dataset.vBaseObjects.vBaseObject.GetCid')
  - [GetJson()](#m-vbase-core-dataset-vbaseobjects-vbaseobject-getjson 'vBase.Core.Dataset.vBaseObjects.vBaseObject.GetJson')
  - [InitFromJson(jData)](#m-vbase-core-dataset-vbaseobjects-vbaseobject-initfromjson-newtonsoft-json-linq-jvalue- 'vBase.Core.Dataset.vBaseObjects.vBaseObject.InitFromJson(Newtonsoft.Json.Linq.JValue)')
- [vBaseStringObject](#t-vbase-core-dataset-vbaseobjects-vbasestringobject 'vBase.Core.Dataset.vBaseObjects.vBaseStringObject')
  - [vBaseObjectType](#f-vbase-core-dataset-vbaseobjects-vbasestringobject-vbaseobjecttype 'vBase.Core.Dataset.vBaseObjects.vBaseStringObject.vBaseObjectType')

## Cid `type` <a name="t-vbase-core-cid" id="t-vbase-core-cid" href="#t-vbase-core-cid"></a>

##### Namespace

vBase.Core

##### Summary

Content Identifier (CID) is used to uniquely identify objects.

### #ctor() `constructor` <a name="m-vbase-core-cid-%23ctor-system-byte%5B%5D-" id="m-vbase-core-cid-%23ctor-system-byte%5B%5D-" href="#m-vbase-core-cid-%23ctor-system-byte%5B%5D-"></a>

##### Summary

Creates a new CID from the provided byte array.

##### Parameters

This constructor has no parameters.

### #ctor(data) `constructor` <a name="m-vbase-core-cid-%23ctor-system-string-" id="m-vbase-core-cid-%23ctor-system-string-" href="#m-vbase-core-cid-%23ctor-system-string-"></a>

##### Summary

Creates a new CID from the provided hex string.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

### Data `property` <a name="p-vbase-core-cid-data" id="p-vbase-core-cid-data" href="#p-vbase-core-cid-data"></a>

##### Summary

The data of the CID.

### Empty `property` <a name="p-vbase-core-cid-empty" id="p-vbase-core-cid-empty" href="#p-vbase-core-cid-empty"></a>

##### Summary

Empty CID.

### ToHex() `method` <a name="m-vbase-core-cid-tohex" id="m-vbase-core-cid-tohex" href="#m-vbase-core-cid-tohex"></a>

##### Summary

Returns the CID as a hex string.

##### Returns

Hex string.

##### Parameters

This method has no parameters.

## Convert `type` <a name="t-vbase-core-utilities-convert" id="t-vbase-core-utilities-convert" href="#t-vbase-core-utilities-convert"></a>

##### Namespace

vBase.Core.Utilities

##### Summary

Provides conversion methods.

## CryptoUtils `type` <a name="t-vbase-core-utilities-cryptoutils" id="t-vbase-core-utilities-cryptoutils" href="#t-vbase-core-utilities-cryptoutils"></a>

##### Namespace

vBase.Core.Utilities

##### Summary

Provides cryptographic utilities.

### GetCid(value,size) `method` <a name="m-vbase-core-utilities-cryptoutils-getcid-system-numerics-bigintegersystem-uint32-" id="m-vbase-core-utilities-cryptoutils-getcid-system-numerics-bigintegersystem-uint32-" href="#m-vbase-core-utilities-cryptoutils-getcid-system-numerics-bigintegersystem-uint32-"></a>

##### Summary

Get SHA3 256 hash of the input integer.

##### Returns

SHA3 256 hash object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | [System.Numerics.BigInteger](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Numerics.BigInteger 'System.Numerics.BigInteger') | Integer value. |
| size | [System.UInt32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.UInt32 'System.UInt32') | Size in bits. |

### GetCid(value) `method` <a name="m-vbase-core-utilities-cryptoutils-getcid-system-string-" id="m-vbase-core-utilities-cryptoutils-getcid-system-string-" href="#m-vbase-core-utilities-cryptoutils-getcid-system-string-"></a>

##### Summary

Get SHA3 256 hash of the input string.

##### Returns

SHA3 256 hash object

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | input string |

## ForwarderCommitmentService `type` <a name="t-vbase-core-web3commitmentservice-forwardercommitmentservice" id="t-vbase-core-web3commitmentservice-forwardercommitmentservice" href="#t-vbase-core-web3commitmentservice-forwardercommitmentservice"></a>

##### Namespace

vBase.Core.Web3CommitmentService

##### Summary

Provides access to the CommitmentService smart contract over vBase forwarder.

## ICommitmentService `type` <a name="t-vbase-core-icommitmentservice" id="t-vbase-core-icommitmentservice" href="#t-vbase-core-icommitmentservice"></a>

##### Namespace

vBase.Core

##### Summary

Common interface for commitment services.

### AccountIdentifier `property` <a name="p-vbase-core-icommitmentservice-accountidentifier" id="p-vbase-core-icommitmentservice-accountidentifier" href="#p-vbase-core-icommitmentservice-accountidentifier"></a>

##### Summary

Current user account identifier.

### AddSet(setCid) `method` <a name="m-vbase-core-icommitmentservice-addset-vbase-core-cid-" id="m-vbase-core-icommitmentservice-addset-vbase-core-cid-" href="#m-vbase-core-icommitmentservice-addset-vbase-core-cid-"></a>

##### Summary

Records a set commitment.
If the set already exists, no action will be taken.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [vBase.Core.Cid](#t-vbase-core-cid 'vBase.Core.Cid') | The CID identifying the set. |

### AddSetObject(setCid,objectCid) `method` <a name="m-vbase-core-icommitmentservice-addsetobject-vbase-core-cidvbase-core-cid-" id="m-vbase-core-icommitmentservice-addsetobject-vbase-core-cidvbase-core-cid-" href="#m-vbase-core-icommitmentservice-addsetobject-vbase-core-cidvbase-core-cid-"></a>

##### Summary

Adds an object CID to the specified set.

##### Returns

Receipt of the operation.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [vBase.Core.Cid](#t-vbase-core-cid 'vBase.Core.Cid') | CID of the set where the objectCid will be added. |
| objectCid | [vBase.Core.Cid](#t-vbase-core-cid 'vBase.Core.Cid') | Object CID to add. |

### UserSetExists(user,setCid) `method` <a name="m-vbase-core-icommitmentservice-usersetexists-system-stringvbase-core-cid-" id="m-vbase-core-icommitmentservice-usersetexists-system-stringvbase-core-cid-" href="#m-vbase-core-icommitmentservice-usersetexists-system-stringvbase-core-cid-"></a>

##### Summary

Checks if the specified object set exists.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Set owner. |
| setCid | [vBase.Core.Cid](#t-vbase-core-cid 'vBase.Core.Cid') | CID of the set. |

### VerifyUserObject(user,objectCid,timestamp) `method` <a name="m-vbase-core-icommitmentservice-verifyuserobject-system-stringvbase-core-cidsystem-datetimeoffset-" id="m-vbase-core-icommitmentservice-verifyuserobject-system-stringvbase-core-cidsystem-datetimeoffset-" href="#m-vbase-core-icommitmentservice-verifyuserobject-system-stringvbase-core-cidsystem-datetimeoffset-"></a>

##### Summary

Checks whether the object with the specified CID was stamped at the given time.

##### Returns

True if the commitment has been verified successfully; False otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The address for the user who recorded the commitment. |
| objectCid | [vBase.Core.Cid](#t-vbase-core-cid 'vBase.Core.Cid') | The CID identifying the object. |
| timestamp | [System.DateTimeOffset](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.DateTimeOffset 'System.DateTimeOffset') | The timestamp of the transaction. |

### VerifyUserSetObjects(user,setCid,userSetObjectCidSum) `method` <a name="m-vbase-core-icommitmentservice-verifyusersetobjects-system-stringvbase-core-cidsystem-numerics-biginteger-" id="m-vbase-core-icommitmentservice-verifyusersetobjects-system-stringvbase-core-cidsystem-numerics-biginteger-" href="#m-vbase-core-icommitmentservice-verifyusersetobjects-system-stringvbase-core-cidsystem-numerics-biginteger-"></a>

##### Summary

Verifies an object commitment previously recorded.

##### Returns

True if the commitment has been verified successfully; False otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The address for the user who recorded the commitment. |
| setCid | [vBase.Core.Cid](#t-vbase-core-cid 'vBase.Core.Cid') | The CID for the set containing the object. |
| userSetObjectCidSum | [System.Numerics.BigInteger](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Numerics.BigInteger 'System.Numerics.BigInteger') | The sum of all object hashes for the user set. |

## JsonSerializationDto `type` <a name="t-vbase-core-dataset-jsonserializationdto" id="t-vbase-core-dataset-jsonserializationdto" href="#t-vbase-core-dataset-jsonserializationdto"></a>

##### Namespace

vBase.Core.Dataset

##### Summary

DTO for dataset JSON serialization.
It's important to keep this class in sync with the Python and other SDKs.

## Receipt `type` <a name="t-vbase-core-receipt" id="t-vbase-core-receipt" href="#t-vbase-core-receipt"></a>

##### Namespace

vBase.Core

##### Summary

Represents a transaction receipt.

### #ctor() `constructor` <a name="m-vbase-core-receipt-%23ctor-system-datetimeoffset-" id="m-vbase-core-receipt-%23ctor-system-datetimeoffset-" href="#m-vbase-core-receipt-%23ctor-system-datetimeoffset-"></a>

##### Summary

Represents a transaction receipt.

##### Parameters

This constructor has no parameters.

## Utils `type` <a name="t-vbase-core-utilities-utils" id="t-vbase-core-utilities-utils" href="#t-vbase-core-utilities-utils"></a>

##### Namespace

vBase.Core.Utilities

##### Summary

Provides utility methods.

## VerificationResult `type` <a name="t-vbase-core-dataset-verificationresult" id="t-vbase-core-dataset-verificationresult" href="#t-vbase-core-dataset-verificationresult"></a>

##### Namespace

vBase.Core.Dataset

##### Summary

Contains a list of verification findings.
[VerifyCommitments](#m-vbase-core-dataset-vbasedataset-verifycommitments 'vBase.Core.Dataset.vBaseDataset.VerifyCommitments')

### VerificationFindings `property` <a name="p-vbase-core-dataset-verificationresult-verificationfindings" id="p-vbase-core-dataset-verificationresult-verificationfindings" href="#p-vbase-core-dataset-verificationresult-verificationfindings"></a>

##### Summary

A collection of verification findings.

### VerificationPassed `property` <a name="p-vbase-core-dataset-verificationresult-verificationpassed" id="p-vbase-core-dataset-verificationresult-verificationpassed" href="#p-vbase-core-dataset-verificationresult-verificationpassed"></a>

##### Summary

Indicates whether the verification passed.

### AddFinding(finding) `method` <a name="m-vbase-core-dataset-verificationresult-addfinding-system-string-" id="m-vbase-core-dataset-verificationresult-addfinding-system-string-" href="#m-vbase-core-dataset-verificationresult-addfinding-system-string-"></a>

##### Summary

Adds a finding to the verification result.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| finding | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

## Web3CommitmentService `type` <a name="t-vbase-core-web3commitmentservice-web3commitmentservice" id="t-vbase-core-web3commitmentservice-web3commitmentservice" href="#t-vbase-core-web3commitmentservice-web3commitmentservice"></a>

##### Namespace

vBase.Core.Web3CommitmentService

##### Summary

Provides access to the CommitmentService smart contract.

### CallContractFunction(function,functionData) `method` <a name="m-vbase-core-web3commitmentservice-web3commitmentservice-callcontractfunction-nethereum-contracts-functionsystem-string-" id="m-vbase-core-web3commitmentservice-web3commitmentservice-callcontractfunction-nethereum-contracts-functionsystem-string-" href="#m-vbase-core-web3commitmentservice-web3commitmentservice-callcontractfunction-nethereum-contracts-functionsystem-string-"></a>

##### Summary

Executes Smart Contract function.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| function | [Nethereum.Contracts.Function](#t-nethereum-contracts-function 'Nethereum.Contracts.Function') | Function descriptor. |
| functionData | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Data which will be passed as a function arguments. |

### CallContractFunction(functionName,functionInput) `method` <a name="m-vbase-core-web3commitmentservice-web3commitmentservice-callcontractfunction-system-stringsystem-object%5B%5D-" id="m-vbase-core-web3commitmentservice-web3commitmentservice-callcontractfunction-system-stringsystem-object%5B%5D-" href="#m-vbase-core-web3commitmentservice-web3commitmentservice-callcontractfunction-system-stringsystem-object%5B%5D-"></a>

##### Summary

Calls the specified contract function.

##### Returns

The result of the contract function execution.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| functionName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the function to call. |
| functionInput | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | The input parameters for the function. |

### CallStateVariable\`\`1(stateVariableName,functionInput) `method` <a name="m-vbase-core-web3commitmentservice-web3commitmentservice-callstatevariable1-system-stringsystem-object%5B%5D-" id="m-vbase-core-web3commitmentservice-web3commitmentservice-callstatevariable1-system-stringsystem-object%5B%5D-" href="#m-vbase-core-web3commitmentservice-web3commitmentservice-callstatevariable1-system-stringsystem-object%5B%5D-"></a>

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

### FetchStateVariable\`\`1(functionData) `method` <a name="m-vbase-core-web3commitmentservice-web3commitmentservice-fetchstatevariable1-system-string-" id="m-vbase-core-web3commitmentservice-web3commitmentservice-fetchstatevariable1-system-string-" href="#m-vbase-core-web3commitmentservice-web3commitmentservice-fetchstatevariable1-system-string-"></a>

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

## Web3Receipt `type` <a name="t-vbase-core-web3commitmentservice-web3receipt" id="t-vbase-core-web3commitmentservice-web3receipt" href="#t-vbase-core-web3commitmentservice-web3receipt"></a>

##### Namespace

vBase.Core.Web3CommitmentService

##### Summary

WEB3-specific receipt.
Additionally to the base timestamp, it contains the transaction hash.

### #ctor() `constructor` <a name="m-vbase-core-web3commitmentservice-web3receipt-%23ctor-system-stringsystem-datetimeoffset-" id="m-vbase-core-web3commitmentservice-web3receipt-%23ctor-system-stringsystem-datetimeoffset-" href="#m-vbase-core-web3commitmentservice-web3receipt-%23ctor-system-stringsystem-datetimeoffset-"></a>

##### Summary

WEB3-specific receipt.
Additionally to the base timestamp, it contains the transaction hash.

##### Parameters

This constructor has no parameters.

## vBaseClient `type` <a name="t-vbase-core-vbaseclient" id="t-vbase-core-vbaseclient" href="#t-vbase-core-vbaseclient"></a>

##### Namespace

vBase.Core

##### Summary

Provides Python validityBase (vBase) access.

### AddNamedSet(name) `method` <a name="m-vbase-core-vbaseclient-addnamedset-system-string-" id="m-vbase-core-vbaseclient-addnamedset-system-string-" href="#m-vbase-core-vbaseclient-addnamedset-system-string-"></a>

##### Summary

Adds a new named set.

##### Returns

A task representing the asynchronous operation.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the set to add. |

### AddSet(setCid) `method` <a name="m-vbase-core-vbaseclient-addset-vbase-core-cid-" id="m-vbase-core-vbaseclient-addset-vbase-core-cid-" href="#m-vbase-core-vbaseclient-addset-vbase-core-cid-"></a>

##### Summary

Adds a new set.

##### Returns

A task representing the asynchronous operation.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [vBase.Core.Cid](#t-vbase-core-cid 'vBase.Core.Cid') | The identifier of the set. |

### AddSetObject(setCid,objectCid) `method` <a name="m-vbase-core-vbaseclient-addsetobject-vbase-core-cidvbase-core-cid-" id="m-vbase-core-vbaseclient-addsetobject-vbase-core-cidvbase-core-cid-" href="#m-vbase-core-vbaseclient-addsetobject-vbase-core-cidvbase-core-cid-"></a>

##### Summary

Adds a new object to the set.

##### Returns

Receipt of the operation.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [vBase.Core.Cid](#t-vbase-core-cid 'vBase.Core.Cid') | Set CID. |
| objectCid | [vBase.Core.Cid](#t-vbase-core-cid 'vBase.Core.Cid') | Object to add CID. |

### UserNamedSetExists(user,name) `method` <a name="m-vbase-core-vbaseclient-usernamedsetexists-system-stringsystem-string-" id="m-vbase-core-vbaseclient-usernamedsetexists-system-stringsystem-string-" href="#m-vbase-core-vbaseclient-usernamedsetexists-system-stringsystem-string-"></a>

##### Summary

Checks if the user has a set with the specified CID.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | User's identifier. |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the set. |

### VerifyUserObject(user,objectCid,timestamp) `method` <a name="m-vbase-core-vbaseclient-verifyuserobject-system-stringvbase-core-cidsystem-datetimeoffset-" id="m-vbase-core-vbaseclient-verifyuserobject-system-stringvbase-core-cidsystem-datetimeoffset-" href="#m-vbase-core-vbaseclient-verifyuserobject-system-stringvbase-core-cidsystem-datetimeoffset-"></a>

##### Summary

Verifies if the specified object was stamped at the given time by the given user.

##### Returns

True if the object was stamped; otherwise, false.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The object owner. |
| objectCid | [vBase.Core.Cid](#t-vbase-core-cid 'vBase.Core.Cid') | The object identifier. |
| timestamp | [System.DateTimeOffset](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.DateTimeOffset 'System.DateTimeOffset') | The time when the object was stamped. |

### VerifyUserSetObjects(user,setCid,userSetObjectsCidSum) `method` <a name="m-vbase-core-vbaseclient-verifyusersetobjects-system-stringvbase-core-cidsystem-numerics-biginteger-" id="m-vbase-core-vbaseclient-verifyusersetobjects-system-stringvbase-core-cidsystem-numerics-biginteger-" href="#m-vbase-core-vbaseclient-verifyusersetobjects-system-stringvbase-core-cidsystem-numerics-biginteger-"></a>

##### Summary

Verifies if the sum of all CIDs in the current dataset matches the sum of the dataset stored
in the commitment service.

##### Returns

A boolean indicating whether the sums match.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The set owner. |
| setCid | [vBase.Core.Cid](#t-vbase-core-cid 'vBase.Core.Cid') | The CID of the set. |
| userSetObjectsCidSum | [System.Numerics.BigInteger](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Numerics.BigInteger 'System.Numerics.BigInteger') | The sum of the CIDs of all objects belonging to the set. |

## vBaseDataset `type` <a name="t-vbase-core-dataset-vbasedataset" id="t-vbase-core-dataset-vbasedataset" href="#t-vbase-core-dataset-vbasedataset"></a>

##### Namespace

vBase.Core.Dataset

##### Summary

vBase dataset.

### #ctor(vBaseClient,name,recordTypeName) `constructor` <a name="m-vbase-core-dataset-vbasedataset-%23ctor-vbase-core-vbaseclientsystem-stringsystem-string-" id="m-vbase-core-dataset-vbasedataset-%23ctor-vbase-core-vbaseclientsystem-stringsystem-string-" href="#m-vbase-core-dataset-vbasedataset-%23ctor-vbase-core-vbaseclientsystem-stringsystem-string-"></a>

##### Summary

Creates a new instance of the vBase dataset.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| vBaseClient | [vBase.Core.vBaseClient](#t-vbase-core-vbaseclient 'vBase.Core.vBaseClient') | The vBaseClient used for communication with the vBase smart protocol. |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the dataset. |
| recordTypeName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The type of records to be stored in the dataset. |

##### Exceptions

| Name | Description |
| ---- | ----------- |
| [System.InvalidOperationException](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.InvalidOperationException 'System.InvalidOperationException') | Thrown if an unknown record type is provided. |

### #ctor(vBaseClient,json) `constructor` <a name="m-vbase-core-dataset-vbasedataset-%23ctor-vbase-core-vbaseclientsystem-string-" id="m-vbase-core-dataset-vbasedataset-%23ctor-vbase-core-vbaseclientsystem-string-" href="#m-vbase-core-dataset-vbasedataset-%23ctor-vbase-core-vbaseclientsystem-string-"></a>

##### Summary

Creates a new instance of the vBase dataset from JSON.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| vBaseClient | [vBase.Core.vBaseClient](#t-vbase-core-vbaseclient 'vBase.Core.vBaseClient') | The vBaseClient used for communication with the vBase smart protocol. |
| json | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The JSON representation of the dataset. JSON created by vBase SDKs for other platforms, such as Python or Java, is also supported. |

##### Exceptions

| Name | Description |
| ---- | ----------- |
| [vBase.Core.Exceptions.vBaseException](#t-vbase-core-exceptions-vbaseexception 'vBase.Core.Exceptions.vBaseException') | Thrown when the current CID generation algorithm does not match the one used to generate the provided JSON. |

### AddRecord(recordData) `method` <a name="m-vbase-core-dataset-vbasedataset-addrecord-system-object-" id="m-vbase-core-dataset-vbasedataset-addrecord-system-object-" href="#m-vbase-core-dataset-vbasedataset-addrecord-system-object-"></a>

##### Summary

Adds a record to the dataset.

##### Returns

A transaction receipt.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| recordData | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | The record to add. The record type must match the dataset type. |

### Initialize() `method` <a name="m-vbase-core-dataset-vbasedataset-initialize" id="m-vbase-core-dataset-vbasedataset-initialize" href="#m-vbase-core-dataset-vbasedataset-initialize"></a>

##### Summary

Creates a new dataset on the blockchain if it does not already exist.

##### Returns

A task representing the asynchronous operation.

##### Parameters

This method has no parameters.

### ToJson() `method` <a name="m-vbase-core-dataset-vbasedataset-tojson" id="m-vbase-core-dataset-vbasedataset-tojson" href="#m-vbase-core-dataset-vbasedataset-tojson"></a>

##### Summary

Serializes the dataset into a vBase-compatible JSON representation.

##### Returns

A JSON string.

##### Parameters

This method has no parameters.

### VerifyCommitments() `method` <a name="m-vbase-core-dataset-vbasedataset-verifycommitments" id="m-vbase-core-dataset-vbasedataset-verifycommitments" href="#m-vbase-core-dataset-vbasedataset-verifycommitments"></a>

##### Summary

Verifies if all records in the dataset were actually created on the Validity Base platform at the specified timestamps.

##### Returns

Validation result: A collection of errors. For each record that was not found on the Validity Base platform, 
or was added with a different timestamp, there will be a separate error item in the collection.
Additionally, an error item will be added if the dataset on the Validity Base platform contains more records 
than exist in this client-side dataset.

##### Parameters

This method has no parameters.

## vBaseException `type` <a name="t-vbase-core-exceptions-vbaseexception" id="t-vbase-core-exceptions-vbaseexception" href="#t-vbase-core-exceptions-vbaseexception"></a>

##### Namespace

vBase.Core.Exceptions

##### Summary

Base exception for all vBase exceptions.

## vBaseObject `type` <a name="t-vbase-core-dataset-vbaseobjects-vbaseobject" id="t-vbase-core-dataset-vbaseobjects-vbaseobject" href="#t-vbase-core-dataset-vbaseobjects-vbaseobject"></a>

##### Namespace

vBase.Core.Dataset.vBaseObjects

##### Summary

Base class for all vBase objects.
Each implementation should provide a constructor with one object parameter, and parameterless constructor.

### Data `property` <a name="p-vbase-core-dataset-vbaseobjects-vbaseobject-data" id="p-vbase-core-dataset-vbaseobjects-vbaseobject-data" href="#p-vbase-core-dataset-vbaseobjects-vbaseobject-data"></a>

##### Summary

The data stored in the object.

### StringData `property` <a name="p-vbase-core-dataset-vbaseobjects-vbaseobject-stringdata" id="p-vbase-core-dataset-vbaseobjects-vbaseobject-stringdata" href="#p-vbase-core-dataset-vbaseobjects-vbaseobject-stringdata"></a>

##### Summary

String representation of the data.

### GetCid() `method` <a name="m-vbase-core-dataset-vbaseobjects-vbaseobject-getcid" id="m-vbase-core-dataset-vbaseobjects-vbaseobject-getcid" href="#m-vbase-core-dataset-vbaseobjects-vbaseobject-getcid"></a>

##### Summary

Returns the [Cid](#t-vbase-core-cid 'vBase.Core.Cid') of the object.

##### Returns

CID (Content Identifiers) for the current object

##### Parameters

This method has no parameters.

### GetJson() `method` <a name="m-vbase-core-dataset-vbaseobjects-vbaseobject-getjson" id="m-vbase-core-dataset-vbaseobjects-vbaseobject-getjson" href="#m-vbase-core-dataset-vbaseobjects-vbaseobject-getjson"></a>

##### Summary

Serializes the object to a JSON value.

##### Returns



##### Parameters

This method has no parameters.

### InitFromJson(jData) `method` <a name="m-vbase-core-dataset-vbaseobjects-vbaseobject-initfromjson-newtonsoft-json-linq-jvalue-" id="m-vbase-core-dataset-vbaseobjects-vbaseobject-initfromjson-newtonsoft-json-linq-jvalue-" href="#m-vbase-core-dataset-vbaseobjects-vbaseobject-initfromjson-newtonsoft-json-linq-jvalue-"></a>

##### Summary

Initializes the object from a JSON object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| jData | [Newtonsoft.Json.Linq.JValue](#t-newtonsoft-json-linq-jvalue 'Newtonsoft.Json.Linq.JValue') | Json value. |

## vBaseStringObject `type` <a name="t-vbase-core-dataset-vbaseobjects-vbasestringobject" id="t-vbase-core-dataset-vbaseobjects-vbasestringobject" href="#t-vbase-core-dataset-vbaseobjects-vbasestringobject"></a>

##### Namespace

vBase.Core.Dataset.vBaseObjects

##### Summary

vBase Object representing a string data.

### vBaseObjectType `constants` <a name="f-vbase-core-dataset-vbaseobjects-vbasestringobject-vbaseobjecttype" id="f-vbase-core-dataset-vbaseobjects-vbasestringobject-vbaseobjecttype" href="#f-vbase-core-dataset-vbaseobjects-vbasestringobject-vbaseobjecttype"></a>

##### Summary

vBase string object name
for bidirectional compatibility with vBase Python SDK the V letter is capitalized
