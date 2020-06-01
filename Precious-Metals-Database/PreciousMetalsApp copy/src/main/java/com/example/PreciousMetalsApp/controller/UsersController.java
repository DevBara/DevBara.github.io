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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.PreciousMetalsApp.exception.ResourceNotFoundException;
import com.example.PreciousMetalsApp.model.Users;
import com.example.PreciousMetalsApp.repository.UsersRepository;

@RestController
@RequestMapping("/metals_api/v1")


public class UsersController {

	@Autowired
	private UsersRepository usersRepository;
	
	@GetMapping("/metalusers")
	public List<Users> getAllUsers(Model model){
		return (List<Users>) this.usersRepository.findAll();
	}
	
	@GetMapping("/metalusers/{id}")
		public ResponseEntity<Users> getCurrencyById(@PathVariable(value ="id") Long usersId)
			throws ResourceNotFoundException {
			Users user = usersRepository.findById(usersId)
					.orElseThrow(() -> new ResourceNotFoundException("This User does not exist ::" + usersId));
				return ResponseEntity.ok().body(user);	
	}
	
	@PostMapping("/metalusers")
	public Users createUsers(@Valid @RequestBody Users users) {
		return usersRepository.save(users);
	}
	

	
	

	
	@DeleteMapping("/metalusers/{id}")
	public Map<String, Boolean> deletedUsers(@PathVariable(value="id")Long usersId)
					throws ResourceNotFoundException {
					Users users = usersRepository.findById(usersId)
							.orElseThrow(() -> new ResourceNotFoundException("User not found ::" + usersId));
							
					usersRepository.delete(users);
					Map<String, Boolean> response =new HashMap<>();
					
					response.put("deleted currency", Boolean.TRUE);
					
					return response;
	}

}