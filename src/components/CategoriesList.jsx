import { Link } from "react-router-dom";

import { useCategories } from "../state/CategoriesContext";

export default function CategoriesList() {
  const { categories, setSelectedCategory } = useCategories();

  const categoriesList = categories.map((item) => (
    <div key={item.id} className="category-card">
      <div className="image">
        <img src={require(`../assets/images/categories/${item.image}`)} />
      </div>
      <div className="details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <Link
          to={`/${item.name}`}
          className="primary-button"
          onClick={() => {
            setSelectedCategory(item);
          }}
        >
          View menu
        </Link>
      </div>
    </div>
  ));
  return (
    <div className="categories-list">
      <div className="container">{categoriesList}</div>
    </div>
  );
}
