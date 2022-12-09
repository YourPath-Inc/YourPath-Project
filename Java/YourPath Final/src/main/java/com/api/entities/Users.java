package com.api.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
@Entity
@Table(name="usuario")
public class Users implements Serializable {
    @Id
    @Column(name="email_id")
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
    @Temporal(TemporalType.DATE)
    private Date fecha_nacimiento;
    @Column(name="descripcion")
    private String descripcion;
    @Column(name="link")
    private String link;
    @Column(name ="github")
    private String github;
    
}
