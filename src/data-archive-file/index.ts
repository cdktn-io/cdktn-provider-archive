/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataArchiveFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Boolean flag indicating whether symbolically linked directories should be excluded during the creation of the archive. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#exclude_symlink_directories DataArchiveFile#exclude_symlink_directories}
  */
  readonly excludeSymlinkDirectories?: boolean | cdktf.IResolvable;
  /**
  * Specify files/directories to ignore when reading the `source_dir`. Supports glob file matching patterns including doublestar/globstar (`**`) patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#excludes DataArchiveFile#excludes}
  */
  readonly excludes?: string[];
  /**
  * String that specifies the octal file mode for all archived files. For example: `"0666"`. Setting this will ensure that cross platform usage of this module will not vary the modes of archived files (and ultimately checksums) resulting in more deterministic behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#output_file_mode DataArchiveFile#output_file_mode}
  */
  readonly outputFileMode?: string;
  /**
  * The output of the archive file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#output_path DataArchiveFile#output_path}
  */
  readonly outputPath: string;
  /**
  * Add only this content to the archive with `source_content_filename` as the filename. One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#source_content DataArchiveFile#source_content}
  */
  readonly sourceContent?: string;
  /**
  * Set this as the filename when using `source_content`. One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#source_content_filename DataArchiveFile#source_content_filename}
  */
  readonly sourceContentFilename?: string;
  /**
  * Package entire contents of this directory into the archive. One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#source_dir DataArchiveFile#source_dir}
  */
  readonly sourceDir?: string;
  /**
  * Package this file into the archive. One and only one of `source`, `source_content_filename` (with `source_content`), `source_file`, or `source_dir` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#source_file DataArchiveFile#source_file}
  */
  readonly sourceFile?: string;
  /**
  * The type of archive to generate. NOTE: `zip` and `tar.gz` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#type DataArchiveFile#type}
  */
  readonly type: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#source DataArchiveFile#source}
  */
  readonly source?: DataArchiveFileSource[] | cdktf.IResolvable;
}
export interface DataArchiveFileSource {
  /**
  * Add this content to the archive with `filename` as the filename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#content DataArchiveFile#content}
  */
  readonly content: string;
  /**
  * Set this as the filename when declaring a `source`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#filename DataArchiveFile#filename}
  */
  readonly filename: string;
}

export function dataArchiveFileSourceToTerraform(struct?: DataArchiveFileSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}


export function dataArchiveFileSourceToHclTerraform(struct?: DataArchiveFileSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataArchiveFileSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataArchiveFileSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataArchiveFileSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._filename = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._filename = value.filename;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }
}

