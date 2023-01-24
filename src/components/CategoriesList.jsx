import { Link, useNavigate } from "react-router-dom";

import { useCategories } from "../state/CategoriesContext";

export default function CategoriesList() {
  const navigate = useNavigate();
  const { categories, setSelectedCategory } = useCategories();

  function onClick(item) {
    setSelectedCategory(item);
    navigate(`/${item.name}`);
  }

  const categoriesList = categories.map((item) => (
    <div key={item.id} className="category-card">
      <div className="image">
        <img src={require(`../assets/images/categories/${item.image}`)} />
      </div>
      <div className="details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        {/* this can create a conflict where users can right click, open in a new tab and break the context api, use a button and use the following solution instead */}
        {/* <Link to={} onClick={} /> */}
        <button className="primary-button" onClick={() => onClick(item)}>
          View menu
        </button>
      </div>
    </div>
  ));

  return (
    <div className="categories-list">
      <div className="container">{categoriesList}</div>
    </div>
  );
}
