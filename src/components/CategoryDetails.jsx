import { useParams } from "react-router-dom";
import { useCategories } from "../state/CategoriesContext";

// good
export default function CategoryDetails() {
  const params = useParams();
  const { getCategoryByName } = useCategories();
  const selectedCategory = getCategoryByName(params.categoryName);
  const image = require(`../assets/images/categories/${selectedCategory.image}`);
  const { name, description } = selectedCategory;

  return (
    <div className="category-details">
      <img src={image} />
      <div className="container">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
