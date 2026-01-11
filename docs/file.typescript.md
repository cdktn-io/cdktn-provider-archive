# `file` Submodule <a name="`file` Submodule" id="@cdktn/provider-archive.file"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### File <a name="File" id="@cdktn/provider-archive.file.File"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file archive_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-archive.file.File.Initializer"></a>

```typescript
import { file } from '@cdktn/provider-archive'

new file.File(scope: Construct, id: string, config: FileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-archive.file.FileConfig">FileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-archive.file.File.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-archive.file.File.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-archive.file.File.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-archive.file.FileConfig">FileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-archive.file.File.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-archive.file.File.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-archive.file.File.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-archive.file.File.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-archive.file.File.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-archive.file.File.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-archive.file.File.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-archive.file.File.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-archive.file.File.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetExcludeSymlinkDirectories">resetExcludeSymlinkDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetOutputFileMode">resetOutputFileMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetSourceContent">resetSourceContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetSourceContentFilename">resetSourceContentFilename</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetSourceDir">resetSourceDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetSourceFile">resetSourceFile</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-archive.file.File.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-archive.file.File.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-archive.file.File.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-archive.file.File.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-archive.file.File.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-archive.file.File.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-archive.file.File.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-archive.file.File.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-archive.file.File.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-archive.file.File.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-archive.file.File.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-archive.file.File.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-archive.file.File.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.File.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-archive.file.File.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.File.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-archive.file.File.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.File.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-archive.file.File.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.File.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-archive.file.File.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.File.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-archive.file.File.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.File.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-archive.file.File.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.File.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-archive.file.File.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.File.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-archive.file.File.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.File.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-archive.file.File.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-archive.file.File.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-archive.file.File.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-archive.file.File.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-archive.file.File.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.File.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-archive.file.File.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-archive.file.File.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-archive.file.File.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-archive.file.File.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-archive.file.File.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-archive.file.File.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-archive.file.File.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSource` <a name="putSource" id="@cdktn/provider-archive.file.File.putSource"></a>

