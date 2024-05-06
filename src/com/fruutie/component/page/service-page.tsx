import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { scroll_to_section } from "../../core/util/scroll-to-section";
import NavPath from "../../core/util/NavPath";
import SendMsgComponent from "../contact-us/send-msg-component";
import React from 'react';
// import $ from 'jquery';
// import 'jquery.ripples';

// import ImgDefault from '/src/resource/img/hero-banner-1749x980.jpg';

function service_page(): JSX.Element {
    console.log(`::: Service page.`);
    React.useEffect(() => {
        document.title = `${document.title.split('~')[0]} ~ Services`;
        return () => {
            document.title = `${document.title.split('~')[0]?? 'Empty'}`;
        };
    }, []);
    return (
        <>
            <div id="SERVICE_PAGE" className="flex flex-col 
                bg-image-003 bg-no-repeat bg-cover w-[100%]
                transition-transform">
                <div className="
                    flex flex-col
                    pt-12 md:pt-5 
                    gap-20
                    backdrop-blur-none
                    pl-[10%] pr-[10%]">
                    <div className="intro flex flex-col gap-4
                        place-content-center place-items-center
                        font-semibold">
                        <div className="flex flex-col
                            place-content-center
                            place-items-center
                            bg-amber-100/50
                            rounded-[1rem]
                            p-4 pt-0">
                            <h1 className="text-[3rem]">
                                Our Services
                            </h1>
                            <p className="text-center
                                text-xl">
                                Eating fruit has many health benefits. People who eat fruits as part of an overall diet may lower their risk for certain diseases. Fruits provide nutrients needed to maintain your health and body.
                            </p>
                        </div>
                        <Link to='#ID_CONTACT_US' 
                            onClick={
                                ()=>{
                                scroll_to_section("ID_CONTACT_US", 250)
                                }
                            }className="flex 
                            group/btn-contact-us
                            flex-row gap-3
                            place-content-center
                            place-items-center
                            border-2 border-amber-800
                            p-4 rounded-full
                            bg-amber-300
                            hover:bg-amber-100
                            duration-500 ease-in-out
                            hover:scale-105">
                            <FaPhone/>
                            <span className="">
                                Contact Us
                            </span>
                        </Link>
                    </div>
                    <div className="sum-up-services
                        flex flex-row
                        flex-wrap
                        font-semibold
                        place-content-evenly
                        gap-8">
                        <div className="card-1
                            group/card-1
                            flex flex-col 
                            place-items-center
                            p-8 bg-white
                            rounded-[0.5rem]
                            gap-4 hover:bg-amber-100
                            w-[25rem]
                            ">
                            <Link to="/"
                                onClick={
                                    ()=>{
                                    scroll_to_section(NavPath.HOME_PAGE.ID_ATTR, 200)
                                    }
                                }>
                                <div className="img bg-s-001
                                w-full h-[10rem]
                                bg-cover rounded-md
                                border-2
                                border-amber-800
                                group-hover/card-1:scale-105
                                ease-in-out duration-500"></div>
                                <div className="title
                                text-[2rem] text-center
                                group-hover/card-1:text-amber-800">Our service offerings</div>
                            </Link>
                            <p className="description
                            text-center">Our service goes beyond just delivering fruit. We offer a wide range of services, from customer-specific packaging to track & trace systems.<br/><br/>
                            Our investments in quality control and food safety ensure that our customers can always count on the best products, packaged and delivered to the highest standards.</p>
                        </div>
                        <div className="card-2
                            group/card-2
                            flex flex-col
                            place-items-center
                            p-8 bg-white
                            rounded-[0.5rem]
                            gap-4 hover:bg-amber-100
                            w-[25rem]
                            ">
                            <Link to="/"
                                onClick={
                                    ()=>{
                                    scroll_to_section(NavPath.HOME_PAGE.ID_ATTR, 200)
                                    }
                                }>
                                <div className="img bg-s-002
                                w-full h-[10rem]
                                bg-cover rounded-md
                                border-2
                                border-amber-800
                                group-hover/card-2:scale-105
                                ease-in-out duration-500"></div>
                                <div className="title
                                text-[2rem] text-center
                                group-hover/card-2:text-amber-800">Import and Export of Service</div>
                            </Link>
                            <p className="description
                            text-center">Our service doesn’t stop at the border. With our extensive knowledge and experience in importing and exporting various types of fruit, we ensure that our customers can access the best products year-round, no matter where they are.</p>
                        </div>
                        <div className="card-3
                            group/card-3
                            flex flex-col 
                            place-items-center
                            p-8 bg-white
                            rounded-[0.5rem]
                            gap-4 hover:bg-amber-100
                            w-[25rem]
                            ">
                            <Link to="/"
                                onClick={
                                    ()=>{
                                    scroll_to_section(NavPath.HOME_PAGE.ID_ATTR, 200)
                                    }
                                } className="w-[100%]">
                                <div className="img bg-s-003
                                h-[10rem]
                                bg-red-500
                                bg-cover rounded-md
                                border-2
                                border-amber-800
                                group-hover/card-3:scale-105
                                ease-in-out duration-500"></div>
                                <div className="title
                                text-[2rem] text-center
                                group-hover/card-3:text-amber-800">Get in touch</div>
                            </Link>
                            <p className="description
                            text-center">Are you curious about what Fruutie can offer you? Or would you like to know more about our extensive service offerings? Contact us today and discover the added value of partnering with Fruutie.</p>
                        </div>
                    </div>
                </div>
                <SendMsgComponent/>
            </div>
        </>
    );
    // useEffect(() => {
    //     console.log("useEffect triggered");
        
    //     if (typeof $ !== 'undefined') {
    //         console.log("$ is defined");
            
    //         ($(".bg-water-ripples-effect" ) as any).ripples({
    //             resolution: 200,
    //             perturbance: .005,
    //         });
    //         ($(".card-water-ripples-effect") as any).ripples({
    //             resolution: 200,
    //             perturbance: .05,
    //         });
            
    //         console.log(`::: Rippling effect loaded...?`);
    //     } else {
    //         console.log("$ is not defined");
    //     }
    // }, []);
    
    //   return (
    //     <div>
    //         <div className="bg-water-ripples-effect">
    //             <img 
    //               src={ImgDefault} 
    //               alt="Description of the image" 
    //               onDragStart={(e) => e.preventDefault()} 
    //             />
    //         </div>
    //         <div className="card-water-ripples-effect">
    //         </div>
    //     </div>
    // );
}

const ServicePage = service_page;

export default ServicePage;