/** PostgreSQL:
*/

-- Add auto Increment id Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Crate Users' Table

CREATE TABLE users (
  -- id SERIAL PRIMARY KEY,
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(100) NOT NULL UNIQUE,
  user_name VARCHAR(100) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);


/** MySQL:
*/

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


-- Or
-- Add auto increment id feature
ALTER TABLE users ADD id INT PRIMARY KEY AUTO_INCREMENT;

-- Create UUID function
DROP FUNCTION IF EXISTS uuid;
CREATE FUNCTION uuid() RETURNS CHAR(36) CHARSET utf8mb4
BEGIN
  SET @uuid = REPLACE(UUID(), '-', '');
  RETURN LOWER(@uuid);
END;

-- Create Users table
CREATE TABLE users (
  id CHAR(36) NOT NULL DEFAULT uuid(),
  email VARCHAR(100) NOT NULL UNIQUE,
  user_name VARCHAR(100) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);
