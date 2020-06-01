package com.example.PreciousMetalsApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.PreciousMetalsApp.model.Users;

public interface UsersRepository extends JpaRepository<Users,Long> {

}
