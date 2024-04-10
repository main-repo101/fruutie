import { NavLink } from "react-router-dom";
import { ReactNode } from 'react';
import NavLinkStyleComponent from "./nav-link-style-component";
import { com$fruutie$core$model } from "../core/model/com$fruutie$core$model.ts";


function nav_link_component({ to, name, isActive, className, children }: com$fruutie$core$model.INavLink & { children?: ReactNode }): JSX.Element {
    return (
        <NavLink 
            to={to} 
            className={`${NavLinkStyleComponent({isActive})} ${className}`}>
            {name}
            {children && children}
        </NavLink>
    );
}
const NavLinkComponent = nav_link_component;
export default NavLinkComponent;