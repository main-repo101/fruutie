import { Link, useParams } from "react-router-dom";
import imgDefault from '/src/resource/img/icon/icon-logo-gold.png';

import React, { useState } from "react";
import simpleDbFruit from '../../../../resource/db/fruit.json';
import { Status } from "../../core/Status";
import { FaMinus, FaPlus, } from "react-icons/fa6";
import Tooltip from "../util/tool-tip";
import RelatedComponent from "../related-component";


export function self_product_page(
    // {
    //     id,
    //     category = Status.NA.VALUE
    // }:
    // {
    //     id?:string,
    //     category?:string
    // }
): JSX.Element {

    
    

    console.log("::: self product page")

    let { name, id } = useParams();

    React.useEffect(() => {
        document.title = `${document.title.split('~')[0]} ~ ${name}`;
        return () => {
            document.title = `${document.title.split('~')[0]?? 'Empty'}`;
        };
    }, [name]);

    const [numItemInCart, setNumItemInCart] = useState(0);

    //REM: [DUPLICATE:0x2]: Oh my.... clean it later
    const handleIncrement = () => {
        const updatedNumItemInCart = numItemInCart + 1;
        setNumItemInCart(updatedNumItemInCart);
        localStorage.setItem(`${id}`, updatedNumItemInCart.toString());
    };
    //REM: [DUPLICATE:0x2]: Oh my.... clean it later
    const handleDecrement = () => {
        const updatedNumItemInCart = numItemInCart - 1;
        if (updatedNumItemInCart >= 0) {
            setNumItemInCart(updatedNumItemInCart);
            localStorage.setItem(`${id}`, updatedNumItemInCart.toString());
        }
    };
    //REM: [DUPLICATE:0x2]: Oh my.... clean it later
    React.useEffect(() => {
        const storedCounter = localStorage.getItem(`${id}`);
        setNumItemInCart(parseInt(storedCounter??'0', 10));
    }, [name]);

    
    const SIMPLE_DB_FRUIT = simpleDbFruit;
    let objTargetFruit = null;
    for(let i = 0; i < SIMPLE_DB_FRUIT.length; ++i ) {
        if( SIMPLE_DB_FRUIT[i].id === id ) {
            objTargetFruit = SIMPLE_DB_FRUIT[i];
            break;
        }
    }
    return (
        <div id="SELF_PRODUCT_PAGE"
            className='flex
            flex-wrap
            flex-col lg:flex-row
            pt-12 pb-12 md:pt-4 md:pb-4
            pl-[10%] pr-[10%]
            place-content-start
            place-items-start
            xl:place-content-evenly
            transform transition-all
            gap-12
            w-[100%]
            '>
            <div className="inline-flex gap-8
            flex-col sm:flex-row">
            <div className={`overflow-hidden
		        inline-flex
                place-items-center
                place-content-center
                border-4
                border-amber-700
                rounded-xl
                min-w-fit
                ${objTargetFruit?.img.preview
                    ? `w-[10rem] 
                    h-[15rem]
                    sm:w-[15rem]
                    sm:h-[25rem]`
                    :`w-[10rem] h-[10rem]
                    sm:w-[15rem] sm:h-[15rem]
                    bg-center bg-contain 
                    hover:title-logo`}`}>
                <img className={`
                    flex
                    img-fruit
                    w-[100%]
                    h-[100%]
                    hover:scale-110
                    place-content-center
                    place-items-center
                    duration-500 transition-transform`
                } src={objTargetFruit?.img.preview || imgDefault}/>
            </div>
            <div className="info
                flex flex-col gap-2">
                <h1 className='
                    fruit-name
                    flex
                    flex-wrap
                    gap-2
                    max-w-fit
                    text-[2rem]
                    font-semibold
                    relative'>
                    <span>{name}</span>
                    {
                        objTargetFruit?.isOnSale
                            ? (
                                <Link
                                    to={`/product/more/on-sale`}
                                    className='flex
                                    sm:absolute
                                    place-content-center
                                    place-items-center
                                    text-amber-100
                                    -top-2
                                    -right-[4.3rem]
                                    rounded-full
                                    bg-red-500
                                    pl-2 pr-2
                                    pb-1
                                    border-2
                                    border-amber-100
                                    text-[1.5rem]
                                    hover:bg-amber-800
                                    ease-in-out duration-300'>
                                        Sale
                                </Link>
                            )
                            : ``
                    }
                </h1>
                <h2 className='
                    price
                    flex flex-row
                    text-xl
                    text-amber-800
                    font-bold
                    relative'>
                    <span className='text-lg font-semibold'>Php</span>&nbsp;
                    {objTargetFruit?.isOnSale
                        ? (<>
                            <div>
                                <span className='text-lg
                                    font-bold
                                    text-slate-500
                                    relative'>
                                    {objTargetFruit?.price}
                                    <span className='
                                        absolute
                                        top-3
                                        left-0
                                        w-[100%]
                                        border-slate-500/50
                                        border-b-4'></span>
                                </span>
                                &nbsp;~&nbsp;
                                <span>{objTargetFruit?.onSalePrice}</span>
                            </div>
                        </>)
                        : objTargetFruit?.price
                    }
                    <span className='text-[1.6rem]
                        font-normal'>
                        /
                    </span>
                    <span className='flex 
                        text-lg pt-1
                        font-semibold'>
                        {objTargetFruit?.unit}
                    </span>
                </h2>
                <Tooltip text={objTargetFruit?.isOutOfStock?`Out Of Stock`:`Add to Cart`}>
                    <div className={`
                        cart-number-of-item
                        select-none
                        w-[8rem]
                        flex flex-row
                        place-content-baseline
                        place-items-center
                        relative`
                        }>
                        <span 
                            onClick={(e)=>{
                                e.preventDefault();
                                handleDecrement();
                            }}
                            className={`
                            cursor-pointer
                            btn-sub
                            absolute
                            left-0
                            flex place-content-center
                            place-items-center
                            w-[2rem] h-[2rem]
                            bg-lime-500
                            rounded-full
                            text-amber-950
                            border-2
                            border-amber-800
                            hover:bg-amber-800
                            hover:text-amber-100
                            active:bg-white
                            ease-in-out duration-300
                            ${objTargetFruit?.isOutOfStock
                                ? `pointer-events-none
                                bg-slate-300
                                text-slate-500
                                `
                                : ``
                            }`}>
                            <FaMinus className='
                                flex place-content-center
                                place-items-center
                                text-[1.5rem]
                                font-bold
                                rounded-full'/>
                        </span>
                        <input 
                            type='text'
                            inputMode="numeric"
                            value={numItemInCart}
                            onChange={
                                e => {
                                    setNumItemInCart(parseInt(e.target.value));
                                    localStorage.setItem(`${id}`, e.target.value.toString());
                                }
                            }
                            className='
                            flex place-content-center
                            place-items-center
                            text-center
                            item-number
                            border-2
                            border-amber-800
                            rounded-full
                            bg-amber-200
                            w-[100%]
                            text-xl
                            font-bold'
                        />
                        <span 
                            onClick={(e)=>{
                                e.preventDefault();
                                handleIncrement();
                            }}
                            className={`
                            cursor-pointer
                            btn-add
                            absolute
                            right-0
                            flex place-content-center
                            place-items-center
                            w-[2rem] h-[2rem]
                            bg-lime-500
                            rounded-full
                            border-2
                            border-amber-800
                            text-amber-950
                            hover:bg-amber-800
                            hover:text-amber-100
                            active:bg-white
                            ease-in-out duration-300
                            ${objTargetFruit?.isOutOfStock
                                ? `pointer-events-none
                                bg-slate-300
                                text-slate-500`
                                : ``
                            }`}>
                            <FaPlus className='
                                flex place-content-center
                                place-items-center
                                text-[1.5rem]
                                font-bold
                                rounded-full'/>
                        </span>
                    </div>
                </Tooltip>
                <div className="producer
                    flex flex-row flex-wrap
                    place-content-baseline
                    place-items-center">
                    <span>Producer:</span>&nbsp;
                    <div className='flex 
                        gap-2'>
                        {
                            objTargetFruit?.producer.length !== 0
                            ?(
                                objTargetFruit?.producer.map(
                                    (item, id)=>{
                                        return (<>
                                            <span key={id} className='
                                            text-center p-1
                                            pl-2 pr-2
                                            bg-slate-300
                                            rounded-full
                                            '>{item}</span>
                                        </>);
                                    }
                                )
                            )
                            : Status.NA.VALUE
                        }
                    </div>
                </div>
                <p className='
                    description
                    flex
                    place-content-baseline
                    pt-8 pb-2'>{objTargetFruit?.description}</p>
                <div className="tag
                    flex flex-wrap
                    place-content-center
                    place-items-center
                    ">
                    <span className='text-amber-800
                        font-semibold
                        pt-4
                        '>
                        TAG:
                    </span>
                    &nbsp;
                    {
                        objTargetFruit?.tag.map(
                            (item, id)=>{
                                return (
                                    <>&nbsp;
                                        <Link 
                                            to={`/product/more/${item.replace(' ', '-')}`}
                                            key={id}
                                            className='bg-lime-400
                                            p-2 rounded-full
                                            text-amber-950
                                            font-semibold
                                            border-2
                                            flex
                                            place-content-center
                                            place-items-center
                                            border-amber-800
                                            hover:bg-amber-800
                                            hover:text-white
                                            ease-in-out duration-300
                                            mt-4
                                            pl-4 pr-4'>
                                            <span key={id}>{item}</span>
                                        </Link>
                                    &nbsp;</>
                                );
                            }
                        )
                    }
                </div>
            </div>
            </div>
            <RelatedComponent className="related-product
                text-[3rem] font-semibold"
                tags={[objTargetFruit?.name??'', ...(objTargetFruit?.tag??[])]}/>
        </div>
    );
}

const SelfProductPage = self_product_page;
export default SelfProductPage;