# <a id="vBase_Core_Web3CommitmentService_Web3Receipt"></a> Class Web3Receipt

Namespace: [vBase.Core.Web3CommitmentService](vBase.Core.Web3CommitmentService.md)  
Assembly: vBase.Core.dll  

WEB3-specific receipt.
Additionally to the base timestamp, it contains the transaction hash.

```csharp
public class Web3Receipt : Receipt
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Receipt](vBase.Core.Receipt.md) ← 
[Web3Receipt](vBase.Core.Web3CommitmentService.Web3Receipt.md)

#### Inherited Members

[Receipt.Timestamp](vBase.Core.Receipt.md\#vBase\_Core\_Receipt\_Timestamp), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

#### Extension Methods

[Utils.AsserNotNull<Web3Receipt\>\(Web3Receipt?, string?\)](vBase.Core.Utilities.Utils.md\#vBase\_Core\_Utilities\_Utils\_AsserNotNull\_\_1\_\_\_0\_System\_String\_)

## Constructors

### <a id="vBase_Core_Web3CommitmentService_Web3Receipt__ctor_System_String_System_DateTimeOffset_"></a> Web3Receipt\(string, DateTimeOffset\)

WEB3-specific receipt.
Additionally to the base timestamp, it contains the transaction hash.

```csharp
public Web3Receipt(string vBaseTransactionHash, DateTimeOffset vBaseTimestamp)
```

#### Parameters

`vBaseTransactionHash` [string](https://learn.microsoft.com/dotnet/api/system.string)

`vBaseTimestamp` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

## Properties

### <a id="vBase_Core_Web3CommitmentService_Web3Receipt_TransactionHash"></a> TransactionHash

```csharp
public string TransactionHash { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

