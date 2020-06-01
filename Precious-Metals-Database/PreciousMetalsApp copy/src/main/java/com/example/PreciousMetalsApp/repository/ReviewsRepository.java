package com.example.PreciousMetalsApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.PreciousMetalsApp.model.Reviews;

public interface ReviewsRepository extends JpaRepository<Reviews,Long> {

}
