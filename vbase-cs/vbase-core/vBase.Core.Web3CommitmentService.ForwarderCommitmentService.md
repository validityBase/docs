# <a id="vBase_Core_Web3CommitmentService_ForwarderCommitmentService"></a> Class ForwarderCommitmentService

Namespace: [vBase.Core.Web3CommitmentService](vBase.Core.Web3CommitmentService.md)  
Assembly: vBase.Core.dll  

Provides access to the CommitmentService smart contract over vBase forwarder.

```csharp
public class ForwarderCommitmentService : Web3CommitmentService, ICommitmentService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Web3CommitmentService](vBase.Core.Web3CommitmentService.Web3CommitmentService.md) ← 
[ForwarderCommitmentService](vBase.Core.Web3CommitmentService.ForwarderCommitmentService.md)

#### Implements

[ICommitmentService](vBase.Core.ICommitmentService.md)

#### Inherited Members

[Web3CommitmentService.Account](vBase.Core.Web3CommitmentService.Web3CommitmentService.md\#vBase\_Core\_Web3CommitmentService\_Web3CommitmentService\_Account), 
[Web3CommitmentService.Logger](vBase.Core.Web3CommitmentService.Web3CommitmentService.md\#vBase\_Core\_Web3CommitmentService\_Web3CommitmentService\_Logger), 
[Web3CommitmentService.DefaultUser](vBase.Core.Web3CommitmentService.Web3CommitmentService.md\#vBase\_Core\_Web3CommitmentService\_Web3CommitmentService\_DefaultUser), 
[Web3CommitmentService.CallContractFunction\(Function, string\)](vBase.Core.Web3CommitmentService.Web3CommitmentService.md\#vBase\_Core\_Web3CommitmentService\_Web3CommitmentService\_CallContractFunction\_Nethereum\_Contracts\_Function\_System\_String\_), 
[Web3CommitmentService.FetchStateVariable<TResultType\>\(string\)](vBase.Core.Web3CommitmentService.Web3CommitmentService.md\#vBase\_Core\_Web3CommitmentService\_Web3CommitmentService\_FetchStateVariable\_\_1\_System\_String\_), 
[Web3CommitmentService.UserSetExists\(string, Cid\)](vBase.Core.Web3CommitmentService.Web3CommitmentService.md\#vBase\_Core\_Web3CommitmentService\_Web3CommitmentService\_UserSetExists\_System\_String\_vBase\_Core\_Cid\_), 
[Web3CommitmentService.VerifyUserObject\(string, Cid, DateTimeOffset\)](vBase.Core.Web3CommitmentService.Web3CommitmentService.md\#vBase\_Core\_Web3CommitmentService\_Web3CommitmentService\_VerifyUserObject\_System\_String\_vBase\_Core\_Cid\_System\_DateTimeOffset\_), 
[Web3CommitmentService.VerifyUserSetObjects\(string, Cid, BigInteger\)](vBase.Core.Web3CommitmentService.Web3CommitmentService.md\#vBase\_Core\_Web3CommitmentService\_Web3CommitmentService\_VerifyUserSetObjects\_System\_String\_vBase\_Core\_Cid\_System\_Numerics\_BigInteger\_), 
[Web3CommitmentService.AddSet\(Cid\)](vBase.Core.Web3CommitmentService.Web3CommitmentService.md\#vBase\_Core\_Web3CommitmentService\_Web3CommitmentService\_AddSet\_vBase\_Core\_Cid\_), 
[Web3CommitmentService.AddSetObject\(Cid, Cid\)](vBase.Core.Web3CommitmentService.Web3CommitmentService.md\#vBase\_Core\_Web3CommitmentService\_Web3CommitmentService\_AddSetObject\_vBase\_Core\_Cid\_vBase\_Core\_Cid\_), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

#### Extension Methods

[Utils.AsserNotNull<ForwarderCommitmentService\>\(ForwarderCommitmentService?, string?\)](vBase.Core.Utilities.Utils.md\#vBase\_Core\_Utilities\_Utils\_AsserNotNull\_\_1\_\_\_0\_System\_String\_)

## Constructors

### <a id="vBase_Core_Web3CommitmentService_ForwarderCommitmentService__ctor_System_String_System_String_System_String_Microsoft_Extensions_Logging_ILogger_"></a> ForwarderCommitmentService\(string, string, string, ILogger\)

```csharp
public ForwarderCommitmentService(string forwarderUrl, string apiKey, string privateKey, ILogger logger)
```

#### Parameters

`forwarderUrl` [string](https://learn.microsoft.com/dotnet/api/system.string)

`apiKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

`privateKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

## Methods

### <a id="vBase_Core_Web3CommitmentService_ForwarderCommitmentService_CallContractFunction_Nethereum_Contracts_Function_System_String_"></a> CallContractFunction\(Function, string\)

Executes Smart Contract function.

```csharp
protected override Task<ReceiptDto<ContractMethodExecuteResultDto>> CallContractFunction(Function function, string functionData)
```

#### Parameters

`function` Function

Function descriptor.

`functionData` [string](https://learn.microsoft.com/dotnet/api/system.string)

Data which will be passed as a function arguments.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[ReceiptDto](vBase.Core.DTOs.ReceiptDto\-1.md)<[ContractMethodExecuteResultDto](vBase.Core.DTOs.ContractMethodExecuteResultDto.md)\>\>

### <a id="vBase_Core_Web3CommitmentService_ForwarderCommitmentService_FetchStateVariable__1_System_String_"></a> FetchStateVariable<TResultType\>\(string\)

Fetches state variable from the Smart Contract.

```csharp
protected override Task<ReceiptDto<TResultType>> FetchStateVariable<TResultType>(string functionData)
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

