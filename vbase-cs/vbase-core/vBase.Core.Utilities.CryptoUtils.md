# <a id="vBase_Core_Utilities_CryptoUtils"></a> Class CryptoUtils

Namespace: [vBase.Core.Utilities](vBase.Core.Utilities.md)  
Assembly: vBase.Core.dll  

Provides cryptographic utilities.

```csharp
public static class CryptoUtils
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CryptoUtils](vBase.Core.Utilities.CryptoUtils.md)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="vBase_Core_Utilities_CryptoUtils_GetCid_System_Numerics_BigInteger_System_UInt32_"></a> GetCid\(BigInteger, uint\)

Get SHA3 256 hash of the input integer.

```csharp
public static Cid GetCid(this BigInteger value, uint size = 256)
```

#### Parameters

`value` [BigInteger](https://learn.microsoft.com/dotnet/api/system.numerics.biginteger)

Integer value.

`size` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

Size in bits.

#### Returns

 [Cid](vBase.Core.Cid.md)

SHA3 256 hash object.

### <a id="vBase_Core_Utilities_CryptoUtils_GetCid_System_String_"></a> GetCid\(string\)

Get SHA3 256 hash of the input string.

```csharp
public static Cid GetCid(this string value)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

input string

#### Returns

 [Cid](vBase.Core.Cid.md)

SHA3 256 hash object

### <a id="vBase_Core_Utilities_CryptoUtils_GetSha3Hash_System_Byte___"></a> GetSha3Hash\(byte\[\]\)

```csharp
public static byte[] GetSha3Hash(byte[] input)
```

#### Parameters

`input` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

#### Returns

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

