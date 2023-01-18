import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Dishes from "./pages/Dishes";
import Desserts from "./pages/Desserts";
import Drinks from "./pages/Drinks";
import Contact from "./pages/Contact";

import "./assets/styles/style.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}
