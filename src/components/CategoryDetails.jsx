import { useParams } from "react-router-dom";
import { useCategories } from "../state/CategoriesContext";

export default function CategoryDetails() {
  const params = useParams();
  const { getCategoryByName } = useCategories();

  // const selectedCategory = categories.filter(
  //   (item) => item.name.toLowerCase() == params.categoryName.toLowerCase()
  // )[0];

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
