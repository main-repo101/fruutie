

export namespace com$fruutie$core$model {
    export interface IProduct { 
        id: string; 
        name: string; 
        desciption: string; 
        category: string; 
        tag: string[]; 
        img: { preview: string | null; 
            info: string | null; 
            alt: string | null; 
        }; 
        isOutOfStock: boolean; 
        amountStock: number; 
        isOnSale: boolean; 
        onSalePrice: number; 
        price: number; 
        unit: string; 
        producer: string[]; 
    }
}

export type IProduct = com$fruutie$core$model.IProduct;
export default IProduct;


