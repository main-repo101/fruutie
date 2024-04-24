import { useParams } from "react-router-dom";
// import hotProduct from '../../../../resource/db/hot_product.json';
// import onSaleProduct from '../../../../resource/db/on_sale_product.json';
import CardComponent from "../card-component";
import simpleDbFruitAPI from '../../../../resource/db/fruit.json';


export function more_product_page(
    {
        tags
    }:
    {
        tags?:Array<string>
    }
): JSX.Element {

    const { groupProduct } = useParams();
    // groupProduct = groupProduct || useSearchParams()[0].get('txtSearch')!;
    const targetTags = tags?.join(' ') || groupProduct;

    return <>
        <div id='MORE_PRODUCT_PAGE' className='flex flex-col
            p-6
            pl-[10%] pr-[10%]
            '>
            <h1 className='text-[2rem]
                font-semibold'>
                <span className='text-amber-800'>
                    Tag:
                </span>
                &nbsp;{groupProduct}
            </h1>
            <div className='inline-flex 
                flex-col
                sm:flex-row
                flex-wrap
                place-content-evenly
                place-items-center
                gap-8'>


                {

                    simpleDbFruitAPI.filter(item =>
                        targetTags?.split(' ').some(tag =>
                            item.tag.some(x => x.includes(tag.replace('-', ' ')))
                        )
                    ).map((item) => {
                        return (
                            <CardComponent
                                key={item.id}
                                productId={item.id}
                                productName={item.name}
                                img={item.img.preview}
                                isOutOfStock={item.isOutOfStock}
                                isOnSale={item.isOnSale}
                                onSalePrice={item.onSalePrice}
                                price={item.price}
                                unit={item.unit}
                            />
                        );
                    })
                }
            </div>
        </div>
    </>;
}

const MoreProductPage = more_product_page;
export default MoreProductPage;