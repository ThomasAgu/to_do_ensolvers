

	DROP DATABASE IF EXIST mydb;
	CREATE DATABASE IF NOT EXIST mydb;
	USE mydb;
	CREATE TABLE api_group(id PRIMARY KEY, name VARCHAR(20));
	CREATE TABLE api_todo (id PRIMARY KEY, info VARCHAR(25) finished TINYINT(1) group INT);


