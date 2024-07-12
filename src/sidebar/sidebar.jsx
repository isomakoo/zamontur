import "./sidebar.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
function Sidebar() {
    const { t } = useTranslation();
  return (
    <>
      <div className="sidebar">
        <div className="container">
        <h1 className="sidebar-title">{t('sidebarTitle')}</h1>
      <p className="sidebar-text">{t('sidebarText')}</p>
           <div className="sidebar-swiper-container">
        
           </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
