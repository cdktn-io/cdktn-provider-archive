# `dataArchiveFile` Submodule <a name="`dataArchiveFile` Submodule" id="@cdktn/provider-archive.dataArchiveFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataArchiveFile <a name="DataArchiveFile" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file archive_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-archive-go/archive/v11/dataarchivefile"

dataarchivefile.NewDataArchiveFile(scope Construct, id *string, config DataArchiveFileConfig) DataArchiveFile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig">DataArchiveFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig">DataArchiveFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.resetExcludes">ResetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.resetExcludeSymlinkDirectories">ResetExcludeSymlinkDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.resetOutputFileMode">ResetOutputFileMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.resetSourceContent">ResetSourceContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.resetSourceContentFilename">ResetSourceContentFilename</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.resetSourceDir">ResetSourceDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.resetSourceFile">ResetSourceFile</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.putSource"></a>

```go
func PutSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.putSource.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExcludes` <a name="ResetExcludes" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.resetExcludes"></a>

```go
func ResetExcludes()
```

##### `ResetExcludeSymlinkDirectories` <a name="ResetExcludeSymlinkDirectories" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.resetExcludeSymlinkDirectories"></a>

```go
func ResetExcludeSymlinkDirectories()
```

##### `ResetOutputFileMode` <a name="ResetOutputFileMode" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.resetOutputFileMode"></a>

```go
func ResetOutputFileMode()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.resetSource"></a>

```go
func ResetSource()
```

##### `ResetSourceContent` <a name="ResetSourceContent" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.resetSourceContent"></a>

```go
func ResetSourceContent()
```

##### `ResetSourceContentFilename` <a name="ResetSourceContentFilename" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.resetSourceContentFilename"></a>

```go
func ResetSourceContentFilename()
```

##### `ResetSourceDir` <a name="ResetSourceDir" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.resetSourceDir"></a>

```go
func ResetSourceDir()
```

##### `ResetSourceFile` <a name="ResetSourceFile" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.resetSourceFile"></a>

```go
func ResetSourceFile()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataArchiveFile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-archive-go/archive/v11/dataarchivefile"

dataarchivefile.DataArchiveFile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-archive-go/archive/v11/dataarchivefile"

dataarchivefile.DataArchiveFile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-archive-go/archive/v11/dataarchivefile"

dataarchivefile.DataArchiveFile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-archive-go/archive/v11/dataarchivefile"

dataarchivefile.DataArchiveFile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataArchiveFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataArchiveFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataArchiveFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataArchiveFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputBase64Sha256">OutputBase64Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputBase64Sha512">OutputBase64Sha512</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputMd5">OutputMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputSha">OutputSha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputSha256">OutputSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputSha512">OutputSha512</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputSize">OutputSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.source">Source</a></code> | <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList">DataArchiveFileSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.excludesInput">ExcludesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.excludeSymlinkDirectoriesInput">ExcludeSymlinkDirectoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputFileModeInput">OutputFileModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputPathInput">OutputPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceContentFilenameInput">SourceContentFilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceContentInput">SourceContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceDirInput">SourceDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceFileInput">SourceFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.excludes">Excludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.excludeSymlinkDirectories">ExcludeSymlinkDirectories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputFileMode">OutputFileMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputPath">OutputPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceContent">SourceContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceContentFilename">SourceContentFilename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceDir">SourceDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceFile">SourceFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OutputBase64Sha256`<sup>Required</sup> <a name="OutputBase64Sha256" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputBase64Sha256"></a>

```go
func OutputBase64Sha256() *string
```

- *Type:* *string

---

##### `OutputBase64Sha512`<sup>Required</sup> <a name="OutputBase64Sha512" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputBase64Sha512"></a>

```go
func OutputBase64Sha512() *string
```

- *Type:* *string

---

##### `OutputMd5`<sup>Required</sup> <a name="OutputMd5" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputMd5"></a>

```go
func OutputMd5() *string
```

- *Type:* *string

---

##### `OutputSha`<sup>Required</sup> <a name="OutputSha" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputSha"></a>

```go
func OutputSha() *string
```

- *Type:* *string

---

##### `OutputSha256`<sup>Required</sup> <a name="OutputSha256" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputSha256"></a>

```go
func OutputSha256() *string
```

- *Type:* *string

---

##### `OutputSha512`<sup>Required</sup> <a name="OutputSha512" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputSha512"></a>

```go
func OutputSha512() *string
```

- *Type:* *string

---

