package com.api.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.api.entities.Punto;
import com.api.entities.Users;
import com.api.services.PuntoService;
import com.api.services.UserService;

@RestController
@RequestMapping("/api")
public class ApiController {
	@Autowired
	private UserService userService;
	@Autowired
	private PuntoService puntoService;

	@RequestMapping(value = "/allUsers")
	public Iterable<Users> getAllUsers() {
		return userService.findAll();
	}

	@RequestMapping(value = "/user", params = "email")
	public Optional<Users> getUserById(@RequestParam String email) {
		Iterable<Users> users = userService.findAll();
		Users f = null;
		for (Users u : users) {
			if (u.getEmail() == email) { f = u; }
		}
		return userService.findById(f.getId());
	}
	
	@GetMapping(value = "/puntos", params = "user_id")
	public Iterable<Punto> getPuntoByUserId(@RequestParam Long user_id) {
		List<Punto> list = new ArrayList<Punto>();
		Iterable<Punto> puntos = puntoService.findAll();
		for (Punto p : puntos) {
			if (p.getUser_id() == user_id) { list.add(p); }
		}
		return list;
	}
	
	@GetMapping(value = "/addPunto")
	public void addPoint(@RequestBody Punto p) {
		puntoService.addPunto(p);
	}
	
	@PutMapping(value = "/addUser")
	public void addUsers(@RequestBody Users u) { 
		userService.addUser(u);
	}
}