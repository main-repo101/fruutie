
import React, { useState } from 'react';
import { FaBars, FaX } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { scroll_to_section } from '../core/util/scroll-to-section';

export function nav_bar_mobile_component(
    {
        className
    }:
    {
        className?:string
    }
): React.ReactElement {

    const [ isMenuClick, setIsMenuClick ] = useState(false);
    return <>
        <div id="NAV_BAR_MOBILE_COMPONENT"
            className={`
            pl-8 pr-4
            transform transition-all
            relative
            ${className}
            `}>
            <div 
                onClick={
                    e=>{
                        e.preventDefault();
                        setIsMenuClick(prev=>!prev);
                    }
                }
                className="btn-menu
                cursor-pointer
                ease-in-out duration-500">
            {
                !isMenuClick
                ?<FaBars className='text-[2rem]
                    ease-in-out duration-500'/>
                :<FaX className='text-[2rem]
                    ease-in-out duration-500
                    animate-pulse
                    text-amber-800'/>
            }
            </div>
            {
                isMenuClick
                ?
                <div className='
                    absolute flex flex-col
                    place-content-center
                    place-items-center
                    mt-[32rem]
                    mr-[calc(100vw-20rem)]
                    -ml-[12rem]
                    pb-[2rem]
                    w-[100vw]
                    h-[50svh]
                    bg-amber-100
                    border-2
                    border-amber-800
                    pl-[1rem]
                    pr-[1rem]
                    text-center
                    rounded-br-[10rem]
                    rounded-bl-[10rem]

                    text-xl font-semibold'>
                    <Link to='/'
                        className='
                        w-[100%]
                        hover:bg-amber-800
                        hover:text-amber-100
                        pt-2 pb-2'
                        onClick={ () => {
                                setIsMenuClick(prev=>!prev)
                                scroll_to_section('HOME_PAGE',200)
                            }
                        }>
                        Home
                    </Link>
                    <Link to='/product'
                        className='
                        w-[100%]
                        hover:bg-amber-800
                        hover:text-amber-100
                        pt-2 pb-2'
                        onClick={ () => {
                                setIsMenuClick(prev=>!prev)
                                scroll_to_section('PRODUCT_PAGE',200)
                            }
                        }>
                        Product
                    </Link>
                    <Link to='/services'
                        className='
                        w-[100%]
                        hover:bg-amber-800
                        hover:text-amber-100
                        pt-2 pb-2'
                        onClick={ () => {
                                setIsMenuClick(prev=>!prev)
                                scroll_to_section('SERVICE_PAGE',200)
                            }
                        }>
                        Services
                    </Link>
                    <Link to='/about-us'
                        className='
                        w-[100%]
                        hover:bg-amber-800
                        hover:text-amber-100
                        pt-2 pb-2'
                        onClick={ () => {
                                setIsMenuClick(prev=>!prev)
                                scroll_to_section('ABOUT_US_PAGE',200)
                            }
                        }>
                        About-Us
                    </Link>
                </div>
                : ``
            }
        </div>
    </>;
}

const NavBarMobileComponent = nav_bar_mobile_component;
export default NavBarMobileComponent;