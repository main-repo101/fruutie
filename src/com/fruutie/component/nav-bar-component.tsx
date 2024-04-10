import { NavLink } from "react-router-dom";
import { useState } from "react";
import { scroll_to_section } from "../core/util/scroll-to-section.ts";
import NavPath from "../core/util/NavPath.ts";


export const navLinkStyleClass = ({ isActive }: {isActive:boolean}): string =>  {
    const commonClass: String = `
        pl-2 pr-2
        border-b-4
        hover:pb-2
        hover:text-amber-950
        hover:border-amber-800
        active:text-amber-500
        active:border-amber-500
        duration-150 ease-in-out`;
    const conditionalClass: String = isActive ? 'text-amber-950 border-b-4 border-amber-800' : 'border-transparent';
    return `${commonClass} ${conditionalClass}`;
};

function nav_bar_component( {className}: {className: string}): JSX.Element {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    const handleMouseEnter = () => {
      setIsDropDownVisible(true);
    };
  
    const handleMouseLeave = () => {
      setIsDropDownVisible(false);
    };

    const dropDownProductClassStyle = (): string => {
        
        const classStyle: string = `
            drop-down-product-link
            absolute flex flex-col 
            mt-3 
            pt-4 pb-4 gap-2
            bg-white
            border-2 border-amber-800 rounded-lg
            rounded-bl-[5rem] rounded-tr-[5rem]
        `;

        return `${ isDropDownVisible? `` : `hidden` } ${ classStyle}`;
    }
    return (
        <>
            <div className={`${className}
                place-content-center
                place-items-center
                transform transition-all
                `}>
                <NavLink
                    to='/'
                    className={navLinkStyleClass}
                    onClick={()=>scroll_to_section('HOME_PAGE',200)}>
                    Home
                </NavLink>
                <NavLink id='NAV_LINK_PRODUCT'
                    to='/product'
                    className={navLinkStyleClass} 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    Product
                    <div 
                        id='NAV_LINK_DROP_DOWN_PRODUCT' className={dropDownProductClassStyle()}>
                        <NavLink 
                            to={NavPath.PRODUCT_DRIED_FRUIT.URL}
                            onClick={() => 
                                scroll_to_section(NavPath.PRODUCT_DRIED_FRUIT.ID_ATTR,200)}
                            className='pl-8 pr-2
                            border-2
                            mr-4
                            border-solid
                            border-transparent
                            hover:border-b-amber-800
                            hover:text-amber-800
                            active:text-amber-800'>
                            Dried Fruit
                        </NavLink >
                        <NavLink to={NavPath.PRODUCT_JUICY_FRUIT.URL}
                            onClick={()=>scroll_to_section(NavPath.PRODUCT_JUICY_FRUIT.ID_ATTR,200)}
                            className='pl-10 pr-4
                            border-2
                            ml-1 mr-1
                            border-solid
                            border-transparent
                            hover:border-b-amber-800
                            hover:text-amber-800
                            active:text-amber-800'>
                            Juicy Fruit
                        </NavLink>
                        <NavLink to={NavPath.PRODUCT_CANDY_FRUIT.URL}
                            onClick={()=>scroll_to_section(NavPath.PRODUCT_CANDY_FRUIT.ID_ATTR,200)}
                            className='pl-8 pr-6
                            border-2
                            ml-[1.8rem] mr-1
                            text-center
                            border-solid
                            border-transparent
                            hover:border-b-amber-800
                            hover:text-amber-800
                            active:text-amber-800'>
                            Candy Fruit
                        </NavLink>
                    </div>
                </NavLink>
                <NavLink
                    to='/services'
                    className={navLinkStyleClass}
                    onClick={()=>scroll_to_section('SERVICE_PAGE',200)}>
                    Services
                </NavLink>
                <NavLink
                    to='/about-us'
                    className={navLinkStyleClass}
                    onClick={()=>scroll_to_section('ABOUT_US_PAGE',200)}>
                    About Us
                </NavLink>
            </div>
        </>
    );
}

const NavBarComponent = nav_bar_component;

export default NavBarComponent;