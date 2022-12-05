package com.yourpath2.yourpath2.implementation;

import com.yourpath2.yourpath2.dto.UsersDTO;
import com.yourpath2.yourpath2.entities.Users;
import com.yourpath2.yourpath2.interfaces.IUsersServices;
import com.yourpath2.yourpath2.repository.UsersRepository;
import com.yourpath2.yourpath2.utils.Helpers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class UsersImplement implements IUsersServices {

    @Autowired
    private UsersRepository usersRepository;

    @Override
    public List<UsersDTO> findAll() {
        List<UsersDTO> dto = new ArrayList<>();
        //Page<Users> users = this.usersRepository.findAll();
        Iterable<Users> users = this.usersRepository.findAll();
        for(Users user : users){
            UsersDTO usersDTO = Helpers.ModelMapper().map(user, UsersDTO.class);
            dto.add(usersDTO);
        }

        return dto;



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
