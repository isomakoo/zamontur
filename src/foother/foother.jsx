import "./foother.css";
import { useTranslation } from "react-i18next";

function Foother() {
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      <div className="foother">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.5297976121215!2d69.2866138!3d41.3408369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b8a0bfe27d9%3A0x29bcda9dd27c336a!2sTATU!5e0!3m2!1sru!2s!4v1720851377450!5m2!1sru!2s"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="foother-kart"
          ></iframe>
          <h1 className="foother-title">{t("bookYourSpot")}</h1>
          <ul className="foother-list">
            <li className="foother-item">
              <label htmlFor="nameInput" className="foother-item-text">
                {t("namePlaceholder")}
              </label>
             <input type="text" className="foother-select"  placeholder="Ex.John Smithee"/>
              <br />
              <label htmlFor="addressSelect" className="foother-item-title">
            {t("addressTitle")}
          </label>
              <br />
              <select id="peopleSelect" className="foother-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </li>
            <li className="foother-item">
              <label htmlFor="phoneInput" className="foother-item-text">
                {t("phonePlaceholder")}
               
              </label>{" "}
             <input type="number" className="foother-select" placeholder="+998 99 123 45 67" />
              <br />
              <label htmlFor="dateInput" className="foother-item-text">
                {t("datePlaceholder")}
              </label>
              <br />
              <input type="datetime-local" className="foother-select" />  
            </li>
          </ul>

          <label htmlFor="addressSelect" className="foother-item-title">
            {t("addressTitle")}
          </label>
          <select id="addressSelect" className="foother-list-select">
            <option>{t("antalya")}</option>
            <option>{t("dubai")}</option>
            <option>{t("sharmElSheikh")}</option>
            <option>{t("istanbul")}</option>
            <option>{t("usa")}</option>
            <option>{t("turkey")}</option>
            <option>{t("canada")}</option>
          </select>
          <label htmlFor="visaSelect" className="foother-item-title">
            {t("visaTitle")}
          </label>
          <select id="visaSelect" className="foother-list-select">
            <option>{t("china")}</option>
            <option>{t("country")}</option>
            <option>{t("europe")}</option>
            <option>{t("oman")}</option>
            <option>{t("usa")}</option>
            <option>{t("india")}</option>
          </select>
          <button className="foother-btn">{t("bookButton")}</button>
        </div>
      </div>
      <div className="foother-content">
        <div className="container">
          <nav className="foother-content-list">
            <nav>
              <h3 className="foother-content-title">{t("travelTitle")}</h3>
              <p className="foother-content-text">{t("travelText")}</p>
            </nav>
            <nav>
              <a href="#sidebar-list" className="foother-link">
                {t("contactLink")}
              </a>
            </nav>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Foother;
