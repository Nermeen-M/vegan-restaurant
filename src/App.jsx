import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Dishes from "./pages/Dishes";
import Desserts from "./pages/Desserts";
import Drinks from "./pages/Drinks";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Header />
    </div>
  );
}
