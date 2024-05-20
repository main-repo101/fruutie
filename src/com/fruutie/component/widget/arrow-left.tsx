import { FaArrowLeft } from "react-icons/fa6";

interface CustomArrowProps {
    onClick?: () => void;
}

const arrow_left: React.FC<CustomArrowProps> = ({ onClick }:CustomArrowProps) => {
    return <>
        <div onClick={onClick} className="w-[5rem] h-[5rem]
            ">
            <FaArrowLeft className="w-full h-full bg-red-500" />
        </div>
    </>;
}

const ArrowLeft = arrow_left;
export default ArrowLeft;