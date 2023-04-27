import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import "./index.css"
interface IHomeCat {
    name?: string
    src ?: string
    path : string
    url ?: string
}

const CategoryCard = (props :IHomeCat) => {
    return ( 
        <Link to={props.path} className=" lg:w-full lg:h-full w-4/5 h-4/5 shadow rounded-md overflow-hidden relative">
            <img className="-indent-px shadow w-full h-full" src={props.src} alt="" />
            <div className="opacity-50 top-0 flex justify-center items-center h-full w-full indent-px absolute bg-black">
                <h1 className="text-2xl text-white font-bold">{props.name}</h1>
            </div>
        </Link>
     );
}
 
export default CategoryCard;