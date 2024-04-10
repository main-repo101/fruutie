
export namespace com$fruutie$core {
    export abstract class Status {
        private constructor() {
        }
        public static readonly SUCCESS = Object.freeze({
            CODE: 0b0000_0000,
            VALUE: "SUCCESS",
            DESCRIPTION: "Success Status"
        });
        public static readonly UNKNOWN = Object.freeze({
            CODE: 0b0000_0001,
            VALUE: "UNK",
            DESCRIPTION: "Unknown Status"
        });
        public static readonly NA: Readonly<{
            readonly CODE: number;
            readonly VALUE: string;
            readonly DESCRIPTION: string;
        }> = Object.freeze({
            CODE : 0b0000_0010,
            VALUE : "N/a",
            DESCRIPTION : "Not Applicable Status"
        });
        public static readonly WAITING : Readonly<{
            readonly CODE: number;
            readonly VALUE: string;
            readonly DESCRIPTION: string;
        }> = Object.freeze({
            CODE: 0b0000_0100,
            VALUE: "WTG",
            DESCRIPTION: "Waiting Status"
        });
        public static readonly ERROR : Readonly<{
            readonly CODE: number;
            readonly VALUE: string;
            readonly DESCRIPTION: string;
        }> = Object.freeze({
            CODE: 0b0000_1000,
            VALUE: "ERR",
            DESCRIPTION: "Error Status"
        });
        public static readonly WARNING : Readonly<{
            readonly CODE: number;
            readonly VALUE: string;
            readonly DESCRIPTION: string;
        }> = Object.freeze({
            CODE: 0b0001_0000,
            VALUE: "WARN",
            DESCRIPTION: "Warning Status"
        });
    }
}

export import Status = com$fruutie$core.Status;