export class DataArchiveFileSourceList extends cdktf.ComplexList {
  public internalValue? : DataArchiveFileSource[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataArchiveFileSourceOutputReference {
    return new DataArchiveFileSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file archive_file}
*/
export class DataArchiveFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "archive_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataArchiveFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataArchiveFile to import
  * @param importFromId The id of the existing DataArchiveFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataArchiveFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "archive_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/archive/2.7.1/docs/data-sources/file archive_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataArchiveFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataArchiveFileConfig) {
    super(scope, id, {
      terraformResourceType: 'archive_file',
      terraformGeneratorMetadata: {
        providerName: 'archive',
        providerVersion: '2.7.1',
        providerVersionConstraint: '~> 2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._excludeSymlinkDirectories = config.excludeSymlinkDirectories;
    this._excludes = config.excludes;
    this._outputFileMode = config.outputFileMode;
    this._outputPath = config.outputPath;
    this._sourceContent = config.sourceContent;
    this._sourceContentFilename = config.sourceContentFilename;
    this._sourceDir = config.sourceDir;
    this._sourceFile = config.sourceFile;
    this._type = config.type;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_symlink_directories - computed: false, optional: true, required: false
  private _excludeSymlinkDirectories?: boolean | cdktf.IResolvable; 
  public get excludeSymlinkDirectories() {
    return this.getBooleanAttribute('exclude_symlink_directories');
  }
  public set excludeSymlinkDirectories(value: boolean | cdktf.IResolvable) {
    this._excludeSymlinkDirectories = value;
  }
  public resetExcludeSymlinkDirectories() {
    this._excludeSymlinkDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSymlinkDirectoriesInput() {
    return this._excludeSymlinkDirectories;
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return cdktf.Fn.tolist(this.getListAttribute('excludes'));
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // output_base64sha256 - computed: true, optional: false, required: false
  public get outputBase64Sha256() {
    return this.getStringAttribute('output_base64sha256');
  }

  // output_base64sha512 - computed: true, optional: false, required: false
  public get outputBase64Sha512() {
    return this.getStringAttribute('output_base64sha512');
  }

  // output_file_mode - computed: false, optional: true, required: false
  private _outputFileMode?: string; 
  public get outputFileMode() {
    return this.getStringAttribute('output_file_mode');
  }
  public set outputFileMode(value: string) {
    this._outputFileMode = value;
  }
  public resetOutputFileMode() {
    this._outputFileMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileModeInput() {
    return this._outputFileMode;
  }

  // output_md5 - computed: true, optional: false, required: false
  public get outputMd5() {
    return this.getStringAttribute('output_md5');
  }

  // output_path - computed: false, optional: false, required: true
  private _outputPath?: string; 
  public get outputPath() {
    return this.getStringAttribute('output_path');
  }
  public set outputPath(value: string) {
    this._outputPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPathInput() {
    return this._outputPath;
  }

  // output_sha - computed: true, optional: false, required: false
  public get outputSha() {
    return this.getStringAttribute('output_sha');
  }

  // output_sha256 - computed: true, optional: false, required: false
  public get outputSha256() {
    return this.getStringAttribute('output_sha256');
  }

  // output_sha512 - computed: true, optional: false, required: false
  public get outputSha512() {
    return this.getStringAttribute('output_sha512');
  }

  // output_size - computed: true, optional: false, required: false
  public get outputSize() {
    return this.getNumberAttribute('output_size');
  }

  // source_content - computed: false, optional: true, required: false
  private _sourceContent?: string; 
  public get sourceContent() {
    return this.getStringAttribute('source_content');
  }
  public set sourceContent(value: string) {
    this._sourceContent = value;
  }
  public resetSourceContent() {
    this._sourceContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceContentInput() {
    return this._sourceContent;
  }

  // source_content_filename - computed: false, optional: true, required: false
  private _sourceContentFilename?: string; 
  public get sourceContentFilename() {
    return this.getStringAttribute('source_content_filename');
  }
  public set sourceContentFilename(value: string) {
    this._sourceContentFilename = value;
  }
  public resetSourceContentFilename() {
    this._sourceContentFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceContentFilenameInput() {
    return this._sourceContentFilename;
  }

  // source_dir - computed: false, optional: true, required: false
  private _sourceDir?: string; 
  public get sourceDir() {
    return this.getStringAttribute('source_dir');
  }
  public set sourceDir(value: string) {
    this._sourceDir = value;
  }
  public resetSourceDir() {
    this._sourceDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDirInput() {
    return this._sourceDir;
  }

  // source_file - computed: false, optional: true, required: false
  private _sourceFile?: string; 
  public get sourceFile() {
    return this.getStringAttribute('source_file');
  }
  public set sourceFile(value: string) {
    this._sourceFile = value;
  }
  public resetSourceFile() {
    this._sourceFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileInput() {
    return this._sourceFile;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DataArchiveFileSourceList(this, "source", true);
  public get source() {
    return this._source;
  }
  public putSource(value: DataArchiveFileSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_symlink_directories: cdktf.booleanToTerraform(this._excludeSymlinkDirectories),
      excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludes),
      output_file_mode: cdktf.stringToTerraform(this._outputFileMode),
      output_path: cdktf.stringToTerraform(this._outputPath),
      source_content: cdktf.stringToTerraform(this._sourceContent),
      source_content_filename: cdktf.stringToTerraform(this._sourceContentFilename),
      source_dir: cdktf.stringToTerraform(this._sourceDir),
      source_file: cdktf.stringToTerraform(this._sourceFile),
      type: cdktf.stringToTerraform(this._type),
      source: cdktf.listMapper(dataArchiveFileSourceToTerraform, true)(this._source.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude_symlink_directories: {
        value: cdktf.booleanToHclTerraform(this._excludeSymlinkDirectories),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      excludes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      output_file_mode: {
        value: cdktf.stringToHclTerraform(this._outputFileMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_path: {
        value: cdktf.stringToHclTerraform(this._outputPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_content: {
        value: cdktf.stringToHclTerraform(this._sourceContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_content_filename: {
        value: cdktf.stringToHclTerraform(this._sourceContentFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_dir: {
        value: cdktf.stringToHclTerraform(this._sourceDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_file: {
        value: cdktf.stringToHclTerraform(this._sourceFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.listMapperHcl(dataArchiveFileSourceToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataArchiveFileSourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
