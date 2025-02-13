# vBase.Core <a name="assembly" id="assembly" href="#assembly"></a>

## Contents

- [Cid](#tundefinedvbase-core-cid 'vBase.Core.Cid')
  - [#ctor()](#mundefinedvbase-core-cid-%23ctor-system-byte%5B%5D- 'vBase.Core.Cid.#ctor(System.Byte[])')
  - [#ctor(data)](#mundefinedvbase-core-cid-%23ctor-system-string- 'vBase.Core.Cid.#ctor(System.String)')
  - [Data](#pundefinedvbase-core-cid-data 'vBase.Core.Cid.Data')
  - [Empty](#pundefinedvbase-core-cid-empty 'vBase.Core.Cid.Empty')
  - [ToHex()](#mundefinedvbase-core-cid-tohex 'vBase.Core.Cid.ToHex')
- [Convert](#tundefinedvbase-core-utilities-convert 'vBase.Core.Utilities.Convert')
- [CryptoUtils](#tundefinedvbase-core-utilities-cryptoutils 'vBase.Core.Utilities.CryptoUtils')
  - [GetCid(value,size)](#mundefinedvbase-core-utilities-cryptoutils-getcid-system-numerics-bigintegerundefinedsystem-uint32- 'vBase.Core.Utilities.CryptoUtils.GetCid(System.Numerics.BigInteger,System.UInt32)')
  - [GetCid(value)](#mundefinedvbase-core-utilities-cryptoutils-getcid-system-string- 'vBase.Core.Utilities.CryptoUtils.GetCid(System.String)')
- [ForwarderCommitmentService](#tundefinedvbase-core-web3commitmentservice-forwardercommitmentservice 'vBase.Core.Web3CommitmentService.ForwarderCommitmentService')
- [ICommitmentService](#tundefinedvbase-core-icommitmentservice 'vBase.Core.ICommitmentService')
  - [AccountIdentifier](#pundefinedvbase-core-icommitmentservice-accountidentifier 'vBase.Core.ICommitmentService.AccountIdentifier')
  - [AddSet(setCid)](#mundefinedvbase-core-icommitmentservice-addset-vbase-core-cid- 'vBase.Core.ICommitmentService.AddSet(vBase.Core.Cid)')
  - [AddSetObject(setCid,objectCid)](#mundefinedvbase-core-icommitmentservice-addsetobject-vbase-core-cidundefinedvbase-core-cid- 'vBase.Core.ICommitmentService.AddSetObject(vBase.Core.Cid,vBase.Core.Cid)')
  - [UserSetExists(user,setCid)](#mundefinedvbase-core-icommitmentservice-usersetexists-system-stringundefinedvbase-core-cid- 'vBase.Core.ICommitmentService.UserSetExists(System.String,vBase.Core.Cid)')
  - [VerifyUserObject(user,objectCid,timestamp)](#mundefinedvbase-core-icommitmentservice-verifyuserobject-system-stringundefinedvbase-core-cid%2Csystem-datetimeoffset- 'vBase.Core.ICommitmentService.VerifyUserObject(System.String,vBase.Core.Cid,System.DateTimeOffset)')
  - [VerifyUserSetObjects(user,setCid,userSetObjectCidSum)](#mundefinedvbase-core-icommitmentservice-verifyusersetobjects-system-stringundefinedvbase-core-cid%2Csystem-numerics-biginteger- 'vBase.Core.ICommitmentService.VerifyUserSetObjects(System.String,vBase.Core.Cid,System.Numerics.BigInteger)')
- [JsonSerializationDto](#tundefinedvbase-core-dataset-jsonserializationdto 'vBase.Core.Dataset.JsonSerializationDto')
- [Receipt](#tundefinedvbase-core-receipt 'vBase.Core.Receipt')
  - [#ctor()](#mundefinedvbase-core-receipt-%23ctor-system-datetimeoffset- 'vBase.Core.Receipt.#ctor(System.DateTimeOffset)')
- [Utils](#tundefinedvbase-core-utilities-utils 'vBase.Core.Utilities.Utils')
- [VerificationResult](#tundefinedvbase-core-dataset-verificationresult 'vBase.Core.Dataset.VerificationResult')
  - [VerificationFindings](#pundefinedvbase-core-dataset-verificationresult-verificationfindings 'vBase.Core.Dataset.VerificationResult.VerificationFindings')
  - [VerificationPassed](#pundefinedvbase-core-dataset-verificationresult-verificationpassed 'vBase.Core.Dataset.VerificationResult.VerificationPassed')
  - [AddFinding(finding)](#mundefinedvbase-core-dataset-verificationresult-addfinding-system-string- 'vBase.Core.Dataset.VerificationResult.AddFinding(System.String)')
- [Web3CommitmentService](#tundefinedvbase-core-web3commitmentservice-web3commitmentservice 'vBase.Core.Web3CommitmentService.Web3CommitmentService')
  - [CallContractFunction(function,functionData)](#mundefinedvbase-core-web3commitmentservice-web3commitmentservice-callcontractfunction-nethereum-contracts-functionundefinedsystem-string- 'vBase.Core.Web3CommitmentService.Web3CommitmentService.CallContractFunction(Nethereum.Contracts.Function,System.String)')
  - [CallContractFunction(functionName,functionInput)](#mundefinedvbase-core-web3commitmentservice-web3commitmentservice-callcontractfunction-system-stringundefinedsystem-object%5B%5D- 'vBase.Core.Web3CommitmentService.Web3CommitmentService.CallContractFunction(System.String,System.Object[])')
  - [CallStateVariable\`\`1(stateVariableName,functionInput)](#mundefinedvbase-core-web3commitmentservice-web3commitmentservice-callstatevariableundefined%601-system-stringundefinedsystem-object%5B%5D- 'vBase.Core.Web3CommitmentService.Web3CommitmentService.CallStateVariable``1(System.String,System.Object[])')
  - [FetchStateVariable\`\`1(functionData)](#mundefinedvbase-core-web3commitmentservice-web3commitmentservice-fetchstatevariableundefined%601-system-string- 'vBase.Core.Web3CommitmentService.Web3CommitmentService.FetchStateVariable``1(System.String)')
- [Web3Receipt](#tundefinedvbase-core-web3commitmentservice-web3receipt 'vBase.Core.Web3CommitmentService.Web3Receipt')
  - [#ctor()](#mundefinedvbase-core-web3commitmentservice-web3receipt-%23ctor-system-stringundefinedsystem-datetimeoffset- 'vBase.Core.Web3CommitmentService.Web3Receipt.#ctor(System.String,System.DateTimeOffset)')
- [vBaseClient](#tundefinedvbase-core-vbaseclient 'vBase.Core.vBaseClient')
  - [AddNamedSet(name)](#mundefinedvbase-core-vbaseclient-addnamedset-system-string- 'vBase.Core.vBaseClient.AddNamedSet(System.String)')
  - [AddSet(setCid)](#mundefinedvbase-core-vbaseclient-addset-vbase-core-cid- 'vBase.Core.vBaseClient.AddSet(vBase.Core.Cid)')
  - [AddSetObject(setCid,objectCid)](#mundefinedvbase-core-vbaseclient-addsetobject-vbase-core-cidundefinedvbase-core-cid- 'vBase.Core.vBaseClient.AddSetObject(vBase.Core.Cid,vBase.Core.Cid)')
  - [UserNamedSetExists(user,name)](#mundefinedvbase-core-vbaseclient-usernamedsetexists-system-stringundefinedsystem-string- 'vBase.Core.vBaseClient.UserNamedSetExists(System.String,System.String)')
  - [VerifyUserObject(user,objectCid,timestamp)](#mundefinedvbase-core-vbaseclient-verifyuserobject-system-stringundefinedvbase-core-cid%2Csystem-datetimeoffset- 'vBase.Core.vBaseClient.VerifyUserObject(System.String,vBase.Core.Cid,System.DateTimeOffset)')
  - [VerifyUserSetObjects(user,setCid,userSetObjectsCidSum)](#mundefinedvbase-core-vbaseclient-verifyusersetobjects-system-stringundefinedvbase-core-cid%2Csystem-numerics-biginteger- 'vBase.Core.vBaseClient.VerifyUserSetObjects(System.String,vBase.Core.Cid,System.Numerics.BigInteger)')
- [vBaseDataset](#tundefinedvbase-core-dataset-vbasedataset 'vBase.Core.Dataset.vBaseDataset')
  - [#ctor(vBaseClient,name,recordTypeName)](#mundefinedvbase-core-dataset-vbasedataset-%23ctor-vbase-core-vbaseclientundefinedsystem-string%2Csystem-string- 'vBase.Core.Dataset.vBaseDataset.#ctor(vBase.Core.vBaseClient,System.String,System.String)')
  - [#ctor(vBaseClient,json)](#mundefinedvbase-core-dataset-vbasedataset-%23ctor-vbase-core-vbaseclientundefinedsystem-string- 'vBase.Core.Dataset.vBaseDataset.#ctor(vBase.Core.vBaseClient,System.String)')
  - [AddRecord(recordData)](#mundefinedvbase-core-dataset-vbasedataset-addrecord-system-object- 'vBase.Core.Dataset.vBaseDataset.AddRecord(System.Object)')
  - [Initialize()](#mundefinedvbase-core-dataset-vbasedataset-initialize 'vBase.Core.Dataset.vBaseDataset.Initialize')
  - [ToJson()](#mundefinedvbase-core-dataset-vbasedataset-tojson 'vBase.Core.Dataset.vBaseDataset.ToJson')
  - [VerifyCommitments()](#mundefinedvbase-core-dataset-vbasedataset-verifycommitments 'vBase.Core.Dataset.vBaseDataset.VerifyCommitments')
- [vBaseException](#tundefinedvbase-core-exceptions-vbaseexception 'vBase.Core.Exceptions.vBaseException')
- [vBaseObject](#tundefinedvbase-core-dataset-vbaseobjects-vbaseobject 'vBase.Core.Dataset.vBaseObjects.vBaseObject')
  - [Data](#pundefinedvbase-core-dataset-vbaseobjects-vbaseobject-data 'vBase.Core.Dataset.vBaseObjects.vBaseObject.Data')
  - [StringData](#pundefinedvbase-core-dataset-vbaseobjects-vbaseobject-stringdata 'vBase.Core.Dataset.vBaseObjects.vBaseObject.StringData')
  - [GetCid()](#mundefinedvbase-core-dataset-vbaseobjects-vbaseobject-getcid 'vBase.Core.Dataset.vBaseObjects.vBaseObject.GetCid')
  - [GetJson()](#mundefinedvbase-core-dataset-vbaseobjects-vbaseobject-getjson 'vBase.Core.Dataset.vBaseObjects.vBaseObject.GetJson')
  - [InitFromJson(jData)](#mundefinedvbase-core-dataset-vbaseobjects-vbaseobject-initfromjson-newtonsoft-json-linq-jvalue- 'vBase.Core.Dataset.vBaseObjects.vBaseObject.InitFromJson(Newtonsoft.Json.Linq.JValue)')
- [vBaseStringObject](#tundefinedvbase-core-dataset-vbaseobjects-vbasestringobject 'vBase.Core.Dataset.vBaseObjects.vBaseStringObject')
  - [vBaseObjectType](#fundefinedvbase-core-dataset-vbaseobjects-vbasestringobject-vbaseobjecttype 'vBase.Core.Dataset.vBaseObjects.vBaseStringObject.vBaseObjectType')

## Cid `type` <a name="tundefinedvbase-core-cid" id="tundefinedvbase-core-cid" href="#tundefinedvbase-core-cid"></a>

##### Namespace

vBase.Core

##### Summary

Content Identifier (CID) is used to uniquely identify objects.

### #ctor() `constructor` <a name="mundefinedvbase-core-cid-%23ctor-system-byte%5B%5D-" id="mundefinedvbase-core-cid-%23ctor-system-byte%5B%5D-" href="#mundefinedvbase-core-cid-%23ctor-system-byte%5B%5D-"></a>

##### Summary

Creates a new CID from the provided byte array.

##### Parameters

This constructor has no parameters.

### #ctor(data) `constructor` <a name="mundefinedvbase-core-cid-%23ctor-system-string-" id="mundefinedvbase-core-cid-%23ctor-system-string-" href="#mundefinedvbase-core-cid-%23ctor-system-string-"></a>

##### Summary

Creates a new CID from the provided hex string.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

### Data `property` <a name="pundefinedvbase-core-cid-data" id="pundefinedvbase-core-cid-data" href="#pundefinedvbase-core-cid-data"></a>

##### Summary

The data of the CID.

### Empty `property` <a name="pundefinedvbase-core-cid-empty" id="pundefinedvbase-core-cid-empty" href="#pundefinedvbase-core-cid-empty"></a>

##### Summary

Empty CID.

### ToHex() `method` <a name="mundefinedvbase-core-cid-tohex" id="mundefinedvbase-core-cid-tohex" href="#mundefinedvbase-core-cid-tohex"></a>

##### Summary

Returns the CID as a hex string.

##### Returns

Hex string.

##### Parameters

This method has no parameters.

## Convert `type` <a name="tundefinedvbase-core-utilities-convert" id="tundefinedvbase-core-utilities-convert" href="#tundefinedvbase-core-utilities-convert"></a>

##### Namespace

vBase.Core.Utilities

##### Summary

Provides conversion methods.

## CryptoUtils `type` <a name="tundefinedvbase-core-utilities-cryptoutils" id="tundefinedvbase-core-utilities-cryptoutils" href="#tundefinedvbase-core-utilities-cryptoutils"></a>

##### Namespace

vBase.Core.Utilities

##### Summary

Provides cryptographic utilities.

### GetCid(value,size) `method` <a name="mundefinedvbase-core-utilities-cryptoutils-getcid-system-numerics-bigintegerundefinedsystem-uint32-" id="mundefinedvbase-core-utilities-cryptoutils-getcid-system-numerics-bigintegerundefinedsystem-uint32-" href="#mundefinedvbase-core-utilities-cryptoutils-getcid-system-numerics-bigintegerundefinedsystem-uint32-"></a>

##### Summary

Get SHA3 256 hash of the input integer.

##### Returns

SHA3 256 hash object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | [System.Numerics.BigInteger](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Numerics.BigInteger 'System.Numerics.BigInteger') | Integer value. |
| size | [System.UInt32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.UInt32 'System.UInt32') | Size in bits. |

### GetCid(value) `method` <a name="mundefinedvbase-core-utilities-cryptoutils-getcid-system-string-" id="mundefinedvbase-core-utilities-cryptoutils-getcid-system-string-" href="#mundefinedvbase-core-utilities-cryptoutils-getcid-system-string-"></a>

##### Summary

Get SHA3 256 hash of the input string.

##### Returns

SHA3 256 hash object

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | input string |

## ForwarderCommitmentService `type` <a name="tundefinedvbase-core-web3commitmentservice-forwardercommitmentservice" id="tundefinedvbase-core-web3commitmentservice-forwardercommitmentservice" href="#tundefinedvbase-core-web3commitmentservice-forwardercommitmentservice"></a>

##### Namespace

vBase.Core.Web3CommitmentService

##### Summary

Provides access to the CommitmentService smart contract over vBase forwarder.

## ICommitmentService `type` <a name="tundefinedvbase-core-icommitmentservice" id="tundefinedvbase-core-icommitmentservice" href="#tundefinedvbase-core-icommitmentservice"></a>

##### Namespace

vBase.Core

##### Summary

Common interface for commitment services.

### AccountIdentifier `property` <a name="pundefinedvbase-core-icommitmentservice-accountidentifier" id="pundefinedvbase-core-icommitmentservice-accountidentifier" href="#pundefinedvbase-core-icommitmentservice-accountidentifier"></a>

##### Summary

Current user account identifier.

### AddSet(setCid) `method` <a name="mundefinedvbase-core-icommitmentservice-addset-vbase-core-cid-" id="mundefinedvbase-core-icommitmentservice-addset-vbase-core-cid-" href="#mundefinedvbase-core-icommitmentservice-addset-vbase-core-cid-"></a>

##### Summary

Records a set commitment.
If the set already exists, no action will be taken.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [vBase.Core.Cid](#tundefinedvbase-core-cid 'vBase.Core.Cid') | The CID identifying the set. |

### AddSetObject(setCid,objectCid) `method` <a name="mundefinedvbase-core-icommitmentservice-addsetobject-vbase-core-cidundefinedvbase-core-cid-" id="mundefinedvbase-core-icommitmentservice-addsetobject-vbase-core-cidundefinedvbase-core-cid-" href="#mundefinedvbase-core-icommitmentservice-addsetobject-vbase-core-cidundefinedvbase-core-cid-"></a>

##### Summary

Adds an object CID to the specified set.

##### Returns

Receipt of the operation.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [vBase.Core.Cid](#tundefinedvbase-core-cid 'vBase.Core.Cid') | CID of the set where the objectCid will be added. |
| objectCid | [vBase.Core.Cid](#tundefinedvbase-core-cid 'vBase.Core.Cid') | Object CID to add. |

### UserSetExists(user,setCid) `method` <a name="mundefinedvbase-core-icommitmentservice-usersetexists-system-stringundefinedvbase-core-cid-" id="mundefinedvbase-core-icommitmentservice-usersetexists-system-stringundefinedvbase-core-cid-" href="#mundefinedvbase-core-icommitmentservice-usersetexists-system-stringundefinedvbase-core-cid-"></a>

##### Summary

Checks if the specified object set exists.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Set owner. |
| setCid | [vBase.Core.Cid](#tundefinedvbase-core-cid 'vBase.Core.Cid') | CID of the set. |

### VerifyUserObject(user,objectCid,timestamp) `method` <a name="mundefinedvbase-core-icommitmentservice-verifyuserobject-system-stringundefinedvbase-core-cid%2Csystem-datetimeoffset-" id="mundefinedvbase-core-icommitmentservice-verifyuserobject-system-stringundefinedvbase-core-cid%2Csystem-datetimeoffset-" href="#mundefinedvbase-core-icommitmentservice-verifyuserobject-system-stringundefinedvbase-core-cid%2Csystem-datetimeoffset-"></a>

##### Summary

Checks whether the object with the specified CID was stamped at the given time.

##### Returns

True if the commitment has been verified successfully; False otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The address for the user who recorded the commitment. |
| objectCid | [vBase.Core.Cid](#tundefinedvbase-core-cid 'vBase.Core.Cid') | The CID identifying the object. |
| timestamp | [System.DateTimeOffset](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.DateTimeOffset 'System.DateTimeOffset') | The timestamp of the transaction. |

### VerifyUserSetObjects(user,setCid,userSetObjectCidSum) `method` <a name="mundefinedvbase-core-icommitmentservice-verifyusersetobjects-system-stringundefinedvbase-core-cid%2Csystem-numerics-biginteger-" id="mundefinedvbase-core-icommitmentservice-verifyusersetobjects-system-stringundefinedvbase-core-cid%2Csystem-numerics-biginteger-" href="#mundefinedvbase-core-icommitmentservice-verifyusersetobjects-system-stringundefinedvbase-core-cid%2Csystem-numerics-biginteger-"></a>

##### Summary

Verifies an object commitment previously recorded.

##### Returns

True if the commitment has been verified successfully; False otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The address for the user who recorded the commitment. |
| setCid | [vBase.Core.Cid](#tundefinedvbase-core-cid 'vBase.Core.Cid') | The CID for the set containing the object. |
| userSetObjectCidSum | [System.Numerics.BigInteger](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Numerics.BigInteger 'System.Numerics.BigInteger') | The sum of all object hashes for the user set. |

## JsonSerializationDto `type` <a name="tundefinedvbase-core-dataset-jsonserializationdto" id="tundefinedvbase-core-dataset-jsonserializationdto" href="#tundefinedvbase-core-dataset-jsonserializationdto"></a>

##### Namespace

vBase.Core.Dataset

##### Summary

DTO for dataset JSON serialization.
It's important to keep this class in sync with the Python and other SDKs.

## Receipt `type` <a name="tundefinedvbase-core-receipt" id="tundefinedvbase-core-receipt" href="#tundefinedvbase-core-receipt"></a>

##### Namespace

vBase.Core

##### Summary

Represents a transaction receipt.

### #ctor() `constructor` <a name="mundefinedvbase-core-receipt-%23ctor-system-datetimeoffset-" id="mundefinedvbase-core-receipt-%23ctor-system-datetimeoffset-" href="#mundefinedvbase-core-receipt-%23ctor-system-datetimeoffset-"></a>

##### Summary

Represents a transaction receipt.

##### Parameters

This constructor has no parameters.

## Utils `type` <a name="tundefinedvbase-core-utilities-utils" id="tundefinedvbase-core-utilities-utils" href="#tundefinedvbase-core-utilities-utils"></a>

##### Namespace

vBase.Core.Utilities

##### Summary

Provides utility methods.

## VerificationResult `type` <a name="tundefinedvbase-core-dataset-verificationresult" id="tundefinedvbase-core-dataset-verificationresult" href="#tundefinedvbase-core-dataset-verificationresult"></a>

##### Namespace

vBase.Core.Dataset

##### Summary

Contains a list of verification findings.
[VerifyCommitments](#mundefinedvbase-core-dataset-vbasedataset-verifycommitments 'vBase.Core.Dataset.vBaseDataset.VerifyCommitments')

### VerificationFindings `property` <a name="pundefinedvbase-core-dataset-verificationresult-verificationfindings" id="pundefinedvbase-core-dataset-verificationresult-verificationfindings" href="#pundefinedvbase-core-dataset-verificationresult-verificationfindings"></a>

##### Summary

A collection of verification findings.

### VerificationPassed `property` <a name="pundefinedvbase-core-dataset-verificationresult-verificationpassed" id="pundefinedvbase-core-dataset-verificationresult-verificationpassed" href="#pundefinedvbase-core-dataset-verificationresult-verificationpassed"></a>

##### Summary

Indicates whether the verification passed.

### AddFinding(finding) `method` <a name="mundefinedvbase-core-dataset-verificationresult-addfinding-system-string-" id="mundefinedvbase-core-dataset-verificationresult-addfinding-system-string-" href="#mundefinedvbase-core-dataset-verificationresult-addfinding-system-string-"></a>

##### Summary

Adds a finding to the verification result.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| finding | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

## Web3CommitmentService `type` <a name="tundefinedvbase-core-web3commitmentservice-web3commitmentservice" id="tundefinedvbase-core-web3commitmentservice-web3commitmentservice" href="#tundefinedvbase-core-web3commitmentservice-web3commitmentservice"></a>

##### Namespace

vBase.Core.Web3CommitmentService

##### Summary

Provides access to the CommitmentService smart contract.

### CallContractFunction(function,functionData) `method` <a name="mundefinedvbase-core-web3commitmentservice-web3commitmentservice-callcontractfunction-nethereum-contracts-functionundefinedsystem-string-" id="mundefinedvbase-core-web3commitmentservice-web3commitmentservice-callcontractfunction-nethereum-contracts-functionundefinedsystem-string-" href="#mundefinedvbase-core-web3commitmentservice-web3commitmentservice-callcontractfunction-nethereum-contracts-functionundefinedsystem-string-"></a>

##### Summary

Executes Smart Contract function.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| function | [Nethereum.Contracts.Function](#tundefinednethereum-contracts-function 'Nethereum.Contracts.Function') | Function descriptor. |
| functionData | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Data which will be passed as a function arguments. |

### CallContractFunction(functionName,functionInput) `method` <a name="mundefinedvbase-core-web3commitmentservice-web3commitmentservice-callcontractfunction-system-stringundefinedsystem-object%5B%5D-" id="mundefinedvbase-core-web3commitmentservice-web3commitmentservice-callcontractfunction-system-stringundefinedsystem-object%5B%5D-" href="#mundefinedvbase-core-web3commitmentservice-web3commitmentservice-callcontractfunction-system-stringundefinedsystem-object%5B%5D-"></a>

##### Summary

Calls the specified contract function.

##### Returns

The result of the contract function execution.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| functionName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the function to call. |
| functionInput | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | The input parameters for the function. |

### CallStateVariable\`\`1(stateVariableName,functionInput) `method` <a name="mundefinedvbase-core-web3commitmentservice-web3commitmentservice-callstatevariableundefined%601-system-stringundefinedsystem-object%5B%5D-" id="mundefinedvbase-core-web3commitmentservice-web3commitmentservice-callstatevariableundefined%601-system-stringundefinedsystem-object%5B%5D-" href="#mundefinedvbase-core-web3commitmentservice-web3commitmentservice-callstatevariableundefined%601-system-stringundefinedsystem-object%5B%5D-"></a>

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

### FetchStateVariable\`\`1(functionData) `method` <a name="mundefinedvbase-core-web3commitmentservice-web3commitmentservice-fetchstatevariableundefined%601-system-string-" id="mundefinedvbase-core-web3commitmentservice-web3commitmentservice-fetchstatevariableundefined%601-system-string-" href="#mundefinedvbase-core-web3commitmentservice-web3commitmentservice-fetchstatevariableundefined%601-system-string-"></a>

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

## Web3Receipt `type` <a name="tundefinedvbase-core-web3commitmentservice-web3receipt" id="tundefinedvbase-core-web3commitmentservice-web3receipt" href="#tundefinedvbase-core-web3commitmentservice-web3receipt"></a>

##### Namespace

vBase.Core.Web3CommitmentService

##### Summary

WEB3-specific receipt.
Additionally to the base timestamp, it contains the transaction hash.

### #ctor() `constructor` <a name="mundefinedvbase-core-web3commitmentservice-web3receipt-%23ctor-system-stringundefinedsystem-datetimeoffset-" id="mundefinedvbase-core-web3commitmentservice-web3receipt-%23ctor-system-stringundefinedsystem-datetimeoffset-" href="#mundefinedvbase-core-web3commitmentservice-web3receipt-%23ctor-system-stringundefinedsystem-datetimeoffset-"></a>

##### Summary

WEB3-specific receipt.
Additionally to the base timestamp, it contains the transaction hash.

##### Parameters

This constructor has no parameters.

## vBaseClient `type` <a name="tundefinedvbase-core-vbaseclient" id="tundefinedvbase-core-vbaseclient" href="#tundefinedvbase-core-vbaseclient"></a>

##### Namespace

vBase.Core

##### Summary

Provides Python validityBase (vBase) access.

### AddNamedSet(name) `method` <a name="mundefinedvbase-core-vbaseclient-addnamedset-system-string-" id="mundefinedvbase-core-vbaseclient-addnamedset-system-string-" href="#mundefinedvbase-core-vbaseclient-addnamedset-system-string-"></a>

##### Summary

Adds a new named set.

##### Returns

A task representing the asynchronous operation.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the set to add. |

### AddSet(setCid) `method` <a name="mundefinedvbase-core-vbaseclient-addset-vbase-core-cid-" id="mundefinedvbase-core-vbaseclient-addset-vbase-core-cid-" href="#mundefinedvbase-core-vbaseclient-addset-vbase-core-cid-"></a>

##### Summary

Adds a new set.

##### Returns

A task representing the asynchronous operation.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [vBase.Core.Cid](#tundefinedvbase-core-cid 'vBase.Core.Cid') | The identifier of the set. |

### AddSetObject(setCid,objectCid) `method` <a name="mundefinedvbase-core-vbaseclient-addsetobject-vbase-core-cidundefinedvbase-core-cid-" id="mundefinedvbase-core-vbaseclient-addsetobject-vbase-core-cidundefinedvbase-core-cid-" href="#mundefinedvbase-core-vbaseclient-addsetobject-vbase-core-cidundefinedvbase-core-cid-"></a>

##### Summary

Adds a new object to the set.

##### Returns

Receipt of the operation.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [vBase.Core.Cid](#tundefinedvbase-core-cid 'vBase.Core.Cid') | Set CID. |
| objectCid | [vBase.Core.Cid](#tundefinedvbase-core-cid 'vBase.Core.Cid') | Object to add CID. |

### UserNamedSetExists(user,name) `method` <a name="mundefinedvbase-core-vbaseclient-usernamedsetexists-system-stringundefinedsystem-string-" id="mundefinedvbase-core-vbaseclient-usernamedsetexists-system-stringundefinedsystem-string-" href="#mundefinedvbase-core-vbaseclient-usernamedsetexists-system-stringundefinedsystem-string-"></a>

##### Summary

Checks if the user has a set with the specified CID.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | User's identifier. |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the set. |

### VerifyUserObject(user,objectCid,timestamp) `method` <a name="mundefinedvbase-core-vbaseclient-verifyuserobject-system-stringundefinedvbase-core-cid%2Csystem-datetimeoffset-" id="mundefinedvbase-core-vbaseclient-verifyuserobject-system-stringundefinedvbase-core-cid%2Csystem-datetimeoffset-" href="#mundefinedvbase-core-vbaseclient-verifyuserobject-system-stringundefinedvbase-core-cid%2Csystem-datetimeoffset-"></a>

##### Summary

Verifies if the specified object was stamped at the given time by the given user.

##### Returns

True if the object was stamped; otherwise, false.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The object owner. |
| objectCid | [vBase.Core.Cid](#tundefinedvbase-core-cid 'vBase.Core.Cid') | The object identifier. |
| timestamp | [System.DateTimeOffset](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.DateTimeOffset 'System.DateTimeOffset') | The time when the object was stamped. |

### VerifyUserSetObjects(user,setCid,userSetObjectsCidSum) `method` <a name="mundefinedvbase-core-vbaseclient-verifyusersetobjects-system-stringundefinedvbase-core-cid%2Csystem-numerics-biginteger-" id="mundefinedvbase-core-vbaseclient-verifyusersetobjects-system-stringundefinedvbase-core-cid%2Csystem-numerics-biginteger-" href="#mundefinedvbase-core-vbaseclient-verifyusersetobjects-system-stringundefinedvbase-core-cid%2Csystem-numerics-biginteger-"></a>

##### Summary

Verifies if the sum of all CIDs in the current dataset matches the sum of the dataset stored
in the commitment service.

##### Returns

A boolean indicating whether the sums match.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The set owner. |
| setCid | [vBase.Core.Cid](#tundefinedvbase-core-cid 'vBase.Core.Cid') | The CID of the set. |
| userSetObjectsCidSum | [System.Numerics.BigInteger](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Numerics.BigInteger 'System.Numerics.BigInteger') | The sum of the CIDs of all objects belonging to the set. |

## vBaseDataset `type` <a name="tundefinedvbase-core-dataset-vbasedataset" id="tundefinedvbase-core-dataset-vbasedataset" href="#tundefinedvbase-core-dataset-vbasedataset"></a>

##### Namespace

vBase.Core.Dataset

##### Summary

vBase dataset.

### #ctor(vBaseClient,name,recordTypeName) `constructor` <a name="mundefinedvbase-core-dataset-vbasedataset-%23ctor-vbase-core-vbaseclientundefinedsystem-string%2Csystem-string-" id="mundefinedvbase-core-dataset-vbasedataset-%23ctor-vbase-core-vbaseclientundefinedsystem-string%2Csystem-string-" href="#mundefinedvbase-core-dataset-vbasedataset-%23ctor-vbase-core-vbaseclientundefinedsystem-string%2Csystem-string-"></a>

##### Summary

Creates a new instance of the vBase dataset.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| vBaseClient | [vBase.Core.vBaseClient](#tundefinedvbase-core-vbaseclient 'vBase.Core.vBaseClient') | The vBaseClient used for communication with the vBase smart protocol. |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the dataset. |
| recordTypeName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The type of records to be stored in the dataset. |

##### Exceptions

| Name | Description |
| ---- | ----------- |
| [System.InvalidOperationException](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.InvalidOperationException 'System.InvalidOperationException') | Thrown if an unknown record type is provided. |

### #ctor(vBaseClient,json) `constructor` <a name="mundefinedvbase-core-dataset-vbasedataset-%23ctor-vbase-core-vbaseclientundefinedsystem-string-" id="mundefinedvbase-core-dataset-vbasedataset-%23ctor-vbase-core-vbaseclientundefinedsystem-string-" href="#mundefinedvbase-core-dataset-vbasedataset-%23ctor-vbase-core-vbaseclientundefinedsystem-string-"></a>

##### Summary

Creates a new instance of the vBase dataset from JSON.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| vBaseClient | [vBase.Core.vBaseClient](#tundefinedvbase-core-vbaseclient 'vBase.Core.vBaseClient') | The vBaseClient used for communication with the vBase smart protocol. |
| json | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The JSON representation of the dataset. JSON created by vBase SDKs for other platforms, such as Python or Java, is also supported. |

##### Exceptions

| Name | Description |
| ---- | ----------- |
| [vBase.Core.Exceptions.vBaseException](#tundefinedvbase-core-exceptions-vbaseexception 'vBase.Core.Exceptions.vBaseException') | Thrown when the current CID generation algorithm does not match the one used to generate the provided JSON. |

### AddRecord(recordData) `method` <a name="mundefinedvbase-core-dataset-vbasedataset-addrecord-system-object-" id="mundefinedvbase-core-dataset-vbasedataset-addrecord-system-object-" href="#mundefinedvbase-core-dataset-vbasedataset-addrecord-system-object-"></a>

##### Summary

Adds a record to the dataset.

##### Returns

A transaction receipt.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| recordData | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | The record to add. The record type must match the dataset type. |

### Initialize() `method` <a name="mundefinedvbase-core-dataset-vbasedataset-initialize" id="mundefinedvbase-core-dataset-vbasedataset-initialize" href="#mundefinedvbase-core-dataset-vbasedataset-initialize"></a>

##### Summary

Creates a new dataset on the blockchain if it does not already exist.

##### Returns

A task representing the asynchronous operation.

##### Parameters

This method has no parameters.

### ToJson() `method` <a name="mundefinedvbase-core-dataset-vbasedataset-tojson" id="mundefinedvbase-core-dataset-vbasedataset-tojson" href="#mundefinedvbase-core-dataset-vbasedataset-tojson"></a>

##### Summary

Serializes the dataset into a vBase-compatible JSON representation.

##### Returns

A JSON string.

##### Parameters

This method has no parameters.

### VerifyCommitments() `method` <a name="mundefinedvbase-core-dataset-vbasedataset-verifycommitments" id="mundefinedvbase-core-dataset-vbasedataset-verifycommitments" href="#mundefinedvbase-core-dataset-vbasedataset-verifycommitments"></a>

##### Summary

Verifies if all records in the dataset were actually created on the Validity Base platform at the specified timestamps.

##### Returns

Validation result: A collection of errors. For each record that was not found on the Validity Base platform, 
or was added with a different timestamp, there will be a separate error item in the collection.
Additionally, an error item will be added if the dataset on the Validity Base platform contains more records 
than exist in this client-side dataset.

##### Parameters

This method has no parameters.

## vBaseException `type` <a name="tundefinedvbase-core-exceptions-vbaseexception" id="tundefinedvbase-core-exceptions-vbaseexception" href="#tundefinedvbase-core-exceptions-vbaseexception"></a>

##### Namespace

vBase.Core.Exceptions

##### Summary

Base exception for all vBase exceptions.

## vBaseObject `type` <a name="tundefinedvbase-core-dataset-vbaseobjects-vbaseobject" id="tundefinedvbase-core-dataset-vbaseobjects-vbaseobject" href="#tundefinedvbase-core-dataset-vbaseobjects-vbaseobject"></a>

##### Namespace

vBase.Core.Dataset.vBaseObjects

##### Summary

Base class for all vBase objects.
Each implementation should provide a constructor with one object parameter, and parameterless constructor.

### Data `property` <a name="pundefinedvbase-core-dataset-vbaseobjects-vbaseobject-data" id="pundefinedvbase-core-dataset-vbaseobjects-vbaseobject-data" href="#pundefinedvbase-core-dataset-vbaseobjects-vbaseobject-data"></a>

##### Summary

The data stored in the object.

### StringData `property` <a name="pundefinedvbase-core-dataset-vbaseobjects-vbaseobject-stringdata" id="pundefinedvbase-core-dataset-vbaseobjects-vbaseobject-stringdata" href="#pundefinedvbase-core-dataset-vbaseobjects-vbaseobject-stringdata"></a>

##### Summary

String representation of the data.

### GetCid() `method` <a name="mundefinedvbase-core-dataset-vbaseobjects-vbaseobject-getcid" id="mundefinedvbase-core-dataset-vbaseobjects-vbaseobject-getcid" href="#mundefinedvbase-core-dataset-vbaseobjects-vbaseobject-getcid"></a>

##### Summary

Returns the [Cid](#tundefinedvbase-core-cid 'vBase.Core.Cid') of the object.

##### Returns

CID (Content Identifiers) for the current object

##### Parameters

This method has no parameters.

### GetJson() `method` <a name="mundefinedvbase-core-dataset-vbaseobjects-vbaseobject-getjson" id="mundefinedvbase-core-dataset-vbaseobjects-vbaseobject-getjson" href="#mundefinedvbase-core-dataset-vbaseobjects-vbaseobject-getjson"></a>

##### Summary

Serializes the object to a JSON value.

##### Returns



##### Parameters

This method has no parameters.

### InitFromJson(jData) `method` <a name="mundefinedvbase-core-dataset-vbaseobjects-vbaseobject-initfromjson-newtonsoft-json-linq-jvalue-" id="mundefinedvbase-core-dataset-vbaseobjects-vbaseobject-initfromjson-newtonsoft-json-linq-jvalue-" href="#mundefinedvbase-core-dataset-vbaseobjects-vbaseobject-initfromjson-newtonsoft-json-linq-jvalue-"></a>

##### Summary

Initializes the object from a JSON object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| jData | [Newtonsoft.Json.Linq.JValue](#tundefinednewtonsoft-json-linq-jvalue 'Newtonsoft.Json.Linq.JValue') | Json value. |

## vBaseStringObject `type` <a name="tundefinedvbase-core-dataset-vbaseobjects-vbasestringobject" id="tundefinedvbase-core-dataset-vbaseobjects-vbasestringobject" href="#tundefinedvbase-core-dataset-vbaseobjects-vbasestringobject"></a>

##### Namespace

vBase.Core.Dataset.vBaseObjects

##### Summary

vBase Object representing a string data.

### vBaseObjectType `constants` <a name="fundefinedvbase-core-dataset-vbaseobjects-vbasestringobject-vbaseobjecttype" id="fundefinedvbase-core-dataset-vbaseobjects-vbasestringobject-vbaseobjecttype" href="#fundefinedvbase-core-dataset-vbaseobjects-vbasestringobject-vbaseobjecttype"></a>

##### Summary

vBase string object name
for bidirectional compatibility with vBase Python SDK the V letter is capitalized
