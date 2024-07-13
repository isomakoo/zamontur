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
            width="1300"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="foother-kart"
          ></iframe>
          <h1 className="foother-title">{t('bookYourSpot')}</h1>
          <ul className="foother-list">
            <li className="foother-item"> 
            <p className="foother-item-text">{t('namePlaceholder')}</p>
            <input type="text" placeholder="Ismingizni kiriting" className="foother-input-ism" /> <br />
            <p className="foother-item-text">{t('peoplePlaceholder')}</p>
             <select className="foother-select">
                <option className="foother-option">1</option>
                <option className="foother-option">2</option>
                <option className="foother-option">3</option>
                <option className="foother-option">4+</option>
             </select>
            </li>
            <li className="foother-item">
            <p className="foother-item-text" required>{t('phonePlaceholder')}</p>
               <input type="number" placeholder="+998 99 999 9990" required className="foother-input-tel"/><br />
               <p className="foother-item-text">{t('datePlaceholder')}</p>
               <input type="datetime-local" className="foother-input-data" />
            </li>
          </ul>
          <p className="foother-item-title">{t('addressTitle')}</p>
          <select className="foother-list-select">
            <option>Antaliya</option>
            <option>Dubai</option>
            <option>Sharme Sheikh</option>
            <option>Istanbul</option>
            <option>AQSH</option>
            <option>Turkiya</option>
            <option>Canada</option>
          </select>
          <p className="foother-item-title">{t('visaTitle')}</p>
          <select className="foother-list-select">
            <option>China</option>
            <option>Countery</option>
            <option>Eoroupe</option>
            <option>Oman</option>
            <option>AQSH</option>
            <option>USA</option>
            <option>India</option>
          </select>
          <button className="foother-btn">{t('bookButton')}</button>
          <div className="foother-content">
            <nav>
            <h3 className="foother-content-title">{t ('travelTitle')}</h3>
      <p className="foother-content-text">{t ('travelText')}</p>
            </nav>
            <nav>
            <a href="#sidebar-list" className="foother-link">{t('contactLink')}</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Foother;
