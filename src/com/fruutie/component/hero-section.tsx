import ImageHero from '/src/resource/img/hero-banner-1749x980.jpg';

function hero_section( {title, className}:{title?:string|null, className: string} ): JSX.Element {
    return (
        <>
            <div className={`${className} hero-section
                 w-[100%] h-[120%] relative
                 transition-all transform`}>
                <img src={ImageHero} id='BG_HERO'className=' 
                    bg-water-ripples-effect
                    w-full h-full object-cover object-right' alt="Hero Image" />
                <span className='absolute
                    top-[65%]
                    sm:top-[50%]
                    left-[15%]
                    text-[5rem]
                    hover:scale-110
                    hover:text-bold
                    sm:hover:translate-x-24
                    ease-in-out duration-500'>
                    {title}
                </span>
            </div>

        </>
    );
}

const HeroSection = hero_section;
export default HeroSection;