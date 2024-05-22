import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import { useState } from "react";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
      />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        title="Editar Perfil"
        name="popup"
        button="Salvar"
        onClose={closeAllPopups}
      >
        <>
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
        </>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        title="Novo Local"
        name="popup_card"
        button="Criar"
        onClose={closeAllPopups}
      >
        <>
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
        </>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        title="Alterar a foto do perfil"
        name="popup_edit"
        button="Salvar"
        onClose={closeAllPopups}
      >
        <>
          <input
            className="popup__input-text popup__form-input-link"
            id="avatar"
            placeholder="Link da Imagem"
            type="url"
            name="image"
            required=""
          />
        </>
      </PopupWithForm>

      <PopupWithImage />
      <Footer />
    </div>
  );
}

export default App;
