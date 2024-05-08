import React from "react";


export function message_component(
    {
        className
    }:
    {
        className?: string
    }
) : React.ReactElement<{className?:string}> {

    return <>
        <div className={
            `${className}`
            }>

        </div>
    </>;
}