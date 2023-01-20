import { useState } from "react";
import { Link } from "react-router-dom";

import Product from "../pages/Product";

import { useProducts } from "../state/ProductsContext";

export default function ProductsList({ categoryId }) {
  const { products, setSelectedProduct } = useProducts();

  const filteredProducts = products.filter(
    (item) => item.categoryId === categoryId
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
      <h3>{item.title}</h3>
      <p>{item.brief}</p>
    </Link>
  ));
  return <div className="products-list">{categoryProducts}</div>;
}
