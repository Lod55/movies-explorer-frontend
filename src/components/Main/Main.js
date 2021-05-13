import './Main.css';
import React from 'react';
import Header from '../Header/Header';
import Content from "../Content/Content";
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer';
import AboutProject from "../AboutProject/AboutProject";

const Main = () => {
  return (
    <>
      <Header/>

      <Content>
        <Promo/>
        <AboutProject/>
      </Content>

      <Footer/>
    </>
  );
};

export default Main;
