import "./sidebar.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Sidebar() {
    
  return (
    <>
      <div className="sidebar">
        <div className="container">
          <h1 className="sidebar-title">Eng Yaxshi Manzillar</h1>
          <p className="sidebar-text">
            Har bir shahardagi eng yaxshi takliflarimizni kashf eting, faqat siz
            uchun. O'zingiz uchun yangi dunyosni oching va misli ko'rilmagan
            sarguzashtlar ega bo'ling.
          </p>
           <div className="sidebar-swiper-container">
        
           </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
