import { useState } from "react";
import Product from "./Product";
import FilterMenu from "./FileterMenu";
import products from "../data/products.json";

function ProductList({ onAddToCart }) {
  const [filters, setFilters] = useState({
    category: "",
    genre: "",
    minPrice: "",
    maxPrice: "",
    promotion: false,
  });

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const filteredProducts = products.filter((product) => {
    return (
      (!filters.category || product.category === filters.category) &&
      (!filters.genre || product.genre === filters.genre) &&
      (!filters.minPrice || product.price >= parseFloat(filters.minPrice)) &&
      (!filters.maxPrice || product.price <= parseFloat(filters.maxPrice)) &&
      (!filters.promotion || product.promotion)
    );
  });

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-3">
          <FilterMenu filters={filters} onFilterChange={handleFilterChange} />
        </div>
        <div className="col-lg-9">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
