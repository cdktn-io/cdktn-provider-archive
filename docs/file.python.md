# `file` Submodule <a name="`file` Submodule" id="@cdktn/provider-archive.file"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### File <a name="File" id="@cdktn/provider-archive.file.File"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file archive_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-archive.file.File.Initializer"></a>

```python
from cdktn_provider_archive import file

file.File(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  output_path: str,
  type: str,
  excludes: typing.List[str] = None,
  exclude_symlink_directories: bool | IResolvable = None,
  output_file_mode: str = None,
  source: IResolvable | typing.List[FileSource] = None,
  source_content: str = None,
  source_content_filename: str = None,
  source_dir: str = None,
  source_file: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.outputPath">output_path</a></code> | <code>str</code> | The output of the archive file. |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of archive to generate. NOTE: `zip` and `tar.gz` is supported. |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.excludes">excludes</a></code> | <code>typing.List[str]</code> | Specify files/directories to ignore when reading the `source_dir`. Supports glob file matching patterns including doublestar/globstar (`**`) patterns. |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.excludeSymlinkDirectories">exclude_symlink_directories</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean flag indicating whether symbolically linked directories should be excluded during the creation of the archive. Defaults to `false`. |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.outputFileMode">output_file_mode</a></code> | <code>str</code> | String that specifies the octal file mode for all archived files. |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.source">source</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>]</code> | source block. |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.sourceContent">source_content</a></code> | <code>str</code> | Add only this content to the archive with `source_content_filename` as the filename. |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.sourceContentFilename">source_content_filename</a></code> | <code>str</code> | Set this as the filename when using `source_content`. |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.sourceDir">source_dir</a></code> | <code>str</code> | Package entire contents of this directory into the archive. |
| <code><a href="#@cdktn/provider-archive.file.File.Initializer.parameter.sourceFile">source_file</a></code> | <code>str</code> | Package this file into the archive. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-archive.file.File.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-archive.file.File.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-archive.file.File.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-archive.file.File.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-archive.file.File.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-archive.file.File.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-archive.file.File.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-archive.file.File.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-archive.file.File.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `output_path`<sup>Required</sup> <a name="output_path" id="@cdktn/provider-archive.file.File.Initializer.parameter.outputPath"></a>

- *Type:* str

The output of the archive file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#output_path File#output_path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-archive.file.File.Initializer.parameter.type"></a>

- *Type:* str

The type of archive to generate. NOTE: `zip` and `tar.gz` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#type File#type}

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktn/provider-archive.file.File.Initializer.parameter.excludes"></a>

- *Type:* typing.List[str]

Specify files/directories to ignore when reading the `source_dir`. Supports glob file matching patterns including doublestar/globstar (`**`) patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#excludes File#excludes}

---

##### `exclude_symlink_directories`<sup>Optional</sup> <a name="exclude_symlink_directories" id="@cdktn/provider-archive.file.File.Initializer.parameter.excludeSymlinkDirectories"></a>

- *Type:* bool | cdktf.IResolvable

Boolean flag indicating whether symbolically linked directories should be excluded during the creation of the archive. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#exclude_symlink_directories File#exclude_symlink_directories}

---

##### `output_file_mode`<sup>Optional</sup> <a name="output_file_mode" id="@cdktn/provider-archive.file.File.Initializer.parameter.outputFileMode"></a>

- *Type:* str

String that specifies the octal file mode for all archived files.

For example: `"0666"`. Setting this will ensure that cross platform usage of this module will not vary the modes of archived files (and ultimately checksums) resulting in more deterministic behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#output_file_mode File#output_file_mode}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-archive.file.File.Initializer.parameter.source"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source File#source}

---

##### `source_content`<sup>Optional</sup> <a name="source_content" id="@cdktn/provider-archive.file.File.Initializer.parameter.sourceContent"></a>

- *Type:* str

Add only this content to the archive with `source_content_filename` as the filename.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source_content File#source_content}

---

##### `source_content_filename`<sup>Optional</sup> <a name="source_content_filename" id="@cdktn/provider-archive.file.File.Initializer.parameter.sourceContentFilename"></a>

- *Type:* str

Set this as the filename when using `source_content`.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source_content_filename File#source_content_filename}

---

##### `source_dir`<sup>Optional</sup> <a name="source_dir" id="@cdktn/provider-archive.file.File.Initializer.parameter.sourceDir"></a>

- *Type:* str

Package entire contents of this directory into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source_dir File#source_dir}

---

##### `source_file`<sup>Optional</sup> <a name="source_file" id="@cdktn/provider-archive.file.File.Initializer.parameter.sourceFile"></a>

- *Type:* str

Package this file into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source_file File#source_file}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-archive.file.File.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-archive.file.File.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-archive.file.File.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-archive.file.File.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-archive.file.File.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-archive.file.File.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-archive.file.File.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-archive.file.File.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-archive.file.File.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetExcludes">reset_excludes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetExcludeSymlinkDirectories">reset_exclude_symlink_directories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetOutputFileMode">reset_output_file_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetSourceContent">reset_source_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetSourceContentFilename">reset_source_content_filename</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetSourceDir">reset_source_dir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.resetSourceFile">reset_source_file</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-archive.file.File.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-archive.file.File.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-archive.file.File.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-archive.file.File.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-archive.file.File.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-archive.file.File.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-archive.file.File.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-archive.file.File.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-archive.file.File.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-archive.file.File.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-archive.file.File.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-archive.file.File.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-archive.file.File.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.File.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-archive.file.File.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.File.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-archive.file.File.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.File.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-archive.file.File.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.File.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-archive.file.File.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.File.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-archive.file.File.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.File.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-archive.file.File.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.File.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-archive.file.File.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.File.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-archive.file.File.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.File.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-archive.file.File.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-archive.file.File.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-archive.file.File.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-archive.file.File.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-archive.file.File.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.File.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-archive.file.File.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-archive.file.File.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-archive.file.File.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-archive.file.File.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-archive.file.File.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-archive.file.File.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-archive.file.File.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_source` <a name="put_source" id="@cdktn/provider-archive.file.File.putSource"></a>

