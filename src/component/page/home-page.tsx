import HeroSection from "../hero-section";
import { com$fruutie$core } from "../../com/fruutie/core/Status";

function home_page( {title = com$fruutie$core.Status.NA.VALUE }:{title?: String | null} ): JSX.Element {
    return (
      <>
        <HeroSection className='z-0 relative -top-[10rem]'/>
        <h1 className='relative -top-[10rem]'>{title} Home page</h1>
        <div className="relative -top-[10rem]">
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