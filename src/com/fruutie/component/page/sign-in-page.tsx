import NavPath from "../../core/util/NavPath";
import React from "react";

export function sign_in_page(
    {title}:{title?:string | null}
): JSX.Element {
    
    React.useEffect(() => {
        document.title = `${document.title.split('~')[0]} ~ Sign-In`;
        return () => {
            document.title = `${document.title.split('~')[0]?? 'Empty'}`;
        };
    }, []);
    return <>
        <div id={NavPath.SIGN_IN_PAGE.ID_ATTR}
            className='flex flex-col 
            w-[100%]
            h-[60vh]
            place-content-center
            place-items-center
            pt-6 pb-6
            transform transition-all'>
            <h1 className='text-2xl
                p-6
                font-semibold
                text-amber-800'>Log In</h1>
            <form action="" method='POST' className="sign-in
                flex flex-col
                place-content-center
                place-items-center
                w-[100%]
                gap-6">
                <input 
                    type='text'
                    placeholder="Username or Email..."
                    autoComplete="off"
                    className='border-2
                    border-amber-800
                    rounded-xl
                    pl-4 pr-4
                    hover:border-amber-600
                    outline-none
                    focus:border-amber-600
                    text-amber-800
                    hover:scale-105
                    hover:focus-within:scale-105
                    ease-in-out duration-500'>
                </input>
                <input 
                    type='password'
                    placeholder="Password..."
                    autoComplete="off"
                    className='border-2
                    border-amber-800
                    rounded-xl
                    pl-4 pr-4
                    hover:border-amber-600
                    outline-none
                    focus:border-amber-600
                    text-amber-800
                    hover:scale-105
                    hover:focus-within:scale-105
                    ease-in-out duration-500'>
                </input>
                <button type='submit'
                    className='border-2
                    border-amber-800
                    p-2 pl-6 pr-6
                    rounded-full
                    bg-amber-200
                    hover:bg-amber-800
                    hover:text-white
                    ease-in-out
                    w-[10rem]
                    text-center
                    duration-300 relative
                    hover:scale-110
                    hover:border-amber-600'>
                    Log in&nbsp;<span className='
                        top-0 text-[0.7rem] absolute
                        font-semibold italic'>
                        {title}
                        </span>
                </button>
            </form>
        </div>
    </>
}

export const SignInPage = sign_in_page;
export default SignInPage;