```python
def put_source(
  value: IResolvable | typing.List[FileSource]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-archive.file.File.putSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>]

---

##### `reset_excludes` <a name="reset_excludes" id="@cdktn/provider-archive.file.File.resetExcludes"></a>

```python
def reset_excludes() -> None
```

##### `reset_exclude_symlink_directories` <a name="reset_exclude_symlink_directories" id="@cdktn/provider-archive.file.File.resetExcludeSymlinkDirectories"></a>

```python
def reset_exclude_symlink_directories() -> None
```

##### `reset_output_file_mode` <a name="reset_output_file_mode" id="@cdktn/provider-archive.file.File.resetOutputFileMode"></a>

```python
def reset_output_file_mode() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktn/provider-archive.file.File.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_source_content` <a name="reset_source_content" id="@cdktn/provider-archive.file.File.resetSourceContent"></a>

```python
def reset_source_content() -> None
```

##### `reset_source_content_filename` <a name="reset_source_content_filename" id="@cdktn/provider-archive.file.File.resetSourceContentFilename"></a>

```python
def reset_source_content_filename() -> None
```

##### `reset_source_dir` <a name="reset_source_dir" id="@cdktn/provider-archive.file.File.resetSourceDir"></a>

```python
def reset_source_dir() -> None
```

##### `reset_source_file` <a name="reset_source_file" id="@cdktn/provider-archive.file.File.resetSourceFile"></a>

```python
def reset_source_file() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-archive.file.File.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-archive.file.File.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a File resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-archive.file.File.isConstruct"></a>

```python
from cdktn_provider_archive import file

file.File.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-archive.file.File.isTerraformElement"></a>

```python
from cdktn_provider_archive import file

file.File.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-archive.file.File.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-archive.file.File.isTerraformResource"></a>

```python
from cdktn_provider_archive import file

file.File.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-archive.file.File.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-archive.file.File.generateConfigForImport"></a>

```python
from cdktn_provider_archive import file

