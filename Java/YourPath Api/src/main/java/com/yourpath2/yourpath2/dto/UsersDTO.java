package com.yourpath2.yourpath2.dto;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.io.Serializable;
import java.util.Date;

@Data
public class UsersDTO implements Serializable {

    private int user_id;
    private String nombre;
    private String apellido;
    private String email;
    private String psswrd;
    private int tel;
    private String ubicacion;
    private Date fecha_nacimiento;
    private String descripcion;
    private String link;
}
