package com.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.entities.Users;
import com.api.services.UserService;

@CrossOrigin("*")
@RestController
@RequestMapping("/users")
public class ApiController {

	@Autowired
	private UserService userService;

	@GetMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
	public Iterable<Users> index() {
		return userService.findAll();
	}
}
