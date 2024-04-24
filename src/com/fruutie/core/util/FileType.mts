


export namespace com$fruutie$core$util {
    // export type FileType = 'json' | 'yaml' | 'xml';

    export enum FileType {
        JSON = 'json',
        YAML = 'yaml',
        XML = 'xml',
    }   
}

// export type FileType = com$fruutie$core$util.FileType;
export type FileType_t = com$fruutie$core$util.FileType;
const { FileType } = com$fruutie$core$util;

export default FileType;