use codeForGood;

create table Postulado (
    id int not null auto_increment,
    nombre varchar(255),
    apellido varchar(255),
    edad int,
    campo varchar(255),
    motivo_post varchar(500),
    extracto varchar (1000),
    foto varchar(500),
    video varchar(500),
    audio varchar(500),
    mail varchar(255),
    mail_tercero varchar(255),
    telefono varchar(255),
    telefono_tercero varchar(255),
    primary key  (id))
;

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

insert into Postulado (nombre,apellido,edad,campo,motivo_post,extracto) values ('code','good',23,'Ciencias Marinas',
                                                                                'Es una genia!','Soy estudiante');

