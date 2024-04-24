
import NavPath from "../../core/util/NavPath";
import CardComponent from "../card-component";
import simpleDbFruitAPI from "../../../../resource/db/fruit.json";
import ButtonMoreV2 from "../widget/button-more-v2";

function product_page(): JSX.Element {
    console.log(`::: Product page.`);
    return (
        <>
            <div id="PRODUCT_PAGE"
                className='pt-8 md:pt-2
                pl-[10%] pr-[10%]
                scroll-smooth
                bg-amber-50
                transform transition-all'>
                <h1 className='text-[1.5rem]
                    font-semibold pt-4 pb-4'>
                    Product Page
                </h1>
                <div className='flex flex-col
                    gap-16'>
                    <div id={NavPath.PRODUCT_DRIED_FRUIT.ID_ATTR}
                        className='scroll-smooth
                        pt-4 pb-8'>
                        <h1 className='scroll-smooth
                            text-lg font-semibold'>
                            Dried fruit
                        </h1>
                        <ButtonMoreV2 url='/product/more/dried-fruit'/>
                        <div className='inline-flex
                            flex-col
                            sm:flex-row
                            flex-wrap
                            gap-8
                            w-[100%]
                            place-content-evenly
                            place-items-center'>
                            {
                                simpleDbFruitAPI
                                    .filter(
                                        item => item.tag.includes('dried fruit')
                                    )
                                    .splice(
                                        0,
                                        Math.min(
                                            4,
                                            simpleDbFruitAPI.length
                                        )
                                    )
                                    .map(item => (
                                        <CardComponent
                                            key={item.id}
                                            productId={item.id}
                                            productName={item.name}
                                            img={item.img.preview}
                                            isOutOfStock={item.isOutOfStock}
                                            isOnSale={item.isOnSale}
                                            onSalePrice={item.onSalePrice}
                                            price={item.price}
                                            unit={item.unit}
                                        />
                                    ))
                            }
                        </div>
                    </div>
                    <div id={NavPath.PRODUCT_JUICY_FRUIT.ID_ATTR}
                        className='scroll-smooth
                        pt-4 pb-8'>
                        <h1 className='scroll-smooth
                            text-lg font-semibold'>
                            Juicy fruit
                        </h1>
                        <ButtonMoreV2 url='/product/more/juicy-fruit'/>
                        <div className='inline-flex 
                            flex-col
                            sm:flex-row
                            flex-wrap
                            gap-8
                            w-[100%]
                            place-content-evenly
                            place-items-center'>
                            {
                                simpleDbFruitAPI
                                    .filter(
                                        item => item.tag.includes('juicy fruit')
                                    )
                                    .splice(
                                        0,
                                        Math.min(
                                            4,
                                            simpleDbFruitAPI.length
                                        )
                                    )
                                    .map(item => (
                                        <CardComponent
                                            key={item.id}
                                            productId={item.id}
                                            productName={item.name}
                                            img={item.img.preview}
                                            isOutOfStock={item.isOutOfStock}
                                            isOnSale={item.isOnSale}
                                            onSalePrice={item.onSalePrice}
                                            price={item.price}
                                            unit={item.unit}
                                        />
                                    ))
                            }
                        </div>
                    </div>
                    <div id={NavPath.PRODUCT_CANDY_FRUIT.ID_ATTR}
                        className='scroll-smooth
                        pt-4 pb-8'>
                        <h1 className='scroll-smooth
                            text-lg font-semibold'>
                            Candy fruit
                        </h1>
                        <ButtonMoreV2 url='/product/more/candy-fruit'/>
                        <div className='inline-flex 
                            flex-col
                            sm:flex-row
                            flex-wrap
                            gap-8
                            w-[100%]
                            place-content-evenly
                            place-items-center'>
                            {
                                simpleDbFruitAPI
                                    .filter(
                                        item => item.tag.includes('candy fruit')
                                    )
                                    .splice(
                                        0,
                                        Math.min(
                                            4,
                                            simpleDbFruitAPI.length
                                        )
                                    )
                                    .map(item => (
                                        <CardComponent
                                            key={item.id}
                                            productId={item.id}
                                            productName={item.name}
                                            img={item.img.preview}
                                            isOutOfStock={item.isOutOfStock}
                                            isOnSale={item.isOnSale}
                                            onSalePrice={item.onSalePrice}
                                            price={item.price}
                                            unit={item.unit}
                                        />
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const ProductPage = product_page;

export default ProductPage;