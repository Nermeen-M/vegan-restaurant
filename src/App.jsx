import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";

import "./assets/styles/style.css";

// note: thanks for the spacing between imports. your code look really clean

// perfect
export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/:categoryName" element={<Category />} />
          <Route path="/:categoryName/:productId" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
