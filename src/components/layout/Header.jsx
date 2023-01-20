import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import { useCategories } from "../../state/CategoriesContext";

export default function Header() {
  const { categories, setSelectedCategory } = useCategories();

  const navLinks = categories.map((item) => (
    <Link
      key={item.id}
      to={`/${item.name}`}
      onClick={() => {
        setSelectedCategory(item);
      }}
    >
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
        {/* <Link to="/dishes">Dishes</Link>
        <Link to="/desserts">Desserts</Link>
        <Link to="/drinks">Drinks</Link>
         */}
        {navLinks}
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
