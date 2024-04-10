
export const nav_link_style_component = ({ isActive }: { isActive: boolean }): string => {
    const commonClass: string = `
        pl-2 pr-2
        border-b-4
        hover:pb-2
        hover:text-amber-950
        hover:border-amber-800
        active:text-amber-500
        active:border-amber-500
        duration-150 ease-in-out`;
    const conditionalClass: string = isActive ? 'text-amber-950 border-b-4 border-amber-800' : 'border-transparent';
    return `${commonClass} ${conditionalClass}`;
};

const NavLinkStyleComponent = nav_link_style_component;
export default NavLinkStyleComponent;