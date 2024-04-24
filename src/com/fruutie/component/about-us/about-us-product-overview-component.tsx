import NavPath from "../../core/util/NavPath";


export function about_us_product_overview_component(): JSX.Element {
    return <>
        <div id={NavPath.ABOUT_US_PRODUCT_OVERVIEW.ID_ATTR}className="product-overview
            relative
            flex
            flex-col 
            sm:flex-row
            place-content-center
            place-items-center
            pl-[10%] pr-[10%]
            gap-6
            w-[100%] sm:h-[25rem]
            h-[40rem]
            bg-amber-100">
            <div className="title-intro
            sm:flex-1 text-center
            text-[2rem]
            font-bold sm:text-[3rem]">Product Overview</div>
            <div className="message
            sm:flex-1 text-justify
            text-xl font-semibold">Discover a wide variety of fresh variety of fresh fruits at FRUUTIE, where we prioritize delivering the highest quality products to our customers. From sweet to sour, and everything in beween, we offer a diverse range of flavors to satisfy every taste preference. Explore our selection of tropical and exotic fruits, and feel free to try any of our products.
            </div>
        </div>
    </>;
}

const AboutUsProductOverviewComponent = about_us_product_overview_component;
export default AboutUsProductOverviewComponent;