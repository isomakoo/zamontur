import "./sidebar.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import React, { useRef, useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
function Sidebar() {
    const { t, i18n } = useTranslation();
  return (
    <>
      <div className="sidebar">
        <div className="container">
        <h1 className="sidebar-title">{t('sidebarTitle')}</h1>
      <p className="sidebar-text">{t('sidebarText')}</p>
           <div className="sidebar-swiper-container">
           <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper-sidebar"
      >
        <SwiperSlide id="sidebar-swiper-1">
          <div>
          <h1 className="sidebar-swiper-title">Dubai</h1>
          <p className="sidebar-swiper-item">Aholisi: 11M</p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="sidebar-swiper-2">
          <div>
        <h1 className="sidebar-swiper-title">Kanada</h1>
        <p className="sidebar-swiper-item">Aholisi: 2.3M</p>
        </div>
        </SwiperSlide>
        <SwiperSlide id="sidebar-swiper-3">
          <div>
        <h1 className="sidebar-swiper-title">Antaliya</h1>
        <p className="sidebar-swiper-item">Aholisi: 4M</p>
        </div>
        </SwiperSlide>
        <SwiperSlide id="sidebar-swiper-4">
          <div>
        <h1 className="sidebar-swiper-title">Misr</h1>
        <p className="sidebar-swiper-item">Aholisi: 5M</p>
        </div>
        </SwiperSlide>
        <SwiperSlide id="sidebar-swiper-5">
          <div>
          <h1 className="sidebar-swiper-title">Germaniya</h1>
          <p className="sidebar-swiper-item">Aholisi: 6M</p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="sidebar-swiper-6">
          <div>
          <h1 className="sidebar-swiper-title">Mosckva</h1>
          <p className="sidebar-swiper-item">Aholisi: 7M</p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="sidebar-swiper-7">
          <div>
          <h1 className="sidebar-swiper-title">Tailand</h1>
          <p className="sidebar-swiper-item">Aholisi: 8M</p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="sidebar-swiper-8">
          <div>
          <h1 className="sidebar-swiper-title">Islandiya</h1>
          <p className="sidebar-swiper-item">Aholisi: 3M</p>
          </div>
        </SwiperSlide>
        <SwiperSlide id="sidebar-swiper-9">
          <div>
          <h1 className="sidebar-swiper-title">Shvetsariya</h1>
          <p className="sidebar-swiper-item">Aholisi: 6.6M</p>
          </div>
        </SwiperSlide>
      </Swiper>
           </div>
           <ul id="sidebar-list">
           <li className="sidebar-item">
           <FaPhoneAlt  className="sidebar-icons"/>
           <h1 className="sidebar-item-title">{t('sidebar.item1')}</h1>
            <a href="tel:+998334448767" className="sidebar-link">+998 33 444 8767</a>
           </li>
           <li className="sidebar-item">
           <MdEmail className="sidebar-icons"/>
           <h1 className="sidebar-item-title">{t('sidebar.item2')}</h1>
            <a href="email:zamonturbiznes@gmail.com" className="sidebar-link">zamonturbiznes@gmail.com</a>
           </li>
           <li className="sidebar-item">
           <FaLocationDot className="sidebar-icons"/>
           <h1 className="sidebar-item-title">{t('sidebar.item3')}</h1>
           <a href="https://zamontour.uz/uz#" className="sidebar-link">15/25, Chilanzar - 9, Tashkent city</a>
           </li>
      </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
