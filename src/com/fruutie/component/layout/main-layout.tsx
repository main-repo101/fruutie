import { Outlet } from 'react-router-dom';
import HeaderSection from '../header-section.tsx';
import FooterSection from '../footer-section.tsx';
import { com$fruutie$core } from '../../core/com$fruutie$core.ts';

const NA_STATUS = com$fruutie$core.Status.NA.VALUE;

function main_layout(
    { 
        title = NA_STATUS,
        username = NA_STATUS
    }
    :{
        title?: string | null,
        username?: string | null
    }
): JSX.Element {
    return (
        <>
            <div className="
                w-[100%] min-h-fit 
                relative
                bg-amber-50">
                <HeaderSection 
                    username={username} 
                    title={title}
                />
                <Outlet/>
                <FooterSection/>
            </div>
        </>
    );
}

const MainLayout = main_layout;
export default MainLayout;