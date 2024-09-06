import logo from "../../assets/img/logo.png"
import menu from "../../assets/img/menu.png"

function NavBar() {
    return (
        <nav className="flex flex-row bg-yellow justify-between py-7 px-5">
        <div><img src={logo} alt="" className="navbar-logo" /></div>
        <div className="text-white">
          <img src={menu} alt="" className="w-10"/></div>
      </nav>

      
    )
}
export default NavBar
