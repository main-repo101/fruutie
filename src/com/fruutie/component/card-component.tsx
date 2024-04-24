import { useState } from "react";
import { NavLink } from "react-router-dom";

// import imgDefault from '/src/resource/img/icon/icon-logo-gold.png';
import imgDefault from '/src/resource/img/icon/icon-logo-white.png';
import { Status } from "../core/Status";
import { scroll_to_section } from "../core/util/scroll-to-section";
// import NavPath from "../core/util/NavPath";

export function card_component(
    {
        productId,
        productName,
        img,
        isOutOfStock = false,
        isOnSale = false,
        onSalePrice = 0.0,
        price = 0.0,
        unit = 'KG'
    }:{
        productId?:string, 
        productName?:string, 
        img?:string | null,
        isOutOfStock?:boolean,
        isOnSale?:boolean,
        onSalePrice?:Number,
        price?:Number,
        unit?:string
    }
): JSX.Element {

    productId = productId??Status.NA.VALUE
    let imgPreview = img || imgDefault;
    let url = `/product/${productName??Status.NA.VALUE}/${productId?? Status.NA.VALUE}`;
    isOutOfStock = isOutOfStock??false;

    const CURRENCY = 'Php'; //REM: TODO_HERE...

    const [numItemInCart, setNumItemInCart] = useState(0);

    return <>
        <div id="CARD_COMPONENT" 
            className="card-component
            pnl-card flex flex-col
            p-2 
            transition-all transform
            ">
            <div className='
                group/card
                flex flex-col
                place-content-center
                place-items-center
                transition-all transform'>
                <NavLink 
                    to={url}
                    onClick={()=>{
                        scroll_to_section(
                            'SELF_PRODUCT_PAGE',
                            150
                        )
                    }}
                    className="card
                    group/card-img
                    w-[8rem] h-[12rem]
                    md:w-[10rem] md:h-[16rem]
                    border-4 border-amber-800
                    group-hover/card:border-amber-700
                    rounded-xl
                    relative
                    border-transparent
                    bg-slate-100
                    ease-in-out duration-500
                    shadow-xl
                    hover:-top-[0.5rem]
                    hover:scale-105
                    ">
                    <img src={imgPreview} 
                        alt='img-fruit'
                        className={`card
                        w-[100%] h-[100%]
                        bg-cover
                        bg-no-repeat
                        bg-slate-300
                        relative
                        rounded-[0.5rem]
                        cursor-pointer
                        border-2
                        border-amber-700
                        hover:scale-105
                        hover:border-4
			            duration-500 transition-transform
                        ${!isOutOfStock
                            ? `sm:group-hover/card-img:-top-[4rem]` 
                            : ``
                        }
                        ${img !== "" && img !== undefined && img !== null?``:`h-auto bg-center bg-contain mt-[25%]`}`}>
                    </img>
                    <div className={`
                        shadow-lg
                        shadow-amber-950
                        flex
                        absolute
                        -top-5
                        -right-2
                        bg-red-500
                        rounded-full
                        p-2
                        text-white
                        font-semibold
                        border-2 border-amber-800
                        ${!isOnSale? `hidden` : ``}
                        ${!isOutOfStock? `sm:group-hover/card-img:-top-[4rem]` : ``}`}>
                        Sale
                    </div>
                    { !isOutOfStock
                        
                        ? <div className='
                            xl:hidden
                            inline-flex
                            group-hover/card-img:inline-flex
                            w-[100%] absolute
                            bottom-0
                            p-4
                            place-content-between
                            ease-in-out duration-500'>
                                <div onClick={
                                        (e)=>{
                                            e.preventDefault();
                                            if( numItemInCart > 0)
                                                setNumItemInCart(
                                                    (prevData)  => --prevData
                                                );
                                            console.log('Decrement', numItemInCart);
                                        }
                                    } 
                                    className='p-2
                                    active:bg-white
                                    w-[2rem] h-[2rem]
                                    inline-flex
                                    text-center
                                    place-content-center
                                    place-items-center
                                    rounded-full
                                    border-2
                                    border-amber-800
                                    bg-amber-300
                                    text-5xl font-bald
                                    relative
                                    hover:bg-amber-800
                                    hover:text-white
                                    hover:scale-125
                                    ease-in-out duration-500'><span
                                    className='absolute -top-[.85rem]'>-</span></div>
                                <div onClick={
                                        (e)=>{
                                            e.preventDefault();
                                            if( numItemInCart < 1000 )
                                                setNumItemInCart(
                                                    (prevData) => ++prevData
                                                )
                                            console.log('Increment', numItemInCart);
                                        }
                                    } 
                                    className='p-2
                                    active:bg-white
                                    w-[2rem] h-[2rem]
                                    inline-flex
                                    text-center
                                    place-content-center
                                    place-items-center
                                    rounded-full
                                    border-2
                                    border-amber-800
                                    bg-amber-300
                                    text-4xl font-bald
                                    relative
                                    hover:bg-amber-800
                                    hover:text-white
                                    hover:scale-125
                                    ease-in-out duration-500
                                    '>
                                    <span
                                        className='absolute -top-[.65rem]'>
                                        +
                                    </span>
                                </div>
                        </div>  
                    
                        : <h1 className='
                            w-[100%]
                            absolute
                            top-[40%]
                            text-center
                            border-2
                            border-amber-800
                            border-l-4
                            border-r-4
                            bg-slate-300
                            bg-opacity-80
                            text-md
                            md:text-xl
                            text-amber-950
                            group-hover/card-img:text-[1.15rem]
                            md:group-hover/card-img:text-xl
                            xl:group-hover/card-img:text-2xl
                            ease-in-out duration-500'>
                            Out of Stocks
                        </h1>
                    }
                </NavLink> 
                <div className="price
                    text-md font-semibold
                    text-amber-950
                    p-1">
                    {CURRENCY}&nbsp;
                    {
                        isOnSale
                        ?<>
                            <span className='text-slate-500
                                relative'>
                                {price.toString()}
                                <span className='
                                absolute
                                left-0
                                top-[0.65rem]
                                w-[100%]
                                border-slate-400
                                border-b-[0.2rem]'></span>
                            </span>
                            &nbsp;~&nbsp;
                            <span className='text-xl'>
                                {onSalePrice.toString()}
                            </span>
                        </>
                        : price.toString()
                    }
                    /
                    {
                        unit
                    }
                </div>
                <div className='inline-flex
                    group/card-title
                    place-content-center
                    place-items-center
                    gap-2
                    z-910
                    ease-in-out duration-300'>
                    <NavLink to={url} 
                        onClick={()=>{
                            scroll_to_section(
                                'SELF_PRODUCT_PAGE',
                                150
                            )
                        }}
                        className='text-center
                        text-amber-800
                        text-xl
                        font-semibold
                        group-hover/card-title:text-amber-700
                        ease-in-out duration-300'>
                        {productName?? 'default'}
                    </NavLink>
                    <NavLink to={url} 
                        className="num-prod-in-cart
                        w-[3.5rem] h-[1.8rem]
                        text-center
                        group-hover/card-title:animate-pulse
                        ease-in-out duration-1000">
                        <span className='
                            block
                            w-[100%] h-[100%]
                            rounded-br-full
                            bg-red-500
                            text-start
                            pl-[.4rem]
                            content-center
                            items-center
                            text-xl
                            text-white
                            font-semibold
                            cursor-pointer
                        '>{numItemInCart}</span>
                    </NavLink>
                </div> 
            </div>
        </div>
    </>;
}

const CardComponent = card_component;
export default CardComponent;
