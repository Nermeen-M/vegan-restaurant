import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import { useCategories } from "../../state/CategoriesContext";

export default function Header() {
  const { categories } = useCategories();

  const navLinks = categories.map((item) => (
    <Link key={item.id} to={`/${item.name}`}>
      {item.name}
    </Link>
  ));

  return (
    <header>
      <Link to="/" className="logo">
        <img
          src={logo}
          alt="Logo contains a fork ended with leaf in diamond shape"
        />
      </Link>

      <nav>
        {navLinks}
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
