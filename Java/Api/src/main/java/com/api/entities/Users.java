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
@Table(name="usuario")
public class Users{
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name="user_id")
    private Long id;
    @Column(name="email")
    private String email;
    @Column(name="nombre")
    private String nombre;
    @Column(name="apellido")
    private String apellido;
    @Column(name="psswrd")
    private String psswrd;
    @Column(name="tel")
    private int tel;
    @Column(name="ubicacion")
    private String ubicacion;
    @Column(name="fecha_nacimiento")
    private String fecha_nacimiento;
    @Column(name="descripcion")
    private String descripcion;
    @Column(name="link")
    private String link;
    @Column(name ="github")
    private String github;
}
