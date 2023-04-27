import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import "./index.css"
interface IHomeCat {
    name?: string
    src ?: string
    url ?: string
}

const DiscountCard = (props :IHomeCat) => {
    return ( 
        <button className="DiscountCard shadow rounded-lg overflow-hidden relative">
            <img className="-indent-px shadow" src={props.src} alt="" />
            <div className="opacity-50 top-0 flex justify-center items-center h-full w-full indent-px absolute bg-black">
                <h1 className="text-9xl -rotate-45 text-white font-bold">50
                <span className=" text-5xl ">%</span>
                </h1>
            </div>
            <span className="-rotate-45 text-4xl font-light h-11  bg-red-800 w-80 -left-20 top-16 absolute">Акция</span>
        </button>
     );
}
 
export default DiscountCard;