# Database documentation

You need first to create postgres db. 2. Install NPM Packages.

```sh
npm i
```

3. Open the **psql shell** on your machine and apply its default configurations  
   create your user with **_superuser privileges_** and create the two databases for development and testing purposes

```sh
CREATE USER tadrosoon_admin WITH PASSWORD 'admin@1234' SUPERUSER;
```

```sh
CREATE DATABASE tadrosoon_dev OWNER tadrosoon_admin ENCODING UTF8;

CREATE DATABASE tadrosoon_test OWNER tadrosoon_admin ENCODING UTF8;
```
