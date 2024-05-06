import HeroSection from "../hero-section.tsx";
import { com$fruutie$core } from "../../core/com$fruutie$core.ts";

// import hotProduct from '../../../../resource/db/hot_product.json';
// import onSaleProduct from '../../../../resource/db/on_sale_product.json';
import simpleDbFruitAPI from '../../../../resource/db/fruit.json';
import { Link } from "react-router-dom";
import { scroll_to_section } from "../../core/util/scroll-to-section.ts";
import NavPath from "../../core/util/NavPath.ts";
import CardIComponent from "../card-i-component.tsx";
import React from "react";


function home_page( {title = com$fruutie$core.Status.NA.VALUE }:{title?: string | null} ): JSX.Element {

    React.useEffect(() => {
      document.title = `${title} ~ Home`;
      return () => {
          document.title = `${title ?? 'Empty'}`;
      };
    }, []);

    // const HOT_PRODUCT = hotProduct.flat().splice(0,Math.min(4,hotProduct.length));
    // const ON_SALE_PRODUCT = onSaleProduct.flat().slice(0, Math.min(4, onSaleProduct.length));
    console.log(`::: Home page.`);
    return (
      <>
        <div id='HOME_PAGE' className='
          w-[100%] max-h-fit relative
          transition-all transform'>
          <HeroSection title={title} className='
          w-[100%] h-[calc(100vh/1.2)] -mt-[10rem]'/>
          <div className="hot-product
            flex flex-col
            place-content-center
            place-items-center
            pt-6 pb-6">
            <Link 
              to={NavPath.PRODUCT_HOT.URL} 
              onClick={
                ()=>{
                  scroll_to_section(NavPath.PRODUCT_HOT.ID_ATTR, 200)
                }
              }
              className='text-4xl md:text-5xl font-semibold
              p-4 text-amber-800
              hover:text-amber-600
              ease-in-out duration-500'>Hot Product</Link>
            <div className="flex flex-col
              w-[100%]
              pl-[10%] pr-[10%]
              flex-wrap
              gap-8
              sm:gap-4
              place-content-evenly
              place-items-center
              sm:flex-row">
              {simpleDbFruitAPI
              .filter(
                item => item.tag.includes('hot product')
              )
              .slice(
                0,
                Math.min(
                  4,
                  simpleDbFruitAPI.length
                )
              )
              .map((item, index)=>(
                <CardIComponent key={index} product={item} isOnCart={false}/>
              ))}
            </div>
            <Link 
              onClick={()=>
                scroll_to_section('MORE_PRODUCT_PAGE', 200)
              }
              to='/product/more/hot-product'
              className="see-more
              inline-flex flex-wrap
              place-content-center
              place-items-center
              font-semibold
              text-amber-800
              border-2 border-amber-800 
              p-2 pl-4 pr-4
              m-4
              bg-lime-400
              hover:bg-amber-800
              hover:text-amber-100
              hover:scale-110
              hover:border-amber-100
              rounded-full
              ease-in-out duration-300">
              See more...
            </Link>
          </div>
          <div className='
            ml-[10%] mr-[10%]
            border-2 
            border-solid 
            border-amber-600'>
          </div>
          <div className="on-sale-product
            flex flex-col
            place-content-center
            place-items-center
            pt-6 pb-6">
            <Link 
              to={NavPath.PRODUCT_ON_SALE.URL} 
              onClick={
                ()=>{
                  scroll_to_section(NavPath.PRODUCT_ON_SALE.ID_ATTR, 200)
                }
              } 
              className='text-4xl md:text-5xl font-semibold
              p-4 text-amber-800
              hover:text-amber-600
              ease-in-out duration-500'>On Sale</Link>
            <div className="flex flex-col
              w-[100%]
              pl-[10%] pr-[10%]
              flex-wrap
              gap-8
              sm:gap-4
              place-content-evenly
              place-items-center
              sm:flex-row">
              {simpleDbFruitAPI
              .filter(
                item => item.tag.includes('on sale')
              )
              .slice(
                0,
                Math.min(
                  4,
                  simpleDbFruitAPI.length
                )
              ).map((item, index)=>{
                // return (<CardComponent key={index} productName={item.name}
                //   productId={item.id}
                //   img={item.img.preview}
                //   isOutOfStock={item.isOutOfStock}
                //   isOnSale={item.isOnSale}
                //   onSalePrice={item.onSalePrice}
                //   price={item.price}
                //   unit={item.unit}/>);
                return <CardIComponent key={index} product={item} isOnCart={false}/>
              })}
            </div>
            <Link 
              onClick={()=>
                scroll_to_section('MORE_PRODUCT_PAGE', 200)
              }
              to='/product/more/on-sale'
              className="see-more
              inline-flex flex-wrap
              place-content-center
              place-items-center
              font-semibold
              text-amber-800
              border-2 border-amber-800 
              p-2 pl-4 pr-4
              m-4
              bg-lime-400
              hover:bg-amber-800
              hover:text-amber-100
              hover:scale-110
              hover:border-amber-100
              rounded-full
              ease-in-out duration-300">
              See more...
            </Link>
          </div>
        </div>
      </>
    );
}

const HomePage = home_page;
export default HomePage