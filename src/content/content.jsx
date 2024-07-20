import './content.css';
import { useTranslation } from "react-i18next";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

function Content() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="content">
        <div className="container">
          <h1 className="content-title">
            {t ('engyaxshi')}
          </h1>
          <p className="content-text">
            {t ('harbir')}
          </p>
         
         
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        id='myswiper'
      >
        
        <SwiperSlide className='swiper-slider'>
        <div className="content-card">
          <img src="https://zamontour.uz/assets/images/cand.jpg" alt="rasm" className='content-img' />
         </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slider'>

        </SwiperSlide>
        <SwiperSlide className='swiper-slider'>

        </SwiperSlide>
        <SwiperSlide className='swiper-slider'>

        </SwiperSlide>
        <SwiperSlide className='swiper-slider'>

        </SwiperSlide>
        <SwiperSlide className='swiper-slider'>

        </SwiperSlide>
        <SwiperSlide className='swiper-slider'>

        </SwiperSlide>
        <SwiperSlide className='swiper-slider'>

        </SwiperSlide>
        <SwiperSlide className='swiper-slider'>

        </SwiperSlide>
      </Swiper>
        </div>
      </div>
    </>
  );
}

export default Content;
