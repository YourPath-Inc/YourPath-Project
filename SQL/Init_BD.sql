drop database if exists yourpath;
create database yourpath;
use yourpath;

create table usuario(
user_id int NOT NULL auto_increment primary key,
nombre varchar(20) NOT NULL,
apellido varchar(45) NOT NULL,
email varchar(45) NOT NULL,
psswrd varchar(100) NOT NULL,
ubicacion varchar(45) NULL,
descripcion varchar(1000) NULL,
link varchar(45) NULL,
github varchar(45) NULL,
tel int(9) NULL,
fecha_nacimiento varchar(10)
);

create table punto(
punto_id int NOT NULL auto_increment primary key,
user_id int NOT NULL,
titulo varchar(100) NOT NULL,
init_date varchar(20) NOT NULL,
end_date varchar(20) NOT NULL,
descripcion VARCHAR(1000),
state varchar(15) NOT NULL,
location varchar(45) NOT NULL,
foreign key (user_id) REFERENCES usuario (user_id)
);