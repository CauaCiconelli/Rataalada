-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
create database gcpd;
use gcpd;
create table usuario(
	idUser int primary key auto_increment,
    login varchar(45) not null,
    senha varchar(45) not null
);
create table denuncia(
	idDen int auto_increment,
	distrito int,
    primary key(idDen, distrito),
    nome varchar(45) not null,
    telefone char(14) not null,
    localDenuncia varchar(45) not null,
    dataHora datetime not null
);
create table ocorrencia(
	fkDen int,
    foreign key(fkDen) references denuncia(idDen),
    tipo int,
    primary key(fkDen, tipo),
    localOcor varchar(45),
    descOcor varchar(70),
    dataOcor date
);

insert into usuario values(1, 'c#$r4da', '0q3oq&');