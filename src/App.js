import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="page">
      <header class="header">
        <img
          src="<%=require('./images/vector.png')%>"
          alt="logo Around the US"
          class="header__logo"
        />
      </header>
      <main class="content">
        <section class="profile">
          <div class="profile__info">
            <button type="button" class="profile__avatar-edit">
              <img class="profile__image" src="#" alt="Foto do usuário" />
            </button>
            <div class="profile__info-container">
              <div class="profile__title-container">
                <h1 class="profile__title"></h1>
                <button class="profile__title-button" type="button">
                  <img
                    src="<%=require('./images/caneta.png')%>"
                    alt="Botão com uma caneta dentro"
                    class="profile__info-image"
                  />
                </button>
              </div>
              <p class="profile__subtitle"></p>
            </div>
          </div>
          <button class="button profile__addbutton" type="button">
            <img
              src="<%=require('./images/mais.png')%>"
              alt="Botão com o sinal de mais dentro"
              class="profile__addbutton-img"
            />
          </button>
        </section>

        <div class="elements"></div>
        <template id="template">
          <div class="elements__card">
            <button id="button" class="elements__button-trash"></button>
            <img class="elements__image" src="#" alt="Imagem do local" />
            <div class="elements__group">
              <h2 class="elements__title"></h2>
              <button
                id="likeButton"
                class="elements__like-button"
                type="submit"
              ></button>
            </div>
            <span class="elements__like-count">""</span>
          </div>
        </template>

        <section class="popup">
          <div class="popup__container">
            <p class="popup__title">Editar perfil</p>
            <form class="popup__form" novalidate>
              <input
                class="popup__input-text"
                id="name-input"
                type="text"
                name="name"
                placeholder="Nome"
                minlength="2"
                maxlength="40"
                required
              />
              <span class="popup__error"></span>
              <input
                class="popup__input-text"
                id="about-input"
                type="text"
                name="about"
                placeholder="Sobre mim"
                minlength="2"
                maxlength="200"
                required
              />
              <span class="popup__error"></span>
              <button
                class="popup__input-submit popup__input-disabled"
                type="submit"
              >
                Salvar
              </button>
            </form>
            <button class="button popup__close-button">
              <img
                src="<%=require('./images/close-icon.png')%>"
                alt="Fechar janela editar perfil"
              />
            </button>
          </div>
        </section>

        <section class="popup popup_card">
          <div class="popup__container">
            <p class="popup__title">Novo local</p>
            <form
              class="popup__form popup__form-card"
              name="formcard"
              novalidate
            >
              <input
                class="popup__input-text popup__input-text_title"
                id="title-input"
                type="text"
                name="title"
                placeholder="Título"
                minlength="2"
                maxlength="30"
                required
              />
              <span class="popup__error"></span>
              <input
                class="popup__input-text popup__input-text_url"
                id="url-input"
                type="url"
                name="url"
                placeholder="Link da imagem"
                required
              />
              <span class="popup__error"></span>
              <button
                class="popup__input-submit popup__input-disabled"
                type="submit"
                disabled
              >
                Criar
              </button>
            </form>
            <button class="popup__close-button popup__close-button_card">
              <img
                src="<%=require('./images/close-icon.png')%>"
                alt="Fechar janela novo local"
                class="popup__card-image"
              />
            </button>
          </div>
        </section>

        <section class="popup popup-zoom-image">
          <div class="popup-zoom-image__container">
            <img class="popup__image" src="#" alt="Zoom da imagem" />
            <p class="popup__image-name"></p>
            <button class="popup__close-button popup__close-button_image">
              <img
                src="<%=require('./images/close-icon-s.png')%>"
                alt="Fechar janela da imagem"
                class="popup__image-button"
              />
            </button>
          </div>
        </section>

        <section class="popup popup_edit">
          <div class="popup__container">
            <button class="popup__close-button" type="button">
              <img
                class="popup__close-icon-img popup__close"
                src="<%=require('./images/close-icon.png')%>"
                alt="Fechar popup"
              />
            </button>
            <form class="popup__form popup__form-avatar" novalidate>
              <h2 class="popup__title">Alterar a foto do perfil</h2>
              <input
                class="popup__input-text popup__form-input-link"
                id="avatar"
                placeholder="Link da Imagem"
                type="url"
                name="image"
                required
              />
              <span class="popup__error"></span>
              <button class="popup__input-submit" type="submit">
                Salvar
              </button>
            </form>
          </div>
        </section>

        <section class="popup popup_delete">
          <div class="popup__container">
            <button class="popup__close-button" type="button">
              <img
                class="popup__close-icon-img"
                src="<%=require('./images/close-icon.png')%>"
                alt="Fechar popup"
              />
            </button>
            <h2 class="popup__title">Tem certeza?</h2>
            <button class="popup__input-submit" type="submit">
              Sim
            </button>
          </div>
        </section>
      </main>

      <footer class="footer">
        <p class="footer__paragraph">© 2024 Around The U.S.</p>
      </footer>
    </div>
  );
}

export default App;
