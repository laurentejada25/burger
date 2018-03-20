CREATE DATABASE IF NOT EXISTS burgers_db;

USE  burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (50),
    devoured BOOLEAN DEFAULT FALSE,
    date TIMESTAMP,
    PRIMARY KEY (id)
);

INSERT INTO burgers(burger_name, devoured) VALUES ("Double Burger", false);
INSERT INTO burgers(burger_name, devoured) VALUES ("Triple Burger", false);
INSERT INTO burgers(burger_name, devoured) VALUES ("Animal Style Burger", false);
INSERT INTO burgers(burger_name, devoured) VALUES ("Burger with Avocados", false);

SELECT * FROM burgers;