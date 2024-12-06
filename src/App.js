import Template from "./components/Template";
import ProductDetail from "./products/detail/ProductDetail";
import { Switch, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import ProductList from "./products/ProductList";
import CartPage from "./products/detail/CartPage"; // Importer la page CartPage

function App() {
  return (
    <Template>
      <Switch>
        <Route path="/products" exact>
          <ProductList />
        </Route>
        <Route path="/products/detail/:slug">
          <ProductDetail />
        </Route>
        <Route path="/cart"> {/* Ajoutez la route pour le panier */}
          <CartPage />
        </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
      </Switch>
    </Template>
  );
}

export default App;
