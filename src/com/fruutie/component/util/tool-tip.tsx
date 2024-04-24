// import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

function tooltip({ text, children }: TooltipProps ): React.ReactElement {
    // type Position = {
    //     x: number;
    //     y: number;
    // };

    // type TooltipStyles = {
    //     left: number;
    //     top: number;
    // };

    // const [position, setPosition] = useState< Position | null >(null);

    // const handleMouseMove = (e: React.MouseEvent) => {
    //     setPosition({ x: e.clientX, y: e.clientY });
    // };

    // const handleMouseLeave = () => {
    //     setPosition(null);
    // };
    
    // const getTooltipStyles = (position: Position): TooltipStyles => {
    //     const width = window.innerWidth;
    //     console.log( width );
    //     if (width >= 820) {
    //         console.log('>=820',position.y)
    //         return {
    //             left: position.x - 500,
    //             top: position.y - 2000,
    //         };
    //     } else {
    //         console.log('_',position.y)
    //         return {
    //             left: position.x - 225,
    //             top: position.y - 355,
    //         };
    //     }
    // };

    return (
        <div 
            className="tooltip-container
            group/tooltip
            w-fit
            relative
            flex
            flex-row
            flex-wrap
            place-content-center
            place-items-center
            gap-2
            text-[1.1rem]
            transform transition-all"
            // onMouseMove={handleMouseMove}
            // onMouseLeave={handleMouseLeave}
        >
            <div className="tooltip-content
                z-10">
                {children}
            </div>
            {(
            <div 
                className={`tooltip-text
                font-semibold
                text-amber-50
                bg-amber-500
                rounded-full
                flex
                sm:-translate-x-[8rem]
                sm:text-[0]
                group-hover/tooltip:translate-x-[0]
                group-hover/tooltip:text-[1.1rem]
                place-content-center
                place-items-center
                pl-2 pr-2
                ease-in-out duration-300`}
                // style={{ 
                //     ...getTooltipStyles( position )
                // }}
                >
                {text}
            </div>
            )}
        </div>
    );
};

const Tooltip = tooltip;
export default Tooltip;