import caneta from "../images/caneta.png";
import mais from "../images/mais.png";

function Main({ onEditProfileClick, onAddPlaceClick, onEditAvatarClick }) {
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
              <img className="profile__image" src="#" alt="Foto do usuário" />
            </button>
            <div className="profile__info-container">
              <div className="profile__title-container">
                <h1 className="profile__title"></h1>
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
              <p className="profile__subtitle"></p>
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

        <div className="elements"></div>
        <template id="template">
          <div className="elements__card">
            <button id="button" className="elements__button-trash"></button>
            <img className="elements__image" src="#" alt="Imagem do local" />
            <div className="elements__group">
              <h2 className="elements__title"></h2>
              <button
                id="likeButton"
                className="elements__like-button"
                type="submit"
              ></button>
            </div>
            <span className="elements__like-count">""</span>
          </div>
        </template>

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
