import { Link, useParams } from "react-router-dom";

import { useProducts } from "../state/ProductsContext";
import { useCategories } from "../state/CategoriesContext";

export default function ProductsList() {
  const params = useParams();
  const { products } = useProducts();
  const { categories } = useCategories();

  const selectedCategory = categories.filter(
    (item) => item.name.toLowerCase() == params.categoryName.toLowerCase()
  )[0];

  const filteredProducts = products.filter(
    (item) => item.categoryId === selectedCategory.id
  );

  const categoryProducts = filteredProducts.map((item) => (
    <Link className="product-card" key={item.id} to={`/product/${item.id}`}>
      <img src={require(`../assets/images/products/${item.image}`)} />
      <div className="details">
        <h3>{item.title}</h3>
        <p>{item.brief}</p>
      </div>
    </Link>
  ));
  return <div className="products-list">{categoryProducts}</div>;
}
