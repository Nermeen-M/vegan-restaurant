import { createContext, useContext } from "react";

import ProductsData from "../data/products.json";

const ProductsContext = createContext(null);

export function ProductsProvider(props) {
  const products = ProductsData;

  function getProductsByCategoryId(categoryId) {
    const productList = products.filter(
      (item) => item.categoryId == categoryId
    );
    return productList;
  }

  function getProductById(productId) {
    const product = products.filter((item) => item.id == productId)[0];
    return product;
  }

  const contextValue = { products, getProductById, getProductsByCategoryId };

  return (
    <ProductsContext.Provider value={contextValue}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  const errorMessage = "To use The Products Context import it on index.js";

  if (!context) throw new Error(errorMessage);

  return context;
}
