import HeroSection from "../hero-section.tsx";
import { com$fruutie$core } from "../../core/com$fruutie$core.ts";
import CardComponent from "../card-component.tsx";

import ImgDurian from '/src/resource/img/fruit/durian.jpg'
import ImgLemon from '/src/resource/img/fruit/Lemon.jpg'
import ImgKiwi from '/src/resource/img/fruit/Kiwi.jpg'


function home_page( {title = com$fruutie$core.Status.NA.VALUE }:{title?: String | null} ): JSX.Element {
    console.log(`::: Home page.`);
    return (
      <>
        <div id='HOME_PAGE' className='w-[100%] max-h-fit relative'>
          <HeroSection className='
          w-[100%] h-[calc(100vh/1.2)] -mt-[10rem]'/>
          <div className="hot-product
            flex flex-col
            place-content-center
            place-items-center
            pt-6 pb-6">
            <h1 className='text-2xl md:text-5xl font-semibold
              p-4 text-amber-800'>Hot Product</h1>
            <div className="flex flex-col
              place-content-center
              place-items-center
              sm:flex-row
              gap-4
              sm:gap-6">
              <CardComponent productName='Apple'/>
              <CardComponent productName='Lemon'
                img={ImgLemon}
                isOutOfStock={true}/>
              <CardComponent productName='Durian'
                img={ImgDurian}
                isOutOfStock={false}/>
              <CardComponent productName='Kiwi'
                img={ImgKiwi}
                isOutOfStock={false}/>
            </div>
          </div>
          <h1 className=''>{title} Home page</h1>
          <p className=''>111111111111111111111111111 111111111111111 111111 111111111111 11111111111 111111111111111 111111111 111111111111111111111 111111111111111 111111111111 11111111 11111111 1111111111111111111 11111111111111111111111111111111111111 1111111111 111111111111111111 1111111111111111111 1111111111111111111111 1111111111 111111111111111111111 11111111111 11111111111111 1111111 1111111111111 111111111111111111 1111111111111111111</p><br/>
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

const HomePage = home_page;
export default HomePage