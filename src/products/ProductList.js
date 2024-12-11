// export default ProductList;
import React, { useState } from "react";
import FilterMenu from "./FileterMenu"; // Assurez-vous que le chemin est correct
import Product from "./Product"; // Composant pour afficher un produit individuel
import products from "../data/products.json"; // Import de votre fichier JSON

function ProductList() {
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const filteredProducts = products.filter((product) => {
    // Filtrer par catégorie
    if (filters.category && product.category !== filters.category) return false;

    // Filtrer par prix minimum
    if (filters.minPrice && product.price < parseFloat(filters.minPrice)) return false;

    // Filtrer par prix maximum
    if (filters.maxPrice && product.price > parseFloat(filters.maxPrice)) return false;

    return true;
  });

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Menu des filtres */}
        <div className="col-md-3">
          <FilterMenu filters={filters} onFilterChange={handleFilterChange} />
        </div>
        {/* Liste des produits */}
        <div className="col-md-9">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  onAddToCart={() => console.log("Produit ajouté au panier")}
                />
              ))
            ) : (
              <p className="text-center">Aucun produit trouvé pour ces critères.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
