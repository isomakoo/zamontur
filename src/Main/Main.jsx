import "./main.css";
import { useTranslation } from "react-i18next";
function Main() {
    const { t, i18n } = useTranslation();
  
    const handleChange = (e) => {
      const selectedLanguage = e.target.value;
      i18n.changeLanguage(selectedLanguage);
    };
  return (
    <>
      <div id="main">
        <div className="container">
          <h2 className="main-title">
          {t("engyaxshi")}
          </h2>
          <p className="main-text">
           {t("main.title")}
          </p>
          <div className="main-list">
            <img
              src="https://zamontour.uz/assets/images/afr.jpg"
              className="main-img"
            />
            <nav>
              <nav className="main-item">
                <h3 className="main-item-title">
                 {t("main.item.railways")}
                </h3>
                <button className="main-item-btn">{t("main.item.more")}</button>
               </nav>
              <p className="main-item-text">{t("main.item.worldwide")}</p>
              <p className="main-item-text">
                {t("main.item.railways.description")}
              </p>
            </nav>  
          </div>
          <div className="main-list">
            <img src="https://zamontour.uz/assets/images/airplane.jpg" alt=""
            className="main-img" />
          <nav>
              <nav className="main-item">
                <h3 className="main-item-title">
                {t("main.item.airlines")}
                </h3>
                <button className="main-item-btn">{t("main.item.more")}</button>
              </nav>
              <p className="main-item-text">Jahon bo‘ylab Manzillar</p>
              <p className="main-item-text">
             {t("main.item.airlines.description")}
              </p>
            </nav>
          </div>
          <h3 className="main-title">{t("main.item.city.title")}</h3>
          <p className="main-text">{t("main.item.city.text")}</p>
          <div className="main-list">
            <img src="https://zamontour.uz/assets/images/dubai2.jpg" alt="rasm" className="main-img-dubai" />
          <nav>
              <nav className="main-item">
                <h3 className="main-item-title">
               {t("dubai.title")}
                </h3>
                <button className="main-item-btn">Ko'proq Bilish</button>
              </nav>
              <p className="main-item-text">{t("dubai.country")}</p>
              <p className="main-item-text">
             {t("dubai.description")}
              </p>
            </nav>
          </div>
          
          <div className="main-list">
            <img src="https://zamontour.uz/assets/images/country-02.jpg" alt="rasm" className="main-imgas-antaliya" />
          <nav>
              <nav className="main-item">
                <h3 className="main-item-title">
               {t("antalya.title")}
                </h3>
                <button className="main-item-btn">{t("main.item.more")}</button>
              </nav>
              <p className="main-item-text">{t("antalya.country")}</p>
              <p className="main-item-text">
              {t("antalya.description")}
              </p>
            </nav>
          </div>
          <div className="main-list">
            <img src="https://zamontour.uz/assets/images/sharm2.jpg" alt="rasm" className="main-imgas" />
          <nav>
              <nav className="main-item">
                <h3 className="main-item-title">
                {t("sharm.title")}
                </h3>
                <button className="main-item-btn">{t("main.item.more")}</button>
              </nav>
              <p className="main-item-text">{t("sharm.country")}</p>
              <p className="main-item-text">
              {t("sharm.description")}
              </p>
            </nav>
          </div>
          <div className="main-list">
            <img src="https://zamontour.uz/assets/images/istanbul3.jpg" alt="rasm" className="main-imgas" />
          <nav>
              <nav className="main-item">
                <h3 className="main-item-title">
               {t("istanbul.title")}
                </h3>
                <button className="main-item-btn">{t("main.item.more")}</button>
              </nav>
              <p className="main-item-text">{t("istanbul.country")}</p>
              <p className="main-item-text">
              {t("istanbul.description")}
              </p>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
