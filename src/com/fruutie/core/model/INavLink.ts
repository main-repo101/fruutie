

export namespace com$fruutie$core$model {
    export interface INavLink {
        to: string;
        name: string;
        isActive: boolean;
        className: string;
    }
}

export type INavLink = com$fruutie$core$model.INavLink;
export default INavLink;