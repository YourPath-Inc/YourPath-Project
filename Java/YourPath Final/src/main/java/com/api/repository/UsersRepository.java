package com.api.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.api.entities.Users;

@Repository
public interface UsersRepository extends CrudRepository<Users, Integer> {}
