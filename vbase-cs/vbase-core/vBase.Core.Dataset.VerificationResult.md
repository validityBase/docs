# <a id="vBase_Core_Dataset_VerificationResult"></a> Class VerificationResult

Namespace: [vBase.Core.Dataset](vBase.Core.Dataset.md)  
Assembly: vBase.Core.dll  

Contains a list of verification findings.
<xref href="vBase.Core.Dataset.vBaseDataset.VerifyCommitments" data-throw-if-not-resolved="false"></xref>

```csharp
public class VerificationResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[VerificationResult](vBase.Core.Dataset.VerificationResult.md)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

#### Extension Methods

[Utils.AsserNotNull<VerificationResult\>\(VerificationResult?, string?\)](vBase.Core.Utilities.Utils.md\#vBase\_Core\_Utilities\_Utils\_AsserNotNull\_\_1\_\_\_0\_System\_String\_)

## Properties

### <a id="vBase_Core_Dataset_VerificationResult_VerificationFindings"></a> VerificationFindings

A collection of verification findings.

```csharp
public string[] VerificationFindings { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="vBase_Core_Dataset_VerificationResult_VerificationPassed"></a> VerificationPassed

Indicates whether the verification passed.

```csharp
public bool VerificationPassed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="vBase_Core_Dataset_VerificationResult_AddFinding_System_String_"></a> AddFinding\(string\)

Adds a finding to the verification result.

```csharp
public void AddFinding(string finding)
```

#### Parameters

`finding` [string](https://learn.microsoft.com/dotnet/api/system.string)

