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
)auto_increment = 100;
create table ocorrencia(
	fkDen int,
    fkDist int,
    foreign key(fkDen) references denuncia(idDen),
    tipo int,
    primary key(fkDen, fkDist, tipo),
    localOcor varchar(45),
    descOcor varchar(70),
    dataOcor date
);


insert into usuario values(1, 'c#$r4da', '0q3oq&');
select * from denuncia;
select * from ocorrencia;
insert into denuncia values ('100', '5', 'Kate Kane', '(11) 6544 7666', 'Narrows 77', '2022-06-08 22:05:42'),
							('101', '6', 'Duke Thomas', '00000000', 'Grant Park', '2022-06-08 22:53:46'),
							('102', '1', 'Bruce Wayne', '(53) 97873321', 'Avenida Central, 4332', '2022-06-08 22:54:31'),
                            ('103', '7', 'Alfred Pennyworth', '65529782', 'Mountain Drive 1003', '2022-06-08 22:57:44'),
                            ('104', '2', '????', '00000000', 'Avenida Wayne', '2022-06-08 22:58:48'),
                            ('105', '3', 'Anônimo', '0', 'Beco do Crime', '2022-06-08 22:59:11'),
                            ('106', '6', 'Harvey Dent', '(22) 2222-2222', 'Rua dos Centavos 22', '2022-06-08 22:59:44'),
                            ('107', '3', 'Matches', '00000', 'não sei', '2022-06-08 23:02:06'),
                            ('108', '3', 'Silver St. Cloud', '9887-8722', 'Bristol Corner', '2022-06-08 23:08:57'),
                            ('109', '4', 'Lucius Fox', '(22) 87433222', 'Midtown Street', '2022-06-08 23:10:10');
insert into ocorrencia values ('100', '5', '2', 'Narrows 87', 'Vizinho atacado e possivelmente morto por criminosos desconhecidos', '2022-06-08'),
							  ('101', '6', '1', 'Grant Park', 'Homem idoso assaltado', '2022-06-08'),
                              ('102', '1', '1', 'Avenida Centra, 4332', 'Furto de máquinas industrias nas empresas Wayne', '2022-06-08'),
                              ('103', '7', '3', 'Mountain Drive 322', 'Atropelamento perto de casa', '2022-06-08'),
                              ('106', '6', '3', 'Rua dos Centavos 22', 'ciclista atropelado por Range Rover placa BAD3322', '2022-06-08'),
                              ('108', '3', '4', 'Bristol Corner', 'Movimento suspeito na loja de frente de casa', '2022-06-08'),
                              ('109', '4', '1', 'Midtown Street', 'assalto no restaurante', '2022-06-08');