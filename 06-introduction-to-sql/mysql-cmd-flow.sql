-- create a new database

CREATE DATABASE your_database_name;

-- find which databases are available on server

SHOW DATABASES;

-- select a database to work with

USE your_database_name;

-- Check current database and verify it

SELECT database();

-- Show all tables in the database

SHOW TABLES;

-- Describe the structure of a specific table

DESCRIBE your_table_name;

-- Retrieve all the fields from a table

SELECT * FROM your_table_name;

-- create a table

CREATE TABLE your_table_name { column_1 string NOT NULL, };

-- other sql CRUD queries...

-- To delete a table with IF EXISTS to avoid errors

DROP TABLE IF EXISTS your_table_name;

-- To delete a database with IF EXISTS to avoid errors

DROP DATABASE IF EXISTS your_database_name;