import { Link } from "react-router-dom";
import NavPath from "../../core/util/NavPath";
import { FaUserCircle } from "react-icons/fa";

export function about_us_team_member_component(): JSX.Element {
    return <>
        <div id={NavPath.ABOUT_US_TEAM_MEMBER.ID_ATTR} className="team-members
            flex flex-col
            place-content-center
            place-items-center
            text-[1.5rem] font-bol
            w-[100%] h-[50rem]">
            <h1 className='
                font-bold pt-4 pb-4
                text-[2rem]
                sm:text-[3rem]'>TEAM MEMBERS</h1>
            <ul className='
                text-[1.5rem]
                text-center
                flex flex-col
                gap-4
                font-semibold 
                place-content-around'>
                <li><Link to="#" className="flex flex-row gap-2
                    place-items-center">
                    <FaUserCircle className="h-[5rem] w-[5rem]
                        text-amber-950"/>S. M. Dumandan</Link></li>
                <li><Link to="#" className="flex flex-row gap-2
                    place-items-center">
                    <FaUserCircle className="h-[5rem] w-[5rem]
                        text-amber-950"/>R. Corpuz</Link></li>
                <li><Link to="#" className="flex flex-row gap-2
                    place-items-center">
                    <FaUserCircle className="h-[5rem] w-[5rem]
                        text-amber-950"/>K. Lor</Link></li>
                <li><Link to="#" className="flex flex-row gap-2
                    place-items-center">
                    <FaUserCircle className="h-[5rem] w-[5rem]
                        text-amber-950"/>R. Ang</Link></li>
                <li><Link to="#" className="flex flex-row gap-2
                    place-items-center">
                    <FaUserCircle className="h-[5rem] w-[5rem]
                        text-amber-950"/>S. M. Ruiz</Link></li>
                <li><Link to="#" className="flex flex-row gap-2
                    place-items-center">
                    <FaUserCircle className="h-[5rem] w-[5rem]
                        text-amber-950"/>L. Tabinas</Link></li>
                <li><Link to="#" className="flex flex-row gap-2
                    place-items-center">
                    <FaUserCircle className="h-[5rem] w-[5rem]
                        text-amber-950"/>A. R. B. Jayo</Link></li>
            </ul>
        </div>
    </>;
}

const AboutUsTeamMemberComponent = about_us_team_member_component;
export default AboutUsTeamMemberComponent;