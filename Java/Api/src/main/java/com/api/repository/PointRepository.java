package com.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.api.entities.Punto;

@Repository
public interface PointRepository extends JpaRepository<Punto, Long> {}
