import './content.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaUsers } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaAvianex } from "react-icons/fa";
import { FaTreeCity } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import '../styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

function Content() {

  return (
    <> 
     <div className="content">
        <div className="container">
              <h1 className='content-title'>Eng Yaxshi Haftalik Takliflarimiz</h1>
              <p className='content-text'>Har bir shaharda faqat siz uchun tuzilgan eng yaxshi haftalik takliflarni kashf eting. O'zingizni sarguzashtlar dunyosida his qiling.</p>
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
    <div className='content-swiper'>
        <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>Dubai</h3>
            <p className='content-swiper-orders'><FaUsers /> 300 buyurtmalar / kishi</p>
            <p className='content-swiper-price'>$700 / kishi</p>
            <b className="content-swiper-tur-title">Tur o'z ichiga oladi:</b>
            <p className='content-tur-title'><FaCar /> 5 kunlik sayohat   Mehmonhona</p>
            <p className='content-tur-title'><FaAvianex /> Aviabilet</p>
            <p className='content-tur-title'><FaTreeCity /> Eng yaxshi manzillar</p>
            <button className='content-swiper-btn'>Joy band qilish</button>
        </nav>
    </div>
</SwiperSlide>
<SwiperSlide id='swiper-tu'>
    <div className='content-swiper'>
        <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>Kanada</h3>
            <p className='content-swiper-orders'><FaUsers /> 320 buyurtmalar / kishi</p>
            <p className='content-swiper-price'>$2200 / kishi</p>
            <b className="content-swiper-tur-title">Tur o'z ichiga oladi:</b>
            <p className='content-tur-title'><FaCar /> 5 kunlik sayohat   Mehmonhona</p>
            <p className='content-tur-title'><FaAvianex /> Aviabilet</p>
            <p className='content-tur-title'><FaTreeCity /> Eng yaxshi manzillar</p>
            <button className='content-swiper-btn'>Joy band qilish</button>
        </nav>
    </div>
</SwiperSlide>
<SwiperSlide id='swiper-siri'>
    <div className='content-swiper'>
        <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>Moskva</h3>
            <p className='content-swiper-orders'><FaUsers /> 900 buyurtmalar / kishi</p>
            <p className='content-swiper-price'>$600 / kishi</p>
            <b className="content-swiper-tur-title">Tur o'z ichiga oladi:</b>
            <p className='content-tur-title'><FaCar /> 5 kunlik sayohat   Mehmonhona</p>
            <p className='content-tur-title'><FaAvianex /> Aviabilet</p>
            <p className='content-tur-title'><FaTreeCity /> Eng yaxshi manzillar</p>
            <button className='content-swiper-btn'>Joy band qilish</button>
        </nav>
    </div>
</SwiperSlide>
<SwiperSlide id='swiper-fo'>
    <div className='content-swiper'>
        <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>Antaliya</h3>
            <p className='content-swiper-orders'><FaUsers /> 150 buyurtmalar / kishi</p>
            <p className='content-swiper-price'>$700 / kishi</p>
            <b className="content-swiper-tur-title">Tur o'z ichiga oladi:</b>
            <p className='content-tur-title'><FaCar /> 5 kunlik sayohat   Mehmonhona</p>
            <p className='content-tur-title'><FaAvianex /> Aviabilet</p>
            <p className='content-tur-title'><FaTreeCity /> Eng yaxshi manzillar</p>
            <button className='content-swiper-btn'>Joy band qilish</button>
        </nav>
    </div>
</SwiperSlide>
<SwiperSlide id='swiper-fife'>
    <div className='content-swiper'>
        <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>Sharme sheik</h3>
            <p className='content-swiper-orders'><FaUsers /> 350 buyurtmalar / kishi</p>
            <p className='content-swiper-price'>$700 / kishi</p>
            <b className="content-swiper-tur-title">Tur o'z ichiga oladi:</b>
            <p className='content-tur-title'><FaCar /> 5 kunlik sayohat   Mehmonhona</p>
            <p className='content-tur-title'><FaAvianex /> Aviabilet</p>
            <p className='content-tur-title'><FaTreeCity /> Eng yaxshi manzillar</p>
            <button className='content-swiper-btn'>Joy band qilish</button>
        </nav>
    </div>
</SwiperSlide>
<SwiperSlide id='swiper-sex'>
    <div className='content-swiper'>
        <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>Turkiya</h3>
            <p className='content-swiper-orders'><FaUsers /> 450 buyurtmalar / kishi</p>
            <p className='content-swiper-price'>$1500 / kishi</p>
            <b className="content-swiper-tur-title">Tur o'z ichiga oladi:</b>
            <p className='content-tur-title'><FaCar /> 5 kunlik sayohat   Mehmonhona</p>
            <p className='content-tur-title'><FaAvianex /> Aviabilet</p>
            <p className='content-tur-title'><FaTreeCity /> Eng yaxshi manzillar</p>
            <button className='content-swiper-btn'>Joy band qilish</button>
        </nav>
    </div>
</SwiperSlide>
<SwiperSlide id='swiper-seven'>
    <div className='content-swiper'>
        <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>Istanbul</h3>
            <p className='content-swiper-orders'><FaUsers /> 250 buyurtmalar / kishi</p>
            <p className='content-swiper-price'>$1100 / kishi</p>
            <b className="content-swiper-tur-title">Tur o'z ichiga oladi:</b>
            <p className='content-tur-title'><FaCar /> 5 kunlik sayohat   Mehmonhona</p>
            <p className='content-tur-title'><FaAvianex /> Aviabilet</p>
            <p className='content-tur-title'><FaTreeCity /> Eng yaxshi manzillar</p>
            <button className='content-swiper-btn'>Joy band qilish</button>
        </nav>
    </div>
</SwiperSlide>
<SwiperSlide id='swiper-eigt'>
    <div className='content-swiper'>
        <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>Antaliya</h3>
            <p className='content-swiper-orders'><FaUsers /> 400 buyurtmalar / kishi</p>
            <p className='content-swiper-price'>$1200 / kishi</p>
            <b className="content-swiper-tur-title">Tur o'z ichiga oladi:</b>
            <p className='content-tur-title'><FaCar /> 5 kunlik sayohat   Mehmonhona</p>
            <p className='content-tur-title'><FaAvianex /> Aviabilet</p>
            <p className='content-tur-title'><FaTreeCity /> Eng yaxshi manzillar</p>
            <button className='content-swiper-btn'>Joy band qilish</button>
        </nav>
    </div>
</SwiperSlide>
<SwiperSlide id='swiper-nine'>
    <div className='content-swiper'>
        <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>Angliya</h3>
            <p className='content-swiper-orders'><FaUsers /> 300 buyurtmalar / kishi</p>
            <p className='content-swiper-price'>$1700 / kishi</p>
            <b className="content-swiper-tur-title">Tur o'z ichiga oladi:</b>
            <p className='content-tur-title'><FaCar /> 5 kunlik sayohat   Mehmonhona</p>
            <p className='content-tur-title'><FaAvianex /> Aviabilet</p>
            <p className='content-tur-title'><FaTreeCity /> Eng yaxshi manzillar</p>
            <button className='content-swiper-btn'>Joy band qilish</button>
        </nav>
    </div>
</SwiperSlide>
      </Swiper>
              </div>
              <h1 className='content-title'>Viza Olishga Yordam Beramiz</h1>
              <p className='content-text'>Biz sizga oson, tez fursatda va albatta ishonchli viza olishga yordam beramiz.</p>
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
            <h3 className='content-swiper-title'>Angliya</h3>
            <p className='content-swiper-orders'><FaUsers /> 300 buyurtmalar / kishi</p>
            <p className='content-swiper-price'>$1700 / kishi</p>
            <b className="content-swiper-tur-title">Tur o'z ichiga oladi:</b>
            <p className='content-tur-title'><FaCar /> 5 kunlik sayohat   Mehmonhona</p>
            <p className='content-tur-title'><FaAvianex /> Aviabilet</p>
            <p className='content-tur-title'><FaTreeCity /> Eng yaxshi manzillar</p>
            <button className='content-swiper-btn'>Joy band qilish</button>
        </nav>
    </div>
</SwiperSlide>
<SwiperSlide id='swiper-nine'>
    <div className='content-swiper'>
        <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>Angliya</h3>
            <p className='content-swiper-orders'><FaUsers /> 300 buyurtmalar / kishi</p>
            <p className='content-swiper-price'>$1700 / kishi</p>
            <b className="content-swiper-tur-title">Tur o'z ichiga oladi:</b>
            <p className='content-tur-title'><FaCar /> 5 kunlik sayohat   Mehmonhona</p>
            <p className='content-tur-title'><FaAvianex /> Aviabilet</p>
            <p className='content-tur-title'><FaTreeCity /> Eng yaxshi manzillar</p>
            <button className='content-swiper-btn'>Joy band qilish</button>
        </nav>
    </div>
</SwiperSlide>
<SwiperSlide id='swiper-nine'>
    <div className='content-swiper'>
        <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>Angliya</h3>
            <p className='content-swiper-orders'><FaUsers /> 300 buyurtmalar / kishi</p>
            <p className='content-swiper-price'>$1700 / kishi</p>
            <b className="content-swiper-tur-title">Tur o'z ichiga oladi:</b>
            <p className='content-tur-title'><FaCar /> 5 kunlik sayohat   Mehmonhona</p>
            <p className='content-tur-title'><FaAvianex /> Aviabilet</p>
            <p className='content-tur-title'><FaTreeCity /> Eng yaxshi manzillar</p>
            <button className='content-swiper-btn'>Joy band qilish</button>
        </nav>
    </div>
</SwiperSlide>
<SwiperSlide id='swiper-nine'>
    <div className='content-swiper'>
        <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>Angliya</h3>
            <p className='content-swiper-orders'><FaUsers /> 300 buyurtmalar / kishi</p>
            <p className='content-swiper-price'>$1700 / kishi</p>
            <b className="content-swiper-tur-title">Tur o'z ichiga oladi:</b>
            <p className='content-tur-title'><FaCar /> 5 kunlik sayohat   Mehmonhona</p>
            <p className='content-tur-title'><FaAvianex /> Aviabilet</p>
            <p className='content-tur-title'><FaTreeCity /> Eng yaxshi manzillar</p>
            <button className='content-swiper-btn'>Joy band qilish</button>
        </nav>
    </div>
</SwiperSlide>
<SwiperSlide id='swiper-nine'>
    <div className='content-swiper'>
        <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>Angliya</h3>
            <p className='content-swiper-orders'><FaUsers /> 300 buyurtmalar / kishi</p>
            <p className='content-swiper-price'>$1700 / kishi</p>
            <b className="content-swiper-tur-title">Tur o'z ichiga oladi:</b>
            <p className='content-tur-title'><FaCar /> 5 kunlik sayohat   Mehmonhona</p>
            <p className='content-tur-title'><FaAvianex /> Aviabilet</p>
            <p className='content-tur-title'><FaTreeCity /> Eng yaxshi manzillar</p>
            <button className='content-swiper-btn'>Joy band qilish</button>
        </nav>
    </div>
</SwiperSlide>
<SwiperSlide id='swiper-nine'>
    <div className='content-swiper'>
        <nav className='content-swiper-text'>
            <h3 className='content-swiper-title'>Angliya</h3>
            <p className='content-swiper-orders'><FaUsers /> 300 buyurtmalar / kishi</p>
            <p className='content-swiper-price'>$1700 / kishi</p>
            <b className="content-swiper-tur-title">Tur o'z ichiga oladi:</b>
            <p className='content-tur-title'><FaCar /> 5 kunlik sayohat   Mehmonhona</p>
            <p className='content-tur-title'><FaAvianex /> Aviabilet</p>
            <p className='content-tur-title'><FaTreeCity /> Eng yaxshi manzillar</p>
            <button className='content-swiper-btn'>Joy band qilish</button>
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