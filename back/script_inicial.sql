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

insert into Postulado (nombre,apellido,edad,campo,provincia,motivo_post,extracto,foto,video,audio,mail,mail_tercero,telefono,telefono_tercero)
    values (nombre,apellido,edad,campo,provincia,motivo_post,extracto,foto,video,audio,mail,mail_tercero,telefono,telefono_tercero);
    insert into Postulado (nombre,apellido,edad,campo,provincia,motivo_post,extracto,foto,video,audio,mail,mail_tercero,telefono,telefono_tercero)
    values ('Ana','Perez',30,'Software','Cordoba','Excelente profesional!','Ingeniera en Sistemas con mas de 15 años de experiencia en el diseño de soluciones para ONGs.        Tambien se desarrolla en el area de investigaciones del CONICET y es una profesional renombrada a nivel mundial por sus publicaciones en inteligencia artificial.','','','','ana_perez2000@hotmail.com','tempmail@fake.com',88224646,78963214);
    insert into Postulado (nombre,apellido,edad,campo,provincia,motivo_post,extracto,foto,video,audio,mail,mail_tercero,telefono,telefono_tercero)
    values ('Gabriela','Ferrero',21,'Robotica','Rio Negro','Buena Gente','Lorem ipsum','','','','ferrero.gabi1997@yahoo.com.ar','tempmail@fake.com','78963214','46468822');
    insert into Postulado (nombre,apellido,edad,campo,provincia,motivo_post,extracto,foto,video,audio,mail,mail_tercero,telefono,telefono_tercero)
    values ('Patricia','Garcia',46,'Telecomunicaciones','CABA','Admirable','Gracias a su conocimiento se logro el desarrollo de un satelite que permite monitorear el rendimiento de los campos argentinos','','','','patrigarcia00@hotmail.com','tempmail@fake.com','91344934','64942914');
    insert into Postulado (nombre,apellido,edad,campo,provincia,motivo_post,extracto,foto,video,audio,mail,mail_tercero,telefono,telefono_tercero)
    values ('Marta','Conde',33,'Nanotecnología','CABA','Entusiasmo','Lorem ipsum','','','','marconde@aol.com','tempmail@fake.com','94344925','49338465');
    insert into Postulado (nombre,apellido,edad,campo,provincia,motivo_post,extracto,foto,video,audio,mail,mail_tercero,telefono,telefono_tercero)
    values ('Florencia','Gonzalez',18,'Electronica','Neuquen','Potencial','Lorem ipsum','','','','flor_gonza01@gmail.com','tempmail@fake.com','45648616','34594867');
    insert into Postulado (nombre,apellido,edad,campo,provincia,motivo_post,extracto,foto,video,audio,mail,mail_tercero,telefono,telefono_tercero)
    values ('Silvia','Lopez',28,'Software','Corrientes','Ganas','Lorem ipsum','','','','lopez.sil2017@outlook.com','tempmail@fake.com','49683795','49347591');
    insert into Postulado (nombre,apellido,edad,campo,provincia,motivo_post,extracto,foto,video,audio,mail,mail_tercero,telefono,telefono_tercero)
    values ('Noemi','Torres',30,'Software','Santa Fe','Talento','Lorem ipsum','','','','noetorres_2000@hotmail.com','tempmail@fake.com','49791293','61676347');
    insert into Postulado (nombre,apellido,edad,campo,provincia,motivo_post,extracto,foto,video,audio,mail,mail_tercero,telefono,telefono_tercero)
    values ('Ayelen','Solis',20,'UX design','Entre Rios','Inspiración','Lorem ipsum','','','','ayesol2015@gmail.com','tempmail@fake.com','49234710','49347651');
    insert into Postulado (nombre,apellido,edad,campo,provincia,motivo_post,extracto,foto,video,audio,mail,mail_tercero,telefono,telefono_tercero)
    values ('Amalia','Fiorino',37,'Robotica','Jujuy','Talento','Lorem ipsum','','','','amalia.fiorino27@gmail.com','tempmail@fake.com','44947637','68301647');
    insert into Postulado (nombre,apellido,edad,campo,provincia,motivo_post,extracto,foto,video,audio,mail,mail_tercero,telefono,telefono_tercero)
    values ('Lucia','Moreno',20,'matematica','Tierra del Fuego','Potencial','','','','','lumoreno2000@hotmail.com','tempmail@fake.com','40420613','49167546');
