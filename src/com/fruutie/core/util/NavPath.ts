import { INavPath } from "./INavPath";


export namespace com$fruutie$core$util {
    export class NavPath {
        public static readonly ERROR_PAGE_NOT_FOUND: Readonly<INavPath> = Object.freeze({
            CODE: 0b0000_0001,
            URL: '*',
            ID_ATTR: 'ERROR_PAGE_NOT_FOUND',
            DESCRIPTION: 'ERROR_PAGE_NOT_FOUND'
        });
        public static readonly HOME_PAGE : Readonly<INavPath> = Object.freeze({
            CODE: 0b0000_0010,
            URL: '/',
            ID_ATTR: 'HOME_PAGE',
            DESCRIPTION: 'HOME_PAGE'
        });
        public static readonly PRODUCT_PAGE : Readonly<INavPath> = Object.freeze({
            CODE: 0b0000_0100,
            URL: '/product',
            ID_ATTR: 'PRODUCT_PAGE',
            DESCRIPTION: 'PRODUCT_PAGE'
        });
        public static readonly SERVICE_PAGE : Readonly<INavPath> = Object.freeze({
            CODE: 0b0000_1000,
            URL: '/services',
            ID_ATTR: 'SERVICE_PAGE',
            DESCRIPTION: 'SERVICE_PAGE'
        });
        public static readonly ABOUT_US_PAGE : Readonly<INavPath> = Object.freeze({
            CODE: 0b0001_0000,
            URL: '/about-us',
            ID_ATTR: 'ABOUT_US_PAGE',
            DESCRIPTION: 'ABOUT_US_PAGE'
        });
        public static readonly SIGN_IN_PAGE : Readonly<INavPath> = Object.freeze({
            CODE: 0b0010_0000,
            URL: '/sign-in',
            ID_ATTR: 'SIGN_IN_PAGE',
            DESCRIPTION: 'SIGN_IN_PAGE'
        });
        public static readonly ABOUT_US_INTRO : Readonly<INavPath> = Object.freeze({
            CODE: 0b0010_0000,
            URL: '/about-us#ABOUT_INTRO',
            ID_ATTR: 'ABOUT_US_INTRO',
            DESCRIPTION: 'About us introduction HASH_ID'
        });
        public static readonly ABOUT_US_PRODUCT_OVERVIEW : Readonly<INavPath> = Object.freeze({
            CODE: 0b0100_0000,
            URL: '/about-us#ABOUT_US_PRODUCT_OVERVIEW',
            ID_ATTR: 'ABOUT_US_PRODUCT_OVERVIEW',
            DESCRIPTION: 'About us Company overview HASH_ID'
        });
        public static readonly ABOUT_US_TEAM_MEMBER : Readonly<INavPath> = Object.freeze({
            CODE: 0b1000_0000,
            URL: '/about-us#ABOUT_US_TEAM_MEMBER',
            ID_ATTR: 'ABOUT_US_TEAM_MEMBER',
            DESCRIPTION: 'About us Team Member HASH_ID'
        });
        public static readonly ABOUT_US_MISSION : Readonly<INavPath> = Object.freeze({
            CODE: 0b1000_0001,
            URL: '/about-us#ABOUT_US_MISSION',
            ID_ATTR: 'ABOUT_US_MISSION',
            DESCRIPTION: 'About us Mission HASH_ID'
        });
        public static readonly ABOUT_US_CONTACT_US : Readonly<INavPath> = Object.freeze({
            CODE: 0b1000_0010,
            URL: '/about-us#ABOUT_US_CONTACT_US',
            ID_ATTR: 'ABOUT_US_CONTACT_US',
            DESCRIPTION: 'About us Contact Us HASH_ID'
        });
        public static readonly PRODUCT_JUICY_FRUIT : Readonly<INavPath> = Object.freeze({
            CODE: 0b1000_0100,
            URL: '/product#PRODUCT_JUICY_FRUIT',
            ID_ATTR: 'PRODUCT_JUICY_FRUIT',
            DESCRIPTION: 'Product Juicy Fruit HASH_ID'
        });
        public static readonly PRODUCT_DRIED_FRUIT : Readonly<INavPath> = Object.freeze({
            CODE: 0b1000_1000,
            URL: '/product#PRODUCT_DRIED_FRUIT',
            ID_ATTR: 'PRODUCT_DRIED_FRUIT',
            DESCRIPTION: 'Product Dried Fruit HASH_ID'
        });
        public static readonly PRODUCT_CANDY_FRUIT : Readonly<INavPath> = Object.freeze({
            CODE: 0b1001_0000,
            URL: '/product#PRODUCT_CANDY_FRUIT',
            ID_ATTR: 'PRODUCT_CANDY_FRUIT',
            DESCRIPTION: 'Product Candy Fruit HASH_ID'
        });
        public static readonly PRODUCT_HOT : Readonly<INavPath> = Object.freeze({
            CODE: 0b1010_0000,
            URL: '/product/more/hot-product',
            ID_ATTR: 'MORE_PRODUCT_PAGE',
            DESCRIPTION: 'Hot Product HASH_ID'
        });
        public static readonly PRODUCT_ON_SALE : Readonly<INavPath> = Object.freeze({
            CODE: 0b1100_0000,
            URL: '/product/more/on-sale',
            ID_ATTR: 'MORE_PRODUCT_PAGE',
            DESCRIPTION: 'On Sale Product HASH_ID'
        });
    }
}

export default com$fruutie$core$util.NavPath;