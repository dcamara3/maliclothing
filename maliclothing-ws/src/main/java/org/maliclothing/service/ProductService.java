package org.maliclothing.service;

import java.util.List;

import org.maliclothing.model.Product;

public interface ProductService {

	Product findById(Long id);
////	Product findByName(String name);
//	void saveProduct(Product product);
//	void updateProduct(Product product);
//	void deleteProductById(Long id);
//	void deleteAllProducts();

	List<Product> findAllProducts();
}