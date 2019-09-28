package org.maliclothing.service;

import java.util.List;

import org.maliclothing.model.Product;
import org.maliclothing.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("productService")
@Transactional
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository productRepository;

	public Product findById(Long id) {
		return productRepository.getOne(id);
	}

	public List<Product> findAllProducts() {
		return productRepository.findAll();
	}
}