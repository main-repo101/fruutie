
import AboutUsIntroComponent from '../about-us/about-us-intro-component';
import AboutUsMissionComponent from '../about-us/about-us-mission-component';
import AboutUsCompanyInfoComponent from '../about-us/aobut-us-company-info-component';
import AboutUsProductOverviewComponent from '../about-us/about-us-product-overview-component';
import AboutUsTeamMemberComponent from '../about-us/about-us-team-member-component';

function about_us_page({title}:{title?:string|null}): JSX.Element {
    console.log(`::: About Us page.`);

    return (
        <>
            <div id='ABOUT_US_PAGE' className='flex 
                flex-col gap-0 relative
                scroll-smooth
                w-[100%]
                '>
                <AboutUsIntroComponent />
                <AboutUsMissionComponent />
                <AboutUsCompanyInfoComponent title={title}/>
                <AboutUsProductOverviewComponent />
                <AboutUsTeamMemberComponent/>
            </div>
        </>
    );
}

const AboutUsPage = about_us_page;

export default AboutUsPage;