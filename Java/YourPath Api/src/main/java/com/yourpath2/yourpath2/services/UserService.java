package com.yourpath2.yourpath2.services;

import com.yourpath2.yourpath2.entities.Users;
import com.yourpath2.yourpath2.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UsersRepository usersRepository;

    public Page<Users> findAll() {
        return usersRepository.findAll();
    }
}
