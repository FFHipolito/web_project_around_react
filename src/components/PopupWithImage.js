import closeIconS from "../images/close-icon-s.png";

function PopupWithImage({ card, onClose }) {
  return (
    <>
      <section
        className={`popup popup-zoom-image ${card ? "popup_opened" : ""}`}
      >
        <div className="popup-zoom-image__container">
          <img
            className="popup__image"
            src={card ? card.link : ""}
            alt={card ? card.name : ""}
          />
          <p className="popup__image-name">{card ? card.name : ""}</p>
          <button
            className="popup__close-button popup__close-button_image"
            onClick={onClose}
          >
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
