> MySQL tutorial (robust): https://www.mysqltutorial.org/

# Getting Started

> https://www.mysqltutorial.org/mysql-select-database/

1. First, log in to MySQL using the `root` user account and Enter your password:

```sql
mysql -u root -p
```

2. To find which databases are available on server by using the show databases statement:

```sql
SHOW DATABASES;
```

The output may look like the following:

```sql
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.02 sec)
```

3. To select a database to work with, you use the USE statement:

```sql
USE database_name;
```

# Basic SQL Command

> Example of create a db named Comp A

0. Check current database and to verify it

```sql
SELECT database();
```

MySQL server will set the current database to NULL if the current database is not set.

```sql
+---------------+
| database()    |
+---------------+
| classicmodels |
+---------------+
1 row in set (0.00 sec)
```

1. To create a database

CREATE DATABASE <db_name>

Example;
```sql
CREATE DATABASE comp-A
```

2. To use a database

USE <db_name>

Example;
```sql
USE comp-A
```

3. Create a table

CREATE TABLE <table_name> (
 <column_name> <data_type> <…constraints>,
 <column_name> <data_type> <…constraints>,
 <column_name> <data_type> <…constraints>,
);

Example;
```sql
CREATE TABLE users {
column-1 string NOT NULL
}
```

4. Insert data and Read Data from a Table

• To insert / add data
** order as defined in schema */

INSERT INTO <table_name>
values(<value1>, <value2>);

Example;
```sql
INSERT INTO users
values(Mozart, 31, musician)
```

** custom order */

INSERT INTO <table_name> (<column2_name>, <column1_name>) 
values(<value2>, <value1>);

Example;
```sql
INSERT INTO users(Name, Age, Job)
values(Bach, 25, pianist)
```

• To retrieve / get data

SELECT <column1_name>,<column2_name> FROM <table_name>;

or retrieve all the fields using:

SELECT * FROM <table_name>;

Example;
```sql
SELECT (Name, Age) FROM users

SELECT * FROM users
```

5. Updating and Deleting Data

• To Update

UPDATE <table_name>
SET <column1_name> = <value1>, <column2_name> = <value2>
WHERE <condition>;

Example;
```sql
UPDATE users
SET Name = Liszt, Age = 47, Job = violinist
WHERE ...
```

• To delete data 

DELETE FROM <table_name>
WHERE <condition>;

Example;
```sql
DELETE FROM users
WHERE id is 2
```

# My Projects

```sql
name:
description:
cover:
deployUrl:
githubUrl:
hashtag: [...]
```