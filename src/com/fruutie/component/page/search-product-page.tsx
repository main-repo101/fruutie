import React from "react";
import { useParams } from "react-router-dom";
import simpleDbFruitAPI from "../../../../resource/db/fruit.json";
import CardIComponent from "../card-i-component";

//REM: we might re-use the 'more-product-page.tsx' instead of creating new page for this.
//REM: Refactor it later.
export function search_product_page(): React.ReactElement {
    const { searchProduct } = useParams();

    const SIMPLE_DB_FRUIT_API = simpleDbFruitAPI.filter(item => {
        return (
            item.name.toLowerCase().includes(searchProduct!.trim().toLowerCase()) 
            || item.producer.some(producer => producer.toLowerCase().includes(searchProduct!.trim().toLowerCase())) 
            || item.tag.some(tag => tag.toLowerCase().includes(searchProduct!.trim().toLowerCase()))
        );
    });
      

    return <>
        <div id="SEARCH_PRODUCT_PAGE" 
            className="search-product
            h-fit
            pt-12 pb-12
            md:pt-8 md:pb-8
            pl-[10%] pr-[10%]">
            <h1 className='text-xl'>
                Search:&nbsp;
                <span>
                    {searchProduct}
                </span>
            </h1>
            <div className="items
                gap-4
                w-[100%]
                flex flex-wrap
                place-items-center
                place-content-evenly">
                {
                    SIMPLE_DB_FRUIT_API.map(
                        (item, id)=>{
                            return<>
                                <CardIComponent
                                    key={id}
                                    product={item}
                                    isOnCart={false}
                                />
                            </>;
                        }
                    )
                }
            </div>
        </div>
    </>;
}

const SearchProductPage = search_product_page;
export default SearchProductPage;