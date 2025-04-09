# <a id="vBase_Core_Dataset_vBaseObjects_vBaseObject"></a> Class vBaseObject

Namespace: [vBase.Core.Dataset.vBaseObjects](vBase.Core.Dataset.vBaseObjects.md)  
Assembly: vBase.Core.dll  

Base class for all vBase objects.
Each implementation should provide a constructor with one object parameter, and parameterless constructor.

```csharp
public abstract class vBaseObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[vBaseObject](vBase.Core.Dataset.vBaseObjects.vBaseObject.md)

#### Derived

[vBaseStringObject](vBase.Core.Dataset.vBaseObjects.vBaseStringObject.md)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

#### Extension Methods

[Utils.AsserNotNull<vBaseObject\>\(vBaseObject?, string?\)](vBase.Core.Utilities.Utils.md\#vBase\_Core\_Utilities\_Utils\_AsserNotNull\_\_1\_\_\_0\_System\_String\_)

## Constructors

### <a id="vBase_Core_Dataset_vBaseObjects_vBaseObject__ctor_System_Object_"></a> vBaseObject\(object\)

```csharp
public vBaseObject(object data)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="vBase_Core_Dataset_vBaseObjects_vBaseObject__ctor"></a> vBaseObject\(\)

```csharp
public vBaseObject()
```

## Properties

### <a id="vBase_Core_Dataset_vBaseObjects_vBaseObject_Data"></a> Data

The data stored in the object.

```csharp
public object? Data { get; protected set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)?

### <a id="vBase_Core_Dataset_vBaseObjects_vBaseObject_StringData"></a> StringData

String representation of the data.

```csharp
public string? StringData { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

## Methods

### <a id="vBase_Core_Dataset_vBaseObjects_vBaseObject_GetCid"></a> GetCid\(\)

Returns the <xref href="vBase.Core.Cid" data-throw-if-not-resolved="false"></xref> of the object.

```csharp
public abstract Cid GetCid()
```

#### Returns

 [Cid](vBase.Core.Cid.md)

CID (Content Identifiers) for the current object

### <a id="vBase_Core_Dataset_vBaseObjects_vBaseObject_GetJson"></a> GetJson\(\)

Serializes the object to a JSON value.

```csharp
public abstract JValue? GetJson()
```

#### Returns

 JValue?

### <a id="vBase_Core_Dataset_vBaseObjects_vBaseObject_InitFromJson_Newtonsoft_Json_Linq_JValue_"></a> InitFromJson\(JValue?\)

Initializes the object from a JSON object.

```csharp
public abstract void InitFromJson(JValue? jData)
```

#### Parameters

`jData` JValue?

Json value.

