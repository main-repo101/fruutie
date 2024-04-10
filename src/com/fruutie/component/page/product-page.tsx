import NavPath from "../../core/util/NavPath";

function product_page(): JSX.Element {
    console.log(`::: Product page.`);
    return (
        <>
            <div id="PRODUCT_PAGE"
                className=''>
                <h1 className=''>Product page</h1>
                <p id={NavPath.PRODUCT_DRIED_FRUIT.ID_ATTR}
                    className='scroll-smooth font-bold text-xl'>[CAT_A]: Dried fruit</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p id={NavPath.PRODUCT_JUICY_FRUIT.ID_ATTR}
                    className='scroll-smooth font-bold text-xl'>[CAT_B]: Juicy Fruit</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p id={NavPath.PRODUCT_CANDY_FRUIT.ID_ATTR}
                    className='scroll-smooth font-bold text-xl'>[CAT_C]: Candy Fruit</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
                <p>1</p><br/>
            </div>
        </>
    );
}

const ProductPage = product_page;

export default ProductPage;