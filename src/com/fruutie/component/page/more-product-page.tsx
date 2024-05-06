import { Link, useParams } from "react-router-dom";
// import hotProduct from '../../../../resource/db/hot_product.json';
// import onSaleProduct from '../../../../resource/db/on_sale_product.json';
import CardIComponent from "../card-i-component";
import simpleDbFruitAPI from '../../../../resource/db/fruit.json';
import React from "react";

export function more_product_page(
    {
        tags
    }:
    {
        tags?:Array<string>
    }
): JSX.Element {

    const { groupProduct } = useParams();
    React.useEffect(() => {
        document.title = `${document.title.split('~')[0]} ~ More Product`;
        return () => {
            document.title = `${document.title.split('~')[0]?? 'Empty'}`;
        };
    }, []);
    // groupProduct = groupProduct || useSearchParams()[0].get('txtSearch')!;
    const targetTags = tags?.join(' ') || groupProduct;
    console.log( targetTags );
    return <>
        <div id='MORE_PRODUCT_PAGE' className='flex flex-col
            p-6
            pl-[10%] pr-[10%]
            transition-transform
            '>
            <h1 className='text-[2rem]
                font-semibold'>
                <span className='text-amber-800
                    text-[1.2rem]'>
                    Tag:
                </span>
                &nbsp;
                {
                    groupProduct?.split(' ').map((tag, index) => (
                        <Link
                            className="hover:text-amber-800
                            duration-500 ease-in-out
                            text-[1.1rem]" 
                            to={`/product/more/${tag}`} key={index}>
                            {index > 0 && ', '}
                            {tag.toLowerCase()}
                        </Link>
                    ))
                }
            </h1>
            <div className='inline-flex 
                flex-col
                sm:flex-row
                flex-wrap
                place-content-evenly
                place-items-center
                gap-8'>
                {
                    // simpleDbFruitAPI.filter(dbItem =>
                    //     targetTags?.split(' ').some(targetTag =>
                    //         // dbItem.tag.some(x => 
                    //         //     x.includes(targetTag.replace('-', ' '))
                    //         {
                    //             for( let i = 1; i < dbItem.tag.length; ++i ) {
                    //                 if( targetTag.replace('-', ' ') == dbItem.tag[i] ) {
                    //                     console.log( dbItem.tag[i] )
                    //                     return true;
                    //                 }
                    //             }
                    //         }
                    //     )
                    // )
                    simpleDbFruitAPI.filter(dbItem =>
                        targetTags?.split(' ').some(targetTag =>
                            dbItem.tag.includes(targetTag.replace('-', ' '))
                        )
                    ).map((item) => {
                        return (
                            <CardIComponent
                                key={item.id}
                                product={item}
                                isOnCart={false}
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