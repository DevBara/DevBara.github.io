package com.example.PreciousMetalsApp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.PreciousMetalsApp.exception.ResourceNotFoundException;
import com.example.PreciousMetalsApp.model.Reviews;
import com.example.PreciousMetalsApp.repository.ReviewsRepository;

//Create, delete, update reviews

@RestController
@RequestMapping("/metals_api/v1")

public class ReviewController{

	@Autowired
	private ReviewsRepository reviewsRepository;
	
	@GetMapping("/reviews")
	public List<Reviews> getAllReviews(Model model){
		return (List<Reviews>) this.reviewsRepository.findAll();
	}
	
	@GetMapping("/reviews/{id}")
		public ResponseEntity<Reviews> getCurrencyById(@PathVariable(value ="id") Long reviewsId)
			throws ResourceNotFoundException {
			Reviews reviews = reviewsRepository.findById(reviewsId)
					.orElseThrow(() -> new ResourceNotFoundException("This review does not exist ::" + reviewsId));
				return ResponseEntity.ok().body(reviews);	
	}
	
	@PostMapping("/reviews")
	public Reviews createReviews(@Valid @RequestBody Reviews reviews) {
		return reviewsRepository.save(reviews);
	}
	

	
	@PutMapping("/reviews/{id}")
	public ResponseEntity<Reviews> updateReviews(@PathVariable(value ="id")Long reviewsId,
			@Valid @RequestBody Reviews reviewsDetails)
			throws ResourceNotFoundException{
			Reviews reviews = reviewsRepository.findById(reviewsId)
					.orElseThrow(() -> new ResourceNotFoundException("Currency not found ::" + reviewsId));
							
//			reviews.setUserName(reviewsDetails.getUserName());
			reviews.setComments(reviewsDetails.getComments());
			reviews.setRating(reviewsDetails.getRating());
			
			final Reviews updatedReviews = reviewsRepository.save(reviews);
			
			return ResponseEntity.ok(updatedReviews);
	}
	

	
	@DeleteMapping("/reviews/{id}")
	public Map<String, Boolean> deletedCurrency(@PathVariable(value="id")Long reviewsId)
					throws ResourceNotFoundException {
					Reviews reviews = reviewsRepository.findById(reviewsId)
							.orElseThrow(() -> new ResourceNotFoundException("Review not found ::" + reviewsId));
							
					reviewsRepository.delete(reviews);
					Map<String, Boolean> response =new HashMap<>();
					
					response.put("deleted review", Boolean.TRUE);
					
					return response;
	}

}