import { Link, useParams } from "react-router-dom";

import { useProducts } from "../state/ProductsContext";
import { useCategories } from "../state/CategoriesContext";

export default function ProductsList() {
  const params = useParams();
  const { getCategoryByName } = useCategories();
  const { getProductsByCategoryId } = useProducts();

  const selectedCategory = getCategoryByName(params.categoryName);

  const filteredProducts = getProductsByCategoryId(selectedCategory.id);

  const categoryProducts = filteredProducts.map((item) => (
    <Link className="product-card" key={item.id} to={`/product/${item.id}`}>
      <img src={require(`../assets/images/products/${item.image}`)} />
      <div className="details">
        <h3>{item.title}</h3>
        <p>{item.brief}</p>
      </div>
    </Link>
  ));
  return (
    <div className="container">
      <div className="products-list">{categoryProducts}</div>
    </div>
  );
}
