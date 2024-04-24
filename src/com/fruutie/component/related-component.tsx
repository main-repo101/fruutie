import React from "react";
import FRUIT_SIMPLE_DB_API from "../../../resource/db/fruit.json";
import ImgFruitDefault from "../../../resource/img/icon/icon-logo-white.png";
import { Link } from "react-router-dom";
import { scroll_to_section } from "../core/util/scroll-to-section";

export function related_component(
    {
        className,
        tags
    }:
    {
        className?:string | null,
        tags?:Array<string>| null
    }
): React.ReactElement {


    const TAGS_TARGET: string[] = tags?? [];
    
    return <>
        <div id="RELATED_COMPONENT"
        className={`related-component ${className} 
            flex flex-col
            place-content-center
            place-items-baseline max-w-fit
            transform transition-all`}>
            <h1 className="text-amber-950 ">Related</h1>
            {   TAGS_TARGET.length > 1 &&
                FRUIT_SIMPLE_DB_API.filter(item => {
                    return TAGS_TARGET.some(i => item.tag.includes(i) && item.name !== TAGS_TARGET[0] );
                }).map((item, id) => {
                    return (
                    <Link
                    key={id}
                    to={`/product/${item.name}/${item.id}`} 
                    onClick={()=>scroll_to_section('SELF_PRODUCT_PAGE', 200)}
                    className="inline-flex place-content-center
                    place-items-center
                    text-[1.5rem]
                    pt-4 pb-4 gap-4
                    group/related-product">
                        <img className="related-icon
                        rounded-full
                        w-[5rem] h-[5rem]
                        border-2 border-amber-800
                        group-hover/related-product:rotate-[90deg]
                        ease-in-out duration-500"
                        src={item.img.preview?? ImgFruitDefault}
                        />
                        <div className="related-label
                        text-amber-800
                        group-hover/related-product:text-amber-950
                        ease-in-out duration-50
                        flex flex-col">
                            <span>{item.name}</span>
                            <span className='text-sm
                            text-amber-800/50
                            group-hover/related-product:text-amber-800'>{item.tag.slice(0,Math.min(2, item.tag.length)).join(', ')}...</span>
                        </div>
                    </Link>
                    );
                })
            }
        </div>
    </>;
}

const RelatedComponent = related_component;
export default RelatedComponent;