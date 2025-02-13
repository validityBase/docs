# vBase.Core <a name="assembly" id="assembly" href="#assembly"></a>

## Contents

- [Cid](#tvbasecorecid 'vBase.Core.Cid')
  - [#ctor()](#mvbasecorecidctorsystembyte 'vBase.Core.Cid.#ctor(System.Byte[])')
  - [#ctor(data)](#mvbasecorecidctorsystemstring 'vBase.Core.Cid.#ctor(System.String)')
  - [Data](#pvbasecoreciddata 'vBase.Core.Cid.Data')
  - [Empty](#pvbasecorecidempty 'vBase.Core.Cid.Empty')
  - [ToHex()](#mvbasecorecidtohex 'vBase.Core.Cid.ToHex')
- [Convert](#tvbasecoreutilitiesconvert 'vBase.Core.Utilities.Convert')
- [CryptoUtils](#tvbasecoreutilitiescryptoutils 'vBase.Core.Utilities.CryptoUtils')
  - [GetCid(value,size)](#mvbasecoreutilitiescryptoutilsgetcidsystemnumericsbigintegersystemuint32 'vBase.Core.Utilities.CryptoUtils.GetCid(System.Numerics.BigInteger,System.UInt32)')
  - [GetCid(value)](#mvbasecoreutilitiescryptoutilsgetcidsystemstring 'vBase.Core.Utilities.CryptoUtils.GetCid(System.String)')
- [ForwarderCommitmentService](#tvbasecoreweb3commitmentserviceforwardercommitmentservice 'vBase.Core.Web3CommitmentService.ForwarderCommitmentService')
- [ICommitmentService](#tvbasecoreicommitmentservice 'vBase.Core.ICommitmentService')
  - [AccountIdentifier](#pvbasecoreicommitmentserviceaccountidentifier 'vBase.Core.ICommitmentService.AccountIdentifier')
  - [AddSet(setCid)](#mvbasecoreicommitmentserviceaddsetvbasecorecid 'vBase.Core.ICommitmentService.AddSet(vBase.Core.Cid)')
  - [AddSetObject(setCid,objectCid)](#mvbasecoreicommitmentserviceaddsetobjectvbasecorecidvbasecorecid 'vBase.Core.ICommitmentService.AddSetObject(vBase.Core.Cid,vBase.Core.Cid)')
  - [UserSetExists(user,setCid)](#mvbasecoreicommitmentserviceusersetexistssystemstringvbasecorecid 'vBase.Core.ICommitmentService.UserSetExists(System.String,vBase.Core.Cid)')
  - [VerifyUserObject(user,objectCid,timestamp)](#mvbasecoreicommitmentserviceverifyuserobjectsystemstringvbasecorecidsystemdatetimeoffset 'vBase.Core.ICommitmentService.VerifyUserObject(System.String,vBase.Core.Cid,System.DateTimeOffset)')
  - [VerifyUserSetObjects(user,setCid,userSetObjectCidSum)](#mvbasecoreicommitmentserviceverifyusersetobjectssystemstringvbasecorecidsystemnumericsbiginteger 'vBase.Core.ICommitmentService.VerifyUserSetObjects(System.String,vBase.Core.Cid,System.Numerics.BigInteger)')
- [JsonSerializationDto](#tvbasecoredatasetjsonserializationdto 'vBase.Core.Dataset.JsonSerializationDto')
- [Receipt](#tvbasecorereceipt 'vBase.Core.Receipt')
  - [#ctor()](#mvbasecorereceiptctorsystemdatetimeoffset 'vBase.Core.Receipt.#ctor(System.DateTimeOffset)')
- [Utils](#tvbasecoreutilitiesutils 'vBase.Core.Utilities.Utils')
- [VerificationResult](#tvbasecoredatasetverificationresult 'vBase.Core.Dataset.VerificationResult')
  - [VerificationFindings](#pvbasecoredatasetverificationresultverificationfindings 'vBase.Core.Dataset.VerificationResult.VerificationFindings')
  - [VerificationPassed](#pvbasecoredatasetverificationresultverificationpassed 'vBase.Core.Dataset.VerificationResult.VerificationPassed')
  - [AddFinding(finding)](#mvbasecoredatasetverificationresultaddfindingsystemstring 'vBase.Core.Dataset.VerificationResult.AddFinding(System.String)')
- [Web3CommitmentService](#tvbasecoreweb3commitmentserviceweb3commitmentservice 'vBase.Core.Web3CommitmentService.Web3CommitmentService')
  - [CallContractFunction(function,functionData)](#mvbasecoreweb3commitmentserviceweb3commitmentservicecallcontractfunctionnethereumcontractsfunctionsystemstring 'vBase.Core.Web3CommitmentService.Web3CommitmentService.CallContractFunction(Nethereum.Contracts.Function,System.String)')
  - [CallContractFunction(functionName,functionInput)](#mvbasecoreweb3commitmentserviceweb3commitmentservicecallcontractfunctionsystemstringsystemobject 'vBase.Core.Web3CommitmentService.Web3CommitmentService.CallContractFunction(System.String,System.Object[])')
  - [CallStateVariable\`\`1(stateVariableName,functionInput)](#mvbasecoreweb3commitmentserviceweb3commitmentservicecallstatevariable1systemstringsystemobject 'vBase.Core.Web3CommitmentService.Web3CommitmentService.CallStateVariable``1(System.String,System.Object[])')
  - [FetchStateVariable\`\`1(functionData)](#mvbasecoreweb3commitmentserviceweb3commitmentservicefetchstatevariable1systemstring 'vBase.Core.Web3CommitmentService.Web3CommitmentService.FetchStateVariable``1(System.String)')
- [Web3Receipt](#tvbasecoreweb3commitmentserviceweb3receipt 'vBase.Core.Web3CommitmentService.Web3Receipt')
  - [#ctor()](#mvbasecoreweb3commitmentserviceweb3receiptctorsystemstringsystemdatetimeoffset 'vBase.Core.Web3CommitmentService.Web3Receipt.#ctor(System.String,System.DateTimeOffset)')
- [vBaseClient](#tvbasecorevbaseclient 'vBase.Core.vBaseClient')
  - [AddNamedSet(name)](#mvbasecorevbaseclientaddnamedsetsystemstring 'vBase.Core.vBaseClient.AddNamedSet(System.String)')
  - [AddSet(setCid)](#mvbasecorevbaseclientaddsetvbasecorecid 'vBase.Core.vBaseClient.AddSet(vBase.Core.Cid)')
  - [AddSetObject(setCid,objectCid)](#mvbasecorevbaseclientaddsetobjectvbasecorecidvbasecorecid 'vBase.Core.vBaseClient.AddSetObject(vBase.Core.Cid,vBase.Core.Cid)')
  - [UserNamedSetExists(user,name)](#mvbasecorevbaseclientusernamedsetexistssystemstringsystemstring 'vBase.Core.vBaseClient.UserNamedSetExists(System.String,System.String)')
  - [VerifyUserObject(user,objectCid,timestamp)](#mvbasecorevbaseclientverifyuserobjectsystemstringvbasecorecidsystemdatetimeoffset 'vBase.Core.vBaseClient.VerifyUserObject(System.String,vBase.Core.Cid,System.DateTimeOffset)')
  - [VerifyUserSetObjects(user,setCid,userSetObjectsCidSum)](#mvbasecorevbaseclientverifyusersetobjectssystemstringvbasecorecidsystemnumericsbiginteger 'vBase.Core.vBaseClient.VerifyUserSetObjects(System.String,vBase.Core.Cid,System.Numerics.BigInteger)')
- [vBaseDataset](#tvbasecoredatasetvbasedataset 'vBase.Core.Dataset.vBaseDataset')
  - [#ctor(vBaseClient,name,recordTypeName)](#mvbasecoredatasetvbasedatasetctorvbasecorevbaseclientsystemstringsystemstring 'vBase.Core.Dataset.vBaseDataset.#ctor(vBase.Core.vBaseClient,System.String,System.String)')
  - [#ctor(vBaseClient,json)](#mvbasecoredatasetvbasedatasetctorvbasecorevbaseclientsystemstring 'vBase.Core.Dataset.vBaseDataset.#ctor(vBase.Core.vBaseClient,System.String)')
  - [AddRecord(recordData)](#mvbasecoredatasetvbasedatasetaddrecordsystemobject 'vBase.Core.Dataset.vBaseDataset.AddRecord(System.Object)')
  - [Initialize()](#mvbasecoredatasetvbasedatasetinitialize 'vBase.Core.Dataset.vBaseDataset.Initialize')
  - [ToJson()](#mvbasecoredatasetvbasedatasettojson 'vBase.Core.Dataset.vBaseDataset.ToJson')
  - [VerifyCommitments()](#mvbasecoredatasetvbasedatasetverifycommitments 'vBase.Core.Dataset.vBaseDataset.VerifyCommitments')
- [vBaseException](#tvbasecoreexceptionsvbaseexception 'vBase.Core.Exceptions.vBaseException')
- [vBaseObject](#tvbasecoredatasetvbaseobjectsvbaseobject 'vBase.Core.Dataset.vBaseObjects.vBaseObject')
  - [Data](#pvbasecoredatasetvbaseobjectsvbaseobjectdata 'vBase.Core.Dataset.vBaseObjects.vBaseObject.Data')
  - [StringData](#pvbasecoredatasetvbaseobjectsvbaseobjectstringdata 'vBase.Core.Dataset.vBaseObjects.vBaseObject.StringData')
  - [GetCid()](#mvbasecoredatasetvbaseobjectsvbaseobjectgetcid 'vBase.Core.Dataset.vBaseObjects.vBaseObject.GetCid')
  - [GetJson()](#mvbasecoredatasetvbaseobjectsvbaseobjectgetjson 'vBase.Core.Dataset.vBaseObjects.vBaseObject.GetJson')
  - [InitFromJson(jData)](#mvbasecoredatasetvbaseobjectsvbaseobjectinitfromjsonnewtonsoftjsonlinqjvalue 'vBase.Core.Dataset.vBaseObjects.vBaseObject.InitFromJson(Newtonsoft.Json.Linq.JValue)')
- [vBaseStringObject](#tvbasecoredatasetvbaseobjectsvbasestringobject 'vBase.Core.Dataset.vBaseObjects.vBaseStringObject')
  - [vBaseObjectType](#fvbasecoredatasetvbaseobjectsvbasestringobjectvbaseobjecttype 'vBase.Core.Dataset.vBaseObjects.vBaseStringObject.vBaseObjectType')

## Cid `type` <a name="tvbasecorecid" id="tvbasecorecid" href="#tvbasecorecid"></a>

##### Namespace

vBase.Core

##### Summary

Content Identifier (CID) is used to uniquely identify objects.

### #ctor() `constructor` <a name="mvbasecorecidctorsystembyte" id="mvbasecorecidctorsystembyte" href="#mvbasecorecidctorsystembyte"></a>

##### Summary

Creates a new CID from the provided byte array.

##### Parameters

This constructor has no parameters.

### #ctor(data) `constructor` <a name="mvbasecorecidctorsystemstring" id="mvbasecorecidctorsystemstring" href="#mvbasecorecidctorsystemstring"></a>

##### Summary

Creates a new CID from the provided hex string.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

### Data `property` <a name="pvbasecoreciddata" id="pvbasecoreciddata" href="#pvbasecoreciddata"></a>

##### Summary

The data of the CID.

### Empty `property` <a name="pvbasecorecidempty" id="pvbasecorecidempty" href="#pvbasecorecidempty"></a>

##### Summary

Empty CID.

### ToHex() `method` <a name="mvbasecorecidtohex" id="mvbasecorecidtohex" href="#mvbasecorecidtohex"></a>

##### Summary

Returns the CID as a hex string.

##### Returns

Hex string.

##### Parameters

This method has no parameters.

## Convert `type` <a name="tvbasecoreutilitiesconvert" id="tvbasecoreutilitiesconvert" href="#tvbasecoreutilitiesconvert"></a>

##### Namespace

vBase.Core.Utilities

##### Summary

Provides conversion methods.

## CryptoUtils `type` <a name="tvbasecoreutilitiescryptoutils" id="tvbasecoreutilitiescryptoutils" href="#tvbasecoreutilitiescryptoutils"></a>

##### Namespace

vBase.Core.Utilities

##### Summary

Provides cryptographic utilities.

### GetCid(value,size) `method` <a name="mvbasecoreutilitiescryptoutilsgetcidsystemnumericsbigintegersystemuint32" id="mvbasecoreutilitiescryptoutilsgetcidsystemnumericsbigintegersystemuint32" href="#mvbasecoreutilitiescryptoutilsgetcidsystemnumericsbigintegersystemuint32"></a>

##### Summary

Get SHA3 256 hash of the input integer.

##### Returns

SHA3 256 hash object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | [System.Numerics.BigInteger](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Numerics.BigInteger 'System.Numerics.BigInteger') | Integer value. |
| size | [System.UInt32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.UInt32 'System.UInt32') | Size in bits. |

### GetCid(value) `method` <a name="mvbasecoreutilitiescryptoutilsgetcidsystemstring" id="mvbasecoreutilitiescryptoutilsgetcidsystemstring" href="#mvbasecoreutilitiescryptoutilsgetcidsystemstring"></a>

##### Summary

Get SHA3 256 hash of the input string.

##### Returns

SHA3 256 hash object

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | input string |

## ForwarderCommitmentService `type` <a name="tvbasecoreweb3commitmentserviceforwardercommitmentservice" id="tvbasecoreweb3commitmentserviceforwardercommitmentservice" href="#tvbasecoreweb3commitmentserviceforwardercommitmentservice"></a>

##### Namespace

vBase.Core.Web3CommitmentService

##### Summary

Provides access to the CommitmentService smart contract over vBase forwarder.

## ICommitmentService `type` <a name="tvbasecoreicommitmentservice" id="tvbasecoreicommitmentservice" href="#tvbasecoreicommitmentservice"></a>

##### Namespace

vBase.Core

##### Summary

Common interface for commitment services.

### AccountIdentifier `property` <a name="pvbasecoreicommitmentserviceaccountidentifier" id="pvbasecoreicommitmentserviceaccountidentifier" href="#pvbasecoreicommitmentserviceaccountidentifier"></a>

##### Summary

Current user account identifier.

### AddSet(setCid) `method` <a name="mvbasecoreicommitmentserviceaddsetvbasecorecid" id="mvbasecoreicommitmentserviceaddsetvbasecorecid" href="#mvbasecoreicommitmentserviceaddsetvbasecorecid"></a>

##### Summary

Records a set commitment.
If the set already exists, no action will be taken.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [vBase.Core.Cid](#tvbasecorecid 'vBase.Core.Cid') | The CID identifying the set. |

### AddSetObject(setCid,objectCid) `method` <a name="mvbasecoreicommitmentserviceaddsetobjectvbasecorecidvbasecorecid" id="mvbasecoreicommitmentserviceaddsetobjectvbasecorecidvbasecorecid" href="#mvbasecoreicommitmentserviceaddsetobjectvbasecorecidvbasecorecid"></a>

##### Summary

Adds an object CID to the specified set.

##### Returns

Receipt of the operation.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [vBase.Core.Cid](#tvbasecorecid 'vBase.Core.Cid') | CID of the set where the objectCid will be added. |
| objectCid | [vBase.Core.Cid](#tvbasecorecid 'vBase.Core.Cid') | Object CID to add. |

### UserSetExists(user,setCid) `method` <a name="mvbasecoreicommitmentserviceusersetexistssystemstringvbasecorecid" id="mvbasecoreicommitmentserviceusersetexistssystemstringvbasecorecid" href="#mvbasecoreicommitmentserviceusersetexistssystemstringvbasecorecid"></a>

##### Summary

Checks if the specified object set exists.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Set owner. |
| setCid | [vBase.Core.Cid](#tvbasecorecid 'vBase.Core.Cid') | CID of the set. |

### VerifyUserObject(user,objectCid,timestamp) `method` <a name="mvbasecoreicommitmentserviceverifyuserobjectsystemstringvbasecorecidsystemdatetimeoffset" id="mvbasecoreicommitmentserviceverifyuserobjectsystemstringvbasecorecidsystemdatetimeoffset" href="#mvbasecoreicommitmentserviceverifyuserobjectsystemstringvbasecorecidsystemdatetimeoffset"></a>

##### Summary

Checks whether the object with the specified CID was stamped at the given time.

##### Returns

True if the commitment has been verified successfully; False otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The address for the user who recorded the commitment. |
| objectCid | [vBase.Core.Cid](#tvbasecorecid 'vBase.Core.Cid') | The CID identifying the object. |
| timestamp | [System.DateTimeOffset](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.DateTimeOffset 'System.DateTimeOffset') | The timestamp of the transaction. |

### VerifyUserSetObjects(user,setCid,userSetObjectCidSum) `method` <a name="mvbasecoreicommitmentserviceverifyusersetobjectssystemstringvbasecorecidsystemnumericsbiginteger" id="mvbasecoreicommitmentserviceverifyusersetobjectssystemstringvbasecorecidsystemnumericsbiginteger" href="#mvbasecoreicommitmentserviceverifyusersetobjectssystemstringvbasecorecidsystemnumericsbiginteger"></a>

##### Summary

Verifies an object commitment previously recorded.

##### Returns

True if the commitment has been verified successfully; False otherwise.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The address for the user who recorded the commitment. |
| setCid | [vBase.Core.Cid](#tvbasecorecid 'vBase.Core.Cid') | The CID for the set containing the object. |
| userSetObjectCidSum | [System.Numerics.BigInteger](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Numerics.BigInteger 'System.Numerics.BigInteger') | The sum of all object hashes for the user set. |

## JsonSerializationDto `type` <a name="tvbasecoredatasetjsonserializationdto" id="tvbasecoredatasetjsonserializationdto" href="#tvbasecoredatasetjsonserializationdto"></a>

##### Namespace

vBase.Core.Dataset

##### Summary

DTO for dataset JSON serialization.
It's important to keep this class in sync with the Python and other SDKs.

## Receipt `type` <a name="tvbasecorereceipt" id="tvbasecorereceipt" href="#tvbasecorereceipt"></a>

##### Namespace

vBase.Core

##### Summary

Represents a transaction receipt.

### #ctor() `constructor` <a name="mvbasecorereceiptctorsystemdatetimeoffset" id="mvbasecorereceiptctorsystemdatetimeoffset" href="#mvbasecorereceiptctorsystemdatetimeoffset"></a>

##### Summary

Represents a transaction receipt.

##### Parameters

This constructor has no parameters.

## Utils `type` <a name="tvbasecoreutilitiesutils" id="tvbasecoreutilitiesutils" href="#tvbasecoreutilitiesutils"></a>

##### Namespace

vBase.Core.Utilities

##### Summary

Provides utility methods.

## VerificationResult `type` <a name="tvbasecoredatasetverificationresult" id="tvbasecoredatasetverificationresult" href="#tvbasecoredatasetverificationresult"></a>

##### Namespace

vBase.Core.Dataset

##### Summary

Contains a list of verification findings.
[VerifyCommitments](#mvbasecoredatasetvbasedatasetverifycommitments 'vBase.Core.Dataset.vBaseDataset.VerifyCommitments')

### VerificationFindings `property` <a name="pvbasecoredatasetverificationresultverificationfindings" id="pvbasecoredatasetverificationresultverificationfindings" href="#pvbasecoredatasetverificationresultverificationfindings"></a>

##### Summary

A collection of verification findings.

### VerificationPassed `property` <a name="pvbasecoredatasetverificationresultverificationpassed" id="pvbasecoredatasetverificationresultverificationpassed" href="#pvbasecoredatasetverificationresultverificationpassed"></a>

##### Summary

Indicates whether the verification passed.

### AddFinding(finding) `method` <a name="mvbasecoredatasetverificationresultaddfindingsystemstring" id="mvbasecoredatasetverificationresultaddfindingsystemstring" href="#mvbasecoredatasetverificationresultaddfindingsystemstring"></a>

##### Summary

Adds a finding to the verification result.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| finding | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') |  |

## Web3CommitmentService `type` <a name="tvbasecoreweb3commitmentserviceweb3commitmentservice" id="tvbasecoreweb3commitmentserviceweb3commitmentservice" href="#tvbasecoreweb3commitmentserviceweb3commitmentservice"></a>

##### Namespace

vBase.Core.Web3CommitmentService

##### Summary

Provides access to the CommitmentService smart contract.

### CallContractFunction(function,functionData) `method` <a name="mvbasecoreweb3commitmentserviceweb3commitmentservicecallcontractfunctionnethereumcontractsfunctionsystemstring" id="mvbasecoreweb3commitmentserviceweb3commitmentservicecallcontractfunctionnethereumcontractsfunctionsystemstring" href="#mvbasecoreweb3commitmentserviceweb3commitmentservicecallcontractfunctionnethereumcontractsfunctionsystemstring"></a>

##### Summary

Executes Smart Contract function.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| function | [Nethereum.Contracts.Function](#tnethereumcontractsfunction 'Nethereum.Contracts.Function') | Function descriptor. |
| functionData | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Data which will be passed as a function arguments. |

### CallContractFunction(functionName,functionInput) `method` <a name="mvbasecoreweb3commitmentserviceweb3commitmentservicecallcontractfunctionsystemstringsystemobject" id="mvbasecoreweb3commitmentserviceweb3commitmentservicecallcontractfunctionsystemstringsystemobject" href="#mvbasecoreweb3commitmentserviceweb3commitmentservicecallcontractfunctionsystemstringsystemobject"></a>

##### Summary

Calls the specified contract function.

##### Returns

The result of the contract function execution.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| functionName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the function to call. |
| functionInput | [System.Object[]](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object[] 'System.Object[]') | The input parameters for the function. |

### CallStateVariable\`\`1(stateVariableName,functionInput) `method` <a name="mvbasecoreweb3commitmentserviceweb3commitmentservicecallstatevariable1systemstringsystemobject" id="mvbasecoreweb3commitmentserviceweb3commitmentservicecallstatevariable1systemstringsystemobject" href="#mvbasecoreweb3commitmentserviceweb3commitmentservicecallstatevariable1systemstringsystemobject"></a>

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

### FetchStateVariable\`\`1(functionData) `method` <a name="mvbasecoreweb3commitmentserviceweb3commitmentservicefetchstatevariable1systemstring" id="mvbasecoreweb3commitmentserviceweb3commitmentservicefetchstatevariable1systemstring" href="#mvbasecoreweb3commitmentserviceweb3commitmentservicefetchstatevariable1systemstring"></a>

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

## Web3Receipt `type` <a name="tvbasecoreweb3commitmentserviceweb3receipt" id="tvbasecoreweb3commitmentserviceweb3receipt" href="#tvbasecoreweb3commitmentserviceweb3receipt"></a>

##### Namespace

vBase.Core.Web3CommitmentService

##### Summary

WEB3-specific receipt.
Additionally to the base timestamp, it contains the transaction hash.

### #ctor() `constructor` <a name="mvbasecoreweb3commitmentserviceweb3receiptctorsystemstringsystemdatetimeoffset" id="mvbasecoreweb3commitmentserviceweb3receiptctorsystemstringsystemdatetimeoffset" href="#mvbasecoreweb3commitmentserviceweb3receiptctorsystemstringsystemdatetimeoffset"></a>

##### Summary

WEB3-specific receipt.
Additionally to the base timestamp, it contains the transaction hash.

##### Parameters

This constructor has no parameters.

## vBaseClient `type` <a name="tvbasecorevbaseclient" id="tvbasecorevbaseclient" href="#tvbasecorevbaseclient"></a>

##### Namespace

vBase.Core

##### Summary

Provides Python validityBase (vBase) access.

### AddNamedSet(name) `method` <a name="mvbasecorevbaseclientaddnamedsetsystemstring" id="mvbasecorevbaseclientaddnamedsetsystemstring" href="#mvbasecorevbaseclientaddnamedsetsystemstring"></a>

##### Summary

Adds a new named set.

##### Returns

A task representing the asynchronous operation.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the set to add. |

### AddSet(setCid) `method` <a name="mvbasecorevbaseclientaddsetvbasecorecid" id="mvbasecorevbaseclientaddsetvbasecorecid" href="#mvbasecorevbaseclientaddsetvbasecorecid"></a>

##### Summary

Adds a new set.

##### Returns

A task representing the asynchronous operation.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [vBase.Core.Cid](#tvbasecorecid 'vBase.Core.Cid') | The identifier of the set. |

### AddSetObject(setCid,objectCid) `method` <a name="mvbasecorevbaseclientaddsetobjectvbasecorecidvbasecorecid" id="mvbasecorevbaseclientaddsetobjectvbasecorecidvbasecorecid" href="#mvbasecorevbaseclientaddsetobjectvbasecorecidvbasecorecid"></a>

##### Summary

Adds a new object to the set.

##### Returns

Receipt of the operation.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| setCid | [vBase.Core.Cid](#tvbasecorecid 'vBase.Core.Cid') | Set CID. |
| objectCid | [vBase.Core.Cid](#tvbasecorecid 'vBase.Core.Cid') | Object to add CID. |

### UserNamedSetExists(user,name) `method` <a name="mvbasecorevbaseclientusernamedsetexistssystemstringsystemstring" id="mvbasecorevbaseclientusernamedsetexistssystemstringsystemstring" href="#mvbasecorevbaseclientusernamedsetexistssystemstringsystemstring"></a>

##### Summary

Checks if the user has a set with the specified CID.

##### Returns



##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | User's identifier. |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Name of the set. |

### VerifyUserObject(user,objectCid,timestamp) `method` <a name="mvbasecorevbaseclientverifyuserobjectsystemstringvbasecorecidsystemdatetimeoffset" id="mvbasecorevbaseclientverifyuserobjectsystemstringvbasecorecidsystemdatetimeoffset" href="#mvbasecorevbaseclientverifyuserobjectsystemstringvbasecorecidsystemdatetimeoffset"></a>

##### Summary

Verifies if the specified object was stamped at the given time by the given user.

##### Returns

True if the object was stamped; otherwise, false.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The object owner. |
| objectCid | [vBase.Core.Cid](#tvbasecorecid 'vBase.Core.Cid') | The object identifier. |
| timestamp | [System.DateTimeOffset](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.DateTimeOffset 'System.DateTimeOffset') | The time when the object was stamped. |

### VerifyUserSetObjects(user,setCid,userSetObjectsCidSum) `method` <a name="mvbasecorevbaseclientverifyusersetobjectssystemstringvbasecorecidsystemnumericsbiginteger" id="mvbasecorevbaseclientverifyusersetobjectssystemstringvbasecorecidsystemnumericsbiginteger" href="#mvbasecorevbaseclientverifyusersetobjectssystemstringvbasecorecidsystemnumericsbiginteger"></a>

##### Summary

Verifies if the sum of all CIDs in the current dataset matches the sum of the dataset stored
in the commitment service.

##### Returns

A boolean indicating whether the sums match.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| user | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The set owner. |
| setCid | [vBase.Core.Cid](#tvbasecorecid 'vBase.Core.Cid') | The CID of the set. |
| userSetObjectsCidSum | [System.Numerics.BigInteger](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Numerics.BigInteger 'System.Numerics.BigInteger') | The sum of the CIDs of all objects belonging to the set. |

## vBaseDataset `type` <a name="tvbasecoredatasetvbasedataset" id="tvbasecoredatasetvbasedataset" href="#tvbasecoredatasetvbasedataset"></a>

##### Namespace

vBase.Core.Dataset

##### Summary

vBase dataset.

### #ctor(vBaseClient,name,recordTypeName) `constructor` <a name="mvbasecoredatasetvbasedatasetctorvbasecorevbaseclientsystemstringsystemstring" id="mvbasecoredatasetvbasedatasetctorvbasecorevbaseclientsystemstringsystemstring" href="#mvbasecoredatasetvbasedatasetctorvbasecorevbaseclientsystemstringsystemstring"></a>

##### Summary

Creates a new instance of the vBase dataset.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| vBaseClient | [vBase.Core.vBaseClient](#tvbasecorevbaseclient 'vBase.Core.vBaseClient') | The vBaseClient used for communication with the vBase smart protocol. |
| name | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The name of the dataset. |
| recordTypeName | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The type of records to be stored in the dataset. |

##### Exceptions

| Name | Description |
| ---- | ----------- |
| [System.InvalidOperationException](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.InvalidOperationException 'System.InvalidOperationException') | Thrown if an unknown record type is provided. |

### #ctor(vBaseClient,json) `constructor` <a name="mvbasecoredatasetvbasedatasetctorvbasecorevbaseclientsystemstring" id="mvbasecoredatasetvbasedatasetctorvbasecorevbaseclientsystemstring" href="#mvbasecoredatasetvbasedatasetctorvbasecorevbaseclientsystemstring"></a>

##### Summary

Creates a new instance of the vBase dataset from JSON.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| vBaseClient | [vBase.Core.vBaseClient](#tvbasecorevbaseclient 'vBase.Core.vBaseClient') | The vBaseClient used for communication with the vBase smart protocol. |
| json | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | The JSON representation of the dataset. JSON created by vBase SDKs for other platforms, such as Python or Java, is also supported. |

##### Exceptions

| Name | Description |
| ---- | ----------- |
| [vBase.Core.Exceptions.vBaseException](#tvbasecoreexceptionsvbaseexception 'vBase.Core.Exceptions.vBaseException') | Thrown when the current CID generation algorithm does not match the one used to generate the provided JSON. |

### AddRecord(recordData) `method` <a name="mvbasecoredatasetvbasedatasetaddrecordsystemobject" id="mvbasecoredatasetvbasedatasetaddrecordsystemobject" href="#mvbasecoredatasetvbasedatasetaddrecordsystemobject"></a>

##### Summary

Adds a record to the dataset.

##### Returns

A transaction receipt.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| recordData | [System.Object](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Object 'System.Object') | The record to add. The record type must match the dataset type. |

### Initialize() `method` <a name="mvbasecoredatasetvbasedatasetinitialize" id="mvbasecoredatasetvbasedatasetinitialize" href="#mvbasecoredatasetvbasedatasetinitialize"></a>

##### Summary

Creates a new dataset on the blockchain if it does not already exist.

##### Returns

A task representing the asynchronous operation.

##### Parameters

This method has no parameters.

### ToJson() `method` <a name="mvbasecoredatasetvbasedatasettojson" id="mvbasecoredatasetvbasedatasettojson" href="#mvbasecoredatasetvbasedatasettojson"></a>

##### Summary

Serializes the dataset into a vBase-compatible JSON representation.

##### Returns

A JSON string.

##### Parameters

This method has no parameters.

### VerifyCommitments() `method` <a name="mvbasecoredatasetvbasedatasetverifycommitments" id="mvbasecoredatasetvbasedatasetverifycommitments" href="#mvbasecoredatasetvbasedatasetverifycommitments"></a>

##### Summary

Verifies if all records in the dataset were actually created on the Validity Base platform at the specified timestamps.

##### Returns

Validation result: A collection of errors. For each record that was not found on the Validity Base platform, 
or was added with a different timestamp, there will be a separate error item in the collection.
Additionally, an error item will be added if the dataset on the Validity Base platform contains more records 
than exist in this client-side dataset.

##### Parameters

This method has no parameters.

## vBaseException `type` <a name="tvbasecoreexceptionsvbaseexception" id="tvbasecoreexceptionsvbaseexception" href="#tvbasecoreexceptionsvbaseexception"></a>

##### Namespace

vBase.Core.Exceptions

##### Summary

Base exception for all vBase exceptions.

## vBaseObject `type` <a name="tvbasecoredatasetvbaseobjectsvbaseobject" id="tvbasecoredatasetvbaseobjectsvbaseobject" href="#tvbasecoredatasetvbaseobjectsvbaseobject"></a>

##### Namespace

vBase.Core.Dataset.vBaseObjects

##### Summary

Base class for all vBase objects.
Each implementation should provide a constructor with one object parameter, and parameterless constructor.

### Data `property` <a name="pvbasecoredatasetvbaseobjectsvbaseobjectdata" id="pvbasecoredatasetvbaseobjectsvbaseobjectdata" href="#pvbasecoredatasetvbaseobjectsvbaseobjectdata"></a>

##### Summary

The data stored in the object.

### StringData `property` <a name="pvbasecoredatasetvbaseobjectsvbaseobjectstringdata" id="pvbasecoredatasetvbaseobjectsvbaseobjectstringdata" href="#pvbasecoredatasetvbaseobjectsvbaseobjectstringdata"></a>

##### Summary

String representation of the data.

### GetCid() `method` <a name="mvbasecoredatasetvbaseobjectsvbaseobjectgetcid" id="mvbasecoredatasetvbaseobjectsvbaseobjectgetcid" href="#mvbasecoredatasetvbaseobjectsvbaseobjectgetcid"></a>

##### Summary

Returns the [Cid](#tvbasecorecid 'vBase.Core.Cid') of the object.

##### Returns

CID (Content Identifiers) for the current object

##### Parameters

This method has no parameters.

### GetJson() `method` <a name="mvbasecoredatasetvbaseobjectsvbaseobjectgetjson" id="mvbasecoredatasetvbaseobjectsvbaseobjectgetjson" href="#mvbasecoredatasetvbaseobjectsvbaseobjectgetjson"></a>

##### Summary

Serializes the object to a JSON value.

##### Returns



##### Parameters

This method has no parameters.

### InitFromJson(jData) `method` <a name="mvbasecoredatasetvbaseobjectsvbaseobjectinitfromjsonnewtonsoftjsonlinqjvalue" id="mvbasecoredatasetvbaseobjectsvbaseobjectinitfromjsonnewtonsoftjsonlinqjvalue" href="#mvbasecoredatasetvbaseobjectsvbaseobjectinitfromjsonnewtonsoftjsonlinqjvalue"></a>

##### Summary

Initializes the object from a JSON object.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| jData | [Newtonsoft.Json.Linq.JValue](#tnewtonsoftjsonlinqjvalue 'Newtonsoft.Json.Linq.JValue') | Json value. |

## vBaseStringObject `type` <a name="tvbasecoredatasetvbaseobjectsvbasestringobject" id="tvbasecoredatasetvbaseobjectsvbasestringobject" href="#tvbasecoredatasetvbaseobjectsvbasestringobject"></a>

##### Namespace

vBase.Core.Dataset.vBaseObjects

##### Summary

vBase Object representing a string data.

### vBaseObjectType `constants` <a name="fvbasecoredatasetvbaseobjectsvbasestringobjectvbaseobjecttype" id="fvbasecoredatasetvbaseobjectsvbasestringobjectvbaseobjecttype" href="#fvbasecoredatasetvbaseobjectsvbasestringobjectvbaseobjecttype"></a>

##### Summary

vBase string object name
for bidirectional compatibility with vBase Python SDK the V letter is capitalized
