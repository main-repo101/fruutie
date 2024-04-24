import { FaEnvelope, FaPhone } from 'react-icons/fa6';
import NavPath from '../../core/util/NavPath';
import IconLogo from '/src/resource/img/icon/icon-logo-white.png';
import { FaMapMarker } from 'react-icons/fa';

export function about_us_company_info_component(
    {title}:{title?:string|null}
): JSX.Element {
    return <>
        <div id={NavPath.ABOUT_US_CONTACT_US.ID_ATTR}className="company-info
            flex flex-col 
            gap-2
            w-[100%] h-[25rem]
            bg-amber-200
            place-content-center
            place-items-center
            transition-all transform">
            <img 
                onClick={(e)=>{
                    e.preventDefault();
                    // window.location.href = '/';
                }}
                src={IconLogo}
                className="company-logo
                bg-contain rounded-full
                w-[8rem] h-auto
                border-2 border-amber-800
                cursor-pointer
                hover:title-logo
                ease-in-out duration-500">
            </img>
            <div className="description
                flex flex-col gap-4
                text-xl">
                <div className='text-center'>
                    <label className='font-semibold'>
                        Company Name:
                    </label>
                    <span className='text-xl font-semibold pl-2
                        text-amber-950'>
                        {title}
                    </span>
                </div>
                <div className='text-center
                    inline-flex flex-wrap gap-2
                    place-content-center
                    place-items-center
                    pt-4'>
                    <FaMapMarker className='text-amber-950'/>
                    <label className='font-semibold'>Location:</label>
                    <span className='text-amber-950'>Somewhere st. Here City</span>
                </div>
                <div className="contact-number 
                    inline-flex flex-wrap gap-2
                    place-items-center
                    place-content-center">
                    <FaPhone className='text-amber-950'/>
                    <label className='font-semibold'>
                        Contact Number:
                        </label>
                    <span className='text-amber-950'>
                        111-2222-333
                    </span>
                </div>
                <div className="email
                    inline-flex flex-wrap gap-2
                    place-items-center
                    place-content-center">
                    <FaEnvelope className='text-amber-950'/>
                    <label 
                        className='font-semibold'>Email:
                    </label> 
                    <span className='text-amber-950'>
                        support@fruutie.com
                    </span>
                </div>
            </div>
        </div>
    </>;
}

const AboutUsCompanyInfoComponent = about_us_company_info_component;
export default AboutUsCompanyInfoComponent;