import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";

import "./assets/styles/style.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/:categoryName" element={<Category />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
