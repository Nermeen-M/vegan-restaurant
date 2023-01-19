import { useCategories } from "../state/CategoriesContext";

export default function CategoryDetails({ categoryId }) {
  const categories = useCategories();
  const category = categories.filter((item) => item.id === categoryId)[0];
  const image = require(`../assets/images/categories/${category.image}`);

  return (
    <div className="category-details">
      <img src={image} />
      <h2>{category.name}</h2>
      <p>{category.description}</p>
    </div>
  );
}
