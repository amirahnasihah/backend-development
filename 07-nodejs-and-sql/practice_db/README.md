Let's practice creating and manipulating database with MySQL.

# Practice with test_db

we try to create same database structure as project_management_db

# project_management_db

Here's what I want to have for a database structure:

> one user can have many projects
> one project can have many hashtags (tools and frameworks)

**Database name: project_management_db**

Yes, your database structure looks well-designed based on your requirements. Here's a summary of your database structure:

1. **User Table:**
```sql
+--------+-----------+------+
| userID | username  | role |
+--------+-----------+------+
| 1      | JohnDoe   | ...  |
+--------+-----------+------+
| 2      | JaneSmith | ...  |
+--------+-----------+------+
| ...    | ...       | ...  |
+--------+-----------+------+
```

2. **Project Table:**
```
+------------+---------+-----------------------------------------------+--------------------------+------------------------+---------------------------+
| projectID  | userID  | title                                         | desc                     | url                    | media                     |
+------------+---------+-----------------------------------------------+--------------------------+------------------------+---------------------------+
| 1          | 1       | Food Order App (Cloudinary)                   | this is order app        | https://project1.com/order-app | https://project1.com/order-app.png |
+------------+---------+-----------------------------------------------+--------------------------+------------------------+---------------------------+
| 2          | 1       | Another Project                               | this is another project  | https://project2.com/another-app| https://project2.com/another-app.png|
+------------+---------+-----------------------------------------------+--------------------------+------------------------+---------------------------+
| ...        | ...     | ...                                           | ...                      | ...                    | ...                       |
+------------+---------+-----------------------------------------------+--------------------------+------------------------+---------------------------+
```

3. **Hashtag Table:**
```
+-----------+-------------+
| hashtagID | name        |
+-----------+-------------+
| 1         | cloudinary  |
+-----------+-------------+
| 2         | image-upload|
+-----------+-------------+
| 3         | json-server |
+-----------+-------------+
| 4         | material-ui |
+-----------+-------------+
| 5         | reactjs     |
+-----------+-------------+
| ...       | ...         |
+-----------+-------------+
```

4. **ProjectHashtags Table (Linking Table):**
```
+------------+-----------+
| projectID  | hashtagID |
+------------+-----------+
| 1          | 1         |
+------------+-----------+
| 1          | 2         |
+------------+-----------+
| 1          | 3         |
+------------+-----------+
| 1          | 4         |
+------------+-----------+
| 1          | 5         |
+------------+-----------+
| 2          | 2         |
+------------+-----------+
| ...        | ...       |
+------------+-----------+
```

This structure reflects a one-to-many relationship between users and projects and a many-to-many relationship between projects and hashtags.