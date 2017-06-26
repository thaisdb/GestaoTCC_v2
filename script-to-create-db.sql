SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema zombies
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `tccBD` ;
CREATE SCHEMA IF NOT EXISTS `tccBD` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `tccBD` ;

-- -----------------------------------------------------
-- Table `tccBD`.`defesa``
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tccBD`.`defesa` ;

CREATE TABLE IF NOT EXISTS `tccBD`.`defesa` (
  `semestre`CHAR(6) NOT NULL,
  `mat` CHAR(12) NOT NULL,
  `nomeAluno` VARCHAR(45) NOT NULL,
  `tituloTrabalho` VARCHAR(50) NOT NULL,
  `dataDefesa` DATE NOT NULL,
  `horario` TIME NOT NULL, 
  `local` INT NOT NULL,
  `predio` INT NOT NULL,
  `orientador` INT NOT NULL,
  `coorientador` VARCHAR(45) NULL,
  `banca1` VARCHAR(45) NOT NULL,
  `banca2` VARCHAR(45) NOT NULL,
  CONSTRAINT pk_MH primary key(mat,semestre))
  ENGINE = InnoDB;
-- ------------------------------------------------
--  INDEX `fk_zombie_bittenBy_idx` (`bittenBy` ASC),
--  CONSTRAINT `fk_zombie_bittenBy`
--    FOREIGN KEY (`bittenBy`)
--    REFERENCES `zombies`.`zombie` (`id`)
--    ON DELETE SET NULL
--    ON UPDATE SET NULL)
-- ENGINE = InnoDB;
-- ------------------------------------------------

-- -----------------------------------------------------
-- Table `tccBD`.`professor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tccBD`.`professor` ;

CREATE TABLE IF NOT EXISTS `tccBD`.`professor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `ativo` BOOLEAN NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- -----------------------------------------------------
-- Data for table `zombies`.`person`
-- -----------------------------------------------------
START TRANSACTION;
USE `tccBD`;
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Adelson de Paula Silva', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Andrei Rimsa Álvares', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Anísio Mendes Lacerda', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Anolan Yamilé Milanés Barrientos', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Bruno André Santos', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Cláudio Márcio Gonçalves Frazão', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Cristiano Amaral Maffort', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Cristina Duarte Murta', 0);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Daniela Cristina Cascini Peixoto', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Edson Marchetti da Silva', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Elizabeth Fialho Wanner', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Evandrino Gomes Barros', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Fábio Rocha da Silva', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Fabrício Vivas Andrade', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Flávio Luis Cardeal Pádua', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Flávio Roberto dos Santos Coutinho', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Flávio Vinícius Cruzeiro Martins Frazão', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Gilmar Machado Grossi', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Glívia Angélica Rodrigues Barbosa', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Henrique Elias Borges', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Ismael Santana Silva', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Jeferson Figueiredo Chaves', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'João Fernando Machry Sarubbi', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'José Wilson da Costa', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Kecia Aline Marques Ferreira', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Luciana Maria de Assis Campos', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Mara Cristina da Silveira Coelho', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Marcos Prado Amaral', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Mateus Felipe Tymburibá Ferreira', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Natália Cosse Batista', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Paulo Eduardo Maciel de Almeida', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Poliana Aparecida Corrêa de Oliveira', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Ramon da Cunha Lopes', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Renato José Senra Barbosa', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Rogério Martins Gomes', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Sandro Renato Dias', 1);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Sérgio Ricardo de Souza', 0);
INSERT INTO `tccBD`.`professor` (`id`, `nome`, `ativo`) VALUES (NULL, 'Silvia Calmon de Albuquerque', 1);
COMMIT;
