// import { FaSearch } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState } from "react";
import { scroll_to_section } from "../core/util/scroll-to-section";

import simpleDbFruitAPI from "../../../resource/db/fruit.json";

import IProduct from "../core/model/IProduct.mts";
import { FaEye } from "react-icons/fa6";

function search_component( {
    className
}:{
    className: string
}): JSX.Element {
    const [ txtSearch, setTxtSearch ] = useState('');
    const [ probableSearch, setProbableSearch ] = useState(Array<IProduct>);

    // function searchProduct(searchQuery: string): IProduct[] {
    //     const normalizedQuery = searchQuery.trim().toLowerCase();
    //     return simpleDbFruitAPI.filter(item =>
    //         normalizedQuery.split(' ').some(keyword =>
    //             item.name.toLowerCase().includes(keyword) ||
    //             item.producer.some(producer => producer.toLowerCase().includes(keyword)) ||
    //             item.tag.some(tag => tag.toLowerCase().includes(keyword))
    //         )
    //     );
    // }
    
    
    function searchProduct(searchQuery: string): IProduct[] {
        const normalizedQuery = searchQuery.trim().toLowerCase();
        const keywords = normalizedQuery.split(' ').map(keyword => keyword.toLowerCase());
    
        return simpleDbFruitAPI.filter(item => {
            return keywords.some(keyword => {
                return (
                    item.name.toLowerCase().includes(keyword) ||
                    item.producer.some(producer => producer.toLowerCase().includes(keyword)) ||
                    item.tag.some(tag => tag.toLowerCase().includes(keyword))
                );
            });
        });
    }
    

    return (
        <>
            <div className={`${className}
                transform transition-all
                `}>
                <div className='
                    group/form
                    inline-flex gap-2
                    w-[100%]
                    pt-1 pb-1
                    md:w-[30vw]
                    xl:w-[45vw]
                    place-content-center place-items-center'>
                    <input type='text'
                        name='txtSearch'
                        placeholder="Search fruit name, tag, producer..."
                        autoComplete="off"
                        value={txtSearch}
                        onChange={e=>{
                            e.preventDefault();
                            setTxtSearch( e.target.value );
                            setProbableSearch( searchProduct(txtSearch) );
                        }}
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
                    {/* REM: Don't know if this is the right way.... of implementing it. */}
                    <Link
                        to={txtSearch && txtSearch.trim()?`/search/${txtSearch}`:`#`} 
                        onClick={ 
                            () => {
                                setTxtSearch('');
                                scroll_to_section('SEARCH_PRODUCT_PAGE', 200);
                            }
                        }
                        type='submit'
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
                    </Link>
                    {
                        txtSearch.trim() && probableSearch.length > 0
                        ?
                        <div className="searchResultList
                            hidden
                            group-focus-within/form:flex
                            absolute bg-amber-100
                            top-[2.2rem]
                            left-0
                            border-2
                            border-amber-800
                            rounded-md
                            min-h-fit w-[100%]">
                            <ul className='
                                flex flex-col
                                text-amber-800'>
                                {
                                    probableSearch.slice(
                                        0,
                                        Math.min(5, simpleDbFruitAPI.length)
                                    ).map(
                                        (item, index ) => {
                                            return <>
                                                <Link 
                                                    to={`/product/${item.name}/${item.id}`}
                                                    onClick={
                                                        ()=>{
                                                            setTxtSearch('');
                                                            scroll_to_section('SELF_PRODUCT_PAGE', 200);
                                                        }
                                                    }
                                                    key={index}
                                                    className='
                                                    p-2 hover:bg-amber-200'>
                                                    {item.name}; {item.producer.join(', ')}; {item.tag.join(', ')}
                                                </Link>
                                            </>
                                        }
                                    )
                                }
                                {
                                    
                                    //REM: TODO_HERE; Need fixing... search more related to the input...
                                    probableSearch.length > 5
                                    ? <><Link 
                                        to={`/product/more/${
                                            probableSearch
                                            .filter(item => item && item.tag)
                                            .flatMap(item => item.tag )
                                            .map( x => x.replace(' ', '-'))
                                            .filter((value, index, self) => self.indexOf(value) === index)
                                            .join(' ')
                                        }`}
                                        onClick={
                                            ()=>{
                                                setTxtSearch('');
                                                scroll_to_section('MORE_PRODUCT_PAGE', 200);
                                            }
                                        }
                                        className='
                                        flex
                                        flex-row
                                        hover:bg-amber-300
                                        font-bold
                                        group/more'>
                                        <FaEye className='opacity-0
                                            absolute
                                            bottom-1
                                            group-hover/more:flex
                                            group-hover/more:place-content-center
                                            group-hover/more:place-items-center
                                            group-hover/more:pl-4
                                            group-hover/more:opacity-100
                                            w-[2rem] h-[2rem]
                                            ease-in-out duration-300'/>
                                        <h1 className='p-2
                                            w-[100%]
                                            group-hover/more:translate-x-8
                                            ease-linear duration-300
                                            flex
                                            place-content-baseline
                                            place-items-center'>
                                            More...
                                        </h1>
                                    </Link></>
                                    : ``
                                }
                            </ul>
                        </div>
                        : ``
                    }
                </div>
            </div>
        </>
    );
}

const SearchComponent = search_component;
export default SearchComponent;