file.File.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a File resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-archive.file.File.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-archive.file.File.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the File to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-archive.file.File.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

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
| <code><a href="#@cdktn/provider-archive.file.File.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputBase64Sha256">output_base64_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputBase64Sha512">output_base64_sha512</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputMd5">output_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputSha">output_sha</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputSha256">output_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputSha512">output_sha512</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputSize">output_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.source">source</a></code> | <code><a href="#@cdktn/provider-archive.file.FileSourceList">FileSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.excludesInput">excludes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.excludeSymlinkDirectoriesInput">exclude_symlink_directories_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputFileModeInput">output_file_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputPathInput">output_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceContentFilenameInput">source_content_filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceContentInput">source_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceDirInput">source_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceFileInput">source_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceInput">source_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.excludeSymlinkDirectories">exclude_symlink_directories</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputFileMode">output_file_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.outputPath">output_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceContent">source_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceContentFilename">source_content_filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceDir">source_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.sourceFile">source_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.File.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-archive.file.File.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-archive.file.File.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-archive.file.File.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-archive.file.File.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-archive.file.File.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-archive.file.File.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-archive.file.File.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-archive.file.File.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-archive.file.File.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-archive.file.File.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-archive.file.File.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-archive.file.File.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-archive.file.File.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-archive.file.File.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-archive.file.File.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `output_base64_sha256`<sup>Required</sup> <a name="output_base64_sha256" id="@cdktn/provider-archive.file.File.property.outputBase64Sha256"></a>

```python
output_base64_sha256: str
```

- *Type:* str

---

##### `output_base64_sha512`<sup>Required</sup> <a name="output_base64_sha512" id="@cdktn/provider-archive.file.File.property.outputBase64Sha512"></a>

```python
output_base64_sha512: str
```

- *Type:* str

---

##### `output_md5`<sup>Required</sup> <a name="output_md5" id="@cdktn/provider-archive.file.File.property.outputMd5"></a>

```python
output_md5: str
```

- *Type:* str

---

##### `output_sha`<sup>Required</sup> <a name="output_sha" id="@cdktn/provider-archive.file.File.property.outputSha"></a>

```python
output_sha: str
```

- *Type:* str

---

##### `output_sha256`<sup>Required</sup> <a name="output_sha256" id="@cdktn/provider-archive.file.File.property.outputSha256"></a>

```python
output_sha256: str
```

- *Type:* str

---

##### `output_sha512`<sup>Required</sup> <a name="output_sha512" id="@cdktn/provider-archive.file.File.property.outputSha512"></a>

```python
output_sha512: str
```

- *Type:* str

---

##### `output_size`<sup>Required</sup> <a name="output_size" id="@cdktn/provider-archive.file.File.property.outputSize"></a>

```python
output_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-archive.file.File.property.source"></a>

```python
source: FileSourceList
```

- *Type:* <a href="#@cdktn/provider-archive.file.FileSourceList">FileSourceList</a>

---

##### `excludes_input`<sup>Optional</sup> <a name="excludes_input" id="@cdktn/provider-archive.file.File.property.excludesInput"></a>

```python
excludes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_symlink_directories_input`<sup>Optional</sup> <a name="exclude_symlink_directories_input" id="@cdktn/provider-archive.file.File.property.excludeSymlinkDirectoriesInput"></a>

```python
exclude_symlink_directories_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `output_file_mode_input`<sup>Optional</sup> <a name="output_file_mode_input" id="@cdktn/provider-archive.file.File.property.outputFileModeInput"></a>

```python
output_file_mode_input: str
```

- *Type:* str

---

##### `output_path_input`<sup>Optional</sup> <a name="output_path_input" id="@cdktn/provider-archive.file.File.property.outputPathInput"></a>

```python
output_path_input: str
```

- *Type:* str

---

##### `source_content_filename_input`<sup>Optional</sup> <a name="source_content_filename_input" id="@cdktn/provider-archive.file.File.property.sourceContentFilenameInput"></a>

```python
source_content_filename_input: str
```

- *Type:* str

---

##### `source_content_input`<sup>Optional</sup> <a name="source_content_input" id="@cdktn/provider-archive.file.File.property.sourceContentInput"></a>

```python
source_content_input: str
```

- *Type:* str

---

##### `source_dir_input`<sup>Optional</sup> <a name="source_dir_input" id="@cdktn/provider-archive.file.File.property.sourceDirInput"></a>

```python
source_dir_input: str
```

- *Type:* str

---

