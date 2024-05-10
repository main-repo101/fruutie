import React from "react";
import { FaArrowUp } from "react-icons/fa6";


export function to_top(): React.ReactElement {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY;
            setIsVisible(scrollTop > 150);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            {(
                <div
                    className={`
                    ${(isVisible)? `flex
                    w-[3.5rem]
                    h-[3.5rem]
                    sm:w-[5rem]
                    sm:h-[5rem]` : `hidden w-0 h-0`}
                    rounded-xl
                    `}
                    onClick={scrollToTop}
                >
                    <FaArrowUp
                        className="
                            animate-bounce
                            w-[100%]
                            h-[100%]
                            font-semibold
                            text-amber-900
                            cursor-pointer"
                    />
                </div>
            )}
        </>
    );
}

const ToTop = to_top;
export default ToTop;