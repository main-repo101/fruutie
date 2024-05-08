import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function sign_up_page(
    {
        title,
        className,
    }:
    {
        title?:string | null,
        className?:string
    }
): React.ReactElement {

    const [ isShowPassword, setIsShowPassword ] = React.useState(false);
    //REM: TODO_HERE: This is temp... Don't know yet how to do it properly.
    //REM: TODO_HERE; Here we go...
    const [ getEmailValid, setEmailValid ] = React.useState(false);
    // const [ getPasswordValid, setPasswordValid ] = React.useState(false);
    // const [ getRePasswordValid, setRePasswordValid ] = React.useState(false);
    const [ getFirstnameValid, setFirstnameValid ] = React.useState(false);
    const [ getLastnameValid, setLastnameValid ] = React.useState(false);
    const [ getContactNumberValid, setContactNumberValid ] = React.useState(false);
    const [ getHomeAddressValid, setHomeAddressValid ] = React.useState(false);

    return <>
        <div key={title} className={`sign-up-page
            w-[100%] h-[100svh] ${className??``}
            flex place-content-center
            place-items-center
            text-amber-950
            transition-transform`}>
            <form action=""
                className="flex flex-col
                    gap-8
                    m-4
                    w-[30rem]
                    h-[30rem]
                    pl-4
                    pr-4
                    sm:pl-0
                    sm:pr-0
                    ">
                <span className="text-[2rem]
                    flex
                    place-items-center
                    place-content-center
                    flex-0
                    text-center
                    font-semibold
                    pt-2 pb-2">
                    Sign Up
                </span>
                <div className="flex flex-col
                    gap-2">
                    <input type="email" 
                        onChange={
                            e=>{
                                if( e.target.value.trim().length <=0 )
                                    setEmailValid(false);
                                else
                                    setEmailValid(true);
                            }
                        }
                        placeholder="Email Address..."
                        className="
                        flex
                        rounded-full
                        border-2
                        border-amber-950
                        pl-4 pr-4
                        hover:scale-105
                        hover:placeholder:text-amber-800
                        placeholder:text-amber-950
                        ease-in-out duration-150"/>
                    {/**REM: TODO_HERE; don't know if this is the proper implementation */}
                    <input type={isShowPassword? `text` : `password`} 
                        // onChange={
                        //     e=>{
                        //         if( e.target.value.trim().length <=0  )
                        //             setPasswordValid(false);
                        //         else
                        //             setPasswordValid(true);
                        //     }
                        // }
                        placeholder="Password..."
                        className="
                        flex
                        rounded-full
                        border-2
                        border-amber-950
                        pl-4 pr-4
                        hover:scale-105
                        hover:placeholder:text-amber-800
                        placeholder:text-amber-950
                        ease-in-out duration-150"/>
                    {/**REM: TODO_HERE; don't know if this is the proper implementation */}
                    <input type={isShowPassword? `text` : `password`} 
                        // onChange={
                        //     e=>{
                        //         if( e.target.value.trim().length <=0  )
                        //             setRePasswordValid(false);
                        //         else
                        //             setRePasswordValid(true);
                        //     }
                        // }
                        placeholder="Re Password..."
                        className="
                        flex
                        rounded-full
                        border-2
                        border-amber-950
                        pl-4 pr-4
                        hover:scale-105
                        hover:placeholder:text-amber-800
                        placeholder:text-amber-950
                        ease-in-out duration-150"/>
                    <div 
                        onClick={
                            e=>{
                                e.preventDefault();
                                setIsShowPassword(prev => !prev);
                            }
                        }
                        className="inline-flex
                        max-w-fit
                        place-content-center
                        place-items-center
                        gap-2
                        rounded-full
                        cursor-pointer
                        select-none">
                        {
                            isShowPassword
                            ? <FaCheckCircle/>
                            :<FaRegCircle/>
                        }
                        <span>Show Password</span>
                    </div>
                </div>
                <div className="flex flex-0
                    place-content-center
                    place-items-center
                    flex-row w-[100%]
                    gap-2
                    flex-wrap">
                    <input type="text"
                        onChange={
                            e=>{
                                if( e.target.value.trim().length <=0  )
                                    setFirstnameValid(false);
                                else
                                    setFirstnameValid(true);
                            }
                        }
                        className="
                        flex
                        flex-1
                        rounded-full
                        border-2
                        border-amber-950
                        pl-4 pr-4
                        hover:scale-105
                        hover:placeholder:text-amber-800
                        placeholder:text-amber-950
                        ease-in-out duration-150"
                        placeholder="First Name..."/>
                    <input type="text"
                        onChange={
                            e=>{
                                if( e.target.value.trim().length <=0  )
                                    setLastnameValid(false);
                                else
                                    setLastnameValid(true);
                            }
                        }
                        className="
                        flex
                        flex-1
                        rounded-full
                        border-2
                        border-amber-950
                        pl-4 pr-4
                        hover:scale-105
                        hover:placeholder:text-amber-800
                        placeholder:text-amber-950
                        ease-in-out duration-150"
                        placeholder="Last Name..."/>
                    <input type="number" 
                        onChange={
                            e=>{
                                if( e.target.value.trim().length <=0  )
                                    setContactNumberValid(false);
                                else
                                    setContactNumberValid(true);
                            }
                        }
                        inputMode="numeric"
                        placeholder="Contact Number..."
                        className="
                            flex-1
                            flex
                            rounded-full
                            border-2
                            border-amber-950
                            pl-4 pr-4
                            hover:scale-105
                            hover:placeholder:text-amber-800
                            placeholder:text-amber-950
                            ease-in-out duration-150"/>
                </div>
                <input type="text" 
                        onChange={
                            e=>{
                                if( e.target.value.trim().length <=0  )
                                    setHomeAddressValid(false);
                                else
                                    setHomeAddressValid(true);
                            }
                        }
                        placeholder="Home Address..."
                        className="
                            flex-1
                            flex
                            rounded-full
                            border-2
                            border-amber-950
                            pl-4 pr-4
                            hover:scale-105
                            hover:placeholder:text-amber-800
                            placeholder:text-amber-950
                            ease-in-out duration-150"/>
                <label htmlFor=""
                    className="flex flex-row 
                    place-content-center
                    place-items-center
                    gap-2">
                    <span>Already have an Accout?</span>
                    <Link to="/sign-in"
                    className="text-amber-800
                    underline-offset-4
                    underline
                    font-semibold
                    hover:text-amber-950">SIGN_IN</Link>
                </label>
                <div className="
                    flex flex-row place-content-center
                    place-items-center
                    transition-transform">
                    <button
                        disabled={
                            !getEmailValid ||
                            // !getPasswordValid ||
                            // !getRePasswordValid ||
                            !getFirstnameValid ||
                            !getLastnameValid ||
                            !getContactNumberValid ||
                            !getHomeAddressValid 
                        }
                        type="submit"
                        className="bg-amber-800
                        w-[10rem]
                        text-white
                        p-2
                        disabled:bg-gray-500
                        disabled:hover:rounded-none
                        disabled:hover:scale-100
                        disabled:cursor-not-allowed
                        font-semibold
                        hover:scale-105
                        ease-in-out duration-150
                        rounded-none
                        hover:rounded-full">
                        <span>REGISTER</span>
                    </button>
                </div>
            </form>
        </div>
    </>
}

const SignUpPage = sign_up_page;
export default SignUpPage;