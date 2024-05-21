import logo from "../images/vector.png";

export default function Header() {
  return (
    <header class="header">
      <img src={logo} alt="logo Around the US" class="header__logo" />
    </header>
  );
}
