import { Outlet } from 'react-router-dom';
import HeaderSection from '../header-section.tsx';
import FooterSection from '../footer-section.tsx';
import { com$fruutie$core } from '../../com/fruutie/core/Status.tsx';

function main_layout( {title = com$fruutie$core.Status.NA.VALUE }:{title?: String | null}): JSX.Element {
    return (
        <>
            <div className="
                w-[100%] h-[100%]">
                <HeaderSection username={com$fruutie$core.Status.NA.VALUE}/>
                <Outlet context={title} />
                <FooterSection/>
            </div>
        </>
    );
}

const MainLayout = main_layout;
export default MainLayout;