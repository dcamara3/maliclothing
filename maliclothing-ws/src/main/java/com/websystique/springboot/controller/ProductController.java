package com.websystique.springboot.controller;

import com.websystique.springboot.model.Product;
import com.websystique.springboot.repositories.ProductRepository;
import com.websystique.springboot.util.CustomErrorType;
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

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/product")
public class ProductController {

    private static final Logger logger = LoggerFactory.getLogger(ProductController.class);

    @Autowired
    private
    ProductRepository productRepository;

//    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/all/", method = RequestMethod.GET)
    public ResponseEntity<List<Product>> listAllUsers() {
        List<Product> products = productRepository.findAll();
        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getProduct(@PathVariable("id") long id) {
        logger.info("Fetching User with id {}", id);
        Product user = productRepository.getOne(id);
        if (user == null) {
            logger.error("Product with id {} not found.", id);
            return new ResponseEntity<>(new CustomErrorType("Product with id " + id
                    + " not found"), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Product>(user, HttpStatus.OK);
    }
}