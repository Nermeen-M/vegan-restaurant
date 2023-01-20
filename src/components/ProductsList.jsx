import { useState } from "react";
import { Link } from "react-router-dom";

import Product from "../pages/Product";

import { useProducts } from "../state/ProductsContext";
import { useCategories } from "../state/CategoriesContext";

export default function ProductsList() {
  const { products, setSelectedProduct } = useProducts();
  const { selectedCategory } = useCategories();

  const filteredProducts = products.filter(
    (item) => item.categoryId === selectedCategory.id
  );

  //   function clickHandler(item) {
  //     setSelectedProduct(item);
  //   }

  const categoryProducts = filteredProducts.map((item) => (
    <Link
      className="product-card"
      key={item.id}
      to={`/product/${item.id}`}
      onClick={() => {
        setSelectedProduct(item);
      }}
    >
      <img src={require(`../assets/images/products/${item.image}`)} />
      <div className="details">
        <h3>{item.title}</h3>
        <p>{item.brief}</p>
      </div>
    </Link>
  ));
  return <div className="products-list">{categoryProducts}</div>;
}
