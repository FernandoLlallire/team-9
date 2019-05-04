create database codeForGood;
use codeForGood;

create table Postulado (
    id int not null auto_increment,
    nombre varchar(255),
    apellido varchar(255),
    edad int,
    campo varchar(255),
    motivo_post varchar(500),
    extracto varchar (1000),
    provincia varchar(255),
    foto varchar(500),
    video varchar(500),
    audio varchar(500),
    mail varchar(255),
    mail_tercero varchar(255),
    telefono varchar(255),
    telefono_tercero varchar(255),
    primary key  (id));

create table Aceptado (
    id int not null auto_increment,
    id_postulado int,
    fecha date,
    motivo varchar(255),
    primary key (id),
    foreign key (id_postulado) references Postulado(id)
);

create table Rechazado (
    id int not null auto_increment,
    id_postulado int,
    motivo varchar(255),
    primary key (id),
    foreign key (id_postulado) references Postulado(id));

drop table Aceptado;
drop table Rechazado;
drop table Postulado;

insert into Postulado (nombre,apellido,edad,campo,motivo_post,extracto) values ('code','good',23,'Ciencias Marinas',
                                                                            'Es una genia!','Soy estudiante');

CREATE PROCEDURE addCandidate (
in    nombre varchar(255),
in    apellido varchar(255),
in    edad int,
in    campo varchar(255),
in    provincia varchar(255),
in    motivo_post varchar(500),
in    extracto varchar (1000),
in    foto varchar(500),
in    video varchar(500),
in    audio varchar(500),
in    mail varchar(255),
in    mail_tercero varchar(255),
in    telefono varchar(255),
in    telefono_tercero varchar(255)
)
BEGIN
    insert into Postulado (nombre,apellido,edad,campo,provincia,motivo_post,extracto,foto,video,audio,mail,mail_tercero,telefono,telefono_tercero)
    values (nombre,apellido,edad,campo,provincia,motivo_post,extracto,foto,video,audio,mail,mail_tercero,telefono,telefono_tercero);
END

--call addPostulado('maria','perez','25','matematica','formosa','la agrego pq es muy buena','maria estudio en la uba tiene un posgrado y 2 papers','http:linkfoto','linkvideo','linkaudio','',
    --'mailtercero@gmail.com','','114222');


CREATE PROCEDURE addSelectedCandidate (
    in id int,
    in motivo varchar(255))
BEGIN
    INSERT INTO Aceptado (id_postulado, motivo) VALUES (id,motivo);
END

CREATE PROCEDURE rejectCandidate (
    in id int,
    in motivo varchar(255)
)
BEGIN
    INSERT INTO Rechazado (id_postulado, motivo) VALUES (id,motivo);
END

SELECT * FROM Postulado
