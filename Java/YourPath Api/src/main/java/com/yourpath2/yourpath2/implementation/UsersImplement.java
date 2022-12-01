package com.yourpath2.yourpath2.implementation;

import com.yourpath2.yourpath2.dto.UsersDTO;
import com.yourpath2.yourpath2.entities.Users;
import com.yourpath2.yourpath2.interfaces.IUsersServices;
import com.yourpath2.yourpath2.repository.UsersRepository;
import com.yourpath2.yourpath2.utils.Helpers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class UsersImplement implements IUsersServices {

    @Autowired
    private UsersRepository usersRepository;

    @Override
    public Page<UsersDTO> findAll() {
        Page<Users> users = this.usersRepository.findAll();
        return users.map(this::convertoUsersDTO);

    }

    @Override
    public UsersDTO findById(int user_id) {
        Optional<Users> users = this.usersRepository.findById(user_id);

        if (!users.isPresent() ){
            return null;
        }
        return Helpers.ModelMapper().map(users.get(),UsersDTO.class);
    }


    @Override
    public UsersDTO findbyUsername(String nombre) {
        Optional<Users> users = this.usersRepository.findByUsername(nombre);
        if(!users.isPresent()){
            return null;
        }
        return Helpers.ModelMapper().map(users.get(), UsersDTO.class);
    }

    @Override
    public void save(UsersDTO user) {
        Users users = Helpers.ModelMapper().map(user, Users.class);
        this.usersRepository.save(users);
    }

    @Override
    public void saveAll(List<UsersDTO> users) {
        List<Users> u = new ArrayList<>();
        this.usersRepository.saveAll(u);

        for(UsersDTO user : users){
            Users us = Helpers.ModelMapper().map(user, Users.class);
            u.add(us);
        }
        this.usersRepository.saveAll(u);
    }

    private UsersDTO convertoUsersDTO(final Users users){
        return Helpers.ModelMapper().map(users, UsersDTO.class);
    }
}
