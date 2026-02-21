import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import Map from "./pages/Map";

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="content">
        <Routes>
          <Route path="/map" element={<Map/>} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;