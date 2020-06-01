package com.example.PreciousMetalsApp.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.PreciousMetalsApp.exception.ResourceNotFoundException;
import com.example.PreciousMetalsApp.model.Products;
import com.example.PreciousMetalsApp.repository.ProductsRepository;

@RestController
@RequestMapping("/metals_api/v1") 

public class ProductsController {

	@Autowired
	private ProductsRepository productsRepository;

	
	  
	
	  @GetMapping("/metals")
	  public List<Products> getAllStores(Model model) {
	  	
	  return this.productsRepository.findAll();
	  
	  }
	  
	  
	  

		@GetMapping("/metals/{id}")
		public ResponseEntity<Products> getStoresById(@PathVariable(value = "id") Long id)
		    throws ResourceNotFoundException {
		    Products products = productsRepository.findById(id)
		      .orElseThrow(() -> new ResourceNotFoundException("Product not found. id :: " + id));
		    return ResponseEntity.ok().body(products);
		}
		
		@PostMapping("/metals")
		public Products createProducts(@Valid @RequestBody Products products) {
			return productsRepository.save(products);
		}
}