```typescript
public putSource(value: IResolvable | FileSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-archive.file.File.putSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>[]

---

##### `resetExcludes` <a name="resetExcludes" id="@cdktn/provider-archive.file.File.resetExcludes"></a>

```typescript
public resetExcludes(): void
```

##### `resetExcludeSymlinkDirectories` <a name="resetExcludeSymlinkDirectories" id="@cdktn/provider-archive.file.File.resetExcludeSymlinkDirectories"></a>

```typescript
public resetExcludeSymlinkDirectories(): void
```

##### `resetOutputFileMode` <a name="resetOutputFileMode" id="@cdktn/provider-archive.file.File.resetOutputFileMode"></a>

```typescript
public resetOutputFileMode(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-archive.file.File.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetSourceContent` <a name="resetSourceContent" id="@cdktn/provider-archive.file.File.resetSourceContent"></a>

```typescript
public resetSourceContent(): void
```

##### `resetSourceContentFilename` <a name="resetSourceContentFilename" id="@cdktn/provider-archive.file.File.resetSourceContentFilename"></a>

```typescript
public resetSourceContentFilename(): void
```

##### `resetSourceDir` <a name="resetSourceDir" id="@cdktn/provider-archive.file.File.resetSourceDir"></a>

```typescript
public resetSourceDir(): void
```

##### `resetSourceFile` <a name="resetSourceFile" id="@cdktn/provider-archive.file.File.resetSourceFile"></a>

```typescript
public resetSourceFile(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-archive.file.File.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-archive.file.File.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a File resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-archive.file.File.isConstruct"></a>

```typescript
import { file } from '@cdktn/provider-archive'

file.File.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-archive.file.File.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-archive.file.File.isTerraformElement"></a>

```typescript
import { file } from '@cdktn/provider-archive'

file.File.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-archive.file.File.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-archive.file.File.isTerraformResource"></a>

```typescript
import { file } from '@cdktn/provider-archive'

file.File.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-archive.file.File.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-archive.file.File.generateConfigForImport"></a>

```typescript
import { file } from '@cdktn/provider-archive'

file.File.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a File resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-archive.file.File.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-archive.file.File.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the File to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-archive.file.File.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing File that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-archive.file.File.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the File to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.File.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-archive.file.File.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputBase64Sha256">outputBase64Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputBase64Sha512">outputBase64Sha512</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputMd5">outputMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputSha">outputSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputSha256">outputSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputSha512">outputSha512</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputSize">outputSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.source">source</a></code> | <code><a href="#@cdktn/provider-archive.file.FileSourceList">FileSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.excludesInput">excludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.excludeSymlinkDirectoriesInput">excludeSymlinkDirectoriesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputFileModeInput">outputFileModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputPathInput">outputPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceContentFilenameInput">sourceContentFilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceContentInput">sourceContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceDirInput">sourceDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceFileInput">sourceFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceInput">sourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.excludes">excludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.excludeSymlinkDirectories">excludeSymlinkDirectories</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputFileMode">outputFileMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputPath">outputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceContent">sourceContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceContentFilename">sourceContentFilename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceDir">sourceDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceFile">sourceFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-archive.file.File.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-archive.file.File.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-archive.file.File.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-archive.file.File.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-archive.file.File.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-archive.file.File.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-archive.file.File.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-archive.file.File.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-archive.file.File.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-archive.file.File.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-archive.file.File.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-archive.file.File.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-archive.file.File.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-archive.file.File.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-archive.file.File.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `outputBase64Sha256`<sup>Required</sup> <a name="outputBase64Sha256" id="@cdktn/provider-archive.file.File.property.outputBase64Sha256"></a>

```typescript
public readonly outputBase64Sha256: string;
```

- *Type:* string

---

##### `outputBase64Sha512`<sup>Required</sup> <a name="outputBase64Sha512" id="@cdktn/provider-archive.file.File.property.outputBase64Sha512"></a>

```typescript
public readonly outputBase64Sha512: string;
```

- *Type:* string

---

##### `outputMd5`<sup>Required</sup> <a name="outputMd5" id="@cdktn/provider-archive.file.File.property.outputMd5"></a>

```typescript
public readonly outputMd5: string;
```

- *Type:* string

---

##### `outputSha`<sup>Required</sup> <a name="outputSha" id="@cdktn/provider-archive.file.File.property.outputSha"></a>

```typescript
public readonly outputSha: string;
```

- *Type:* string

---

##### `outputSha256`<sup>Required</sup> <a name="outputSha256" id="@cdktn/provider-archive.file.File.property.outputSha256"></a>

```typescript
public readonly outputSha256: string;
```

- *Type:* string

---

##### `outputSha512`<sup>Required</sup> <a name="outputSha512" id="@cdktn/provider-archive.file.File.property.outputSha512"></a>

```typescript
public readonly outputSha512: string;
```

- *Type:* string

---

##### `outputSize`<sup>Required</sup> <a name="outputSize" id="@cdktn/provider-archive.file.File.property.outputSize"></a>

```typescript
public readonly outputSize: number;
```

- *Type:* number

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-archive.file.File.property.source"></a>

```typescript
public readonly source: FileSourceList;
```

- *Type:* <a href="#@cdktn/provider-archive.file.FileSourceList">FileSourceList</a>

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktn/provider-archive.file.File.property.excludesInput"></a>

```typescript
public readonly excludesInput: string[];
```

- *Type:* string[]

---

##### `excludeSymlinkDirectoriesInput`<sup>Optional</sup> <a name="excludeSymlinkDirectoriesInput" id="@cdktn/provider-archive.file.File.property.excludeSymlinkDirectoriesInput"></a>

```typescript
public readonly excludeSymlinkDirectoriesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `outputFileModeInput`<sup>Optional</sup> <a name="outputFileModeInput" id="@cdktn/provider-archive.file.File.property.outputFileModeInput"></a>

```typescript
public readonly outputFileModeInput: string;
```

- *Type:* string

---

##### `outputPathInput`<sup>Optional</sup> <a name="outputPathInput" id="@cdktn/provider-archive.file.File.property.outputPathInput"></a>

```typescript
public readonly outputPathInput: string;
```

- *Type:* string

---

##### `sourceContentFilenameInput`<sup>Optional</sup> <a name="sourceContentFilenameInput" id="@cdktn/provider-archive.file.File.property.sourceContentFilenameInput"></a>

```typescript
public readonly sourceContentFilenameInput: string;
```

- *Type:* string

---

##### `sourceContentInput`<sup>Optional</sup> <a name="sourceContentInput" id="@cdktn/provider-archive.file.File.property.sourceContentInput"></a>

```typescript
public readonly sourceContentInput: string;
```

- *Type:* string

---

##### `sourceDirInput`<sup>Optional</sup> <a name="sourceDirInput" id="@cdktn/provider-archive.file.File.property.sourceDirInput"></a>

```typescript
public readonly sourceDirInput: string;
```

- *Type:* string

---

##### `sourceFileInput`<sup>Optional</sup> <a name="sourceFileInput" id="@cdktn/provider-archive.file.File.property.sourceFileInput"></a>

```typescript
public readonly sourceFileInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-archive.file.File.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | FileSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-archive.file.File.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-archive.file.File.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

---

##### `excludeSymlinkDirectories`<sup>Required</sup> <a name="excludeSymlinkDirectories" id="@cdktn/provider-archive.file.File.property.excludeSymlinkDirectories"></a>

```typescript
public readonly excludeSymlinkDirectories: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `outputFileMode`<sup>Required</sup> <a name="outputFileMode" id="@cdktn/provider-archive.file.File.property.outputFileMode"></a>

```typescript
public readonly outputFileMode: string;
```

- *Type:* string

---

##### `outputPath`<sup>Required</sup> <a name="outputPath" id="@cdktn/provider-archive.file.File.property.outputPath"></a>

```typescript
public readonly outputPath: string;
```

- *Type:* string

---

##### `sourceContent`<sup>Required</sup> <a name="sourceContent" id="@cdktn/provider-archive.file.File.property.sourceContent"></a>

```typescript
public readonly sourceContent: string;
```

- *Type:* string

---

##### `sourceContentFilename`<sup>Required</sup> <a name="sourceContentFilename" id="@cdktn/provider-archive.file.File.property.sourceContentFilename"></a>

```typescript
public readonly sourceContentFilename: string;
```

- *Type:* string

---

##### `sourceDir`<sup>Required</sup> <a name="sourceDir" id="@cdktn/provider-archive.file.File.property.sourceDir"></a>

```typescript
public readonly sourceDir: string;
```

- *Type:* string

---

##### `sourceFile`<sup>Required</sup> <a name="sourceFile" id="@cdktn/provider-archive.file.File.property.sourceFile"></a>

```typescript
public readonly sourceFile: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-archive.file.File.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.File.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-archive.file.File.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FileConfig <a name="FileConfig" id="@cdktn/provider-archive.file.FileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-archive.file.FileConfig.Initializer"></a>

```typescript
import { file } from '@cdktn/provider-archive'

const fileConfig: file.FileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.outputPath">outputPath</a></code> | <code>string</code> | The output of the archive file. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.type">type</a></code> | <code>string</code> | The type of archive to generate. NOTE: `zip` and `tar.gz` is supported. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.excludes">excludes</a></code> | <code>string[]</code> | Specify files/directories to ignore when reading the `source_dir`. Supports glob file matching patterns including doublestar/globstar (`**`) patterns. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.excludeSymlinkDirectories">excludeSymlinkDirectories</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean flag indicating whether symbolically linked directories should be excluded during the creation of the archive. Defaults to `false`. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.outputFileMode">outputFileMode</a></code> | <code>string</code> | String that specifies the octal file mode for all archived files. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.source">source</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>[]</code> | source block. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.sourceContent">sourceContent</a></code> | <code>string</code> | Add only this content to the archive with `source_content_filename` as the filename. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.sourceContentFilename">sourceContentFilename</a></code> | <code>string</code> | Set this as the filename when using `source_content`. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.sourceDir">sourceDir</a></code> | <code>string</code> | Package entire contents of this directory into the archive. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.sourceFile">sourceFile</a></code> | <code>string</code> | Package this file into the archive. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-archive.file.FileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-archive.file.FileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-archive.file.FileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-archive.file.FileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-archive.file.FileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-archive.file.FileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-archive.file.FileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `outputPath`<sup>Required</sup> <a name="outputPath" id="@cdktn/provider-archive.file.FileConfig.property.outputPath"></a>

```typescript
public readonly outputPath: string;
```

- *Type:* string

The output of the archive file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#output_path File#output_path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-archive.file.FileConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of archive to generate. NOTE: `zip` and `tar.gz` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#type File#type}

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktn/provider-archive.file.FileConfig.property.excludes"></a>

```typescript
public readonly excludes: string[];
```

- *Type:* string[]

Specify files/directories to ignore when reading the `source_dir`. Supports glob file matching patterns including doublestar/globstar (`**`) patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#excludes File#excludes}

---

##### `excludeSymlinkDirectories`<sup>Optional</sup> <a name="excludeSymlinkDirectories" id="@cdktn/provider-archive.file.FileConfig.property.excludeSymlinkDirectories"></a>

```typescript
public readonly excludeSymlinkDirectories: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean flag indicating whether symbolically linked directories should be excluded during the creation of the archive. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#exclude_symlink_directories File#exclude_symlink_directories}

---

##### `outputFileMode`<sup>Optional</sup> <a name="outputFileMode" id="@cdktn/provider-archive.file.FileConfig.property.outputFileMode"></a>

```typescript
public readonly outputFileMode: string;
```

- *Type:* string

String that specifies the octal file mode for all archived files.

For example: `"0666"`. Setting this will ensure that cross platform usage of this module will not vary the modes of archived files (and ultimately checksums) resulting in more deterministic behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#output_file_mode File#output_file_mode}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-archive.file.FileConfig.property.source"></a>

```typescript
public readonly source: IResolvable | FileSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>[]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source File#source}

---

##### `sourceContent`<sup>Optional</sup> <a name="sourceContent" id="@cdktn/provider-archive.file.FileConfig.property.sourceContent"></a>

```typescript
public readonly sourceContent: string;
```

- *Type:* string

Add only this content to the archive with `source_content_filename` as the filename.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source_content File#source_content}

---

##### `sourceContentFilename`<sup>Optional</sup> <a name="sourceContentFilename" id="@cdktn/provider-archive.file.FileConfig.property.sourceContentFilename"></a>

```typescript
public readonly sourceContentFilename: string;
```

- *Type:* string

Set this as the filename when using `source_content`.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source_content_filename File#source_content_filename}

---

##### `sourceDir`<sup>Optional</sup> <a name="sourceDir" id="@cdktn/provider-archive.file.FileConfig.property.sourceDir"></a>

```typescript
public readonly sourceDir: string;
```

- *Type:* string

Package entire contents of this directory into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source_dir File#source_dir}

---

##### `sourceFile`<sup>Optional</sup> <a name="sourceFile" id="@cdktn/provider-archive.file.FileConfig.property.sourceFile"></a>

```typescript
public readonly sourceFile: string;
```

- *Type:* string

Package this file into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source_file File#source_file}

---

### FileSource <a name="FileSource" id="@cdktn/provider-archive.file.FileSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-archive.file.FileSource.Initializer"></a>

```typescript
import { file } from '@cdktn/provider-archive'

const fileSource: file.FileSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSource.property.content">content</a></code> | <code>string</code> | Add this content to the archive with `filename` as the filename. |
| <code><a href="#@cdktn/provider-archive.file.FileSource.property.filename">filename</a></code> | <code>string</code> | Set this as the filename when declaring a `source`. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-archive.file.FileSource.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Add this content to the archive with `filename` as the filename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#content File#content}

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktn/provider-archive.file.FileSource.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

Set this as the filename when declaring a `source`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#filename File#filename}

---

## Classes <a name="Classes" id="Classes"></a>

### FileSourceList <a name="FileSourceList" id="@cdktn/provider-archive.file.FileSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-archive.file.FileSourceList.Initializer"></a>

```typescript
import { file } from '@cdktn/provider-archive'

new file.FileSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-archive.file.FileSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.FileSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-archive.file.FileSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-archive.file.FileSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-archive.file.FileSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-archive.file.FileSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-archive.file.FileSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-archive.file.FileSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-archive.file.FileSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-archive.file.FileSourceList.get"></a>

```typescript
public get(index: number): FileSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-archive.file.FileSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-archive.file.FileSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-archive.file.FileSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-archive.file.FileSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FileSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>[]

---


### FileSourceOutputReference <a name="FileSourceOutputReference" id="@cdktn/provider-archive.file.FileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-archive.file.FileSourceOutputReference.Initializer"></a>

```typescript
import { file } from '@cdktn/provider-archive'

new file.FileSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-archive.file.FileSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-archive.file.FileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-archive.file.FileSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-archive.file.FileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-archive.file.FileSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-archive.file.FileSource">FileSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FileSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>

---



