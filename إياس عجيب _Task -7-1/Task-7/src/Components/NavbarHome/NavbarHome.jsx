import { FaShoppingCart } from "react-icons/fa";
import './NavbarHome.css'
import { CiSearch } from "react-icons/ci";

export default function NavbarHome() {
  return (
    <nav className="Ia-Navbar">
      <div className="NavSide-left">
        <a href="#Home"><img src="/public/img/logo.svg"/></a>
              </div>

      <div className="NavSide-center">
        <ul className="Menu">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="NavSide-right">
        <CiSearch />
        <FaShoppingCart className="cart-icon" />
        <button>GET A QUOTE</button>
      </div>
    </nav>
  );
}
