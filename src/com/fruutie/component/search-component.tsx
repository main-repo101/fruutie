// import { FaSearch } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

function search_component( {className}:{className: string}): JSX.Element {
    return (
        <>
            <div className={`${className}
                transform transition-all`}>
                <form className='
                    group/form
                    inline-flex gap-2
                    w-[15vw]
                    sm:w-[30vw]
                    xl:w-[45vw]
                    place-content-center place-items-center'>
                    <input type='text'
                        name='txtSearch'
                        placeholder="Search fruit name, tag, farmer"
                        autoComplete="off"
                        className='
                        txt-search
                        bg-amber-200/95
                        border-2
                        inset-0
                        outline-0
                        placeholder:text-slate-500
                        text-amber-800
                        focus:border-amber-800
                        group-hover/form:placeholder:text-amber-800
                        group-hover/form:border-amber-800
                        group-hover/form:rounded-xl
                        duration-500
                        ease-in-out
                        pl-2 pr-2
                        w-[90%]'/>
                    <button type='submit'
                        className='w-[1.8rem] h-[1.6rem]
                        rounded-xl border-2 
                        group-hover/form:scale-125
                        group-hover/form:bg-amber-800
                        group-hover/form:border-amber-300
                        group-hover/form:text-amber-300
                        duration-500
                        ease-in-out'>
                        <GoSearch 
                        className='w-[100%] h-[100%]
                        bg-contain
                        active:bg-amber-100
                        active:text-amber-800
                        rounded-full
                        '/>
                    </button>
                </form>
            </div>
        </>
    );
}

const SearchComponent = search_component;
export default SearchComponent;