##### `source_file_input`<sup>Optional</sup> <a name="source_file_input" id="@cdktn/provider-archive.file.File.property.sourceFileInput"></a>

```python
source_file_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-archive.file.File.property.sourceInput"></a>

```python
source_input: IResolvable | typing.List[FileSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-archive.file.File.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-archive.file.File.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_symlink_directories`<sup>Required</sup> <a name="exclude_symlink_directories" id="@cdktn/provider-archive.file.File.property.excludeSymlinkDirectories"></a>

```python
exclude_symlink_directories: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `output_file_mode`<sup>Required</sup> <a name="output_file_mode" id="@cdktn/provider-archive.file.File.property.outputFileMode"></a>

```python
output_file_mode: str
```

- *Type:* str

---

##### `output_path`<sup>Required</sup> <a name="output_path" id="@cdktn/provider-archive.file.File.property.outputPath"></a>

```python
output_path: str
```

- *Type:* str

---

##### `source_content`<sup>Required</sup> <a name="source_content" id="@cdktn/provider-archive.file.File.property.sourceContent"></a>

```python
source_content: str
```

- *Type:* str

---

##### `source_content_filename`<sup>Required</sup> <a name="source_content_filename" id="@cdktn/provider-archive.file.File.property.sourceContentFilename"></a>

```python
source_content_filename: str
```

- *Type:* str

---

##### `source_dir`<sup>Required</sup> <a name="source_dir" id="@cdktn/provider-archive.file.File.property.sourceDir"></a>

```python
source_dir: str
```

- *Type:* str

---

##### `source_file`<sup>Required</sup> <a name="source_file" id="@cdktn/provider-archive.file.File.property.sourceFile"></a>

```python
source_file: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-archive.file.File.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.File.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-archive.file.File.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FileConfig <a name="FileConfig" id="@cdktn/provider-archive.file.FileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-archive.file.FileConfig.Initializer"></a>

```python
from cdktn_provider_archive import file

file.FileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  output_path: str,
  type: str,
  excludes: typing.List[str] = None,
  exclude_symlink_directories: bool | IResolvable = None,
  output_file_mode: str = None,
  source: IResolvable | typing.List[FileSource] = None,
  source_content: str = None,
  source_content_filename: str = None,
  source_dir: str = None,
  source_file: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.outputPath">output_path</a></code> | <code>str</code> | The output of the archive file. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.type">type</a></code> | <code>str</code> | The type of archive to generate. NOTE: `zip` and `tar.gz` is supported. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.excludes">excludes</a></code> | <code>typing.List[str]</code> | Specify files/directories to ignore when reading the `source_dir`. Supports glob file matching patterns including doublestar/globstar (`**`) patterns. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.excludeSymlinkDirectories">exclude_symlink_directories</a></code> | <code>bool \| cdktf.IResolvable</code> | Boolean flag indicating whether symbolically linked directories should be excluded during the creation of the archive. Defaults to `false`. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.outputFileMode">output_file_mode</a></code> | <code>str</code> | String that specifies the octal file mode for all archived files. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.source">source</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>]</code> | source block. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.sourceContent">source_content</a></code> | <code>str</code> | Add only this content to the archive with `source_content_filename` as the filename. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.sourceContentFilename">source_content_filename</a></code> | <code>str</code> | Set this as the filename when using `source_content`. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.sourceDir">source_dir</a></code> | <code>str</code> | Package entire contents of this directory into the archive. |
| <code><a href="#@cdktn/provider-archive.file.FileConfig.property.sourceFile">source_file</a></code> | <code>str</code> | Package this file into the archive. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-archive.file.FileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-archive.file.FileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-archive.file.FileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-archive.file.FileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-archive.file.FileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-archive.file.FileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-archive.file.FileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `output_path`<sup>Required</sup> <a name="output_path" id="@cdktn/provider-archive.file.FileConfig.property.outputPath"></a>

```python
output_path: str
```

- *Type:* str

The output of the archive file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#output_path File#output_path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-archive.file.FileConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of archive to generate. NOTE: `zip` and `tar.gz` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#type File#type}

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktn/provider-archive.file.FileConfig.property.excludes"></a>

```python
excludes: typing.List[str]
```

- *Type:* typing.List[str]

