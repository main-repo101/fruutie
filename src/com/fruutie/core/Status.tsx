
export namespace com$fruutie$core {
    export class Status {
        public static readonly UNKNOWN = {
            CODE: 0b0000_0001,
            VALUE: "UNK",
            DESCRIPTION: "Unknown Status"
        }
        public static readonly NA = {
            CODE : 0b0000_0010,
            VALUE : "N/a",
            DESCRIPTION : "Not Applicable Status"
        };
        public static readonly WAITING = {
            CODE: 0b0000_0100,
            VALUE: "WTG",
            DESCRIPTION: "Waiting Status"
        }
        public static readonly ERROR = {
            CODE: 0b0000_1000,
            VALUE: "ERR",
            DESCRIPTION: "Error Status"
        }
        public static readonly WARNING = {
            CODE: 0b0001_0000,
            VALUE: "WARN",
            DESCRIPTION: "Warning Status"
        }
    }
}
