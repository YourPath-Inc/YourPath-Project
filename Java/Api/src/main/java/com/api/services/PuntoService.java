package com.api.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.api.entities.Punto;
import com.api.repository.PointRepository;

@Service
public class PuntoService {
	@Autowired
    PointRepository puntoRepositorio;

    public List<Punto> findAll() {
        return puntoRepositorio.findAll();
    }
    
    public Optional<Punto> findById(Long id) {
    	return puntoRepositorio.findById(id);
    }
}
