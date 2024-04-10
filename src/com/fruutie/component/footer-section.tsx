
import { NavLink } from 'react-router-dom';
import IconLogo from '/src/resource/img/icon/icon-logo-white.png'
import { scroll_to_section } from '../core/util/scroll-to-section';
import NavPath from '../core/util/NavPath';
import AboutUsContactUsComponent from './about-us/about-us-contact-us-component.tsx';
function FooterSection(): JSX.Element {
    return (
        <>
            <div className="FOOTER_COMPONENT
                border-t-amber-600
                border-4
                flex flex-col gap-4 
                place-content-center
                place-items-center
                from-amber-200
                to-amber-100/50
                bg-gradient-to-t
                pt-5
                transform transition-all">
                <div className="footer-ceil
                    pt-6
                    flex flex-col 
                    place-content-center
                    place-items-center
                    md:flex-row
                    gap-6
                    md:gap-12
                    ">
                    <div className="pnl-logo
                        group/pnl-logo
                        flex flex-col
                        place-content-center
                        place-items-center
                        pb-8
                        md:flex-row
                        md:gap-4">
                        <NavLink to='/'
                            onClick={()=>scroll_to_section('HOME_PAGE',200)}
                            className='
                            group/pnl-logo
                            w-[5rem]
                            rounded-full'>
                            <img src={IconLogo} 
                                className='w-[100] h-auto
                                rounded-full
                                group-hover/pnl-logo:scale-125
                                hover:title-logo
                                duration-500
                                ease-out
                                '/>
                        </NavLink>
                        <div className="text">
                            <h1 className=''>
                                <NavLink to='/' 
                                onClick={()=>scroll_to_section('HOME_PAGE',200)}
                                className='title
                                    flex
                                    place-content-center
                                    place-items-center
                                    text-2xl font-semibold
                                    pb-0
                                    md:pb-2
                                    border-transparent
                                    border-4
                                    pnl-logo:text-slate-800
                                    ease-in-out
                                    duration-300'><span
                                    className='
                                    hover:text-amber-800
                                    border-transparent
                                    border-4
                                    text-center
                                    w-[100%]
                                    group-hover/pnl-logo:border-b-amber-800
                                    ease-in-out
                                    duration-300'>Fruutie
                                        </span></NavLink>
                            </h1>
                            <AboutUsContactUsComponent className='
                                flex
                                sm:hidden
                                lg:flex
                                flex-col'/>
                        </div>
                    </div>
                    <div className="page-link
                        pt-4 pb-4
                        flex flex-col
                        gap-8
                        md:flex-row-reverse">
                        <div className="col-1
                            group/col-1
                            w-[8rem]
                            flex flex-col
                            top-0
                            text-center
                            place-items-center
                            place-content-start
                            gap-2">
                            <NavLink to='/about-us'
                                onClick={()=>scroll_to_section('ABOUT_US_PAGE',200)}
                                className='
                                hover:text-amber-800
                                text-xl border-b-4
                                border-opacity-0
                                border-transparent
                                w-[100%]
                                group-hover/col-1:border-amber-800
                                ease-in-out duration-500'>About Us</NavLink>
                            <NavLink to={NavPath.ABOUT_US_INTRO.URL}
                                className='
                                hover:text-amber-800'
                                onClick={()=>scroll_to_section(NavPath.ABOUT_US_INTRO.ID_ATTR,200)}>Intro</NavLink>
                            <NavLink to={NavPath.ABOUT_US_MISSION.URL}
                                onClick={()=>scroll_to_section(NavPath.ABOUT_US_MISSION.ID_ATTR,200)}
                                className='
                                hover:text-amber-800'>Mission</NavLink>
                            <NavLink to={NavPath.ABOUT_US_PRODUCT_OVERVIEW.URL}
                                onClick={()=>scroll_to_section(NavPath.ABOUT_US_PRODUCT_OVERVIEW.ID_ATTR,200)}
                                className='
                                hover:text-amber-800'>Product Overview</NavLink>
                            <NavLink to={NavPath.ABOUT_US_TEAM_MEMBER.URL}
                                onClick={()=>scroll_to_section(NavPath.ABOUT_US_TEAM_MEMBER.ID_ATTR,100)}
                                className='
                                hover:text-amber-800'>Team Member</NavLink>
                            <NavLink to={NavPath.ABOUT_US_CONTACT_US.URL}
                                onClick={()=>scroll_to_section(NavPath.ABOUT_US_CONTACT_US.ID_ATTR,200)}
                                className='
                                hover:text-amber-800'>Contact Us</NavLink>
                            
                        </div>
                        <div className="col-2
                            group/col-2
                            flex flex-col
                            w-[8rem]
                            gap-2
                            text-center
                            place-items-center
                            place-content-start">
                            <NavLink to={NavPath.PRODUCT_PAGE.URL}
                                onClick={()=>scroll_to_section(NavPath.PRODUCT_PAGE.ID_ATTR,200)}
                                className='
                                hover:text-amber-800
                                text-xl border-b-4
                                border-opacity-0
                                border-transparent
                                w-[100%]
                                group-hover/col-2:border-amber-800
                                ease-in-out duration-500'>Product</NavLink>
                            <NavLink to={NavPath.PRODUCT_DRIED_FRUIT.URL}
                                onClick={()=>scroll_to_section(NavPath.PRODUCT_DRIED_FRUIT.ID_ATTR,200)}
                                className='
                                hover:text-amber-800'>Dried Fruit</NavLink>
                            <NavLink to={NavPath.PRODUCT_JUICY_FRUIT.URL}
                                onClick={()=>scroll_to_section(NavPath.PRODUCT_JUICY_FRUIT.ID_ATTR,200)}
                                className='
                                hover:text-amber-800'>Juicy Fruit</NavLink>
                            <NavLink to={NavPath.PRODUCT_CANDY_FRUIT.URL}
                                onClick={()=>scroll_to_section(NavPath.PRODUCT_CANDY_FRUIT.ID_ATTR,200)}
                                className='
                                hover:text-amber-800'>Candy Fruit</NavLink>
                        </div>
                        <div className="col-3
                            group/col-3
                            w-[8rem]
                            flex flex-col
                            gap-2
                            text-center
                            place-items-center
                            place-content-start">
                            <NavLink to={NavPath.SERVICE_PAGE.URL}
                                onClick={()=>scroll_to_section(NavPath.SERVICE_PAGE.ID_ATTR,200)}
                                className='
                                hover:text-amber-800
                                text-xl border-b-4
                                border-opacity-0
                                border-transparent
                                w-[100%]
                                group-hover/col-3:border-amber-800
                                ease-in-out duration-500'>Services</NavLink>
                            <NavLink to=''
                                className='
                                hover:text-amber-800'>text-here</NavLink>
                            <NavLink to=''
                                className='
                                hover:text-amber-800'>text-here</NavLink>
                            <NavLink to=''
                                className='
                                hover:text-amber-800'>text-here</NavLink>
                        </div>
                    </div>
                </div>
                <div className="footer_floor
                    pt-2 pb-2
                    inline-flex
                    place-content-center
                    place-items-center
                    border-t-2
                    border-t-amber-600
                    w-[100%]">
                    <p>All Right Reserve.&nbsp;<span 
                        className='text-xl
                        font-semibold'>&copy;</span>&nbsp;
                        <span className=''>copy right</span></p>
                </div>
            </div>
        </>
    )
}

export default FooterSection;