##### `OutputSize`<sup>Required</sup> <a name="OutputSize" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputSize"></a>

```go
func OutputSize() *f64
```

- *Type:* *f64

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.source"></a>

```go
func Source() DataArchiveFileSourceList
```

- *Type:* <a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList">DataArchiveFileSourceList</a>

---

##### `ExcludesInput`<sup>Optional</sup> <a name="ExcludesInput" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.excludesInput"></a>

```go
func ExcludesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeSymlinkDirectoriesInput`<sup>Optional</sup> <a name="ExcludeSymlinkDirectoriesInput" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.excludeSymlinkDirectoriesInput"></a>

```go
func ExcludeSymlinkDirectoriesInput() interface{}
```

- *Type:* interface{}

---

##### `OutputFileModeInput`<sup>Optional</sup> <a name="OutputFileModeInput" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputFileModeInput"></a>

```go
func OutputFileModeInput() *string
```

- *Type:* *string

---

##### `OutputPathInput`<sup>Optional</sup> <a name="OutputPathInput" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputPathInput"></a>

```go
func OutputPathInput() *string
```

- *Type:* *string

---

##### `SourceContentFilenameInput`<sup>Optional</sup> <a name="SourceContentFilenameInput" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceContentFilenameInput"></a>

```go
func SourceContentFilenameInput() *string
```

- *Type:* *string

---

##### `SourceContentInput`<sup>Optional</sup> <a name="SourceContentInput" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceContentInput"></a>

```go
func SourceContentInput() *string
```

- *Type:* *string

---

##### `SourceDirInput`<sup>Optional</sup> <a name="SourceDirInput" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceDirInput"></a>

```go
func SourceDirInput() *string
```

- *Type:* *string

---

##### `SourceFileInput`<sup>Optional</sup> <a name="SourceFileInput" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceFileInput"></a>

```go
func SourceFileInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.excludes"></a>

```go
func Excludes() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeSymlinkDirectories`<sup>Required</sup> <a name="ExcludeSymlinkDirectories" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.excludeSymlinkDirectories"></a>

```go
func ExcludeSymlinkDirectories() interface{}
```

- *Type:* interface{}

---

##### `OutputFileMode`<sup>Required</sup> <a name="OutputFileMode" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputFileMode"></a>

```go
func OutputFileMode() *string
```

- *Type:* *string

---

##### `OutputPath`<sup>Required</sup> <a name="OutputPath" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.outputPath"></a>

```go
func OutputPath() *string
```

- *Type:* *string

---

##### `SourceContent`<sup>Required</sup> <a name="SourceContent" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceContent"></a>

```go
func SourceContent() *string
```

- *Type:* *string

---

##### `SourceContentFilename`<sup>Required</sup> <a name="SourceContentFilename" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceContentFilename"></a>

```go
func SourceContentFilename() *string
```

- *Type:* *string

---

##### `SourceDir`<sup>Required</sup> <a name="SourceDir" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceDir"></a>

```go
func SourceDir() *string
```

- *Type:* *string

---

##### `SourceFile`<sup>Required</sup> <a name="SourceFile" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.sourceFile"></a>

```go
func SourceFile() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataArchiveFileConfig <a name="DataArchiveFileConfig" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-archive-go/archive/v11/dataarchivefile"

