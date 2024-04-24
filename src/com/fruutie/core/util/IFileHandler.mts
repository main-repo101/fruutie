

import {FileType_t} from "./FileType.mts";

export namespace com$fruutie$core$util {
    export interface IFileHandler {
        read(filePath: string, dataType: FileType_t): any;
        write(filePath: string, data: any, dataType: FileType_t): void;
    }
}


export type IFileHandler = com$fruutie$core$util.IFileHandler;
