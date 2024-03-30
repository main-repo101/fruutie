import { NavLink } from "react-router-dom";

export const navLinkStyleClass = ({ isActive }: {isActive:boolean}) => {
    const commonClass = `
        pl-2 pr-2
        border-b-4
        hover:pb-2
        hover:text-amber-950
        hover:border-amber-800
        active:text-amber-500
        active:border-amber-500
        duration-150 ease-in-out`;
    const conditionalClass = isActive ? 'text-amber-950 border-b-4 border-amber-800' : 'border-transparent';
    return `${commonClass} ${conditionalClass}`;
};

function nav_component( {className}: {className: string}): JSX.Element {
    return (
        <>
            <div className={`${className}
                place-content-center
                place-items-center
                transform transition-all`}>
                <NavLink
                    to='/'
                    className={navLinkStyleClass}>
                    Home
                </NavLink>
                <NavLink
                    to='/product'
                    className={navLinkStyleClass}>
                    Product
                </NavLink>
                <NavLink
                    to='/services'
                    className={navLinkStyleClass}>
                    Services
                </NavLink>
                <NavLink
                    to='/about-us'
                    className={navLinkStyleClass}>
                    About Us
                </NavLink>
            </div>
        </>
    );
}

const NavComponent = nav_component;

export default NavComponent;