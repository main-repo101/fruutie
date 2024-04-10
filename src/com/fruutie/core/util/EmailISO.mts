export namespace com$fruutie$core$util {
    export abstract class EmailISO {
        private constructor() {

        }
        public static readonly RFC_5321 = Object.freeze({
            CODE: 0b0000_0001,
            VALUE: 'RFC_5321',
            DESCRIPTION: '(SMTP) Simple Mail Transfer Protocol',
            REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        });
        public static readonly RFC_5322 = Object.freeze({
            CODE: 0b0000_0010,
            VALUE: 'RFC_5322',
            DESCRIPTION: '(IMP) Internet Message Protocol',
            REGEX: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        });
        public static readonly RFC_822 = Object.freeze({
            CODE: 0b0000_0100,
            VALUE: 'RFC_822',
            DESCRIPTION: '(ARPAITMP) Advance Research Projects Agency Internet Text Messages Protocol',
            REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        });
        public static readonly DEFAULT = EmailISO.RFC_5321;
    }
}

export import EmailISO = com$fruutie$core$util.EmailISO;