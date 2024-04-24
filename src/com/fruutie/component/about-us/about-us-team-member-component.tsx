import NavPath from "../../core/util/NavPath";

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
                text-center'>
                <li><a>Dumandan, Shiela Mae</a></li>
                <li><a>Corpuz, Rodel A.</a></li>
                <li><a>Lor, Khanyao</a></li>
                <li><a>Ang, Roswell</a></li>
                <li><a>Ruiz, Shewii May</a></li>
                <li><a>Tabinas, Lyndon</a></li>
                <li><a>Jayo, Adonis Raphael B.</a></li>
            </ul>
        </div>
    </>;
}

const AboutUsTeamMemberComponent = about_us_team_member_component;
export default AboutUsTeamMemberComponent;