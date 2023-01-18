import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <img
          src={logo}
          alt="Logo contains a fork ended with leaf in diamond shape"
        />
      </Link>

      <nav>
        <Link to="/dishes">Dishes</Link>
        <Link to="/desserts">Desserts</Link>
        <Link to="/drinks">Drinks</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
