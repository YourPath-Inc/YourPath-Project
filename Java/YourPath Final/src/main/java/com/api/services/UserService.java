package com.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.entities.Users;
import com.api.repository.UsersRepository;

@Service
public class UserService {
    @Autowired
    UsersRepository usersRepository;

    public Iterable<Users> findAll() {
        return usersRepository.findAll();
    }
}
