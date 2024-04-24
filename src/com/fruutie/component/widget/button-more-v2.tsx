
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { scroll_to_section } from "../../core/util/scroll-to-section";
import { Status } from "../../core/Status";

export function button_more_v2(
    {
        url
    }:
    {
        url?:string
    }
): JSX.Element {
    url = url || Status.NA.VALUE;
    return <>
        <button 
            className='
            btnMore
            mt-2
            group/btnMore
            inline-flex
            relative'>
            <Link
                onClick={()=>
                    scroll_to_section('MORE_PRODUCT_PAGE', 200)
                }
                to={url}
                className='
                border-[0.1rem]
                border-lime-800
                bg-lime-400 p-1
                rounded-r-xl
                group-hover/btnMore:w-[8rem]
                group-hover/btnMore:text-center
                group-hover/btnMore:bg-amber-800
                group-hover/btnMore:text-white
                group-hover/btnMore:border-l-[2rem]
                group-hover/btnMore:border-l-lime-400
                ease-in-out duration-300'>
                More...
                <FaEye className='absolute hidden
                    group-hover/btnMore:flex top-2
                    left-2 text-amber-950'/>
            </Link>
        </button>
    </>;
}

const ButtonMoreV2 = button_more_v2;
export default ButtonMoreV2;