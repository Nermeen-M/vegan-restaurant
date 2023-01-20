import { useCategories } from "../state/CategoriesContext";

export default function CategoryDetails() {
  const { selectedCategory } = useCategories();
  // const category = categories.filter((item) => item.id === categoryId)[0];
  const image = require(`../assets/images/categories/${selectedCategory.image}`);
  const { name, description } = selectedCategory;

  return (
    <div className="category-details">
      <img src={image} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
