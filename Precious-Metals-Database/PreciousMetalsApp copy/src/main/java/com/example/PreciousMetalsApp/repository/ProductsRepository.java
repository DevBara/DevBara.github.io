package com.example.PreciousMetalsApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.PreciousMetalsApp.model.Products;

public interface ProductsRepository extends JpaRepository<Products,Long> {

}
