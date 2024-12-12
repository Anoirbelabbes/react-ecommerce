import { Routes, Route } from "react-router-dom";  // Utilisez Routes et Route
import Template from "./components/Template";
import ProductDetail from "./products/detail/ProductDetail";
import Landing from "./landing/Landing";
import ProductList from "./products/ProductList";
import CartPage from "./products/detail/CartPage";
import Profil from "./components/Profil";
import Settings from "./components/Settings";  // Importer la page Settings
import Orders from "./components/Orders";
import AboutUs from "./components/AboutUs";  // Importer la page About Us
import ContactUs from "./components/ContactUs"; // Importer la page Contact Us

function App() {
  return (
    <Template>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/detail/:slug" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/settings" element={<Settings />} /> {/* Ajouter la page Settings */}
        <Route path="/orders" element={<Orders />} /> {/* Ajouter la page Orders */}
        <Route path="/about" element={<AboutUs />} /> {/* Ajouter la page About Us */}
        <Route path="/contact" element={<ContactUs />} /> {/* Ajouter la page Contact Us */}
        <Route path="/" element={<Landing />} />
      </Routes>
    </Template>
  );
}

export default App;
