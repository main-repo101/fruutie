import ImageHero from '/src/resource/img/hero-banner-1749x980.jpg';

function hero_section( {className}:{className: string} ): JSX.Element {
    return (
        <>
            <div className={`${className} hero-section 
                 w-[100%] h-[80%] sm:min-w-fit`}>
                <img src={ImageHero} className='
                    w-full h-full object-cover object-right' alt="Hero Image" />
            </div>

        </>
    );
}

const HeroSection = hero_section;
export default HeroSection;