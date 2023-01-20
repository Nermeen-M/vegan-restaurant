import { useParams } from "react-router-dom";
import { useCategories } from "../state/CategoriesContext";

export default function CategoryDetails() {
  const params = useParams();
  const { categories } = useCategories();

  const selectedCategory = categories.filter(
    (item) => item.name == params.categoryName
  )[0];

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
