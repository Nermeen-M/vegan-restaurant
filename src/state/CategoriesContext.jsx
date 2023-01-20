import { createContext, useContext } from "react";

import CategoriesData from "../data/categories.json";

const CategoriesContext = createContext(null);

export function CategoriesProvider(props) {
  const categories = CategoriesData;

  const contextValue = { categories };

  return (
    <CategoriesContext.Provider value={contextValue}>
      {props.children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoriesContext);

  const errorMessage = "To use The Categories Context import it on index.js";

  if (!context) throw new Error(errorMessage);

  return context;
}
