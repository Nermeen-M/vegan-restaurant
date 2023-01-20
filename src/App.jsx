import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Contact from "./pages/Contact";

import { useCategories } from "./state/CategoriesContext";

import "./assets/styles/style.css";

export default function App() {
  const { categories, setSelectedCategory } = useCategories();

  const categoriesRoutes = categories.map((item) => (
    <Route key={item.id} path={`/${item.name}`} element={<Category />}></Route>
  ));

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          {categoriesRoutes}
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
