import { createContext, useContext, useState } from "react";

import ProductsData from "../data/products.json";

const ProductsContext = createContext(null);

export function ProductsProvider(props) {
  const products = ProductsData;
  const [selectedProduct, setSelectedProduct] = useState(null);

  const contextValue = { products, selectedProduct, setSelectedProduct };
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
