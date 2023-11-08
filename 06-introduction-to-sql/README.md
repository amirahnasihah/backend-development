- [An Introduction to SQL - Section 4 (Notes)](#an-introduction-to-sql---section-4-notes)
  - [Basics of a Database](#basics-of-a-database)
  - [Why do we need to use Databases?](#why-do-we-need-to-use-databases)
  - [The ACID Test in Relational Databases](#the-acid-test-in-relational-databases)
  - [DB Terminologies](#db-terminologies)
  - [What is SQL](#what-is-sql)
  - [SQL Types](#sql-types)
  - [Creating a Database and Table](#creating-a-database-and-table)
  - [SQL Constraints](#sql-constraints)
  - [Inserting and Reading Data from a Table](#inserting-and-reading-data-from-a-table)
  - [Updating and Deleting Data](#updating-and-deleting-data)

# An Introduction to SQL - Section 4 (Notes)

## Basics of a Database

- A database can be defined as a set of related pieces of information stored somewhere, a database can be physical or virtual.
- A relational database is a type of database in which entities can be linked using some relationships with their keys.
- Database need to be written to and read from disk as we can’t save objects to disk so data goes through a process called serialization and deserialization, **serialization is when an object is converted to a buffer that can be written to disk**, **deserialization is the process of taking the buffer and converting it into an object**.

> serialization: object → buffer
> deserialization: buffer → object

## Why do we need to use Databases?

- Why not just use variables you might ask? Why do we really even need these databases? The overarching problem with variables is that they are stored in volatile memory, and the data is gone the moment the process is killed, thus wherever we need persistent data we need to store it in databases.
- Stored data in an application is also known as “state”, most backend API designs are stateful meaning that the application relies on a persistent store of data in form of some database.
- Databases offer a solution to this and provide a reliable and scalable solution to storage of data.

## The ACID Test in Relational Databases

```markdown
**A:** Atomicity
**C:** Consistency
**I:** Isolation
**D:** Durability
```

- A transaction is a singular action that takes place in a database and in order to make sure that the data stays consistent all relational databases have “ACID” properties.
- **Atomicity**: A whole transaction takes place, or it doesn’t occur at all.
- **Consistency**: Data stored in a database is supposed to maintain integrity, pre and post the transaction.
- **Isolation**: Multiple transactions can occur independently.
- **Durability**: Modifications caused by a successful operation sustain even after system breakdown
- Most of the ACID mechanism is something that we do not need to worry about as programmers apart

## DB Terminologies

- A table is a collection of similar type of data, for example we can have a table of orders a table of users, a table of students etc.
- A column defines a field in the table, for example a column for all the id(s), e-mails, order_id(s) and so on.
- A row defines an entry in the table, so a row in a table of users will contain all the data about a specific user.

→ Row ——————————————————————>

| id   | name   | email            |
| ---- | ------ | ---------------- |
| 1003 | Arthur | arthur@gmail.com |
| 1004 | Mike   | mike@yahoo.com   |
| 1005 | Janice | janice@gmail.com |
| 1006 | Bob    | bob@gmail.com    |

↓ Column

## What is SQL

- SQL (Structured Query Language) is a query language to interact with relational databases SQL is actually composed of 3 languages
  - **Data Definition Language**: used to define new databases and schemas for tables.
  - **Data Manipulation Language**: used to update existing entities and add data to tables.
  - **Data Control Language**: used to control levels of access users have on a specific database.

## SQL Types

| Type        | Use                                                                                    |
| ----------- | -------------------------------------------------------------------------------------- |
| char(n)     | Fixed size string of n characters, max size 255 characters                             |
| varchar(n)  | Variable length string with a maximum of n characters, max size of 64KB                |
| text(n)     | String with a maximum size of 65KB                                                     |
| tinyint(n)  | Signed number between -128 and 127, or unsigned between 0 and 255                      |
| smallint(n) | Signed number between -32768 and 32767, or unsigned between 0 and 65535                |
| int(n)      | Signed number between -2147483648 and 2147483647, or unsigned between 0 and 4294967295 |
| float(p)    | A floating point number of precision "p"                                               |
| boolean     | A value which is either true or false                                                  |
| date        | Date formatted in "YYYY-MM-DD"                                                         |
| datetime    | Date and time formatted in "YYYY-MM-DD hh:mm:ss"                                       |

## Creating a Database and Table

- To create a database we can use “create” and specify the type of entity we want to create and give the database a name

```sql
CREATE DATABASE <name>;
```

- To use the database we need to use the “use” query

```sql
USE <name>;
```

- Now that we have a database chosen to create a table in we can create a table using the “create table query"

```sql
CREATE TABLE <table_name> (
 <column_name> <data_type> <…constraints>,
 <column_name> <data_type> <…constraints>,
 <column_name> <data_type> <…constraints>,
);
```

## SQL Constraints

- **NOT NULL**: makes sure that the field is not nullable
- **UNIQUE**: makes sure that no two rows have the same value for the column it’s applied to
- **PRIMARY KEY**: Used to mark a column as the way to uniquely identify a row
- **FOREIGN KEY**: Used to link two tables together and link the data
- **CHECK**: used to validate if the data validates a condition
- **DEFAULT**: used to set the default value of a row

## Inserting and Reading Data from a Table

- Data can be inserted into a table using the “INSERT INTO” query by either specifying the order in which to insert values by column or just following the same order as the schema definition

```sql
/* order as defined in schema */
INSERT INTO <table_name>
values(<value1>, <value2>);

/* custom order */
INSERT INTO <table_name> (<column2_name>, <column1_name>)
values(<value2>, <value1>);
```

- Data can be retrieved from a table using the “SELECT” query

```sql
SELECT <column1_name>,<column2_name> FROM <table_name>;
```

or retrieve all the fields using

```sql
SELECT * FROM <table_name>;
```

## Updating and Deleting Data

- To update data stored we can use the “UPDATE” query, the update query will modify the values stored in the database in all the cases where the “WHERE” clause matches the condition

```sql
UPDATE <table_name>
SET <column1_name> = <value1>, <column2_name> = <value2>
WHERE <condition>;
```

- To delete data, we can use the delete query, it needs just a condition and it will delete all the entries which match the criteria specified

```sql
DELETE FROM <table_name>
WHERE <condition>;
```
