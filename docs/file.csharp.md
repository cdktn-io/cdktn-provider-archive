# `file` Submodule <a name="`file` Submodule" id="@cdktn/provider-archive.file"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### File <a name="File" id="@cdktn/provider-archive.file.File"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file archive_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-archive.file.File.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Archive;

new File(Construct Scope, string Id, FileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-archive.file.FileConfig">FileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-archive.file.File.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-archive.file.File.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-archive.file.File.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-archive.file.FileConfig">FileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-archive.file.File.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-archive.file.File.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-archive.file.File.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-archive.file.File.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-archive.file.File.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-archive.file.File.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-archive.file.File.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-archive.file.File.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-archive.file.File.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-archive.file.File.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetExcludes">ResetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetExcludeSymlinkDirectories">ResetExcludeSymlinkDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetOutputFileMode">ResetOutputFileMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetSourceContent">ResetSourceContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetSourceContentFilename">ResetSourceContentFilename</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetSourceDir">ResetSourceDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetSourceFile">ResetSourceFile</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-archive.file.File.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-archive.file.File.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-archive.file.File.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-archive.file.File.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-archive.file.File.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-archive.file.File.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-archive.file.File.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-archive.file.File.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-archive.file.File.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-archive.file.File.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-archive.file.File.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-archive.file.File.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-archive.file.File.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-archive.file.File.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-archive.file.File.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.File.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-archive.file.File.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.File.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-archive.file.File.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.File.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-archive.file.File.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.File.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-archive.file.File.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.File.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-archive.file.File.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.File.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-archive.file.File.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.File.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-archive.file.File.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.File.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-archive.file.File.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.File.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-archive.file.File.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-archive.file.File.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-archive.file.File.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-archive.file.File.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-archive.file.File.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.File.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-archive.file.File.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-archive.file.File.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-archive.file.File.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-archive.file.File.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-archive.file.File.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-archive.file.File.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-archive.file.File.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-archive.file.File.putSource"></a>

```csharp
private void PutSource(IResolvable|FileSource[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-archive.file.File.putSource.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>[]

---

##### `ResetExcludes` <a name="ResetExcludes" id="@cdktn/provider-archive.file.File.resetExcludes"></a>

```csharp
private void ResetExcludes()
```

##### `ResetExcludeSymlinkDirectories` <a name="ResetExcludeSymlinkDirectories" id="@cdktn/provider-archive.file.File.resetExcludeSymlinkDirectories"></a>

```csharp
private void ResetExcludeSymlinkDirectories()
```

##### `ResetOutputFileMode` <a name="ResetOutputFileMode" id="@cdktn/provider-archive.file.File.resetOutputFileMode"></a>

```csharp
private void ResetOutputFileMode()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-archive.file.File.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetSourceContent` <a name="ResetSourceContent" id="@cdktn/provider-archive.file.File.resetSourceContent"></a>

```csharp
private void ResetSourceContent()
```

##### `ResetSourceContentFilename` <a name="ResetSourceContentFilename" id="@cdktn/provider-archive.file.File.resetSourceContentFilename"></a>

```csharp
private void ResetSourceContentFilename()
```

##### `ResetSourceDir` <a name="ResetSourceDir" id="@cdktn/provider-archive.file.File.resetSourceDir"></a>

```csharp
private void ResetSourceDir()
```

##### `ResetSourceFile` <a name="ResetSourceFile" id="@cdktn/provider-archive.file.File.resetSourceFile"></a>

```csharp
private void ResetSourceFile()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-archive.file.File.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-archive.file.File.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a File resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-archive.file.File.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Archive;

File.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-archive.file.File.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-archive.file.File.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Archive;

File.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-archive.file.File.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-archive.file.File.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Archive;

File.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-archive.file.File.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-archive.file.File.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Archive;

File.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a File resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-archive.file.File.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-archive.file.File.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the File to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-archive.file.File.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing File that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-archive.file.File.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the File to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.File.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-archive.file.File.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputBase64Sha256">OutputBase64Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputBase64Sha512">OutputBase64Sha512</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputMd5">OutputMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputSha">OutputSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputSha256">OutputSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputSha512">OutputSha512</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputSize">OutputSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.source">Source</a></code> | <code><a href="#@cdktn/provider-archive.file.FileSourceList">FileSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.excludesInput">ExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.excludeSymlinkDirectoriesInput">ExcludeSymlinkDirectoriesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputFileModeInput">OutputFileModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputPathInput">OutputPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceContentFilenameInput">SourceContentFilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceContentInput">SourceContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceDirInput">SourceDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceFileInput">SourceFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceInput">SourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.excludes">Excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.excludeSymlinkDirectories">ExcludeSymlinkDirectories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputFileMode">OutputFileMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputPath">OutputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceContent">SourceContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceContentFilename">SourceContentFilename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceDir">SourceDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceFile">SourceFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-archive.file.File.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-archive.file.File.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-archive.file.File.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-archive.file.File.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-archive.file.File.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-archive.file.File.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-archive.file.File.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-archive.file.File.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-archive.file.File.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-archive.file.File.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-archive.file.File.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-archive.file.File.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-archive.file.File.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-archive.file.File.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-archive.file.File.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OutputBase64Sha256`<sup>Required</sup> <a name="OutputBase64Sha256" id="@cdktn/provider-archive.file.File.property.outputBase64Sha256"></a>

```csharp
public string OutputBase64Sha256 { get; }
```

- *Type:* string

---

##### `OutputBase64Sha512`<sup>Required</sup> <a name="OutputBase64Sha512" id="@cdktn/provider-archive.file.File.property.outputBase64Sha512"></a>

```csharp
public string OutputBase64Sha512 { get; }
```

- *Type:* string

---

##### `OutputMd5`<sup>Required</sup> <a name="OutputMd5" id="@cdktn/provider-archive.file.File.property.outputMd5"></a>

```csharp
public string OutputMd5 { get; }
```

- *Type:* string

---

##### `OutputSha`<sup>Required</sup> <a name="OutputSha" id="@cdktn/provider-archive.file.File.property.outputSha"></a>

```csharp
public string OutputSha { get; }
```

- *Type:* string

---

##### `OutputSha256`<sup>Required</sup> <a name="OutputSha256" id="@cdktn/provider-archive.file.File.property.outputSha256"></a>

```csharp
public string OutputSha256 { get; }
```

- *Type:* string

---

##### `OutputSha512`<sup>Required</sup> <a name="OutputSha512" id="@cdktn/provider-archive.file.File.property.outputSha512"></a>

```csharp
public string OutputSha512 { get; }
```

- *Type:* string

---

##### `OutputSize`<sup>Required</sup> <a name="OutputSize" id="@cdktn/provider-archive.file.File.property.outputSize"></a>

```csharp
public double OutputSize { get; }
```

- *Type:* double

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-archive.file.File.property.source"></a>

```csharp
public FileSourceList Source { get; }
```

- *Type:* <a href="#@cdktn/provider-archive.file.FileSourceList">FileSourceList</a>

---

##### `ExcludesInput`<sup>Optional</sup> <a name="ExcludesInput" id="@cdktn/provider-archive.file.File.property.excludesInput"></a>

```csharp
public string[] ExcludesInput { get; }
```

- *Type:* string[]

---

##### `ExcludeSymlinkDirectoriesInput`<sup>Optional</sup> <a name="ExcludeSymlinkDirectoriesInput" id="@cdktn/provider-archive.file.File.property.excludeSymlinkDirectoriesInput"></a>

```csharp
public bool|IResolvable ExcludeSymlinkDirectoriesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OutputFileModeInput`<sup>Optional</sup> <a name="OutputFileModeInput" id="@cdktn/provider-archive.file.File.property.outputFileModeInput"></a>

```csharp
public string OutputFileModeInput { get; }
```

- *Type:* string

---

##### `OutputPathInput`<sup>Optional</sup> <a name="OutputPathInput" id="@cdktn/provider-archive.file.File.property.outputPathInput"></a>

```csharp
public string OutputPathInput { get; }
```

- *Type:* string

---

##### `SourceContentFilenameInput`<sup>Optional</sup> <a name="SourceContentFilenameInput" id="@cdktn/provider-archive.file.File.property.sourceContentFilenameInput"></a>

```csharp
public string SourceContentFilenameInput { get; }
```

- *Type:* string

---

##### `SourceContentInput`<sup>Optional</sup> <a name="SourceContentInput" id="@cdktn/provider-archive.file.File.property.sourceContentInput"></a>

```csharp
public string SourceContentInput { get; }
```

- *Type:* string

---

##### `SourceDirInput`<sup>Optional</sup> <a name="SourceDirInput" id="@cdktn/provider-archive.file.File.property.sourceDirInput"></a>

```csharp
public string SourceDirInput { get; }
```

- *Type:* string

---

##### `SourceFileInput`<sup>Optional</sup> <a name="SourceFileInput" id="@cdktn/provider-archive.file.File.property.sourceFileInput"></a>

```csharp
public string SourceFileInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-archive.file.File.property.sourceInput"></a>

```csharp
public IResolvable|FileSource[] SourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-archive.file.File.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktn/provider-archive.file.File.property.excludes"></a>

```csharp
public string[] Excludes { get; }
```

- *Type:* string[]

---

##### `ExcludeSymlinkDirectories`<sup>Required</sup> <a name="ExcludeSymlinkDirectories" id="@cdktn/provider-archive.file.File.property.excludeSymlinkDirectories"></a>

```csharp
public bool|IResolvable ExcludeSymlinkDirectories { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OutputFileMode`<sup>Required</sup> <a name="OutputFileMode" id="@cdktn/provider-archive.file.File.property.outputFileMode"></a>

```csharp
public string OutputFileMode { get; }
```

- *Type:* string

---

##### `OutputPath`<sup>Required</sup> <a name="OutputPath" id="@cdktn/provider-archive.file.File.property.outputPath"></a>

```csharp
public string OutputPath { get; }
```

- *Type:* string

---

##### `SourceContent`<sup>Required</sup> <a name="SourceContent" id="@cdktn/provider-archive.file.File.property.sourceContent"></a>

```csharp
public string SourceContent { get; }
```

- *Type:* string

---

##### `SourceContentFilename`<sup>Required</sup> <a name="SourceContentFilename" id="@cdktn/provider-archive.file.File.property.sourceContentFilename"></a>

```csharp
public string SourceContentFilename { get; }
```

- *Type:* string

---

##### `SourceDir`<sup>Required</sup> <a name="SourceDir" id="@cdktn/provider-archive.file.File.property.sourceDir"></a>

```csharp
public string SourceDir { get; }
```

- *Type:* string

---

##### `SourceFile`<sup>Required</sup> <a name="SourceFile" id="@cdktn/provider-archive.file.File.property.sourceFile"></a>

```csharp
public string SourceFile { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-archive.file.File.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.File.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-archive.file.File.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FileConfig <a name="FileConfig" id="@cdktn/provider-archive.file.FileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-archive.file.FileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Archive;

new FileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string OutputPath,
    string Type,
    string[] Excludes = null,
    bool|IResolvable ExcludeSymlinkDirectories = null,
    string OutputFileMode = null,
    IResolvable|FileSource[] Source = null,
    string SourceContent = null,
    string SourceContentFilename = null,
    string SourceDir = null,
    string SourceFile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.outputPath">OutputPath</a></code> | <code>string</code> | The output of the archive file. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.type">Type</a></code> | <code>string</code> | The type of archive to generate. NOTE: `zip` and `tar.gz` is supported. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.excludes">Excludes</a></code> | <code>string[]</code> | Specify files/directories to ignore when reading the `source_dir`. Supports glob file matching patterns including doublestar/globstar (`**`) patterns. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.excludeSymlinkDirectories">ExcludeSymlinkDirectories</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Boolean flag indicating whether symbolically linked directories should be excluded during the creation of the archive. Defaults to `false`. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.outputFileMode">OutputFileMode</a></code> | <code>string</code> | String that specifies the octal file mode for all archived files. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.source">Source</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>[]</code> | source block. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.sourceContent">SourceContent</a></code> | <code>string</code> | Add only this content to the archive with `source_content_filename` as the filename. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.sourceContentFilename">SourceContentFilename</a></code> | <code>string</code> | Set this as the filename when using `source_content`. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.sourceDir">SourceDir</a></code> | <code>string</code> | Package entire contents of this directory into the archive. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.sourceFile">SourceFile</a></code> | <code>string</code> | Package this file into the archive. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-archive.file.FileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-archive.file.FileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-archive.file.FileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-archive.file.FileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-archive.file.FileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-archive.file.FileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-archive.file.FileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `OutputPath`<sup>Required</sup> <a name="OutputPath" id="@cdktn/provider-archive.file.FileConfig.property.outputPath"></a>

```csharp
public string OutputPath { get; set; }
```

- *Type:* string

The output of the archive file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#output_path File#output_path}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-archive.file.FileConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of archive to generate. NOTE: `zip` and `tar.gz` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#type File#type}

---

##### `Excludes`<sup>Optional</sup> <a name="Excludes" id="@cdktn/provider-archive.file.FileConfig.property.excludes"></a>

```csharp
public string[] Excludes { get; set; }
```

- *Type:* string[]

Specify files/directories to ignore when reading the `source_dir`. Supports glob file matching patterns including doublestar/globstar (`**`) patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#excludes File#excludes}

---

##### `ExcludeSymlinkDirectories`<sup>Optional</sup> <a name="ExcludeSymlinkDirectories" id="@cdktn/provider-archive.file.FileConfig.property.excludeSymlinkDirectories"></a>

```csharp
public bool|IResolvable ExcludeSymlinkDirectories { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Boolean flag indicating whether symbolically linked directories should be excluded during the creation of the archive. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#exclude_symlink_directories File#exclude_symlink_directories}

---

##### `OutputFileMode`<sup>Optional</sup> <a name="OutputFileMode" id="@cdktn/provider-archive.file.FileConfig.property.outputFileMode"></a>

```csharp
public string OutputFileMode { get; set; }
```

- *Type:* string

String that specifies the octal file mode for all archived files.

For example: `"0666"`. Setting this will ensure that cross platform usage of this module will not vary the modes of archived files (and ultimately checksums) resulting in more deterministic behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#output_file_mode File#output_file_mode}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-archive.file.FileConfig.property.source"></a>

```csharp
public IResolvable|FileSource[] Source { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>[]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source File#source}

---

##### `SourceContent`<sup>Optional</sup> <a name="SourceContent" id="@cdktn/provider-archive.file.FileConfig.property.sourceContent"></a>

```csharp
public string SourceContent { get; set; }
```

- *Type:* string

Add only this content to the archive with `source_content_filename` as the filename.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source_content File#source_content}

---

##### `SourceContentFilename`<sup>Optional</sup> <a name="SourceContentFilename" id="@cdktn/provider-archive.file.FileConfig.property.sourceContentFilename"></a>

```csharp
public string SourceContentFilename { get; set; }
```

- *Type:* string

Set this as the filename when using `source_content`.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source_content_filename File#source_content_filename}

---

##### `SourceDir`<sup>Optional</sup> <a name="SourceDir" id="@cdktn/provider-archive.file.FileConfig.property.sourceDir"></a>

```csharp
public string SourceDir { get; set; }
```

- *Type:* string

Package entire contents of this directory into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source_dir File#source_dir}

---

##### `SourceFile`<sup>Optional</sup> <a name="SourceFile" id="@cdktn/provider-archive.file.FileConfig.property.sourceFile"></a>

```csharp
public string SourceFile { get; set; }
```

- *Type:* string

Package this file into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source_file File#source_file}

---

### FileSource <a name="FileSource" id="@cdktn/provider-archive.file.FileSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-archive.file.FileSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Archive;

new FileSource {
    string Content,
    string Filename
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSource.property.content">Content</a></code> | <code>string</code> | Add this content to the archive with `filename` as the filename. |
| <code><a href="#@cdktn/provider-archive.file.FileSource.property.filename">Filename</a></code> | <code>string</code> | Set this as the filename when declaring a `source`. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-archive.file.FileSource.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Add this content to the archive with `filename` as the filename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#content File#content}

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktn/provider-archive.file.FileSource.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

Set this as the filename when declaring a `source`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#filename File#filename}

---

## Classes <a name="Classes" id="Classes"></a>

### FileSourceList <a name="FileSourceList" id="@cdktn/provider-archive.file.FileSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-archive.file.FileSourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Archive;

new FileSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-archive.file.FileSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.FileSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-archive.file.FileSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-archive.file.FileSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-archive.file.FileSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-archive.file.FileSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-archive.file.FileSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-archive.file.FileSourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-archive.file.FileSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-archive.file.FileSourceList.get"></a>

```csharp
private FileSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-archive.file.FileSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-archive.file.FileSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-archive.file.FileSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-archive.file.FileSourceList.property.internalValue"></a>

```csharp
public IResolvable|FileSource[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>[]

---


### FileSourceOutputReference <a name="FileSourceOutputReference" id="@cdktn/provider-archive.file.FileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-archive.file.FileSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Archive;

new FileSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-archive.file.FileSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-archive.file.FileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-archive.file.FileSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-archive.file.FileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-archive.file.FileSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.filenameInput">FilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-archive.file.FileSource">FileSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.filenameInput"></a>

```csharp
public string FilenameInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FileSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>

---



