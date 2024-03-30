import { useEffect } from 'react';
import { FaTriangleExclamation as IconWarning } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

function page_not_found( {title}:{ title?: String } ): JSX.Element {
    useEffect(() => {
        document.title = `${title??'Empty'}; 404 - Not Found`;
        return () => {
            document.title = `${title??'Empty'}`;
        };
    }, []);

    return (
        <>
            <div className='
                flex flex-col 
                place-content-center place-items-center
                gap-2
                group
                transform
                transition-all
                pt-4 pb-4'>
                <IconWarning className='
                text-red-500 text-5xl
                group-hover:text-amber-500
                ease-in-out
                duration-500
                shadow-xl
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
                            to='/'>
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