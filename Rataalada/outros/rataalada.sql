create database gcpd;
use gcpd;
create table usuario(
	idUser int primary key auto_increment,
    login varchar(45) not null,
    senha varchar(45) not null
);
create table denuncia(
	idDen int primary key auto_increment,
    nome varchar(45) not null,
    telefone char(14) not null,
    localDenuncia varchar(45) not null,
	distrito int,
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