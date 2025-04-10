# <a id="vBase_Core_Utilities_Utils"></a> Class Utils

Namespace: [vBase.Core.Utilities](vBase.Core.Utilities.md)  
Assembly: vBase.Core.dll  

Provides utility methods.

```csharp
public static class Utils
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Utils](vBase.Core.Utilities.Utils.md)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="vBase_Core_Utilities_Utils_DefaultJsonSerializerSettings"></a> DefaultJsonSerializerSettings

```csharp
public static readonly JsonSerializerSettings DefaultJsonSerializerSettings
```

#### Field Value

 JsonSerializerSettings

## Methods

### <a id="vBase_Core_Utilities_Utils_AsserNotNull__1___0_System_String_"></a> AsserNotNull<T\>\(T?, string?\)

```csharp
public static T AsserNotNull<T>(this T? value, string? message = null)
```

#### Parameters

`value` T?

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Returns

 T

#### Type Parameters

`T` 

### <a id="vBase_Core_Utilities_Utils_BuildUri_System_Uri_System_String_System_Collections_Generic_Dictionary_System_String_System_String__"></a> BuildUri\(Uri, string, Dictionary<string, string\>\)

```csharp
public static Uri BuildUri(Uri baseUri, string path, Dictionary<string, string> queryParams)
```

#### Parameters

`baseUri` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

`queryParams` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [Uri](https://learn.microsoft.com/dotnet/api/system.uri)

### <a id="vBase_Core_Utilities_Utils_DeserializeObject__1_System_String_"></a> DeserializeObject<T\>\(string\)

```csharp
public static T DeserializeObject<T>(string json)
```

#### Parameters

`json` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 T

#### Type Parameters

`T` 

### <a id="vBase_Core_Utilities_Utils_GetEventParameterValue__1_Nethereum_Contracts_EventLog_System_Collections_Generic_List_Nethereum_ABI_FunctionEncoding_ParameterOutput___System_String_"></a> GetEventParameterValue<T\>\(EventLog<List<ParameterOutput\>\>, string\)

```csharp
public static T GetEventParameterValue<T>(this EventLog<List<ParameterOutput>> @event, string paramName)
```

#### Parameters

`event` EventLog<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ParameterOutput\>\>

`paramName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 T

#### Type Parameters

`T` 

### <a id="vBase_Core_Utilities_Utils_LoadEmbeddedJson_System_String_"></a> LoadEmbeddedJson\(string\)

```csharp
public static string LoadEmbeddedJson(string path)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="vBase_Core_Utilities_Utils_SerializeObject_System_Object_"></a> SerializeObject\(object\)

```csharp
public static string SerializeObject(object @object)
```

#### Parameters

`object` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