&dataarchivefile.DataArchiveFileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OutputPath: *string,
	Type: *string,
	Excludes: *[]*string,
	ExcludeSymlinkDirectories: interface{},
	OutputFileMode: *string,
	Source: interface{},
	SourceContent: *string,
	SourceContentFilename: *string,
	SourceDir: *string,
	SourceFile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.outputPath">OutputPath</a></code> | <code>*string</code> | The output of the archive file. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.type">Type</a></code> | <code>*string</code> | The type of archive to generate. NOTE: `zip` and `tar.gz` is supported. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.excludes">Excludes</a></code> | <code>*[]*string</code> | Specify files/directories to ignore when reading the `source_dir`. Supports glob file matching patterns including doublestar/globstar (`**`) patterns. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.excludeSymlinkDirectories">ExcludeSymlinkDirectories</a></code> | <code>interface{}</code> | Boolean flag indicating whether symbolically linked directories should be excluded during the creation of the archive. Defaults to `false`. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.outputFileMode">OutputFileMode</a></code> | <code>*string</code> | String that specifies the octal file mode for all archived files. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.source">Source</a></code> | <code>interface{}</code> | source block. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.sourceContent">SourceContent</a></code> | <code>*string</code> | Add only this content to the archive with `source_content_filename` as the filename. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.sourceContentFilename">SourceContentFilename</a></code> | <code>*string</code> | Set this as the filename when using `source_content`. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.sourceDir">SourceDir</a></code> | <code>*string</code> | Package entire contents of this directory into the archive. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.sourceFile">SourceFile</a></code> | <code>*string</code> | Package this file into the archive. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OutputPath`<sup>Required</sup> <a name="OutputPath" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.outputPath"></a>

```go
OutputPath *string
```

- *Type:* *string

The output of the archive file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#output_path DataArchiveFile#output_path}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of archive to generate. NOTE: `zip` and `tar.gz` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#type DataArchiveFile#type}

---

##### `Excludes`<sup>Optional</sup> <a name="Excludes" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.excludes"></a>

```go
Excludes *[]*string
```

- *Type:* *[]*string

Specify files/directories to ignore when reading the `source_dir`. Supports glob file matching patterns including doublestar/globstar (`**`) patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#excludes DataArchiveFile#excludes}

---

##### `ExcludeSymlinkDirectories`<sup>Optional</sup> <a name="ExcludeSymlinkDirectories" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.excludeSymlinkDirectories"></a>

```go
ExcludeSymlinkDirectories interface{}
```

- *Type:* interface{}

Boolean flag indicating whether symbolically linked directories should be excluded during the creation of the archive. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#exclude_symlink_directories DataArchiveFile#exclude_symlink_directories}

---

##### `OutputFileMode`<sup>Optional</sup> <a name="OutputFileMode" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.outputFileMode"></a>

```go
OutputFileMode *string
```

- *Type:* *string

String that specifies the octal file mode for all archived files.

For example: `"0666"`. Setting this will ensure that cross platform usage of this module will not vary the modes of archived files (and ultimately checksums) resulting in more deterministic behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#output_file_mode DataArchiveFile#output_file_mode}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.source"></a>

```go
Source interface{}
```

- *Type:* interface{}

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#source DataArchiveFile#source}

---

##### `SourceContent`<sup>Optional</sup> <a name="SourceContent" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.sourceContent"></a>

```go
SourceContent *string
```

- *Type:* *string

Add only this content to the archive with `source_content_filename` as the filename.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#source_content DataArchiveFile#source_content}

---

##### `SourceContentFilename`<sup>Optional</sup> <a name="SourceContentFilename" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.sourceContentFilename"></a>

```go
SourceContentFilename *string
```

- *Type:* *string

Set this as the filename when using `source_content`.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#source_content_filename DataArchiveFile#source_content_filename}

---

##### `SourceDir`<sup>Optional</sup> <a name="SourceDir" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.sourceDir"></a>

```go
SourceDir *string
```

- *Type:* *string

Package entire contents of this directory into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#source_dir DataArchiveFile#source_dir}

---

##### `SourceFile`<sup>Optional</sup> <a name="SourceFile" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileConfig.property.sourceFile"></a>

```go
SourceFile *string
```

- *Type:* *string

Package this file into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#source_file DataArchiveFile#source_file}

---

### DataArchiveFileSource <a name="DataArchiveFileSource" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-archive-go/archive/v11/dataarchivefile"

&dataarchivefile.DataArchiveFileSource {
	Content: *string,
	Filename: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSource.property.content">Content</a></code> | <code>*string</code> | Add this content to the archive with `filename` as the filename. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSource.property.filename">Filename</a></code> | <code>*string</code> | Set this as the filename when declaring a `source`. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSource.property.content"></a>

```go
Content *string
```

- *Type:* *string

Add this content to the archive with `filename` as the filename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#content DataArchiveFile#content}

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSource.property.filename"></a>

```go
Filename *string
```

- *Type:* *string

Set this as the filename when declaring a `source`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#filename DataArchiveFile#filename}

---

## Classes <a name="Classes" id="Classes"></a>

### DataArchiveFileSourceList <a name="DataArchiveFileSourceList" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-archive-go/archive/v11/dataarchivefile"

dataarchivefile.NewDataArchiveFileSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataArchiveFileSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.get"></a>

```go
func Get(index *f64) DataArchiveFileSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataArchiveFileSourceOutputReference <a name="DataArchiveFileSourceOutputReference" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-archive-go/archive/v11/dataarchivefile"

dataarchivefile.NewDataArchiveFileSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataArchiveFileSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.filenameInput">FilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.filename">Filename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.filenameInput"></a>

```go
func FilenameInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.filename"></a>

```go
func Filename() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-archive.dataArchiveFile.DataArchiveFileSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



