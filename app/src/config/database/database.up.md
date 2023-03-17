# Database documentation

## Description

This Project supports to use of PostgreSQL or MySQL Database.
You Can Configure what you favorite according to your personal preferences or the availability on your Server.

### PostgreSQL:

You need first to create postgres db. 2. Install NPM Packages.

```sh
npm i
```

Open the **psql shell** on your machine and apply its default configurations  
 create your user with **_superuser privileges_** and create the two databases for development and testing purposes

```sh
CREATE USER tadrosoon_admin WITH PASSWORD 'admin@1234' SUPERUSER;
```

```sh
CREATE DATABASE tadrosoon_dev OWNER tadrosoon_admin ENCODING UTF8;

CREATE DATABASE tadrosoon_test OWNER tadrosoon_admin ENCODING UTF8;
```

### MySQL:

- Install the MySQL Driver:

```sh
   npm i mysql2
```

- Create MySQL user:

```sql
   CREATE USER 'username'@'host' IDENTIFIED WITH authentication_plugin BY 'password';
```

- Grant Privileges to user & Flush Privileges

```sql
   GRANT ALL PRIVILEGES ON *.* TO 'username'@'host' WITH GRANT OPTION;

   FLUSH PRIVILEGES;
```

- Create Database

```sql
   CREATE DATABASE database_name;
```

- Create your tables

```sql

   CREATE TABLE users (
   id  int AUTO_INCREMENT NOT NULL,
   email VARCHAR(100) NOT NULL UNIQUE,
   user_name VARCHAR(100) NOT NULL,
   first_name VARCHAR(100) NOT NULL,
   last_name VARCHAR(100) NOT NULL,
   role VARCHAR(100) NOT NULL,
   password VARCHAR(100) NOT NULL,
   PRIMARY KEY (id)
   );


```
