package com.yourpath2.yourpath2.repository;


import com.yourpath2.yourpath2.entities.Users;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface UsersRepository extends CrudRepository<Users, Integer> {

    @Transactional
    Optional<Users> findById(Integer user_id);

    @Override
    Page<Users> findAll();

    Optional findByUsername(String nombre);
}
