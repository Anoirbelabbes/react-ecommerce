package service;

import Model.ProductDTO;

import java.util.List;

public interface ProductServiceImplimentation {

    void addProduct(ProductDTO productDTO);

    List<ProductDTO> getAllProducts();

    List<ProductDTO> getProductsBySeller(Long sellerId);

    List<ProductDTO> getProductsByCategory(Long categoryId);

    void updateProduct(Long id, ProductDTO productDTO);

    void deleteProduct(Long id);
}

