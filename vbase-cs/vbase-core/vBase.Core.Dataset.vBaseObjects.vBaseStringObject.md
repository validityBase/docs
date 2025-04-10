# <a id="vBase_Core_Dataset_vBaseObjects_vBaseStringObject"></a> Class vBaseStringObject

Namespace: [vBase.Core.Dataset.vBaseObjects](vBase.Core.Dataset.vBaseObjects.md)  
Assembly: vBase.Core.dll  

vBase Object representing a string data.

```csharp
public class vBaseStringObject : vBaseObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[vBaseObject](vBase.Core.Dataset.vBaseObjects.vBaseObject.md) ← 
[vBaseStringObject](vBase.Core.Dataset.vBaseObjects.vBaseStringObject.md)

#### Inherited Members

[vBaseObject.Data](vBase.Core.Dataset.vBaseObjects.vBaseObject.md\#vBase\_Core\_Dataset\_vBaseObjects\_vBaseObject\_Data), 
[vBaseObject.StringData](vBase.Core.Dataset.vBaseObjects.vBaseObject.md\#vBase\_Core\_Dataset\_vBaseObjects\_vBaseObject\_StringData), 
[vBaseObject.InitFromJson\(JValue?\)](vBase.Core.Dataset.vBaseObjects.vBaseObject.md\#vBase\_Core\_Dataset\_vBaseObjects\_vBaseObject\_InitFromJson\_Newtonsoft\_Json\_Linq\_JValue\_), 
[vBaseObject.GetJson\(\)](vBase.Core.Dataset.vBaseObjects.vBaseObject.md\#vBase\_Core\_Dataset\_vBaseObjects\_vBaseObject\_GetJson), 
[vBaseObject.GetCid\(\)](vBase.Core.Dataset.vBaseObjects.vBaseObject.md\#vBase\_Core\_Dataset\_vBaseObjects\_vBaseObject\_GetCid), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

#### Extension Methods

[Utils.AsserNotNull<vBaseStringObject\>\(vBaseStringObject?, string?\)](vBase.Core.Utilities.Utils.md\#vBase\_Core\_Utilities\_Utils\_AsserNotNull\_\_1\_\_\_0\_System\_String\_)

## Constructors

### <a id="vBase_Core_Dataset_vBaseObjects_vBaseStringObject__ctor_System_Object_"></a> vBaseStringObject\(object\)

```csharp
public vBaseStringObject(object data)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="vBase_Core_Dataset_vBaseObjects_vBaseStringObject__ctor"></a> vBaseStringObject\(\)

```csharp
public vBaseStringObject()
```

## Fields

### <a id="vBase_Core_Dataset_vBaseObjects_vBaseStringObject_vBaseObjectType"></a> vBaseObjectType

vBase string object name
for bidirectional compatibility with vBase Python SDK the V letter is capitalized

```csharp
public const string vBaseObjectType = "VBaseStringObject"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="vBase_Core_Dataset_vBaseObjects_vBaseStringObject_GetCid"></a> GetCid\(\)

Returns the <xref href="vBase.Core.Cid" data-throw-if-not-resolved="false"></xref> of the object.

```csharp
public override Cid GetCid()
```

#### Returns

 [Cid](vBase.Core.Cid.md)

CID (Content Identifiers) for the current object

### <a id="vBase_Core_Dataset_vBaseObjects_vBaseStringObject_GetJson"></a> GetJson\(\)

Serializes the object to a JSON value.

```csharp
public override JValue? GetJson()
```

#### Returns

 JValue?

### <a id="vBase_Core_Dataset_vBaseObjects_vBaseStringObject_InitFromJson_Newtonsoft_Json_Linq_JValue_"></a> InitFromJson\(JValue?\)

Initializes the object from a JSON object.

```csharp
public override void InitFromJson(JValue? jData)
```

#### Parameters

`jData` JValue?

Json value.

