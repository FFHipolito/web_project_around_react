import { useState, useEffect } from "react";
import { api } from "./Api.js";
import Card from "./Card.js";
import caneta from "../images/caneta.png";
import mais from "../images/mais.png";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getUserData();
    getCardsData();
  }, []);

  function getUserData() {
    api
      .getUserInfo()
      .then((userInfo) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados do usuário:", error);
      });
  }

  function getCardsData() {
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados dos cartões:", error);
      });
  }

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__info">
            <button
              type="button"
              className="profile__avatar-edit"
              onClick={onEditAvatarClick}
            >
              <img
                className="profile__image"
                src={userAvatar}
                alt="Foto do usuário"
              />
            </button>
            <div className="profile__info-container">
              <div className="profile__title-container">
                <h1 className="profile__title">{userName}</h1>
                <button
                  className="profile__title-button"
                  type="button"
                  onClick={onEditProfileClick}
                >
                  <img
                    src={caneta}
                    alt="Botão com uma caneta dentro"
                    className="profile__info-image"
                  />
                </button>
              </div>
              <p className="profile__subtitle">{userDescription}</p>
            </div>
          </div>
          <button
            className="button profile__addbutton"
            type="button"
            onClick={onAddPlaceClick}
          >
            <img
              src={mais}
              alt="Botão com o sinal de mais dentro"
              className="profile__addbutton-img"
            />
          </button>
        </section>

        <div className="elements">
          {cards.map((card) => (
            <Card cardData={card} key={card._id} onCardClick={onCardClick} />
          ))}
        </div>
        <template id="template"></template>

        <section className="popup popup_delete">
          <div className="popup__container">
            <button className="popup__close-button" type="button">
              <img
                className="popup__close-icon-img"
                src="./images/close-icon.png"
                alt="Fechar popup"
              />
            </button>
            <h2 className="popup__title">Tem certeza?</h2>
            <button className="popup__input-submit" type="submit">
              Sim
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
