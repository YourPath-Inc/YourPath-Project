drop database if exists yourpath;

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `yourpath` DEFAULT CHARACTER SET utf8 ;
USE `yourpath` ;

CREATE TABLE IF NOT EXISTS `yourpath`.`usuario` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `email` VARCHAR(25) NOT NULL,
  `psswrd` VARCHAR(100) NOT NULL,
  `ubicacion` VARCHAR(45) NULL,
  `descripcion` VARCHAR(700) NULL,
  `link` VARCHAR(45) NULL,
  `github` VARCHAR(45) NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `yourpath`.`punto` (
  `punto_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `init_date` DATE NOT NULL,
  `end_date` DATE NULL,
  `descripcion` VARCHAR(1000) NOT NULL,
  `state` VARCHAR(15) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`punto_id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `yourpath`.`usuario` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

insert into yourpath.usuario(nombre, apellido, email, psswrd) values {
	("Test1", "Testing", "a@a.com", "1234"),
    ("Test2", "Testing", "a@a.com", "1234"),
    ("Test3", "Testing", "a@a.com", "1234"),
    ("Test4", "Testing", "a@a.com", "1234"),
    ("Test5", "Testing", "a@a.com", "1234"),};