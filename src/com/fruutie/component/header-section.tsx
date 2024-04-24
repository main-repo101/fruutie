import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import NavBarComponent from "./nav-bar-component.tsx";
import LogoComponent from "./logo-component.tsx";
import SearchComponent from "./search-component.tsx";
import IconProfile from '/src/resource/img/icon/icon-logo-white.png';

import { com$fruutie$core } from '../core/com$fruutie$core.ts';
import { scroll_to_section } from "../core/util/scroll-to-section.ts";
import { useState } from "react";
import NavBarMobileComponent from "./nav-bar-mobile-component.tsx";

function header_section({username = com$fruutie$core.Status.NA.VALUE, title}:{username?:string|null, title?:string|null|undefined}): JSX.Element {
    console.log(`::: /src/com/fruutie/component/header-section.tsx: title=${title}`);
    const [showCart, setShowCart] = useState(false);

    return (
        <>
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
                                setShowCart(prevData=> !prevData );
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
                    <NavBarMobileComponent className='flex
                    place-content-center
                    place-items-center
                    sm:hidden'/>
                </div>
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
                ${showCart ? `translate-x-[0rem]` : `translate-x-[50rem]`}`}>
                    
            </div>
        </>
    );
}

const HeaderSection = header_section;
export default HeaderSection;