import React, { ReactElement, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.css";

// import required modules
import { Pagination,Autoplay,EffectFade,Keyboard } from "swiper";
import { homeslideproduct } from "@/products/homeSlideProducts";
import HomeSlideCard from "../card/homeslidecard";

interface ISwiper{
  children : ReactElement
}



const SwiperComponent = () =>{
  return (
    <>
      <Swiper
        // effect={"fade"}
        loop={true}
        autoplay={{
          delay: 115000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination,Autoplay,EffectFade]}
        className="mySwiper container rounded-lg"
      >
        {homeslideproduct.map((element)=><SwiperSlide className="shadow"><HomeSlideCard src={element.src} url={element.path}/></SwiperSlide>)}       
      </Swiper>
    </>
  );
}
export default SwiperComponent