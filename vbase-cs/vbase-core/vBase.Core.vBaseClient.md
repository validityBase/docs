# <a id="vBase_Core_vBaseClient"></a> Class vBaseClient

Namespace: [vBase.Core](vBase.Core.md)  
Assembly: vBase.Core.dll  

Provides Python validityBase (vBase) access.

```csharp
public class vBaseClient
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[vBaseClient](vBase.Core.vBaseClient.md)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

#### Extension Methods

[Utils.AsserNotNull<vBaseClient\>\(vBaseClient?, string?\)](vBase.Core.Utilities.Utils.md\#vBase\_Core\_Utilities\_Utils\_AsserNotNull\_\_1\_\_\_0\_System\_String\_)

## Constructors

### <a id="vBase_Core_vBaseClient__ctor_vBase_Core_ICommitmentService_"></a> vBaseClient\(ICommitmentService\)

```csharp
public vBaseClient(ICommitmentService commitmentService)
```

#### Parameters

`commitmentService` [ICommitmentService](vBase.Core.ICommitmentService.md)

## Properties

### <a id="vBase_Core_vBaseClient_DefaultUser"></a> DefaultUser

Return the default user address used in vBase transactions.

```csharp
public string DefaultUser { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="vBase_Core_vBaseClient_AddNamedSet_System_String_"></a> AddNamedSet\(string\)

Adds a new named set.

```csharp
public Task AddNamedSet(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the set to add.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task representing the asynchronous operation.

### <a id="vBase_Core_vBaseClient_AddSet_vBase_Core_Cid_"></a> AddSet\(Cid\)

Adds a new set.

```csharp
public Task AddSet(Cid setCid)
```

#### Parameters

`setCid` [Cid](vBase.Core.Cid.md)

The identifier of the set.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task representing the asynchronous operation.

### <a id="vBase_Core_vBaseClient_AddSetObject_vBase_Core_Cid_vBase_Core_Cid_"></a> AddSetObject\(Cid, Cid\)

Adds a new object to the set.

```csharp
public Task<Receipt> AddSetObject(Cid setCid, Cid objectCid)
```

#### Parameters

`setCid` [Cid](vBase.Core.Cid.md)

Set CID.

`objectCid` [Cid](vBase.Core.Cid.md)

Object to add CID.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[Receipt](vBase.Core.Receipt.md)\>

Receipt of the operation.

### <a id="vBase_Core_vBaseClient_UserNamedSetExists_System_String_System_String_"></a> UserNamedSetExists\(string, string\)

Checks if the user has a set with the specified CID.

```csharp
public Task<bool> UserNamedSetExists(string user, string name)
```

#### Parameters

`user` [string](https://learn.microsoft.com/dotnet/api/system.string)

User's identifier.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the set.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="vBase_Core_vBaseClient_VerifyUserObject_System_String_vBase_Core_Cid_System_DateTimeOffset_"></a> VerifyUserObject\(string, Cid, DateTimeOffset\)

Verifies if the specified object was stamped at the given time by the given user.

```csharp
public Task<bool> VerifyUserObject(string user, Cid objectCid, DateTimeOffset timestamp)
```

#### Parameters

`user` [string](https://learn.microsoft.com/dotnet/api/system.string)

The object owner.

`objectCid` [Cid](vBase.Core.Cid.md)

The object identifier.

`timestamp` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The time when the object was stamped.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

True if the object was stamped; otherwise, false.

### <a id="vBase_Core_vBaseClient_VerifyUserSetObjects_System_String_vBase_Core_Cid_System_Numerics_BigInteger_"></a> VerifyUserSetObjects\(string, Cid, BigInteger\)

Verifies if the sum of all CIDs in the current dataset matches the sum of the dataset stored
in the commitment service.

```csharp
public Task<bool> VerifyUserSetObjects(string user, Cid setCid, BigInteger userSetObjectsCidSum)
```

#### Parameters

`user` [string](https://learn.microsoft.com/dotnet/api/system.string)

The set owner.

`setCid` [Cid](vBase.Core.Cid.md)

The CID of the set.

`userSetObjectsCidSum` [BigInteger](https://learn.microsoft.com/dotnet/api/system.numerics.biginteger)

The sum of the CIDs of all objects belonging to the set.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

A boolean indicating whether the sums match.

