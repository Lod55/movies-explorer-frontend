import './Main.css';
import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

const Main = (props) => {
  const { isLoggedIn } = props;
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />

      <Content>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </Content>

      <Footer />
    </>
  );
};

export default Main;
