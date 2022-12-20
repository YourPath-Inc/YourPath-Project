package com.api.entities;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="punto")
public class Punto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="punto_id")
    private Long id;
    @Column(name="user_id")
    private Long user_id;
    @Column(name="titulo")
    private String titulo;
    @Column(name="init_date")
    private String init_date;
    @Column(name="end_date")
    private String end_date;
    @Column(name="descripcion")
    private String descripcion;
    @Column(name="state")
    private String state;
    @Column(name="location")
    private String location;
}