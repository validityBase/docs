# <a id="vBase_Core_Dataset_vBaseDataset"></a> Class vBaseDataset

Namespace: [vBase.Core.Dataset](vBase.Core.Dataset.md)  
Assembly: vBase.Core.dll  

vBase dataset.

```csharp
public class vBaseDataset
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[vBaseDataset](vBase.Core.Dataset.vBaseDataset.md)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

#### Extension Methods

[Utils.AsserNotNull<vBaseDataset\>\(vBaseDataset?, string?\)](vBase.Core.Utilities.Utils.md\#vBase\_Core\_Utilities\_Utils\_AsserNotNull\_\_1\_\_\_0\_System\_String\_)

## Constructors

### <a id="vBase_Core_Dataset_vBaseDataset__ctor_vBase_Core_vBaseClient_System_String_System_String_"></a> vBaseDataset\(vBaseClient, string, string\)

Creates a new instance of the vBase dataset.

```csharp
public vBaseDataset(vBaseClient vBaseClient, string name, string recordTypeName)
```

#### Parameters

`vBaseClient` [vBaseClient](vBase.Core.vBaseClient.md)

The vBaseClient used for communication with the vBase smart protocol.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the dataset.

`recordTypeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The type of records to be stored in the dataset.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

Thrown if an unknown record type is provided.

### <a id="vBase_Core_Dataset_vBaseDataset__ctor_vBase_Core_vBaseClient_System_String_"></a> vBaseDataset\(vBaseClient, string\)

Creates a new instance of the vBase dataset from JSON.

```csharp
public vBaseDataset(vBaseClient vBaseClient, string json)
```

#### Parameters

`vBaseClient` [vBaseClient](vBase.Core.vBaseClient.md)

The vBaseClient used for communication with the vBase smart protocol.

`json` [string](https://learn.microsoft.com/dotnet/api/system.string)

The JSON representation of the dataset. JSON created by vBase SDKs for other platforms, such as Python or Java, is also supported.

#### Exceptions

 [vBaseException](vBase.Core.Exceptions.vBaseException.md)

Thrown when the current CID generation algorithm does not match the one used to generate the provided JSON.

## Methods

### <a id="vBase_Core_Dataset_vBaseDataset_AddRecord_System_Object_"></a> AddRecord\(object\)

Adds a record to the dataset.

```csharp
public Task<Receipt> AddRecord(object recordData)
```

#### Parameters

`recordData` [object](https://learn.microsoft.com/dotnet/api/system.object)

The record to add. The record type must match the dataset type.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[Receipt](vBase.Core.Receipt.md)\>

A transaction receipt.

### <a id="vBase_Core_Dataset_vBaseDataset_Initialize"></a> Initialize\(\)

Creates a new dataset on the blockchain if it does not already exist.

```csharp
public Task Initialize()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task representing the asynchronous operation.

### <a id="vBase_Core_Dataset_vBaseDataset_ToJson"></a> ToJson\(\)

Serializes the dataset into a vBase-compatible JSON representation.

```csharp
public string ToJson()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A JSON string.

### <a id="vBase_Core_Dataset_vBaseDataset_VerifyCommitments"></a> VerifyCommitments\(\)

Verifies if all records in the dataset were actually created on the Validity Base platform at the specified timestamps.

```csharp
public Task<VerificationResult> VerifyCommitments()
```

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[VerificationResult](vBase.Core.Dataset.VerificationResult.md)\>

Validation result: A collection of errors. For each record that was not found on the Validity Base platform, 
or was added with a different timestamp, there will be a separate error item in the collection.
Additionally, an error item will be added if the dataset on the Validity Base platform contains more records 
than exist in this client-side dataset.

