import "./sidebar.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import React, { useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
function Sidebar() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="sidebar">
        <div className="container">
          <h1 className="sidebar-title">{t("sidebarTitle")}</h1>
          <p className="sidebar-text">{t("sidebarText")}</p>
          <div class="wrapper">
            <div id="container">
              <input type="radio" name="slide" id="c1"></input>
              <label for="c1" class="card">
                <div class="row">
                  <div class="icon">1</div>
                  <div class="description">
                    <h4>Dubai</h4>
                    <p>Population: 2M</p>
                  </div>
                </div>
              </label>

              <input type="radio" name="slide" id="c2"></input>
              <label for="c2" class="card">
                <div class="row">
                  <div class="icon">2</div>
                  <div class="description">
                    <h4>Antalya </h4>
                    <p>Population: 3.5M</p>
                  </div>
                </div>
              </label>

              <input type="radio" name="slide" id="c3"></input>
              <label for="c3" class="card">
                <div class="row">
                  <div class="icon">3</div>
                  <div class="description">
                    <h4>Istanbul</h4>
                    <p>Population: 7M</p>
                  </div>
                </div>
              </label>

              <input type="radio" name="slide" id="c4"></input>
              <label for="c4" class="card">
                <div class="row">
                  <div class="icon">4</div>
                  <div class="description">
                    <h4>Sharm El-Sheikh</h4>
                    <p>Population 5M</p>
                  </div>
                </div>
              </label>
              <input type="radio" name="slide" id="c5"></input>
              <label for="c5" class="card">
                <div class="row">
                  <div class="icon">5</div>
                  <div class="description">
                    <h4>Paric</h4>
                    <p>Population 4,5M</p>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <ul id="sidebar-list">
            <li className="sidebar-item">
              <FaPhoneAlt className="sidebar-icons" />
              <h1 className="sidebar-item-title">{t("sidebar.item1")}</h1>
              <a href="tel:+998334448767" className="sidebar-link">
                +998 33 444 8767
              </a>
            </li>
            <li className="sidebar-item">
              <MdEmail className="sidebar-icons" />
              <h1 className="sidebar-item-title">{t("sidebar.item2")}</h1>
              <a href="email:zamonturbiznes@gmail.com" className="sidebar-link">
                zamonturbiznes@gmail.com
              </a>
            </li>
            <li className="sidebar-item">
              <FaLocationDot className="sidebar-icons" />
              <h1 className="sidebar-item-title">{t("sidebar.item3")}</h1>
              <a href="https://zamontour.uz/uz#" className="sidebar-link">
                15/25, Chilanzar - 9, Tashkent city
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
