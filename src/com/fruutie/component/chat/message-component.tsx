
import React, { useState } from "react";
import { FaComment, FaTimesCircle } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";

export function message_component({
    className
}: {
    className?: string;
}): React.ReactElement<{ className?: string }> {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatBox: React.MouseEventHandler<HTMLDivElement> = (
        e
    ) => {
        if (!(e.currentTarget as HTMLElement).classList.contains("chat-box")) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <>
            <div
                className={`${
                    isOpen 
                    ? `w-64 chat-box
                        h-80` 
                    : "w-16"
                } 
                ${className}
                group/chat-box 
                h-16 bg-amber-500 rounded-full flex items-center 
                justify-center cursor-pointer
                border-2 border-amber-700
                mr-4
                mb-4
                hover:bg-amber-800
                hover:scale-105
                transition-transform
                ease-in-out duration-130`}
                onClick={e=>toggleChatBox(e)}
            >
                {isOpen ? (
                    <div className="flex flex-col
                    w-[100%] h-[100%] bg-slate-100 rounded-xl border-2 border-amber-950
                    p-4 relative">
                        <FaTimesCircle 
                            onClick={e=>{
                                e.preventDefault();
                                setIsOpen(false);
                            }}
                            className="
                            absolute
                            -right-2
                            -top-2
                            place-content-center
                            place-items-center
                            flex text-[1.5rem]
                            text-amber-800
                            bg-amber-100
                            rounded-full
                            hover:scale-110
                            hover:text-amber-950"/>
                        <div className="w-[100%] h-[100%]
                            place-content-center
                            place-items-center
                            flex text-[1.5rem]">
                            <span>On Development...</span>
                        </div>
                        <div className={`input
                            w-[100%] h-[15%]
                            focus-within:h-[35%]
                            inline-flex
                            place-content-center
                            place-items-end
                            rounded-full
                            gap-2`}>
                            <textarea
                                className="
                                    border-2
                                    border-amber-950
                                    h-[100%] 
                                    w-[100%]
                                    inline-flex
                                    align-text-bottom
                                    resize-none
                                    text-end
                                    text-base
                                    leading-tight
                                    bg-amber-100/50
                                    hover:border-amber-800
                                    rounded-xl
                                    p-2"
                                wrap="soft"
                            />
                            <FaPaperPlane className="
                                w-[2rem] h-auto
                                hover:scale-110
                                hover:text-amber-950
                                text-amber-800
                                ease-in-out duration-150
                                pb-2
                                "/>
                        </div>
                    </div>
                ) : (
                    <FaComment className="text-amber-700 text-2xl
                        group-hover/chat-box:text-white
                    " />
                )}
            </div>
        </>
    );
}

const MessageComponent = message_component;
export default MessageComponent;