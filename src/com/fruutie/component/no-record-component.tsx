import { FaCartShopping } from "react-icons/fa6";


export function no_record_component(): React.ReactElement {
    return <>
        <div className="w-[100%] h-[85svh]
            flex flex-col
            place-content-center
            place-items-center
            text-amber-950">
            <span className="text-[1.5rem]
                sm:text-[3rem]
                inline-flex
                content-center
                items-center
                gap-6">
                <FaCartShopping
                    className="text-[125%]"/>
                <span className="
                    leading-8">
                    No record found...
                </span>
            </span>
        </div>
    </>;
}

const NoRecordComponent = no_record_component;
export default NoRecordComponent;