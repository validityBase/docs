# <a id="vBase_Core_ICommitmentService"></a> Interface ICommitmentService

Namespace: [vBase.Core](vBase.Core.md)  
Assembly: vBase.Core.dll  

Common interface for commitment services.

```csharp
public interface ICommitmentService
```

#### Extension Methods

[Utils.AsserNotNull<ICommitmentService\>\(ICommitmentService?, string?\)](vBase.Core.Utilities.Utils.md\#vBase\_Core\_Utilities\_Utils\_AsserNotNull\_\_1\_\_\_0\_System\_String\_)

## Properties

### <a id="vBase_Core_ICommitmentService_DefaultUser"></a> DefaultUser

Current user identifier.

```csharp
string DefaultUser { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="vBase_Core_ICommitmentService_AddSet_vBase_Core_Cid_"></a> AddSet\(Cid\)

Records a set commitment.
If the set already exists, no action will be taken.

```csharp
Task AddSet(Cid setCid)
```

#### Parameters

`setCid` [Cid](vBase.Core.Cid.md)

The CID identifying the set.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

### <a id="vBase_Core_ICommitmentService_AddSetObject_vBase_Core_Cid_vBase_Core_Cid_"></a> AddSetObject\(Cid, Cid\)

Adds an object CID to the specified set.

```csharp
Task<Receipt> AddSetObject(Cid setCid, Cid objectCid)
```

#### Parameters

`setCid` [Cid](vBase.Core.Cid.md)

CID of the set where the objectCid will be added.

`objectCid` [Cid](vBase.Core.Cid.md)

Object CID to add.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[Receipt](vBase.Core.Receipt.md)\>

Receipt of the operation.

### <a id="vBase_Core_ICommitmentService_UserSetExists_System_String_vBase_Core_Cid_"></a> UserSetExists\(string, Cid\)

Checks if the specified object set exists.

```csharp
Task<bool> UserSetExists(string user, Cid setCid)
```

#### Parameters

`user` [string](https://learn.microsoft.com/dotnet/api/system.string)

Set owner.

`setCid` [Cid](vBase.Core.Cid.md)

CID of the set.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="vBase_Core_ICommitmentService_VerifyUserObject_System_String_vBase_Core_Cid_System_DateTimeOffset_"></a> VerifyUserObject\(string, Cid, DateTimeOffset\)

Checks whether the object with the specified CID was stamped at the given time.

```csharp
Task<bool> VerifyUserObject(string user, Cid objectCid, DateTimeOffset timestamp)
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

### <a id="vBase_Core_ICommitmentService_VerifyUserSetObjects_System_String_vBase_Core_Cid_System_Numerics_BigInteger_"></a> VerifyUserSetObjects\(string, Cid, BigInteger\)

Verifies an object commitment previously recorded.

```csharp
Task<bool> VerifyUserSetObjects(string user, Cid setCid, BigInteger userSetObjectCidSum)
```

#### Parameters

`user` [string](https://learn.microsoft.com/dotnet/api/system.string)

The address for the user who recorded the commitment.

`setCid` [Cid](vBase.Core.Cid.md)

The CID for the set containing the object.

`userSetObjectCidSum` [BigInteger](https://learn.microsoft.com/dotnet/api/system.numerics.biginteger)

The sum of all object hashes for the user set.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

True if the commitment has been verified successfully; False otherwise.

