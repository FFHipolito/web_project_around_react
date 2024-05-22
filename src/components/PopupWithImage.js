import closeIconS from "../images/close-icon-s.png";

function PopupWithImage() {
  return (
    <>
      <section className="popup popup-zoom-image">
        <div className="popup-zoom-image__container">
          <img className="popup__image" src="#" alt="Zoom da imagem" />
          <p className="popup__image-name"></p>
          <button className="popup__close-button popup__close-button_image">
            <img
              src={closeIconS}
              alt="Fechar janela da imagem"
              className="popup__image-button"
            />
          </button>
        </div>
      </section>
    </>
  );
}

export default PopupWithImage;
