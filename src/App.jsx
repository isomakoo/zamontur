import React from 'react';
import './App.css';
import Main from './Main/Main';
import Content from './content/content';
import Foother from './foother/foother';
import Hero from './hero/hero';
import Sidebar from './sidebar/sidebar';
import { useTranslation } from 'react-i18next';
import './i18n'; // i18next konfiguratsiyasini import qiling

function App() {
  const { t } = useTranslation(); 
  return (
    <> 
    
      <Hero />
      <Content></Content>
      <Main />
      <Sidebar />
      <Foother />   
    </>
  );
}

export default App;
