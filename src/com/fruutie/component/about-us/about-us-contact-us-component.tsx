import { FaMapMarker } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";


export function about_us_contact_us_component(
    {className = ''}:{className?:string}
): JSX.Element {
    return <>
        <div className={`
            contact-us` + className }>
            <div className="location 
                inline-flex gap-2
                place-items-center">
                <FaMapMarker className='text-amber-950'/>
                <label
                    className='
                    font-semibold'>Address:</label>
                    <span>Somewhere st. Here City</span>
            </div>
            <div className="contact-number 
                inline-flex gap-2
                place-items-center">
                <FaPhone className='text-amber-950'/>
                <label className='font-semibold'>Contact Number:</label> <span>111-2222-333</span>
            </div>
            <div className="email
                inline-flex gap-2
                place-items-center">
                <FaEnvelope className='text-amber-950'/>
                <label 
                    className='font-semibold'>Email:
                </label> <span>support@fruutie.com</span>
            </div>
        </div>
    </>;
}

const AboutUsContactUsComponent = about_us_contact_us_component;
export default AboutUsContactUsComponent;