import bcrypt from 'bcrypt';
import { com$fruutie$core } from '../com$fruutie$core.ts';
import { com$fruutie$core$util } from '../util/com$fruutie$core$util.ts';

const { Status } = com$fruutie$core;
const { EmailISO } = com$fruutie$core$util;

export namespace com$fruutie$core$model {
    export class User {
        public constructor( 
            username: string | null = null,
            email: string | null = null,
            password?: string | null
        ) {
            this.setUsername( username );
            this.setEmail( email );
            this.setPassword( password );
        }
        public setUsername( username?: string | null ): void {
            if( username && !(/^\s*$/.test( username = username.trim() ))
                && username !== this.username
            ) this.username = username;
            return;
        }
        public getUsername(): string {
            return this.username;
        }
        public /*private*/ static isEmailValid( email?: string | null, emailISO: RegExp | undefined | null = null ): boolean {
            if( !emailISO )
                emailISO = EmailISO.RFC_5322.REGEX;
            return emailISO.test( email?? '' );
        }
        public isEmailValid(): boolean {
            return User.isEmailValid( this.email );
        }
        public setEmail( email?: string | null ): void {
            if( email && !( /^\s*$/.test(email=email.trim()) ) 
                && User.isEmailValid( email )
            ) {
                this.email = email;
            }
            return;
        }
        public getEmail():string {
            return this.email;
        }
        public setPassword(password?:string|null): void {
            if( password )
                this.password = User.hashPassword(password);
            return;
        }
        public getPassword(): string {
            return this.password;
        }
        private static hashPassword(password:string, saltRound:number = 8):string {
            return bcrypt.hashSync( password, saltRound );
        }
        public validatePassword(password: string): boolean {
            return bcrypt.compareSync(password, this.password);
        }
        private username: string = Status.NA.VALUE;
        private email: string = Status.NA.VALUE;
        private password: string = Status.NA.VALUE;
    }
}

export default com$fruutie$core$model.User;