import "./hero.css";
import React from "react";
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

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero-box">
            <nav className="boxjon">
              <nav>
              <RiPlanetFill  style={{ width: "50px", height: "50px" }} />
              </nav>
              <nav>
                <h2 className="box-title">Zamon</h2>
                <p className="textjon">Busnes travel</p>
              </nav>
              </nav>
              <ul className="box-item">
                  <li className="box-list">
                    <a href="#" className="box-link">Bosh Sahifa</a>
                  </li>
                  <li className="box-list">
                    <a href="#" className="box-link">Biz Haqimizda</a>
                  </li>
                  <li className="box-list">
                    <a href="#" className="box-link">Turlar</a>
                  </li>
                  <li className="box-list">
                    <a href="#" className="box-link">Kontaktlar</a>
                  </li>
              </ul>
              <ul className="box-item-tu">
                <li className="box-list"><button>Uz</button></li>
                <li className="box-list"><button>En</button></li>
                <li className="box-list"><button>Ru</button></li>
              </ul>
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
                  Siz yoqtirib qolishingiz aniq bo'lgan shahar:
                </p>
                <h1 className="hero-title">Istanbul</h1>
                <br />
                <button className="hero-swiper-btn">
                  Borishni Xohlaysizmi?
                </button>
                <br />
                <ul className="hero-list">
                  <li className="hero-item">
                    <nav>
                      <LuUserCircle2
                        style={{ width: "80px", height: "80px" }}
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">Aholisi</p>
                      <b className="hero-item-title">44.48 M</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <nav>
                      <FaMapMarkedAlt
                        style={{ width: "80px", height: "80px" }}
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">Hududi:</p>
                      <b className="hero-item-title">275.400 KM2</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <nav>
                      <AiFillHome style={{ width: "80px", height: "80px" }} />
                    </nav>
                    <nav>
                      <p className="hero-item-text">O'rtacha narx:</p>
                      <b className="hero-item-title">$946.000</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <a href="#" className="hero-item-link">
                      Ko'proq Bilish...
                    </a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide id="hero-swiper-tu">
              <div className="hero-swiper-tu">
                <p className="hero-swiper-text">
                  Siz yoqtirib qolishingiz aniq bo'lgan shahar:
                </p>
                <h1 className="hero-title">DUBAI</h1>
                <br />
                <button className="hero-swiper-btn">
                  Borishni Xohlaysizmi?
                </button>
                <br />
                <ul className="hero-list">
                  <li className="hero-item">
                    <nav>
                      <LuUserCircle2
                        style={{ width: "80px", height: "80px", color: "aqua" }}
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">Aholisi</p>
                      <b className="hero-item-title">44.48 M</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <nav>
                      <FaMapMarkedAlt
                        style={{ width: "80px", height: "80px", color: "aqua" }}
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">Hududi:</p>
                      <b className="hero-item-title">275.400 KM2</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <nav>
                      <AiFillHome
                        style={{ width: "80px", height: "80px", color: "aqua" }}
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">O'rtacha narx:</p>
                      <b className="hero-item-title">$946.000</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <a href="#" className="hero-item-link">
                      Ko'proq Bilish...
                    </a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide id="hero-swiper-siri">
              <div className="hero-swiper-siri">
                <p className="hero-swiper-text">
                  Siz yoqtirib qolishingiz aniq bo'lgan shahar:
                </p>
                <h1 className="hero-title">Sharm El-Sheikh</h1>
                <br />
                <button className="hero-swiper-btn">
                  Borishni Xohlaysizmi?
                </button>
                <br />
                <ul className="hero-list">
                  <li className="hero-item">
                    <nav>
                      <LuUserCircle2
                        style={{ width: "80px", height: "80px", color: "aqua" }}
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">Aholisi</p>
                      <b className="hero-item-title">44.48 M</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <nav>
                      <FaMapMarkedAlt
                        style={{ width: "80px", height: "80px", color: "aqua" }}
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">Hududi:</p>
                      <b className="hero-item-title">275.400 KM2</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <nav>
                      <AiFillHome
                        style={{ width: "80px", height: "80px", color: "aqua" }}
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">O'rtacha narx:</p>
                      <b className="hero-item-title">$946.000</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <a href="#" className="hero-item-link">
                      Ko'proq Bilish...
                    </a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide id="hero-swiper-fo">
              <div className="hero-swiper-fo">
                <p className="hero-swiper-text">
                  Siz yoqtirib qolishingiz aniq bo'lgan shahar:
                </p>
                <h1 className="hero-title">Antalya</h1>
                <br />
                <button className="hero-swiper-btn">
                  Borishni Xohlaysizmi?
                </button>
                <br />
                <ul className="hero-list">
                  <li className="hero-item">
                    <nav>
                      <LuUserCircle2
                        style={{ width: "80px", height: "80px", color: "aqua" }}
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">Aholisi</p>
                      <b className="hero-item-title">44.48 M</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <nav>
                      <FaMapMarkedAlt
                        style={{ width: "80px", height: "80px", color: "aqua" }}
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">Hududi:</p>
                      <b className="hero-item-title">275.400 KM2</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <nav>
                      <AiFillHome
                        style={{ width: "80px", height: "80px", color: "aqua" }}
                      />
                    </nav>
                    <nav>
                      <p className="hero-item-text">O'rtacha narx:</p>
                      <b className="hero-item-title">$946.000</b>
                    </nav>
                  </li>
                  <li className="hero-item">
                    <a href="#" className="hero-item-link">
                      Ko'proq Bilish...
                    </a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Hero;
