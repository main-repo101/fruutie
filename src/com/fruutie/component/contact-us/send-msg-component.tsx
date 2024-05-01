import React, { useState } from "react";

export function send_msg_component(): React.ReactElement {

    const [ getMessage, setMessage ] = useState("");
    const [ getEmail, setEmail ] = useState("");
    return <>
        <div className="flex flex-col
            place-items-center
            place-content-center
            h-[35rem]
            transition-transform">
            <h1 className="p-4 text-[2rem]
                font-semibold text-center
                w-[100%]">Contact Us</h1>
            <form id="ID_CONTACT_US" action="" method="POST"
                className="flex flex-col
                w-[20rem]
                sm:w-[30rem]
                place-content-center place-items-center
                gap-4">
                <input type="email" className="border-2
                    border-amber-800 rounded-xl
                    w-[100%]
                    h-[2rem]
                    p-4
                    text-amber-800
                    placeholder:text-amber-950
                    hover:border-slate-800
                    hover:placeholder:text-slate-800
                    bg-white/85" 
                    onChange={(e)=>{ setEmail( e.target.value )}}
                    placeholder="Email..."/>
                <textarea className="border-2
                    border-amber-800 rounded-xl
                    w-[100%]
                    h-[15rem]
                    p-4
                    text-amber-800
                    placeholder:text-amber-950
                    hover:border-slate-800
                    hover:placeholder:text-slate-800
                    bg-white/85" 
                    onChange={(e)=>{ setMessage( e.target.value )}}
                    placeholder="Message..."/>
                <div className="w-[100%] text-end">
                    <button 
                        className={`text-end border-2 border-amber-800 p-1 pl-2 pr-2 rounded-xl ease-in-out duration-300 
                        ${getEmail.trim() !== "" && getMessage.trim() !== "" ? 'hover:scale-110 hover:bg-amber-800 hover:text-white' : ''}`}
                        disabled={getEmail.trim() === "" || getMessage.trim() === ""}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </>;
}


const SendMsgComponent = send_msg_component;
export default SendMsgComponent;