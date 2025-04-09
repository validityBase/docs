# <a id="vBase_Core_Cid"></a> Class Cid

Namespace: [vBase.Core](vBase.Core.md)  
Assembly: vBase.Core.dll  

Content Identifier (CID) is used to uniquely identify objects.

```csharp
public class Cid
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Cid](vBase.Core.Cid.md)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

#### Extension Methods

[Utils.AsserNotNull<Cid\>\(Cid?, string?\)](vBase.Core.Utilities.Utils.md\#vBase\_Core\_Utilities\_Utils\_AsserNotNull\_\_1\_\_\_0\_System\_String\_), 
[Convert.CidToBigInt\(Cid\)](vBase.Core.Utilities.Convert.md\#vBase\_Core\_Utilities\_Convert\_CidToBigInt\_vBase\_Core\_Cid\_)

## Constructors

### <a id="vBase_Core_Cid__ctor_System_Byte___"></a> Cid\(byte\[\]\)

Creates a new CID from the provided byte array.

```csharp
public Cid(byte[] data)
```

#### Parameters

`data` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

### <a id="vBase_Core_Cid__ctor_System_String_"></a> Cid\(string\)

Creates a new CID from the provided hex string.

```csharp
public Cid(string data)
```

#### Parameters

`data` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="vBase_Core_Cid_Data"></a> Data

The data of the CID.

```csharp
public byte[] Data { get; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

### <a id="vBase_Core_Cid_Empty"></a> Empty

Empty CID.

```csharp
public static Cid Empty { get; }
```

#### Property Value

 [Cid](vBase.Core.Cid.md)

## Methods

### <a id="vBase_Core_Cid_ToHex"></a> ToHex\(\)

Returns the CID as a hex string.

```csharp
public string ToHex()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

Hex string.

