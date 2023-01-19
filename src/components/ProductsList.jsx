import { useProducts } from "../state/ProductsContext";

export default function ProductsList({ categoryId }) {
  const products = useProducts();

  const filteredProducts = products.filter(
    (item) => item.categoryId === categoryId
  );

  const categoryProducts = filteredProducts.map((item) => (
    <div className="product-card" key={item.id}>
      <img src={require(`../assets/images/products/${item.image}`)} />
      <h3>{item.title}</h3>
      <p>{item.brief}</p>
    </div>
  ));
  return <div className="products-list">{categoryProducts}</div>;
}
