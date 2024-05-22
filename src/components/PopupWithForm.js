import closeIcon from "../images/close-icon.png";

function PopupWithForm({ title, name, button, children }) {
  return (
    <>
      <section className={`popup ${name}`}>
        <div className="popup__container" id="cards-form">
          <button type="button" className="popup__close-button">
            <img
              className="popup__close-button"
              src={closeIcon}
              alt="Ìcone para fechar o popup"
            />
          </button>
          <h2 className="popup__title">{title}</h2>
          <form className="popup__form popup__form_add" noValidate="">
            {children}
            <button type="submit" className="popup__input-submit">
              {button}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default PopupWithForm;
