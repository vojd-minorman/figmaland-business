import HeroText from "./heroText";
import NavBar from "../navigation/navBar";
import "../../App.css"

function Header() {
  return (
    <div className="hero-img bg-origin-border bg-top bg-no-repeat bg-cover">
      <div className="hero-bg__color">
        <NavBar />
        <HeroText />
      </div>
    </div>

  );
}

export default Header;