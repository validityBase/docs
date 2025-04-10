# <a id="vBase_Core_Utilities_Convert"></a> Class Convert

Namespace: [vBase.Core.Utilities](vBase.Core.Utilities.md)  
Assembly: vBase.Core.dll  

Provides conversion methods.

```csharp
public static class Convert
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Convert](vBase.Core.Utilities.Convert.md)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="vBase_Core_Utilities_Convert_BigIntToEthereumBytes_System_Numerics_BigInteger_System_UInt32_"></a> BigIntToEthereumBytes\(BigInteger, uint\)

```csharp
public static byte[] BigIntToEthereumBytes(this BigInteger value, uint size)
```

#### Parameters

`value` [BigInteger](https://learn.microsoft.com/dotnet/api/system.numerics.biginteger)

`size` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

### <a id="vBase_Core_Utilities_Convert_CidToBigInt_vBase_Core_Cid_"></a> CidToBigInt\(Cid\)

```csharp
public static BigInteger CidToBigInt(this Cid cid)
```

#### Parameters

`cid` [Cid](vBase.Core.Cid.md)

#### Returns

 [BigInteger](https://learn.microsoft.com/dotnet/api/system.numerics.biginteger)

### <a id="vBase_Core_Utilities_Convert_EthereumBytesToBigInt_System_Byte___"></a> EthereumBytesToBigInt\(byte\[\]\)

```csharp
public static BigInteger EthereumBytesToBigInt(byte[] bytes)
```

#### Parameters

`bytes` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

#### Returns

 [BigInteger](https://learn.microsoft.com/dotnet/api/system.numerics.biginteger)

