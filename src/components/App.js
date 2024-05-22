import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  const handleEditAvatarClick = () => {
    const FormElementAvatar = document.querySelector(".popup_edit");
    FormElementAvatar.classList.add("popup_opened");
  };

  const handleEditProfileClick = () => {
    const FormElementProfile = document.querySelector(".popup");
    FormElementProfile.classList.add("popup_opened");
  };

  const handleAddPlaceClick = () => {
    const FormElementAddPlace = document.querySelector(".popup_card");
    FormElementAddPlace.classList.add("popup_opened");
  };
  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
      />
      <Footer />
    </div>
  );
}

export default App;
