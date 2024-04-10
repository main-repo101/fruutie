
import NavPath from '../../core/util/NavPath';
import ImgBgIntro from '/src/resource/img/fruit/img-pineapple-1920x1181.jpg';

export function about_us_intro_component(): JSX.Element {
    
    const inlineStyleIntro = {
        backgroundImage: `url(${ImgBgIntro})`
    };

    return <>
        <div id={NavPath.ABOUT_US_INTRO.ID_ATTR}className="intro flex 
            flex-col
            sm:flex-row
            place-content-center
            place-items-center
            pl-[10%] pr-[10%]
            pt-[2rem] pb-[2rem]
            w-[100%] 
            h-[35rem]
            sm:h-[25rem]
            bg-amber-100/50
            bg-cover
            bg-center
            relative
            gap-2
            -z-10
            "
            style={inlineStyleIntro}>
            <span className="bg
            flex
            absolute top-0
            w-[100%] h-[100%] 
            bg-amber-950
            bg-opacity-10
            backdrop-blur-[0.15rem]
            p-0 m-0
            -z-10">&nbsp;</span>
            <div className="title-intro
            sm:flex-1 flex
            place-content-center
            place-items-center
            p-2 pl-4 pr-4
            text-justify
            text-[2rem]
            font-bold
            text-slate-950
            sm:text-amber-100
            relative">Introduction
            <span className="bg
            flex
            absolute
            w-[100%]
            bg-amber-100
            bg-opacity-5
            rounded-full
            backdrop-blur-sm
            p-0 m-0
            -z-10">&nbsp;</span>
            </div>
            <div className="message
            sm:flex-1 flex
            place-content-center
            place-items-center
            p-6
            text-justify
            font-semibold
            relative
            text-slate-950"><span>Welcome to <b className='text-2xl'>FRUUTIE</b> – your ultimate fruit destination! We offer a wide range of high-quality fresh fruits to satisfy every taste, from everyday favorites to exotic delights. With fast and secure delivery, ordering your favorite fruits is easier than ever. Explore our user-friendly website and experience the joy of premium fruit delivery. FRUUTIE – where your fruit dreams come true!</span>
            <span className="bg
            flex
            absolute top-0
            w-[100%] h-[100%] 
            bg-amber-100
            bg-opacity-5
            rounded-3xl
            backdrop-blur-xl
            p-0 m-0
            -z-10">&nbsp;</span>
            </div>
            {/* <img src={Img}
                className='absolute
                -z-10
                bg-cover'></img> */}
        </div>
    </>;
}

const AboutUsIntroComponent = about_us_intro_component;
export default AboutUsIntroComponent;