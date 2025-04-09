# <a id="vBase_Core_Web3CommitmentService_Web3CommitmentService"></a> Class Web3CommitmentService

Namespace: [vBase.Core.Web3CommitmentService](vBase.Core.Web3CommitmentService.md)  
Assembly: vBase.Core.dll  

Provides access to the CommitmentService smart contract.

```csharp
public abstract class Web3CommitmentService : ICommitmentService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Web3CommitmentService](vBase.Core.Web3CommitmentService.Web3CommitmentService.md)

#### Derived

[ForwarderCommitmentService](vBase.Core.Web3CommitmentService.ForwarderCommitmentService.md)

#### Implements

[ICommitmentService](vBase.Core.ICommitmentService.md)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

#### Extension Methods

[Utils.AsserNotNull<Web3CommitmentService\>\(Web3CommitmentService?, string?\)](vBase.Core.Utilities.Utils.md\#vBase\_Core\_Utilities\_Utils\_AsserNotNull\_\_1\_\_\_0\_System\_String\_)

## Constructors

### <a id="vBase_Core_Web3CommitmentService_Web3CommitmentService__ctor_System_String_Microsoft_Extensions_Logging_ILogger_"></a> Web3CommitmentService\(string, ILogger\)

```csharp
public Web3CommitmentService(string privateKey, ILogger logger)
```

#### Parameters

`privateKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

## Fields

### <a id="vBase_Core_Web3CommitmentService_Web3CommitmentService_Account"></a> Account

```csharp
protected readonly Account Account
```

#### Field Value

 Account

### <a id="vBase_Core_Web3CommitmentService_Web3CommitmentService_Logger"></a> Logger

```csharp
protected readonly ILogger Logger
```

#### Field Value

 [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

## Properties

### <a id="vBase_Core_Web3CommitmentService_Web3CommitmentService_DefaultUser"></a> DefaultUser

Current user identifier.

```csharp
public string DefaultUser { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="vBase_Core_Web3CommitmentService_Web3CommitmentService_AddSet_vBase_Core_Cid_"></a> AddSet\(Cid\)

Records a set commitment.
If the set already exists, no action will be taken.

```csharp
public Task AddSet(Cid setCid)
```

#### Parameters

`setCid` [Cid](vBase.Core.Cid.md)

The CID identifying the set.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="vBase_Core_Web3CommitmentService_Web3CommitmentService_AddSetObject_vBase_Core_Cid_vBase_Core_Cid_"></a> AddSetObject\(Cid, Cid\)

Adds an object CID to the specified set.

```csharp
public Task<Receipt> AddSetObject(Cid setCid, Cid objectCid)
```

#### Parameters

`setCid` [Cid](vBase.Core.Cid.md)

CID of the set where the objectCid will be added.

`objectCid` [Cid](vBase.Core.Cid.md)

Object CID to add.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[Receipt](vBase.Core.Receipt.md)\>

Receipt of the operation.

### <a id="vBase_Core_Web3CommitmentService_Web3CommitmentService_CallContractFunction_Nethereum_Contracts_Function_System_String_"></a> CallContractFunction\(Function, string\)

Executes Smart Contract function.

```csharp
protected abstract Task<ReceiptDto<ContractMethodExecuteResultDto>> CallContractFunction(Function function, string functionData)
```

#### Parameters

`function` Function

Function descriptor.

`functionData` [string](https://learn.microsoft.com/dotnet/api/system.string)

Data which will be passed as a function arguments.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[ReceiptDto](vBase.Core.DTOs.ReceiptDto\-1.md)<[ContractMethodExecuteResultDto](vBase.Core.DTOs.ContractMethodExecuteResultDto.md)\>\>

### <a id="vBase_Core_Web3CommitmentService_Web3CommitmentService_FetchStateVariable__1_System_String_"></a> FetchStateVariable<TResultType\>\(string\)

Fetches state variable from the Smart Contract.

```csharp
protected abstract Task<ReceiptDto<TResultType>> FetchStateVariable<TResultType>(string functionData)
```

#### Parameters

`functionData` [string](https://learn.microsoft.com/dotnet/api/system.string)

Encoded state variable

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[ReceiptDto](vBase.Core.DTOs.ReceiptDto\-1.md)<TResultType\>\>

Variable value

#### Type Parameters

`TResultType` 

Expected result type

### <a id="vBase_Core_Web3CommitmentService_Web3CommitmentService_UserSetExists_System_String_vBase_Core_Cid_"></a> UserSetExists\(string, Cid\)

Checks if the specified object set exists.

```csharp
public Task<bool> UserSetExists(string user, Cid setCid)
```

#### Parameters

`user` [string](https://learn.microsoft.com/dotnet/api/system.string)

Set owner.

`setCid` [Cid](vBase.Core.Cid.md)

CID of the set.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="vBase_Core_Web3CommitmentService_Web3CommitmentService_VerifyUserObject_System_String_vBase_Core_Cid_System_DateTimeOffset_"></a> VerifyUserObject\(string, Cid, DateTimeOffset\)

Checks whether the object with the specified CID was stamped at the given time.

```csharp
public Task<bool> VerifyUserObject(string user, Cid objectCid, DateTimeOffset timestamp)
```

#### Parameters

`user` [string](https://learn.microsoft.com/dotnet/api/system.string)

The address for the user who recorded the commitment.

`objectCid` [Cid](vBase.Core.Cid.md)

The CID identifying the object.

`timestamp` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The timestamp of the transaction.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

True if the commitment has been verified successfully; False otherwise.

### <a id="vBase_Core_Web3CommitmentService_Web3CommitmentService_VerifyUserSetObjects_System_String_vBase_Core_Cid_System_Numerics_BigInteger_"></a> VerifyUserSetObjects\(string, Cid, BigInteger\)

Verifies an object commitment previously recorded.

```csharp
public Task<bool> VerifyUserSetObjects(string user, Cid setCid, BigInteger setObjectsCidSum)
```

#### Parameters

`user` [string](https://learn.microsoft.com/dotnet/api/system.string)

The address for the user who recorded the commitment.

`setCid` [Cid](vBase.Core.Cid.md)

The CID for the set containing the object.

`setObjectsCidSum` [BigInteger](https://learn.microsoft.com/dotnet/api/system.numerics.biginteger)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

True if the commitment has been verified successfully; False otherwise.

