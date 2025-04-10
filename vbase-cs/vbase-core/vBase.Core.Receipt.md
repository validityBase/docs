# <a id="vBase_Core_Receipt"></a> Class Receipt

Namespace: [vBase.Core](vBase.Core.md)  
Assembly: vBase.Core.dll  

Represents a transaction receipt.

```csharp
public class Receipt
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Receipt](vBase.Core.Receipt.md)

#### Derived

[Web3Receipt](vBase.Core.Web3CommitmentService.Web3Receipt.md)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

#### Extension Methods

[Utils.AsserNotNull<Receipt\>\(Receipt?, string?\)](vBase.Core.Utilities.Utils.md\#vBase\_Core\_Utilities\_Utils\_AsserNotNull\_\_1\_\_\_0\_System\_String\_)

## Constructors

### <a id="vBase_Core_Receipt__ctor_System_DateTimeOffset_"></a> Receipt\(DateTimeOffset\)

Represents a transaction receipt.

```csharp
public Receipt(DateTimeOffset vBaseTimestamp)
```

#### Parameters

`vBaseTimestamp` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

## Properties

### <a id="vBase_Core_Receipt_Timestamp"></a> Timestamp

```csharp
public DateTimeOffset Timestamp { get; set; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

