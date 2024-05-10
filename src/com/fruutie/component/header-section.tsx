import { FaCartShopping } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import NavBarComponent from "./nav-bar-component.tsx";
import LogoComponent from "./logo-component.tsx";
import SearchComponent from "./search-component.tsx";
import IconProfile from '/src/resource/img/icon/icon-logo-white.png';

import { com$fruutie$core } from '../core/com$fruutie$core.ts';
import { scroll_to_section } from "../core/util/scroll-to-section.ts";
import React, { useState } from "react";
import NavBarMobileComponent from "./nav-bar-mobile-component.tsx";
import CardIComponent from "./card-i-component.tsx";
import simpleDBFruitAPI from "../../../resource/db/fruit.json";
import NavPath from "../core/util/NavPath.ts";
import { com$fruutie$core$util } from "../core/util/com$fruutie$core$util";

const { CURRENCY } = com$fruutie$core$util;

function header_section(
    {username = com$fruutie$core.Status.NA.VALUE, title}
    :{username?:string|null, title?:string|null|undefined}
): JSX.Element {
    console.log(`::: /src/com/fruutie/component/header-section.tsx: title=${title}`);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
            width: window.innerWidth,
            height: window.innerHeight,
    });
        
    React.useEffect(() => {
        const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        };
    
        // Add event listener to update dimensions when the window is resized
        window.addEventListener('resize', handleResize);
    
        // Remove event listener on component unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    console.log(`dim: w=${windowSize.width}, h=${windowSize.height}`);

    //REM: TODO_HERE; Oh my...
    // const [ getTotalAmount, setTotalAmount ] = useState(0);
    const getProductDataFromLocalStorage = (regex: RegExp): { 
        productId: string; value: string 
    }[] => {
        const productData: { productId: string; value: string }[] = [];
    
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && regex.test(key)) {
                const value = localStorage.getItem(key);
                if (value !== null && value !== '0') {
                    productData.push({ productId: key, value });
                }
            }
        }
    
        return productData;
    };

    // React.useEffect(
    //     ()=>{
    //         setTotalAmount(totalAmount)
    //     },
    //     []
    // )
    
    const regexPattern = /f-\d{4}/;
    const [ getProductDataArray, setProductDataArray ] = useState<{ 
        productId: string; value: string 
    }[] | null>(null)

    React.useEffect(
        ()=>{
            setProductDataArray( getProductDataFromLocalStorage(regexPattern) );
        },
        [showCart]
    )
    // let productDataArray = getProductDataFromLocalStorage(regexPattern);

    console.log(getProductDataArray);

    let totalAmount:number = 0;
    
    return (
        <>
        
            {
                showMobileMenu && <div className="
                    pnl-mobile-menu
                    absolute 
                    z-[50] w-[100%] h-[100%]
                    bg-transparent
                    blur-sm
                    backdrop-blur-sm"
                    onClick={
                        e=>{
                            e.preventDefault();
                            setShowMobileMenu(false);
                        }
                    }></div>
            }
            <div className='
                header
                select-none
                border-2
                border-b-amber-600
                z-50
                sticky top-0
                from-amber-100
                to-amber-100/90
                bg-gradient-to-b
                flex flex-col
                w-[100%]
                pl-[5%] pr-[5%]
                pt-2 pb-2
                sm:pl-[10%] sm:pr-[10%]
                transform transition-all'>
                <div className='
                    header-ceil
                    inline-flex
                    place-content-end
                    place-items-end
                    gap-6
                    text-end
                    pt-4
                    '>
                    <div className="icon-cart cursor-pointer 
                        w-[1.6rem] h-[1. 6rem] relative
                        group/cart">
                        <FaCartShopping 
                            onClick={(e)=>{
                                e.preventDefault();
                                setShowMobileMenu(false);
                                setShowCart(prevData=> !prevData );
                                totalAmount = 0;
                            }}
                            className="w-[100%] h-[100%] relative
                        hover:animate-pulse
                        hover:text-amber-950
                        group-hover/cart:scale-125
                        group-hover/cart:rotate-[360deg]
                        duration-500 ease-in-out"/>
                        <span className="absolute -top-1 -right-1
                            group-hover/cart:hidden block">
                            <span className="animate-ping 
                                absolute top-0 -right-1 inline-flex 
                                h-3 w-3 rounded-full 
                                bg-red-400 opacity-75"></span>
                            <span className="
                                absolute top-0 -right-1 inline-flex 
                                h-3 w-3 rounded-full 
                                bg-red-500"></span>
                        </span>
                    </div>
                    <div className="pnl-profile
                        inline-flex place-content-end
                        place-items-end">
                        { (username !== undefined && 
                        username !== null &&
                        username !== com$fruutie$core.Status.NA.VALUE) 
                            ? (
                                <NavLink 
                                    to='/profile' 
                                    className='profile
                                    inline-flex gap-2
                                    place-content-center
                                    place-items-center
                                    pl-2
                                    pr-2
                                    border-2
                                    rounded-full
                                    border-slate-800
                                    relative'>
                                    <img src={IconProfile} 
                                        className='
                                        bg-white
                                        border-2
                                        border-slate-500
                                        rounded-full
                                        absolute
                                        left-1
                                        w-[2.8rem] h-auto
                                        block'/>
                                    <span className='
                                        w-[100%]
                                        pl-12
                                        inline-flex
                                        place-content-end
                                        place-items-end'>{username}</span>
                                </NavLink>
                            ) 
                            : (
                                <div className="btn-signing
                                    inline-flex gap-2
                                    place-content-center
                                    place-items-center
                                    transform">
                                    <NavLink 
                                        onClick={()=>{
                                            scroll_to_section('SIGN_IN_PAGE',200);
                                            setShowCart(false);
                                            setShowMobileMenu(false);
                                        }}
                                        to='/sign-in'
                                        className='pl-2 pr-2
                                        border-2 border-slate-800
                                        rounded-full
                                        hover:bg-amber-300
                                        hover:scale-110
                                        duration-300
                                        ease-in-out'>Sign-In</NavLink>
                                    <NavLink 
                                        onClick={()=>{
                                            scroll_to_section('SIGN_UP_PAGE',200);
                                            setShowCart(false);
                                            setShowMobileMenu(false);
                                        }}
                                        to='/sign-up'
                                        className='pl-2 pr-2
                                        border-2 border-slate-800
                                        rounded-full
                                        hover:bg-amber-300
                                        hover:scale-110
                                        duration-300
                                        ease-in-out'>
                                        Sign-Up
                                    </NavLink>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="header-floor
                    inline-flex
                    place-content-between
                    place-items-center">
                    <LogoComponent />
                    {/*REM: Refactor it... */}
                    <SearchComponent 
                        className='
                        absolute
                        top-[9rem]
                        flex
                        ml-[0.5rem]
                        place-content-center
                        place-items-center
                        w-[80%]
                        rounded-full
                        bg-amber-100
                        md:max-w-fit
                        md:top-0
                        md:static
                        md:inline-flex
                        ease-in-out duration-500'/>
                    <NavBarComponent className='hidden 
                    sm:inline-flex'/>
                    <NavBarMobileComponent 
                        onClick={()=>{
                            setShowCart(false);
                            setShowMobileMenu(prev=> !prev);
                        }} 
                        isShowMobileMenu={showMobileMenu}
                        className='flex
                    place-content-center
                    place-items-center
                    sm:hidden'/>
                </div>
            </div>
            {/*REM: TODO_HERE; oh my.... The semantic goes haywire*/}
            <div 
                onClick={
                    e => {
                        e.preventDefault();
                        setShowCart(false);
                    }
                } className={
                (!showCart)? `flex` : `hidden` +
                `pnl-cart w-[100%] h-[100svh] 
                bg-transparent fixed z-10`
                }>
            </div>
            <div id="PNL_CART"
                className={`flex flex-col
                z-10
                fixed
                right-0
                bg-amber-100/5
                backdrop-blur-xl
                border-l-4
                border-amber-800
                w-[100%]
                sm:w-[30rem] 
                xl:w-[40rem]
                h-[100svh]
                transition-all transform
                ease-in-out duration-500
                gap-2
                p-4
                pt-12
                md:pt-4
                ${showCart ? `translate-x-[0rem]` : `translate-x-[50rem]`}`}>
                <div className="inline-flex
                    place-content-between
                    place-items-center
                    pl-0 pr-2
                    text-[2rem]">
                    <FaTimesCircle 
                    onClick={(e)=>{
                        e.preventDefault();
                        setShowCart(prevData=>!prevData );
                    }}
                    className="w-[2.5rem] h-auto rounded-full text-amber-950
                    hover:text-amber-800
                    cursor-pointer
                    hover:scale-110
                    ease-in-out duration-300"/>
                    <Link
                        to={NavPath.SIGN_IN_PAGE.URL}
                        onClick={
                            ()=> {
                                scroll_to_section(NavPath.SIGN_IN_PAGE.ID_ATTR, 200);
                                setShowCart(false);
                            }
                        }
                        className="btn-view-cart
                        bg-lime-400
                        pl-4 pr-4
                        rounded-tr-[2rem]
                        rounded-bl-[2rem]
                        border-4 border-amber-800
                        cursor-pointer 
                        hover:scale-105
                        ease-in-out duration-300">
                        <span className="text-amber-950
                            font-semibold">
                            View Cart
                        </span>
                    </Link>
                </div>
                <div className="items-selected-list flex flex-col
                    w-[100%] h-[18rem] sm:h-[20rem]
                    bg-white/55 rounded-xl
                    border-amber-800
                    border-4
                    ease-in-out duration-500
                    overflow-y-auto
                    overflow-x-hidden
                    transition-transform
                    ">
                    {
                        getProductDataArray?.map(
                            (item, index) => {
                                //REM: TODO_HERE;...
                                const ITEM = simpleDBFruitAPI.find( i => i.id == item.productId )
                                let itemPrice: number = ( (ITEM!.isOnSale)
                                    ? ITEM!.onSalePrice 
                                    : ITEM!.price
                                ) * parseInt(item.value);
                                totalAmount += itemPrice;
                                return <>
                                    <div
                                        onClick={e=>{
                                            e.preventDefault();
                                            // setShowCart(false);
                                        }}
                                        className="inline-flex relative
                                        group/item w-[100%]">
                                        <div 
                                            onClick={
                                                e => {
                                                    e.preventDefault();
                                                    setShowCart(false);
                                                }
                                            }
                                            className="
                                            top-1
                                            left-1
                                            w-[100%]
                                            h-[100%]
                                            rounded-none
                                            ">
                                            <CardIComponent
                                                key={index}
                                                product={ITEM}
                                                isOnCart={true}/>
                                        </div>
                                        <div className="
                                            flex
                                            gap-6
                                            absolute
                                            z-10
                                            right-0
                                            top-0
                                            mr-[4rem]
                                            pt-4
                                            text-amber-800
                                            font-semibold
                                            text-[1.2rem]
                                            group-hover/item:text-amber-950
                                            ">
                                        <span className="">
                                            {
                                                itemPrice.toLocaleString(
                                                    CURRENCY.PHP.LABEL,
                                                    {
                                                        style: "currency",
                                                        currency: CURRENCY.PHP.VALUE
                                                    }
                                                )
                                            }
                                        </span>
                                        <span className="
                                            inline-flex
                                            text-[1.2rem]
                                            group-hover/item:text-amber-950">
                                            {item.value}{ITEM?.unit??`unit`}{
                                                ( (ITEM?.unit?? ``) === 'pc' && ( parseInt( item.value ) > 1 ) )
                                                ? `s`
                                                : ``
                                            }
                                            {/* <span className="text-sm
                                                flex place-content-center
                                                place-items-end">
                                                {ITEM?.unit}
                                            </span> */}
                                        </span>
                                        </div>
                                        <span className="
                                            absolute
                                            right-4
                                            top-5
                                            text-amber-800
                                            group-hover/item:text-amber-950
                                            ">
                                            <FaTimesCircle 
                                                onClick={
                                                    e=> {
                                                        e.preventDefault();
                                                        setProductDataArray( p => p!.filter(i => i.productId !== item.productId) );
                                                        localStorage.setItem(`${item.productId}`, '0');
                                                    }
                                                }
                                                className="pl-2 pr-2
                                                cursor-pointer
                                                w-[2rem] h-auto
                                                hover:text-amber-950
                                                hover:scale-125
                                                duration-300 ease-in-out"/>
                                        </span>
                                    </div>
                                </>
                            }
                        )
                    }
                </div>
                {/*REM: TODO_HERE; fix the layout UI of this 
                when encounter with height is equal or less than 730px*/}
                <div className="flex flex-row
                    place-content-between
                    place-items-center
                    font-semibold
                    ease-in-out duration-500
                    pl-0 pr-2
                    text-[1.5rem]
                    sm:text-[2rem]">
                    <div className="
                        ease-in-out duration-500">
                        <span>Your Cart</span><br/>
                        <span>Php {totalAmount.toLocaleString(
                            "fil-PH",
                            {
                                style: "currency",
                                currency: "PHP"
                            }
                        )}</span>
                    </div>
                    <Link
                        to={NavPath.SIGN_IN_PAGE.URL}
                        onClick={()=>{
                            scroll_to_section(NavPath.SIGN_IN_PAGE.ID_ATTR, 200);
                            setShowCart(false);
                        }}
                        className="
                        btn-check-out
                        bg-amber-700
                        group/btn-check-out
                        p-4 rounded-[2.5rem]
                        hover:bg-lime-400
                        cursor-pointer
                        ease-in-out duration-300
                        border-4
                        border-amber-950
                        flex place-content-center
                        place-items-center
                        hover:scale-105">
                        <span className="
                            text-center text-white
                            group-hover/btn-check-out:text-amber-950">
                            Check Out
                        </span>
                    </Link>
                </div>
            </div>
        </>
    );
}

const  HeaderSection = header_section;
export default HeaderSection;