import { Link } from "react-router-dom";
import { useProducts } from "../state/ProductsContext";
import { useCategories } from "../state/CategoriesContext";

export default function Product() {
  const { selectedProduct } = useProducts();
  const { selectedCategory } = useCategories();
  const { image, title, description, ingredients, nutritionFacts } =
    selectedProduct;
  // const params = useParams();
  return (
    <div className="product-details container">
      <img src={require(`../assets/images/products/${image}`)} />
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Nutrition Facts</h3>
      <table>
        <tbody>
          {nutritionFacts.map((item) => (
            <tr key={item.id}>
              <td>{item.element}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="primary-button" to={`/${selectedCategory.name}`}>
        Back
      </Link>
    </div>
  );
}
