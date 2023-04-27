import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

interface IHomeSlide {
    src ?: string
    url : string
}

const HomeSlideCard = (props :IHomeSlide) => {
    return ( 
        <SwiperSlide className="shadow swipercard">
            <img className="-indent-px" src={props.src} alt="" />
            <div className="indent-px w-full absolute flex h-full p-12 flex-col justify-between">
                <button className="font-medium text-2xl text-white py-2.5 px-10 shadow bg-red-900 w-fit rounded-md">NEW COLLECTION</button>
                <span className="text-white flex-1 h-24 mt-4 text-6xl text-left">2023</span>
                <button className="font-semibold text-2xl text-white py-2.5 px-10 shadow bg-red-900 w-fit rounded-md"><Link to={props.url}>visit</Link></button>
            </div>
        </SwiperSlide>
     );
}
 
export default HomeSlideCard;