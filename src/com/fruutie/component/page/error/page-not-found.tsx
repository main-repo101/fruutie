import { useEffect } from 'react';
import { FaTriangleExclamation as IconWarning } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { scroll_to_section } from '../../../core/util/scroll-to-section';
import { com$fruutie$core$util } from '../../../core/util/com$fruutie$core$util.ts';

const {NavPath} = com$fruutie$core$util;

function page_not_found( {title}:{ title?: string|null } ): JSX.Element {
    console.log(`::: Error: Page not found`);
    useEffect(() => {
        document.title = `${title??'Empty'}; 404 - Not Found`;
        return () => {
            document.title = `${title??'Empty'}`;
        };
    }, []);

    return (
        <>
            <div id={NavPath.ERROR_PAGE_NOT_FOUND.ID_ATTR}  
                className='
                w-[100%] h-[80svh]
                overflow-y-hidden
                flex flex-col 
                place-content-center place-items-center
                gap-2
                group
                transform
                transition-all
                pt-4 pb-4'>
                <IconWarning className='
                text-red-500 text-5xl
                bg-transparent
                rounded-t-full
                group-hover:text-amber-500
                ease-in-out
                duration-500
                shadow-xl
                drop-shadow-2xl
                animate-bounce'/>
                <h1 className='
                    text-xl font-semibold
                    pb-8'>
                    404: Page Not Found
                </h1>
                <div className='inline-flex gap-4'>
                    <button className='
                        inline-flex place-content-center place-items-center
                        btn-go-home relative overflow-hidden
                        border-2 border-solid border-slate-800
                        hover:border-slate-500 rounded-xl
                        active:bg-white
                        nav-link-go-home 
                        text-center
                        font-semibold
                        p-2 
                        hover:bg-amber-600 hover:text-white
                        hover:scale-105
                        duration-150
                        ease-in-out'
                        onClick={()=>window.history.back()}>
                        Go Back
                    </button>
                    <button className='
                        inline-flex place-content-center place-items-center
                        btn-go-home relative overflow-hidden
                        border-2 border-solid border-slate-800
                        hover:border-slate-500 rounded-xl'>
                        <NavLink className='
                            nav-link-go-home 
                            relative block  
                            text-center
                            active:bg-white
                            font-semibold
                            p-2 
                            hover:bg-amber-600 hover:text-white
                            hover:scale-105
                            duration-150
                            ease-in-out' 
                            to='/'
                            onClick={()=>scroll_to_section('HOME_PAGE', 200)}>
                            Go home
                        </NavLink>
                    </button>
                </div>
            </div>
        </>
    );
}

const PageNotFound = page_not_found;
export default PageNotFound;