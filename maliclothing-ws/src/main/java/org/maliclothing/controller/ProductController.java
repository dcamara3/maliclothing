package org.maliclothing.controller;

import java.util.List;

import org.maliclothing.model.Product;
import org.maliclothing.service.ProductService;
import org.maliclothing.util.CustomErrorType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:4200"/* , "http://mande-dev.com" */}, maxAge = 3600)
@RestController
@RequestMapping("/product")
public class ProductController {

	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);

	@Autowired
	private ProductService productService;

//    @CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/all/", method = RequestMethod.GET)
	public ResponseEntity<List<Product>> getProducts() {
		List<Product> products = productService.findAllProducts();
		if (products.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getProduct(@PathVariable("id") long id) {
		logger.info("Fetching product with id {}", id);
		Product product = productService.findById(id);
		if (product == null) {
			logger.error("Product with id {} not found.", id);
			return new ResponseEntity<>(new CustomErrorType("Product with id " + id + " not found"),
					HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Product>(product, HttpStatus.OK);
	}
}