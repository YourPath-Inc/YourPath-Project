package com.api.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.entities.Users;
import com.api.repository.UsersRepository;

@Service
public class UserService {
    @Autowired
    UsersRepository usersRepository;

    public Iterable<Users> findAll() { return usersRepository.findAll(); }
    
    public Optional<Users> findById(Long id) { return usersRepository.findById(id); }
    
    public void addUser(Users u) { usersRepository.save(u); }
}
