import './content.css'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaUsers } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaAvianex } from "react-icons/fa";
import { FaTreeCity } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from "react-i18next";

function Content() {
    const { t, i18n } = useTranslation();
  
    const handleChange = (e) => {
      const selectedLanguage = e.target.value;
      i18n.changeLanguage(selectedLanguage);
    };
  return (
    <> 
     <div id="content">
        <div className="container">
              <h1 className='content-title'>{t("engyaxshi")}</h1>
              <p className='content-text'> {t("harbir")}</p>
              <div className="content-swiper1">
              <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         <SwiperSlide id='swiper-one'>
          <img src="https://lh5.googleusercontent.com/p/AF1QipPh0HcRZQgDcMRt3DwCIG3Cx5hu_nhbTPflOf-b=w675-h390-n-k-no" alt="rasm" className='content-img' width='300px' height='200px'/>
          {/* <div className='content-swiper'>
            <nav className='content-swiper-text'>
              <h3 className='content-swiper-title'>{t('Dubai')}</h3>
              <p className='content-swiper-orders'><FaUsers /> {t('300 orders / person')}</p>
              <p className='content-swiper-price'>$700 / {t('person')}</p>
              <b className="content-swiper-tur-title">{t('The tour includes:')}</b>
              <p className='content-tur-title'><FaCar /> {t('5 days trip   Hotel')}</p>
              <p className='content-tur-title'><FaAvianex /> {t('Plane ticket')}</p>
              <p className='content-tur-title'><FaTreeCity /> {t('Best destinations')}</p>
              <button className='content-swiper-btn'>{t('book_now')}</button>
            </nav>
          </div> */}
        </SwiperSlide>
        <SwiperSlide id='swiper-tu'>
      <div className='content-swiper'>
        <nav className='content-swiper-text'>
          <h3 className='content-swiper-title'>{t('Canada')}</h3>
          <p className='content-swiper-orders'><FaUsers /> {t('orders_person', { count: 320 })}</p>
          <p className='content-swiper-price'>{t('price_person', { price: 2200 })}</p>
          <b className="content-swiper-tur-title">{t('tour_includes')}</b>
          <p className='content-tur-title'><FaCar /> {t('day_trip_hotel')}</p>
          <p className='content-tur-title'><FaAvianex /> {t('flight_ticket')}</p>
          <p className='content-tur-title'><FaTreeCity /> {t('top_destinations')}</p>
          <button className='content-swiper-btn'>{t('book_now')}</button>
        </nav>
      </div>
    </SwiperSlide>
    <SwiperSlide id='swiper-siri'>
        <div className='content-swiper'>
          <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>{t('Moscow')}</h3>
            <p className='content-swiper-orders'><FaUsers /> {t('orders_person', { count: 900 })}</p>
            <p className='content-swiper-price'>{t('price_person', { price: 600 })}</p>
            <b className="content-swiper-tur-title">{t('tour_includes')}</b>
            <p className='content-tur-title'><FaCar /> {t('day_trip_hotel')}</p>
            <p className='content-tur-title'><FaAvianex /> {t('flight_ticket')}</p>
            <p className='content-tur-title'><FaTreeCity /> {t('top_destinations')}</p>
            <button className='content-swiper-btn'>{t('book_now')}</button>
          </nav>
        </div>
      </SwiperSlide>
      <SwiperSlide id='swiper-fo'>
        <div className='content-swiper'>
          <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>{t('Antalya')}</h3>
            <p className='content-swiper-orders'><FaUsers /> {t('orders_person', { count: 150 })}</p>
            <p className='content-swiper-price'>{t('price_person', { price: 700 })}</p>
            <b className="content-swiper-tur-title">{t('tour_includes')}</b>
            <p className='content-tur-title'><FaCar /> {t('day_trip_hotel')}</p>
            <p className='content-tur-title'><FaAvianex /> {t('flight_ticket')}</p>
            <p className='content-tur-title'><FaTreeCity /> {t('top_destinations')}</p>
            <button className='content-swiper-btn'>{t('book_now')}</button>
          </nav>
        </div>
      </SwiperSlide>

      <SwiperSlide id='swiper-fife'>
        <div className='content-swiper'>
          <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>{t('Sharm el-Sheikh')}</h3>
            <p className='content-swiper-orders'><FaUsers /> {t('orders_person', { count: 350 })}</p>
            <p className='content-swiper-price'>{t('price_person', { price: 700 })}</p>
            <b className="content-swiper-tur-title">{t('tour_includes')}</b>
            <p className='content-tur-title'><FaCar /> {t('day_trip_hotel')}</p>
            <p className='content-tur-title'><FaAvianex /> {t('flight_ticket')}</p>
            <p className='content-tur-title'><FaTreeCity /> {t('top_destinations')}</p>
            <button className='content-swiper-btn'>{t('book_now')}</button>
          </nav>
        </div>
      </SwiperSlide>

      <SwiperSlide id='swiper-sex'>
        <div className='content-swiper'>
          <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>{t('Turkey')}</h3>
            <p className='content-swiper-orders'><FaUsers /> {t('orders_person', { count: 450 })}</p>
            <p className='content-swiper-price'>{t('price_person', { price: 1500 })}</p>
            <b className="content-swiper-tur-title">{t('tour_includes')}</b>
            <p className='content-tur-title'><FaCar /> {t('day_trip_hotel')}</p>
            <p className='content-tur-title'><FaAvianex /> {t('flight_ticket')}</p>
            <p className='content-tur-title'><FaTreeCity /> {t('top_destinations')}</p>
            <button className='content-swiper-btn'>{t('book_now')}</button>
          </nav>
        </div>
      </SwiperSlide>

      <SwiperSlide id='swiper-seven'>
        <div className='content-swiper'>
          <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>{t('Istanbul')}</h3>
            <p className='content-swiper-orders'><FaUsers /> {t('orders_person', { count: 250 })}</p>
            <p className='content-swiper-price'>{t('price_person', { price: 1100 })}</p>
            <b className="content-swiper-tur-title">{t('tour_includes')}</b>
            <p className='content-tur-title'><FaCar /> {t('day_trip_hotel')}</p>
            <p className='content-tur-title'><FaAvianex /> {t('flight_ticket')}</p>
            <p className='content-tur-title'><FaTreeCity /> {t('top_destinations')}</p>
            <button className='content-swiper-btn'>{t('book_now')}</button>
          </nav>
        </div>
      </SwiperSlide>

      <SwiperSlide id='swiper-eight'>
        <div className='content-swiper'>
          <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>{t('Antalya')}</h3>
            <p className='content-swiper-orders'><FaUsers /> {t('orders_person', { count: 400 })}</p>
            <p className='content-swiper-price'>{t('price_person', { price: 1200 })}</p>
            <b className="content-swiper-tur-title">{t('tour_includes')}</b>
            <p className='content-tur-title'><FaCar /> {t('day_trip_hotel')}</p>
            <p className='content-tur-title'><FaAvianex /> {t('flight_ticket')}</p>
            <p className='content-tur-title'><FaTreeCity /> {t('top_destinations')}</p>
            <button className='content-swiper-btn'>{t('book_now')}</button>
          </nav>
        </div>
      </SwiperSlide>

      <SwiperSlide id='swiper-nine'>
        <div className='content-swiper'>
          <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>{t('England')}</h3>
            <p className='content-swiper-orders'><FaUsers /> {t('orders_person', { count: 300 })}</p>
            <p className='content-swiper-price'>{t('price_person', { price: 1700 })}</p>
            <b className="content-swiper-tur-title">{t('tour_includes')}</b>
            <p className='content-tur-title'><FaCar /> {t('day_trip_hotel')}</p>
            <p className='content-tur-title'><FaAvianex /> {t('flight_ticket')}</p>
            <p className='content-tur-title'><FaTreeCity /> {t('top_destinations')}</p>
            <button className='content-swiper-btn'>{t('book_now')}</button>
          </nav>
        </div>
      </SwiperSlide>
      </Swiper>
              </div>
              <h1 className='content-title'>{t('content-title')}</h1>
      <p className='content-text'>{t('content-text')}</p>
              <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       <SwiperSlide id='swiper-nine'>
        <div className='content-swiper'>
          <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>{t('England')}</h3>
            <p className='content-swiper-orders'><FaUsers /> {t('orders_person', { count: 300 })}</p>
            <p className='content-swiper-price'>{t('price_person', { price: 1700 })}</p>
            <b className="content-swiper-tur-title">{t('tour_includes')}</b>
            <p className='content-tur-title'><FaCar /> {t('day_trip_hotel')}</p>
            <p className='content-tur-title'><FaAvianex /> {t('flight_ticket')}</p>
            <p className='content-tur-title'><FaTreeCity /> {t('top_destinations')}</p>
            <button className='content-swiper-btn'>{t('book_now')}</button>
          </nav>
        </div>
      </SwiperSlide>
      <SwiperSlide id='swiper-nine'>
        <div className='content-swiper'>
          <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>{t('England')}</h3>
            <p className='content-swiper-orders'><FaUsers /> {t('orders_person', { count: 300 })}</p>
            <p className='content-swiper-price'>{t('price_person', { price: 1700 })}</p>
            <b className="content-swiper-tur-title">{t('tour_includes')}</b>
            <p className='content-tur-title'><FaCar /> {t('day_trip_hotel')}</p>
            <p className='content-tur-title'><FaAvianex /> {t('flight_ticket')}</p>
            <p className='content-tur-title'><FaTreeCity /> {t('top_destinations')}</p>
            <button className='content-swiper-btn'>{t('book_now')}</button>
          </nav>
        </div>
      </SwiperSlide>
      <SwiperSlide id='swiper-nine'>
        <div className='content-swiper'>
          <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>{t('England')}</h3>
            <p className='content-swiper-orders'><FaUsers /> {t('orders_person', { count: 300 })}</p>
            <p className='content-swiper-price'>{t('price_person', { price: 1700 })}</p>
            <b className="content-swiper-tur-title">{t('tour_includes')}</b>
            <p className='content-tur-title'><FaCar /> {t('day_trip_hotel')}</p>
            <p className='content-tur-title'><FaAvianex /> {t('flight_ticket')}</p>
            <p className='content-tur-title'><FaTreeCity /> {t('top_destinations')}</p>
            <button className='content-swiper-btn'>{t('book_now')}</button>
          </nav>
        </div>
      </SwiperSlide>
      <SwiperSlide id='swiper-nine'>
        <div className='content-swiper'>
          <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>{t('England')}</h3>
            <p className='content-swiper-orders'><FaUsers /> {t('orders_person', { count: 300 })}</p>
            <p className='content-swiper-price'>{t('price_person', { price: 1700 })}</p>
            <b className="content-swiper-tur-title">{t('tour_includes')}</b>
            <p className='content-tur-title'><FaCar /> {t('day_trip_hotel')}</p>
            <p className='content-tur-title'><FaAvianex /> {t('flight_ticket')}</p>
            <p className='content-tur-title'><FaTreeCity /> {t('top_destinations')}</p>
            <button className='content-swiper-btn'>{t('book_now')}</button>
          </nav>
        </div>
      </SwiperSlide>
      <SwiperSlide id='swiper-nine'>
        <div className='content-swiper'>
          <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>{t('England')}</h3>
            <p className='content-swiper-orders'><FaUsers /> {t('orders_person', { count: 300 })}</p>
            <p className='content-swiper-price'>{t('price_person', { price: 1700 })}</p>
            <b className="content-swiper-tur-title">{t('tour_includes')}</b>
            <p className='content-tur-title'><FaCar /> {t('day_trip_hotel')}</p>
            <p className='content-tur-title'><FaAvianex /> {t('flight_ticket')}</p>
            <p className='content-tur-title'><FaTreeCity /> {t('top_destinations')}</p>
            <button className='content-swiper-btn'>{t('book_now')}</button>
          </nav>
        </div>
      </SwiperSlide>
      <SwiperSlide id='swiper-nine'>
        <div className='content-swiper'>
          <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>{t('England')}</h3>
            <p className='content-swiper-orders'><FaUsers /> {t('orders_person', { count: 300 })}</p>
            <p className='content-swiper-price'>{t('price_person', { price: 1700 })}</p>
            <b className="content-swiper-tur-title">{t('tour_includes')}</b>
            <p className='content-tur-title'><FaCar /> {t('day_trip_hotel')}</p>
            <p className='content-tur-title'><FaAvianex /> {t('flight_ticket')}</p>
            <p className='content-tur-title'><FaTreeCity /> {t('top_destinations')}</p>
            <button className='content-swiper-btn'>{t('book_now')}</button>
          </nav>
        </div>
      </SwiperSlide>
      </Swiper>
        </div>

     </div>
    </>
  )
}

export default Content