import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
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

        <PopupWithForm title="Editar Perfil" name="popup" button="Salvar">
          <input
            className="popup__input-text"
            id="name-input"
            type="text"
            name="name"
            placeholder="Nome"
            minLength={2}
            maxLength={40}
            required=""
          />
          <span className="popup__error"></span>
          <input
            className="popup__input-text"
            id="about-input"
            type="text"
            name="about"
            placeholder="Sobre mim"
            minLength={2}
            maxLength={200}
            required=""
          />
          <span className="popup__error"></span>
        </PopupWithForm>

        <PopupWithForm title="Novo Local" name="popup_card" button="Criar">
          <input
            className="popup__input-text popup__input-text_title"
            id="title-input"
            type="text"
            name="title"
            placeholder="Título"
            minLength={2}
            maxLength={30}
            required=""
          />
          <span className="popup__error"></span>
          <input
            className="popup__input-text popup__input-text_url"
            id="url-input"
            type="url"
            name="url"
            placeholder="Link da imagem"
            required=""
          />
          <span className="popup__error"></span>
        </PopupWithForm>

        <PopupWithForm
          title="Alterar a foto do perfil"
          name="popup_edit"
          button="Salvar"
        >
          <input
            className="popup__input-text popup__form-input-link"
            id="avatar"
            placeholder="Link da Imagem"
            type="url"
            name="image"
            required=""
          />
        </PopupWithForm>

        <PopupWithImage />

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
