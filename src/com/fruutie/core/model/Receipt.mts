import IProduct from "./IProduct.mts";

export namespace com$fruutie$core$model {

    export class Receipt {

        public constructor( products: Array<IProduct> ) {
            this.products = products;
        }

        public getProducts(): Array<IProduct> {
            return this.products;
        }

        private products: Array<IProduct>;
    }

}

export default com$fruutie$core$model.Receipt;