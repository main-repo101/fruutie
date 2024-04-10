import { useState } from "react";
import { NavLink } from "react-router-dom";

import ImgDefault from '/src/resource/img/icon/icon-logo-white.png';
import { Status } from "../core/Status";

export function card_component(
    {
        productId,
        productName,
        img,
        isOutOfStock = false,
    }:{
        productId?:string, 
        productName?:string, 
        img?:string,
        isOutOfStock?:boolean
    }
): JSX.Element {

    productId = productId??Status.NA.VALUE
    img = img??ImgDefault;
    var url = `/product/${productId?? Status.NA.VALUE}`;
    isOutOfStock = isOutOfStock??false;


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
                transition-all transform'>
                <NavLink 
                    to={url}
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
                    <img src={img} 
                        alt='img-fruit'
                        className={`card
                        w-[100%] h-[100%]
                        bg-cover
                        bg-no-repeat
                        relative
                        rounded-[0.5rem]
                        cursor-pointer
                        border-2
                        bg-slate-300
                        border-amber-700
                        ease-in-out duration-500
                        ` + (!isOutOfStock? `
                        sm:group-hover/card-img:-top-[4rem]
                        ` : ``)}>
                    </img>
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
                                    '><span
                                    className='absolute -top-[.65rem]'>+</span></div>
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
                <div className='inline-flex
                    group/card-title
                    place-content-center
                    place-items-center
                    gap-2
                    z-910
                    ease-in-out duration-300'>
                    <NavLink to={url} className='text-center
                        text-amber-800
                        text-xl
                        font-semibold
                        group-hover/card-title:text-amber-700
                        ease-in-out duration-300'>
                        {productName?? 'default'}
                    </NavLink>
                    <NavLink to={`/product/${productName}/${productId}`} 
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
