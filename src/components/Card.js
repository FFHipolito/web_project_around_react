function Card({ cardData, onCardClick }) {
  const { link, name } = cardData;

  const handleClick = () => {
    onCardClick(cardData);
  };

  return (
    <>
      <div className="elements__card">
        <button id="button" className="elements__button-trash"></button>
        <img
          className="elements__image"
          src={link}
          alt={name}
          onClick={handleClick}
        />
        <div className="elements__group">
          <h2 className="elements__title">{name}</h2>
          <button
            id="likeButton"
            className="elements__like-button"
            type="submit"
          ></button>
        </div>
        <span className="elements__like-count">""</span>
      </div>
    </>
  );
}

export default Card;
