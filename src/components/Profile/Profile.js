import "./Profile.css";
import React from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <Header />
      <Content>
        <section className="profile">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="profile__form">
            <div className="profile__input-container">
              <input className="profile__input" placeholder="Имя" />
              <p className="profile__text">Виталий</p>
            </div>
            <div className="profile__input-container">
              <input className="profile__input" placeholder="E-mail" />
              <p className="profile__text">pochta@yandex.ru</p>
            </div>
            <button className="profile__button" type="submit">
              Редактировать
            </button>
          </form>
          <Link to="/" className="profile__link">
            Выйти из аккаунта
          </Link>
        </section>
      </Content>
    </>
  );
}

export default Profile;
