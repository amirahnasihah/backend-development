create database test_db;

use test_db;

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY UNIQUE,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE
);

insert into users values (12, "bach", "johann", "bach@johann.com");

insert into users (id, firstName, email) values (13, "mozart", "mozart@amadeus.com");

insert into users (id, firstName, email) values (14, "liszt", "liszt@chopin.com");

insert into users (id, firstName, email) values (15, "beethoven", "beethoven@amadeus.com");

select * from users where email like "%@amadeus.com";

update users set lastName = "amadeus" where id = 13;

update users set lastName = "ludwig", email = "beethoven@ludwig.com" where id = 15;

DELETE from users where id = 14;

select * from users;
