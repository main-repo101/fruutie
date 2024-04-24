
import { Status } from '../Status';
import IEntity from './IEntity.mjs';
import IProduct from './IProduct.mts';

export namespace com$fruutie$core$model {
    
    export class Cart implements IEntity {
        public constructor(
            id?: string | null,
            products?: Array<IProduct> | null
        ) {
            this.id = id ?? Status.WAITING.VALUE;
            this.products = products ?? [];
            this.productQuantity = new Map();
    
            if (products) {
                for (let i = 0; i < products.length; ++i) {
                    // const productId = products[i].id;
                    // this.productQuantity.set(productId, 1);
                    this.addProduct(products[i]);
                }
            }
        }

        // public init( id: string, products?: Array<IProduct> ): void {

        // }
    
        public setId(id?: string | null): void {
            if (id && id !== this.id) {
                this.id = id;
            }
        }
    
        public setProduct(products?: Array<IProduct> | null): void {
            if (products && products !== this.products) {
                this.products = products;
            }
        }
    
        //public addProduct(product?: IProduct | null): boolean {
        //    if (product && !this.products.some(p => p.id === product.id)) {
        //        this.products.push(product);
        //        const productId = product.id;
        //        this.productQuantity.set(productId, (this.productQuantity.get(productId) ?? 0) + 1);
        //        return true;
        //    }
        //    return false;
        //}

        public addProduct(product?: IProduct | null): boolean {
            if (product) {
                const productId = product.id;
                const existingProductIndex = this.products.findIndex(p => p.id === product.id);
        
                if (existingProductIndex === -1) {
                    //REM: Product does not exist in the cart, add it
                    this.products.push(product);
                    this.productQuantity.set(productId,  1);
                } else {
                    //REM: Product already exists in the cart, update quantity
                    this.productQuantity.set(productId, (this.productQuantity.get(productId) ?? 0) + 1);
                }
                return true;
            }
            return false;
        }
    
        public removeProduct(product?: IProduct | null): IProduct | undefined {
            if (product) {
                const index = this.products.findIndex(p => p.id === product.id);
                if (index !== -1) {
                    const removedProduct = this.products.splice(index, 1)[0];
                    const productId = removedProduct.id;
                    const quantity = this.productQuantity.get(productId) ?? 0;
                    
                    if (quantity > 1) {
                        this.productQuantity.set(productId, quantity - 1);
                    } else {
                        this.productQuantity.delete(productId);
                    }
                    
                    return removedProduct;
                }
            }
            return undefined;
        }

        /**
         * 
         * @param otherCart
         * @returns boolean TRUE if the id, products, and productQuantity are equal. Otherwise FALSE
         */
        public equals(otherCart: Cart): boolean {
            //REM: Check if the id, products, and productQuantity are equal
            const idEqual = this.id === otherCart.id;
            const productsEqual = this.areArraysEqual(this.products, otherCart.products);
            const productQuantityEqual = this.areMapsEqual(this.productQuantity, otherCart.productQuantity);
    
            return idEqual && productsEqual && productQuantityEqual;
        }
    
        /**
         * 
         * @param array1 
         * @param array2 
         * @returns boolean TRUE if the arrays have the same length and contain the same elements. Otherwise FALSE.
         */
        private areArraysEqual<T>(array1: T[], array2: T[]): boolean {
            //REM: Check if the arrays have the same length and contain the same elements
            return array1.length === array2.length && array1.every((value, index) => value === array2[index]);
        }
    
        /**
         * 
         * @param map1 
         * @param map2 
         * @returns boolean TRUE if the maps have the same size and contain the same key-value pairs. Otherwise FALSE.
         */
        private areMapsEqual<K, V>(map1: Map<K, V>, map2: Map<K, V>): boolean {
            //REM: Check if the maps have the same size and contain the same key-value pairs
            if (map1.size !== map2.size) {
                return false;
            }
            
            for (const [key, value] of map1) {
                if (!map2.has(key) || map2.get(key) !== value) {
                    return false;
                }
            }
    
            return true;
        }
        
        public hashCode(): number {
            let result = 17; //REM: Starting value for hash code
            
            //REM: Hash code based on id
            result = 31 * result + this.hashCodeForString(this.id);
            
            //REM: Hash code based on products
            result = 31 * result + this.arrayHashCode(this.products);
    
            //REM: Hash code based on productQuantity
            result = 31 * result + this.mapHashCode(this.productQuantity);
    
            return result;
        }
    
        private hashCodeForString(str: string): number {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                const char = str.charCodeAt(i);
                hash = (hash << 5) - hash + char;
                hash |= 0; //REM: Convert to 32bit integer
            }
            return hash;
        }
    
        private arrayHashCode<T>(array: T[]): number {
            return array.reduce((hashCode, item) => {
                return 31 * hashCode + this.hashCodeForItem(item);
            }, 1);
        }
    
        private mapHashCode<K, V>(map: Map<K, V>): number {
            return Array.from(map.entries()).reduce((hashCode, [key, value]) => {
                return 31 * hashCode + this.hashCodeForItem(key) + this.hashCodeForItem(value);
            }, 1);
        }
    
        private hashCodeForItem(item: any): number {
            if (typeof item === 'string') {
                return this.hashCodeForString(item);
            } else if (typeof item === 'number') {
                return item;
            } else if (typeof item === 'object' && item !== null && typeof item.hashCode === 'function') {
                return item.hashCode();
            } else {
                return 0;
            }
        }

        public toString(): string {
            const className = this.getCanonicalName();
            return `${className}@${this.hashCode()}[ id: ${this.id}, products: ${JSON.stringify(this.products)}, productQuantity: ${JSON.stringify(Array.from(this.productQuantity.entries()))} ]`;
        }
    
        public getCanonicalName(): string {
            //REM: Use Object.getPrototypeOf to get the prototype of the current instance
            //REM: and then get the constructor property to get the constructor function.
            const thisNamespace = 'com$fruutie$core$model'; //REM: TODO_HERE...
            const thisClassName = Object.getPrototypeOf(this).constructor.name;
            return thisNamespace
                ? `${thisNamespace}.${thisClassName}` 
                : thisClassName;
        }

        
        id: string;
        products: Array<IProduct>;
        productQuantity: Map<string, number>;
    }
}

export default com$fruutie$core$model.Cart;