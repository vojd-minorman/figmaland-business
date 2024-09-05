import logo from "../../assets/img/logo.png"

function NavBar() {
    return (
        <nav className="flex flex-row bg-yellow justify-between py-7 px-5">
        <div><img src={logo} alt="" className="navbar-logo" /></div>
        <div className="text-white">
          <ul>
            <li>
              home
            </li>
            <li>
              home
            </li>
            <li>
              home
            </li>
            <li>
              home
            </li>
          </ul></div>
      </nav>

      
    )
}
export default NavBar
