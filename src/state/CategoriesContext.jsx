import { createContext, useContext } from "react";

import CategoriesData from "../data/categories.json";

const CategoriesContext = createContext(null);

export function CategoriesProvider(props) {
  const categories = CategoriesData;

  function getCategoryByName(categoryName) {
    const category = categories.filter(
      (item) => item.name.toLowerCase() == categoryName.toLowerCase()
    )[0];
    return category;
  }

  function getCategoryById(categoryId) {
    const category = categories.filter((item) => item.id == categoryId)[0];
    return category;
  }

  const contextValue = { categories, getCategoryByName, getCategoryById };

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
