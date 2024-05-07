import { Link } from "react-router-dom";
import NavPath from "../../core/util/NavPath";
import teamMemberAPI from "../../../../resource/db/member/team.json";
import { Status } from "../../core/Status";
import { FaCode } from "react-icons/fa6";

export function about_us_team_member_component(): JSX.Element {

    const memberElements: JSX.Element[] = [];

    for (let i = 0; i < teamMemberAPI.length; i += 2) {
      memberElements.push(
        <>
            <div className="flex sm:flex-row w-[100%]
                    place-items-center place-content-evenly
                    flex-wrap
                    ">
                <li>
                    <Link to="#" className="flex 
                    sm:flex-row-reverse 
                    flex-col gap-2
                    place-items-center
                    place-content-end
                    w-[22rem]
                    pb-4">
                    {
                        teamMemberAPI[i].img === null || teamMemberAPI[i].img === undefined
                        ? <>
                            <FaCode className="hidden sm:flex h-[5rem] w-[5rem]
                                text-amber-950 rounded-full
                                border-4 border-amber-950
                                p-1"/>
                                <span className="italic">{teamMemberAPI[i]?.name??Status.UNKNOWN.VALUE}
                                </span>
                        </>
                        : <>
                            <img src={teamMemberAPI[i].img??''} 
                                alt="img"
                                className="h-[5rem] w-[5rem]
                                 text-amber-950 rounded-full
                                    border-4 border-amber-950
                                    bg-cover bg-no-repeat bg-center"/> 
                                <span className="italic">{teamMemberAPI[i]?.name??Status.UNKNOWN.VALUE}
                                </span>
                        </>
                    }
                    </Link>
                </li>
                <li><Link to="#" className="flex 
                    sm:flex-row 
                    flex-col gap-2
                    place-items-center
                    place-content-start
                    w-[22rem]
                    pb-4">
                    {
                        teamMemberAPI[i+1].img === null || teamMemberAPI[i+1].img === undefined
                        ? <>
                            <FaCode className="hidden sm:flex h-[5rem] w-[5rem]
                                text-amber-950 rounded-full
                                border-4 border-amber-950
                                p-1"/>
                                <span className="italic">{teamMemberAPI[i+1]?.name??Status.UNKNOWN.VALUE}
                                </span>
                        </>
                        : <>
                            <img src={teamMemberAPI[i+1].img??''} 
                                alt="img"
                                className="h-[5rem] w-[5rem]
                            text-amber-950 rounded-full
                            border-4 border-amber-950
                            bg-cover bg-no-repeat bg-center"/>
                                <span className="italic">{teamMemberAPI[i+1]?.name??Status.UNKNOWN.VALUE}
                                </span>
                        </>
                    }
                    </Link>
                </li>
            </div>
        </>
      );
    }

    return <>
        <div id={NavPath.ABOUT_US_TEAM_MEMBER.ID_ATTR} className="team-members
            flex flex-col
            place-content-center
            place-items-center
            text-[1.5rem] font-bol
            w-[100%] h-[68rem] sm:h-[55rem] md:h-[50rem]">
            <div className="flex flex-col
                place-content-center
                place-items-center
                w-[100%]">
                <h1 className='
                    font-bold pt-4 pb-4
                    text-[2rem]
                    sm:text-[3rem]'>TEAM MEMBERS</h1>
                <ul className='
                    text-[1.5rem]
                    text-center
                    flex flex-col
                    w-[100%]
                    h-[100%]
                    font-semibold'>
                    {memberElements}
                    {/* <li><Link to="#" className="flex flex-col gap-2
                        place-items-center pb-4">
                        <FaUserCircle className="h-[5rem] w-[5rem]
                            text-amber-950"/><span className="italic">S. M. Dumadag</span></Link></li> */}   
                    {/* 
                    <div className="flex sm:flex-row w-[100%]
                        place-items-center place-content-evenly
                        flex-wrap
                        ">
                        <li><Link to="#" className="flex 
                            sm:flex-row-reverse 
                            flex-col gap-2
                            place-items-center
                            place-content-end
                            w-[22rem]
                            pb-4">
                            <FaUserCircle className="h-[5rem] w-[5rem]
                                text-amber-950"/><span className="italic">Prof. Car</span></Link>
                        </li>
                        <li><Link to="#" className="flex 
                            sm:flex-row 
                            flex-col gap-2
                            place-items-center
                            place-content-start
                            w-[22rem]
                            pb-4">
                            <FaUserCircle className="h-[5rem] w-[5rem]
                                text-amber-950"/><span className="italic">S. M. Dumadag</span></Link>
                        </li>
                    </div>
                    <div className="flex sm:flex-row w-[100%]
                        place-items-center place-content-evenly
                        flex-wrap
                        ">
                        <li><Link to="#" className="flex 
                            sm:flex-row-reverse 
                            flex-col gap-2
                            place-items-center
                            place-content-end
                            w-[22rem]
                            pb-4">
                            <FaUserCircle className="h-[5rem] w-[5rem]
                                text-amber-950"/><span className="italic">R. Corpuz</span></Link>
                        </li>
                        <li><Link to="#" className="flex 
                            sm:flex-row 
                            flex-col gap-2
                            place-items-center
                            place-content-start
                            w-[22rem]
                            pb-4">
                            <FaUserCircle className="h-[5rem] w-[5rem]
                                text-amber-950"/><span className="italic">K. Lor</span></Link>
                        </li>
                    </div>
                    <div className="flex sm:flex-row w-[100%]
                        place-items-center place-content-evenly
                        flex-wrap
                        ">
                        <li><Link to="#" className="flex 
                            sm:flex-row-reverse 
                            flex-col gap-2
                            place-items-center
                            place-content-end
                            sm:pr-[3.5rem]
                            w-[22rem]
                            pb-4">
                            <FaUserCircle className="h-[5rem] w-[5rem]
                                text-amber-950"/><span className="italic">R. Ang</span></Link>
                        </li>
                        <li><Link to="#" className="flex 
                            sm:flex-row 
                            flex-col gap-2
                            place-items-center
                            place-content-start
                            sm:pl-[3.5rem]
                            w-[22rem]
                            pb-4">
                            <FaUserCircle className="h-[5rem] w-[5rem]
                                text-amber-950"/><span className="italic">S. M. Ruiz</span></Link>
                        </li>
                    </div>
                    <div className="flex sm:flex-row w-[100%]
                        place-items-center place-content-evenly
                        flex-wrap
                        ">
                        <li><Link to="#" className="flex 
                            sm:flex-row-reverse 
                            flex-col gap-2
                            place-items-center
                            place-content-end
                            w-[22rem]
                            pb-4">
                            <FaUserCircle className="h-[5rem] w-[5rem]
                                text-amber-950"/><span className="italic">L. Tabinas</span></Link>
                        </li>
                        <li><Link to="#" className="flex 
                            sm:flex-row 
                            flex-col gap-2
                            place-items-center
                            place-content-start
                            w-[22rem]
                            pb-4">
                            <FaUserCircle className="h-[5rem] w-[5rem]
                                text-amber-950"/><span className="italic">A. R. B. Jayo</span></Link>
                        </li>
                    </div> */}
                </ul>
            </div>
        </div>
    </>;
}

const AboutUsTeamMemberComponent = about_us_team_member_component;
export default AboutUsTeamMemberComponent;