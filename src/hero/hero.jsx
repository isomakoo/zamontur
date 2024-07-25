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
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiOutlineUnorderedList } from "react-icons/ai";
import "../styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import Modal from "../Modal"; // Ensure Modal component is imported

function Hero() {
  const { t } = useTranslation();
  const [och, setoch] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const openModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="hero-box">
        <img
          src="https://zamontour.uz/assets/images/zamon.svg"
          alt="rasm"
          className="hero-ico"
        />
        
        <Modal show={showModal} onClose={closeModal}>
          <div className="hero-madol">
          <a href="#" className="box-linkes">
             <p className="w">  {t("boshsahifa")}</p>
            </a> <br />
            <a href="#main" className="box-linkes">
              <p className="w">{t("bizhaqimizda")}</p>
            </a> <br />
            <a href="#myswiper" className="box-linkes">
             <p className="w"> {t("tur")}</p>
            </a> <br />
            <a href="#sidebar-list" className="box-linkes">
             <p className="w"> {t("kontakt")}</p>
            </a> <br />
              <a href="https://www.instagram.com/kurbonov__me?igsh=cTBuZXh4MnBkcHJ0&utm_source=qr"><FaInstagram className="hero-icons" /></a> <br />
              <a href="https://t.me/kurbonov_me"><FaTelegramPlane className="hero-icons" /></a> <br />
              <a href="https://youtu.be/IEMKiXweFTg"><IoLogoYoutube className="hero-icons" /></a> <br />
           
            </div>
        </Modal>
        <ul className="box-item">
          <li className="box-list">
            <a href="#" className="box-link">
              {t("boshsahifa")}
            </a>
          </li>
          <li className="box-list">
            <a href="#main" className="box-link">
              {t("bizhaqimizda")}
            </a>
          </li>
          <li className="box-list">
            <a href="#myswiper" className="box-link">
              {t("tur")}
            </a>
          </li>
          <li className="box-list">
            <a href="#sidebar-list" className="box-link">
              {t("kontakt")}
            </a>
          </li>
        </ul>
        <select name="Lng" id="lng" onChange={handleChange}>
          <option className="hero-option" value="uz">
            UZ
          </option>
          <option className="hero-option" value="ru">
            RU
          </option>
          <option className="hero-option" value="en">
            EN
          </option>
        </select>
        <button onClick={openModal} className="add-btn">
        <AiOutlineUnorderedList className="herojon-icon"/>
        </button>
      </div>
      <div className="hero">
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
          {[
            { title: "Istanbul", id: "hero-swiper-one" },
            { title: "Dubai", id: "hero-swiper-tu" },
            { title: "Sharm El-Sheikh", id: "hero-swiper-siri" },
            { title: "Antalya", id: "hero-swiper-fo" },
          ].map((city) => (
            <SwiperSlide key={city.id} id={city.id}>
              <div className={city.id}>
                <p className="hero-swiper-text">{t("borish")}</p>
                <h1 className="hero-title">{city.title}</h1>
                <br />
                <button className="hero-swiper-btn">{t("bizhaqimizda")}</button>
                <br />
                <ul className="hero-list">
                  <li className="hero-item">
                    <nav>
                      <LuUserCircle2 className="hero-icon" />
                    </nav>
                    <nav>
                      <p className="hero-item-text">{t("aholi")}</p>
                      <b className="hero-item-title">44.48 M</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <nav>
                      <FaMapMarkedAlt className="hero-icon" />
                    </nav>
                    <nav>
                      <p className="hero-item-text">{t("hududi")}</p>
                      <b className="hero-item-title">275.400 KM2</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <nav>
                      <AiFillHome className="hero-icon" />
                    </nav>
                    <nav>
                      <p className="hero-item-text">{t("narx")}</p>
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
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Hero;