Specify files/directories to ignore when reading the `source_dir`. Supports glob file matching patterns including doublestar/globstar (`**`) patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#excludes File#excludes}

---

##### `exclude_symlink_directories`<sup>Optional</sup> <a name="exclude_symlink_directories" id="@cdktn/provider-archive.file.FileConfig.property.excludeSymlinkDirectories"></a>

```python
exclude_symlink_directories: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Boolean flag indicating whether symbolically linked directories should be excluded during the creation of the archive. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#exclude_symlink_directories File#exclude_symlink_directories}

---

##### `output_file_mode`<sup>Optional</sup> <a name="output_file_mode" id="@cdktn/provider-archive.file.FileConfig.property.outputFileMode"></a>

```python
output_file_mode: str
```

- *Type:* str

String that specifies the octal file mode for all archived files.

For example: `"0666"`. Setting this will ensure that cross platform usage of this module will not vary the modes of archived files (and ultimately checksums) resulting in more deterministic behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#output_file_mode File#output_file_mode}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-archive.file.FileConfig.property.source"></a>

```python
source: IResolvable | typing.List[FileSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source File#source}

---

##### `source_content`<sup>Optional</sup> <a name="source_content" id="@cdktn/provider-archive.file.FileConfig.property.sourceContent"></a>

```python
source_content: str
```

- *Type:* str

Add only this content to the archive with `source_content_filename` as the filename.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source_content File#source_content}

---

##### `source_content_filename`<sup>Optional</sup> <a name="source_content_filename" id="@cdktn/provider-archive.file.FileConfig.property.sourceContentFilename"></a>

```python
source_content_filename: str
```

- *Type:* str

Set this as the filename when using `source_content`.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source_content_filename File#source_content_filename}

---

##### `source_dir`<sup>Optional</sup> <a name="source_dir" id="@cdktn/provider-archive.file.FileConfig.property.sourceDir"></a>

```python
source_dir: str
```

- *Type:* str

Package entire contents of this directory into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source_dir File#source_dir}

---

##### `source_file`<sup>Optional</sup> <a name="source_file" id="@cdktn/provider-archive.file.FileConfig.property.sourceFile"></a>

```python
source_file: str
```

- *Type:* str

Package this file into the archive.

One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#source_file File#source_file}

---

### FileSource <a name="FileSource" id="@cdktn/provider-archive.file.FileSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-archive.file.FileSource.Initializer"></a>

```python
from cdktn_provider_archive import file

file.FileSource(
  content: str,
  filename: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSource.property.content">content</a></code> | <code>str</code> | Add this content to the archive with `filename` as the filename. |
| <code><a href="#@cdktn/provider-archive.file.FileSource.property.filename">filename</a></code> | <code>str</code> | Set this as the filename when declaring a `source`. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-archive.file.FileSource.property.content"></a>

```python
content: str
```

- *Type:* str

Add this content to the archive with `filename` as the filename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#content File#content}

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktn/provider-archive.file.FileSource.property.filename"></a>

```python
filename: str
```

- *Type:* str

Set this as the filename when declaring a `source`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/resources/file#filename File#filename}

---

## Classes <a name="Classes" id="Classes"></a>

### FileSourceList <a name="FileSourceList" id="@cdktn/provider-archive.file.FileSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-archive.file.FileSourceList.Initializer"></a>

```python
from cdktn_provider_archive import file

file.FileSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-archive.file.FileSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.FileSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-archive.file.FileSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-archive.file.FileSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-archive.file.FileSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-archive.file.FileSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-archive.file.FileSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-archive.file.FileSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-archive.file.FileSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-archive.file.FileSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FileSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-archive.file.FileSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-archive.file.FileSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-archive.file.FileSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-archive.file.FileSourceList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FileSource]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>]

---


### FileSourceOutputReference <a name="FileSourceOutputReference" id="@cdktn/provider-archive.file.FileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-archive.file.FileSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_archive import file

file.FileSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-archive.file.FileSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-archive.file.FileSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-archive.file.FileSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-archive.file.FileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-archive.file.FileSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-archive.file.FileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-archive.file.FileSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-archive.file.FileSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-archive.file.FileSource">FileSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-archive.file.FileSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FileSource
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-archive.file.FileSource">FileSource</a>

---



