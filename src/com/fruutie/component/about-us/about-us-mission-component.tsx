
export function about_us_mission_component(): JSX.Element {
    return <>
        <div id='ABOUT_US_MISSION' className="mission 
            w-[100%] h-[20rem]
            relative
            flex 
            flex-col
            sm:flex-row-reverse
            place-content-center
            place-items-center
            gap-8
            bg-amber-100
            pl-[10%] pr-[10%]">
            <div className="title-intro
            sm:flex-1 text-center
            text-[3rem]
            font-bold">
                Mission
            </div>
            <div className="message
            sm:flex-1 text-justify
            text-xl
            font-semibold">Our primary objective is to provide fast and secure fruit delivery, offering a wide variety of healthy products while ensuring a high-quality customer experience.
            </div>
        </div>
    </>;
}

const AboutUsMissionComponent = about_us_mission_component;
export default AboutUsMissionComponent;