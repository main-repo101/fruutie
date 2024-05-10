import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// import imgDefault from '/src/resource/img/icon/icon-logo-gold.png';
import imgDefault from '/src/resource/img/icon/icon-logo-white.png';
import { Status } from "../core/Status";
import { scroll_to_section } from "../core/util/scroll-to-section";
import IProduct from "../core/model/IProduct.mts";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { com$fruutie$core$util } from "../core/util/com$fruutie$core$util";

const { CURRENCY } = com$fruutie$core$util;
// import { FaTimesCircle } from "react-icons/fa";
// import NavPath from "../core/util/NavPath";

// const updateFileContent = (content: string) => {
//     const blob = new Blob([content], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'counter.txt';
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
// };



export function card_i_component(
    {
        product, isOnCart
    }:{
        product?: IProduct,
        isOnCart?: boolean
    }
): JSX.Element {

    let productId = product?.id??Status.NA.VALUE
    let imgPreview = product?.img.preview || imgDefault;
    let url = `/product/${product?.name??Status.NA.VALUE}/${productId?? Status.NA.VALUE}`;
    let isOutOfStock = product?.isOutOfStock??false;
 //REM: TODO_HERE...

    const [numItemInCart, setNumItemInCart] = useState(0);
    
    //REM: [DUPLICATE:0x2]: Oh my.... clean it later
    const handleIncrement = () => {
        const updatedNumItemInCart = Math.min(numItemInCart + 1, product?.amountStock?? 1 )
        setNumItemInCart(updatedNumItemInCart);
        localStorage.setItem(`${product?.id}`, updatedNumItemInCart.toString());
    };
    
    //REM: [DUPLICATE:0x2]: Oh my.... clean it later
    const handleDecrement = () => {
        const updatedNumItemInCart = numItemInCart - 1;
        if (updatedNumItemInCart >= 0) {
            setNumItemInCart(updatedNumItemInCart);
            localStorage.setItem(`${product?.id}`, updatedNumItemInCart.toString());
        }
    };
    
    //REM: [DUPLICATE:0x2]: Oh my.... clean it later
    React.useEffect(() => {
        const storedCounter = localStorage.getItem(`${product?.id}`);
        setNumItemInCart(parseInt(storedCounter??'0', 10));
    }, [product?.name]);

    return <>
        {
            !isOnCart
            ?<div id="CARD_COMPONENT" 
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
                            ${product?.img.preview !== "" && product?.img.preview !== undefined && product?.img.preview !== null?``:`h-auto bg-center bg-contain mt-[25%]`}`}>
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
                            ${!product?.isOnSale || isOutOfStock? `hidden` : ``}
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
                                                handleDecrement();
                                            }
                                        } 
                                        className='
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
                                        text-9xl font-bold
                                        relative
                                        hover:bg-amber-800
                                        hover:text-white
                                        hover:scale-125
                                        ease-in-out duration-500'>
                                        <FaMinus className="pr-1 pl-1
                                            w-[100%] h-[100%] rounded-full"/>
                                    </div>
                                    <div onClick={
                                            (e)=>{
                                                e.preventDefault();
                                                handleIncrement();
                                            }
                                        } 
                                        className='
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
                                        text-9xl font-bold
                                        relative
                                        hover:bg-amber-800
                                        hover:text-white
                                        hover:scale-125
                                        ease-in-out duration-500
                                        '>
                                        <FaPlus className="pr-1 pl-1 
                                            w-[100%] h-[100%] rounded-full"/>
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
                        {CURRENCY.PHP.VALUE}&nbsp;
                        {
                            product?.isOnSale
                            ?<>
                                <span className='text-slate-500
                                    relative'>
                                    {product?.price.toLocaleString(
                                        CURRENCY.PHP.LABEL,
                                        {
                                            style: "currency",
                                            currency: CURRENCY.PHP.VALUE
                                        }
                                    )}
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
                                    {product?.onSalePrice.toLocaleString(
                                        CURRENCY.PHP.LABEL,
                                        {
                                            style: "currency",
                                            currency: CURRENCY.PHP.VALUE
                                        }
                                    )}
                                </span>
                            </>
                            : product?.price.toLocaleString(
                                CURRENCY.PHP.LABEL,
                                {
                                    style: "currency",
                                    currency: CURRENCY.PHP.VALUE
                                }
                            )
                        }
                        /
                        {
                            product?.unit
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
                            {product?.name?? 'default'}
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
                            '>{Math.min(numItemInCart, product?.amountStock?? 1)}</span>
                        </NavLink>
                    </div> 
                </div>
            </div>
            :<div className={`
                inline-flex w-[97%] 
                group/item
                h-[3rem] bg-white
                border-2 border-amber-800
                ml-2 mr-2
                mt-1 mb-1
                pl-0 pr-0
                sm:pl-2 sm:pr-2
                hover:bg-amber-800/50
                hover:text-white
                font-semibold
                text-amber-800
                cursor-pointer
                place-content-center
                place-items-center
                transition-transform`}>
                <Link
                    to={url}
                    onClick={ ()=>
                        scroll_to_section("SELF_PRODUCT_PAGE", 200)
                    }
                    className="inline-flex 
                    w-[100%]
                    cursor-pointer
                    place-content-start
                    place-items-center">
                    <div>
                        <img src={product?.img.preview??''} 
                            className={`hidden sm:flex w-[3rem] h-[2.5rem]
                            rounded-full border-2 border-amber-800
                            bg-cover bg-no-repeat`
                            }/>
                    </div>
                    <span className="flex
                        w-[100%]
                        place-content-start
                        place-items-center
                        p-4
                        duration-300 ease-in-out">
                        {product?.name}
                    </span>
                </Link>
                {/* <span className="
                    group-hover/item:text-amber-950"
                    onClick={e=>{
                        e.preventDefault();
                        setNumItemInCart(0);
                        localStorage.setItem(`${product?.id}`, '0');
                    }}>
                    <FaTimesCircle className="pl-2 pr-2
                        w-[2rem] h-auto
                        hover:text-white
                        hover:scale-110
                        duration-300 ease-in-out"/>
                </span> */}
            </div>
        }
        
    </>;
}

const CardIComponent = card_i_component;
export default CardIComponent;
