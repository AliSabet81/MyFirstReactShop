import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

interface IProductPage {
  src : string[]
}

const SwiperThumbs =( props : IProductPage )=> {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        // style={{
        //   "--swiper-navigation-color": "#fff",}
        //   "--swiper-pagination-color": "#fff",
        // }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={props.src[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.src[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.src[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.src[3]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.src[4]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.src[5]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.src[6]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.src[7]} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper3"
      >
        <SwiperSlide>
          <img src={props.src[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.src[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.src[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.src[3]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.src[4]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.src[5]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.src[6]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.src[7]} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperThumbs