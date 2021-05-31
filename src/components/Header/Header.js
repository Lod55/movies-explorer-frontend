import "./Header.css";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";

const Header = (props) => {
  const { isLoggedIn = true } = props;

  const [isActiveBurger, setIsActiveBurger] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [hiddenHeader, setHiddenHeader] = useState(false);

  const handleButton = () => {
    setIsActiveBurger(!isActiveBurger);

    isActiveBurger ? setHiddenHeader(false) : setHiddenHeader(true);
  };

  const handleScroll = useCallback(() => {
    const currentPosition = window.pageYOffset;
    if (!isActiveBurger) {
      currentPosition > scrollTop && currentPosition > 20
        ? setHiddenHeader(true)
        : setHiddenHeader(false);
      setScrollTop(currentPosition);
    } else {
      if (window.innerWidth >= 770) {
        setIsActiveBurger(false);
      }
    }
  }, [isActiveBurger, scrollTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, scrollTop]);

  return (
    <header className={`header ${hiddenHeader ? "header__hidden" : ""}`}>
      <div className="header__wrapper">
        <Link to="/" className="header__link">
          <img src={logo} alt="Логотип проекта" className="header__logo" />
        </Link>
        {isLoggedIn ? (
          <>
            <Navigation isActiveBurger={isActiveBurger}>
              <Link to={"/profile"} className={"header__personal-account-link"}>
                Аккаунт
              </Link>
            </Navigation>
            <button
              type="button"
              className={`header__burger ${isActiveBurger ? "active" : ""}`}
              onClick={handleButton}
            >
              <span></span>
            </button>
          </>
        ) : (
          <AuthNav />
        )}
      </div>
    </header>
  );
};

export default Header;
