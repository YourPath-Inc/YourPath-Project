package com.yourpath2.yourpath2.interfaces;

import com.yourpath2.yourpath2.dto.UsersDTO;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface IUsersServices {
    Page<UsersDTO> findAll();
    UsersDTO findById(int user_id);
    UsersDTO findbyUsername(String nombre);

    void save(UsersDTO user);

    void saveAll(List<UsersDTO> users);

}
