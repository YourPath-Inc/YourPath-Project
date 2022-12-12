package com.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.entities.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {}
