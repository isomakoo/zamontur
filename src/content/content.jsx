import './content.css';
import { useTranslation } from "react-i18next";
import React from 'react';
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { CiShoppingTag } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

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
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0:{
                slidesPerView: 1,
              },
              700:{
                slidesPerView: 2,
              },
              1050:{
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            id='myswiper'
          >
            <SwiperSlide className='swiper-slider'>
              <img className='swiper-img' src="https://zamontour.uz/assets/images/cand.jpg" alt="Xitoy" />
              <div className='swiper-card'>
                <h1 className='swiper-card-title'>Istanbul</h1>
                <p className="swiper-card-text">234 buyurtmalar</p>
                <hr />
                <b className='swiper-card-texttes'>{t('services_title')}</b>
              <nav className="swiper-nav">
              <FaFacebookMessenger />     <p className='swiper-card-texc'>{t('cheap_prices')}</p>
              </nav>
               <nav className="swiper-nav">
               <IoIosTime />    <p className='swiper-card-texc'>{t('fast_work_time')}</p>
               </nav>
                <nav className="swiper-nav">
                <CiShoppingTag />   <p className='swiper-card-texc'>{t('reliable_support')}</p>
                </nav>
                <button className='swiper-btn'>{t('book_now')}</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slider'>
              <img className='swiper-img' src="https://zamontour.uz/assets/images/cand.jpg" alt="" />
            <div className='swiper-card'>
                <h1 className='swiper-card-title'>Xitoy</h1>
                <p className="swiper-card-text">323 buyurtmalar</p>
                <hr />
                <b className='swiper-card-texttes'>{t('services_title')}</b>
              <nav className="swiper-nav">
              <FaFacebookMessenger />    <p className='swiper-card-texc'>{t('cheap_prices')}</p>
              </nav>
               <nav className="swiper-nav">
               <IoIosTime />    <p className='swiper-card-texc'>{t('fast_work_time')}</p>
               </nav>
                <nav className="swiper-nav">
                <CiShoppingTag />   <p className='swiper-card-texc'>{t('reliable_support')}</p>
                </nav>
                <button className='swiper-btn'>{t('book_now')}</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slider'>
              <img src="https://zamontour.uz/assets/images/istanbul3.jpg" alt="" className="swiper-img" />
            <div className='swiper-card'>
                <h1 className='swiper-card-title'>Turkey</h1>
                <p className="swiper-card-text">540 buyurtmalar</p>
                <hr />
                <b className='swiper-card-texttes'>{t('services_title')}</b>
              <nav className="swiper-nav">
              <FaFacebookMessenger />    <p className='swiper-card-texc'>{t('cheap_prices')}</p>
              </nav>
               <nav className="swiper-nav">
               <IoIosTime />    <p className='swiper-card-texc'>{t('fast_work_time')}</p>
               </nav>
                <nav className="swiper-nav">
                <CiShoppingTag />   <p className='swiper-card-texc'>{t('reliable_support')}</p>
                </nav>
                <button className='swiper-btn'>{t('book_now')}</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slider'>
              <img src="https://zamontour.uz/assets/images/india.jpg" alt="" className="swiper-img" />
            <div className='swiper-card'>
                <h1 className='swiper-card-title'>Antaliya</h1>
                <p className="swiper-card-text">675 buyurtmalar</p>
                <hr />
                <b className='swiper-card-texttes'>{t('services_title')}</b>
              <nav className="swiper-nav">
              <FaFacebookMessenger />    <p className='swiper-card-texc'>{t('cheap_prices')}</p>
              </nav>
               <nav className="swiper-nav">
               <IoIosTime />   <p className='swiper-card-texc'>{t('fast_work_time')}</p>
               </nav>
                <nav className="swiper-nav">
                <CiShoppingTag />   <p className='swiper-card-texc'>{t('reliable_support')}</p>
                </nav>
                <button className='swiper-btn'>{t('book_now')}</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slider'>
              <img src="https://zamontour.uz/assets/images/deals-01.jpg" alt="" className="swiper-img" />
            <div className='swiper-card'>
                <h1 className='swiper-card-title'>Dubai</h1>
                <p className="swiper-card-text">980 buyurtmalar</p>
                <hr />
                <b className='swiper-card-texttes'>{t('services_title')}</b>
              <nav className="swiper-nav">
              <FaFacebookMessenger />    <p className='swiper-card-texc'>{t('cheap_prices')}</p>
              </nav>
               <nav className="swiper-nav">
               <IoIosTime />   <p className='swiper-card-texc'>{t('fast_work_time')}</p>
               </nav>
                <nav className="swiper-nav">
                <CiShoppingTag />   <p className='swiper-card-texc'>{t('reliable_support')}</p>
                </nav>
                <button className='swiper-btn'>{t('book_now')}</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slider'>
              <img className='swiper-img' src="https://zamontour.uz/assets/images/heading-bg-02.jpg" alt="" />
            <div className='swiper-card'>
                <h1 className='swiper-card-title'>Kanada</h1>
                <p className="swiper-card-text">300 buyurtmalar</p>
                <hr />
                <b className='swiper-card-texttes'>{t('services_title')}</b>
              <nav className="swiper-nav">
              <FaFacebookMessenger />    <p className='swiper-card-texc'>{t('cheap_prices')}</p>
              </nav>
               <nav className="swiper-nav">
               <IoIosTime />   <p className='swiper-card-texc'>{t('fast_work_time')}</p>
               </nav>
                <nav className="swiper-nav">
                <CiShoppingTag />   <p className='swiper-card-texc'>{t('reliable_support')}</p>
                </nav>
                <button className='swiper-btn'>{t('book_now')}</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slider'>
              <img className='swiper-img' src="https://zamontour.uz/assets/images/offers-02.jpg" alt="" />
            <div className='swiper-card'>
                <h1 className='swiper-card-title'>Yevropa</h1>
                <p className="swiper-card-text">350 buyurtmalar</p>
                <hr />
                <b className='swiper-card-texttes'>{t('services_title')}</b>
              <nav className="swiper-nav">
              <FaFacebookMessenger />    <p className='swiper-card-texc'>{t('cheap_prices')}</p>
              </nav>
               <nav className="swiper-nav">
               <IoIosTime />   <p className='swiper-card-texc'>{t('fast_work_time')}</p>
               </nav>
                <nav className="swiper-nav">
                <CiShoppingTag />   <p className='swiper-card-texc'>{t('reliable_support')}</p>
                </nav>
                <button className='swiper-btn'>{t('book_now')}</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slider'>
              <img src="https://zamontour.uz/assets/images/usa1.jpg" alt="" className="swiper-img" />
            <div className='swiper-card'>
                <h1 className='swiper-card-title'>AQSH</h1>
                <p className="swiper-card-text">400 buyurtmalar</p>
                <hr />
                <b className='swiper-card-texttes'>{t('services_title')}</b>
              <nav className="swiper-nav">
              <FaFacebookMessenger />    <p className='swiper-card-texc'>{t('cheap_prices')}</p>
              </nav>
               <nav className="swiper-nav">
               <IoIosTime />    <p className='swiper-card-texc'>{t('fast_work_time')}</p>
               </nav>
                <nav className="swiper-nav">
                <CiShoppingTag />   <p className='swiper-card-texc'>{t('reliable_support')}</p>
                </nav>
                <button className='swiper-btn'>{t('book_now')}</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slider'>
              <img src="https://zamontour.uz/assets/images/offers-01.jpg" alt="" className="swiper-img" />
            <div className='swiper-card'>
                <h1 className='swiper-card-title'>Amgliya</h1>
                <p className="swiper-card-text">450 buyurtmalar</p>
                <hr />
                <b className='swiper-card-texttes'>{t('services_title')}</b>
              <nav className="swiper-nav">
              <FaFacebookMessenger />  <p className='swiper-card-texc'>Eng arzon Narxlar</p>
              </nav>
               <nav className="swiper-nav">
               <IoIosTime />    <p className='swiper-card-texc'>{t('fast_work_time')}</p>
               </nav>
                <nav className="swiper-nav">
                <CiShoppingTag />   <p className='swiper-card-texc'>{t('reliable_support')}</p>
                </nav>
                <button className='swiper-btn'>{t('book_now')}</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Content;
