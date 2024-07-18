import "./hero.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LuUserCircle2 } from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";
import { RiPlanetFill } from "react-icons/ri";
import { FaMapMarkedAlt } from "react-icons/fa";
import "../styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

function Hero() {
    const { t, i18n } = useTranslation();
  
    const handleChange = (e) => {
      const selectedLanguage = e.target.value;
      i18n.changeLanguage(selectedLanguage);
    };
    const [och, setoch]=useState(false);
    const add=()=>{
      e.prevenDefault(),
      setoch(true)
    }
  
  return (
    <>
      <div className="hero">
          <div className="hero-box">
           <img src="https://zamontour.uz/assets/images/zamon.svg" alt="rasm" className="hero-icons" />
           <button onClick={add} className="add-btn">batafsil</button>
           <div style={{ display: och? 'block' : 'none' }}>
           <ul className="box-item">
              <li className="box-list">
                <a href="#" className="box-link">{t('boshsahifa')}</a>
              </li>
              <li className="box-list">
                <a href="#main" className="box-link">{t("bizhaqimizda")}</a>
              </li>
              <li className="box-list">
                <a href="#content" className="box-link">{t('tur')}</a>
              </li>
              <li className="box-list">
                <a href="#sidebar-list" className="box-link">{t('kontakt')}</a>
              </li>
            </ul>
            <select name="Lng" id="lng" onChange={handleChange} >
              <option className="hero-option" value="uz">Uzbek</option>
              <option className="hero-option" value="ru">Ruscha</option>
              <option className="hero-option" value="en">English</option>
            </select>
           </div>
            <ul className="box-item">
              <li className="box-list">
                <a href="#" className="box-link">{t('boshsahifa')}</a>
              </li>
              <li className="box-list">
                <a href="#main" className="box-link">{t("bizhaqimizda")}</a>
              </li>
              <li className="box-list">
                <a href="#content" className="box-link">{t('tur')}</a>
              </li>
              <li className="box-list">
                <a href="#sidebar-list" className="box-link">{t('kontakt')}</a>
              </li>
            </ul>
            <select name="Lng" id="lng" onChange={handleChange} >
              <option className="hero-option" value="uz">Uzbek</option>
              <option className="hero-option" value="ru">Ruscha</option>
              <option className="hero-option" value="en">English</option>
            </select>
            </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide id='hero-swiper-one'>
              <div className="hero-swiper-one">
                <p className="hero-swiper-text">
                 {t("borish")}
                </p>
                <h1 className="hero-title">Istanbul</h1>
                <br />
                <button className="hero-swiper-btn">
                {t("bizhaqimizda")}
                </button>
                <br />
                <ul className="hero-list">
                  <li className="hero-item">
                    <nav>
                      <LuUserCircle2
                       className="hero-icon"
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">{t("aholi")}</p>
                      <b className="hero-item-title">44.48 M</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <nav>
                      <FaMapMarkedAlt
                      className="hero-icon"
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">{t("hududi")}</p>
                      <b className="hero-item-title">275.400 KM2</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <nav>
                      <AiFillHome  className="hero-icon" />
                    </nav>
                    <nav>
                      <p className="hero-item-text">{t('narx')}</p>
                      <b className="hero-item-title">$946.000</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <a href="sidebar-list" className="hero-item-link">
                      {t("kupbilish")}
                    </a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide id="hero-swiper-tu">
              <div className="hero-swiper-tu">
                <p className="hero-swiper-text">
                {t("borish")}
                </p>
                <h1 className="hero-title">DUBAI</h1>
                <br />
                <button className="hero-swiper-btn">
                {t("bizhaqimizda")}
                </button>
                <br />
                <ul className="hero-list">
                  <li className="hero-item">
                    <nav>
                      <LuUserCircle2
                         className="hero-icon"
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">{t("aholi")}</p>
                      <b className="hero-item-title">44.48 M</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <nav>
                      <FaMapMarkedAlt
                        className="hero-icon"
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">{t("hududi")}</p>
                      <b className="hero-item-title">275.400 KM2</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <nav>
                      <AiFillHome
                        className="hero-icon"
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">{t('narx')}</p>
                      <b className="hero-item-title">$946.000</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <a href="#sidebar-list" className="hero-item-link">
                    {t("kupbilish")}
                    </a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide id="hero-swiper-siri">
              <div className="hero-swiper-siri">
                <p className="hero-swiper-text">
                {t("borish")}
                </p>
                <h1 className="hero-title">Sharm El-Sheikh</h1>
                <br />
                <button className="hero-swiper-btn">
                {t("bizhaqimizda")}
                </button>
                <br />
                <ul className="hero-list">
                  <li className="hero-item">
                    <nav>
                      <LuUserCircle2
                         className="hero-icon"
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">{t("aholi")}</p>
                      <b className="hero-item-title">44.48 M</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <nav>
                      <FaMapMarkedAlt
                        className="hero-icon"
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">{t("hududi")}</p>
                      <b className="hero-item-title">275.400 KM2</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <nav>
                      <AiFillHome
                       className="hero-icon"
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">{t('narx')}</p>
                      <b className="hero-item-title">$946.000</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <a href="#sidebar-list" className="hero-item-link">
                    {t("kupbilish")}
                    </a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide id="hero-swiper-fo">
              <div className="hero-swiper-fo">
                <p className="hero-swiper-text">
                {t("borish")}
                </p>
                <h1 className="hero-title">Antalya</h1>
                <br />
                <button className="hero-swiper-btn">
                {t("bizhaqimizda")}
                </button>
                <br />
                <ul className="hero-list">
                  <li className="hero-item">
                    <nav>
                      <LuUserCircle2
                         className="hero-icon"
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">{t("aholi")}</p>
                      <b className="hero-item-title">44.48 M</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <nav>
                      <FaMapMarkedAlt
                         className="hero-icon"
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">{t("hududi")}</p>
                      <b className="hero-item-title">275.400 KM2</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <nav>
                      <AiFillHome
                         className="hero-icon"
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">{t('narx')}</p>
                      <b className="hero-item-title">$946.000</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <a href="#sidebar-list" className="hero-item-link">
                    {t("kupbilish")}
                    </a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
      </div>
    </>
  );
}

export default Hero;