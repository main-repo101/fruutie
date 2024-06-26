import IconTitleLogo from '/src/resource/img/icon/icon-logo-white.png';
import { NavLink } from 'react-router-dom';
import { scroll_to_section } from '../core/util/scroll-to-section.ts';

function logo_component(): JSX.Element {
    return (
        <>
            <NavLink id='TITLE_LOGO' 
                to='/'
                onClick={()=>scroll_to_section('HOME_PAGE',200)}
                className='inline-flex w-[5rem] h-[5rem]
                rounded-full
                transform transition-all
                origin-center
                duration-500 ease-in-out'>
                <img 
                    src={IconTitleLogo}
                    className='
                    bg-contain bg-no-repeat
                    rounded-full
                    active:bg-amber-400
                    hover:title-logo
                    duration-500
                    ease-out'
                    alt='LOGO'
                    >
                </img>
            </NavLink>
        </>
    );
}

const LogoComponent = logo_component;
export default LogoComponent;