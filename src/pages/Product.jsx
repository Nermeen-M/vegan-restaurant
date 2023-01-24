import { Link, useParams } from "react-router-dom";
import { useProducts } from "../state/ProductsContext";
import { useCategories } from "../state/CategoriesContext";

// format -1, the const selectedCategory was touching the return, making it hard to read
export default function Product() {
  const params = useParams();
  const { getProductById } = useProducts();
  const { getCategoryById } = useCategories();

  const selectedProduct = getProductById(params.productId);
  const selectedCategory = getCategoryById(selectedProduct.categoryId);

  return (
    <div className="product-details container">
      <img
        src={require(`../assets/images/products/${selectedProduct.image}`)}
      />
      <h2>{selectedProduct.title}</h2>
      <p>{selectedProduct.description}</p>
      <h3>Ingredients</h3>
      <ul>
        {selectedProduct.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* following the home page, if you have done the full nutrition fact, that one should have a different component */}
      <h3>Nutrition Facts</h3>
      <table>
        <tbody>
          {selectedProduct.nutritionFacts.map((item) => (
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
